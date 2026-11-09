"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

const SPRITES = "/images/ballet-entrance/turn-study.webp";
const PLATE = "/images/ballet-entrance/stage-plate.webp";
const DURATION = 3800;
type Point = { x: number; y: number; size: number };
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * (3 - 2 * t);
const clamp = (t: number) => Math.max(0, Math.min(1, t));

// Bounds are measured in this isolated preview, never persisted across routes.
function dancerPoint(rect: DOMRect, destination = false): Point {
  if (!destination) {
    const scale = Math.max(rect.width / 1672, rect.height / 941);
    return {
      x: rect.left + rect.width / 2 + (760 - 836) * scale,
      y: rect.top + rect.height / 2 + (875 - 470.5) * scale,
      size: 940 * scale,
    };
  }
  const scale = Math.max(rect.width / 1122, rect.height / 1402);
  return {
    x: rect.left + rect.width / 2 + (520 - 561) * scale,
    y: rect.top + (rect.height - 1402 * scale) * .65 + 1276 * scale,
    size: 900 * scale,
  };
}

export function EntranceStudy({ collection, destination }: { collection: ReactNode; destination: ReactNode }) {
  const [playing, setPlaying] = useState(false);
  const [arriving, setArriving] = useState(false);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const sourceRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const spriteRef = useRef<HTMLDivElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const activeRef = useRef(false);
  const cancelledRef = useRef(false);

  const finish = useCallback(() => {
    cancelledRef.current = true;
    cancelAnimationFrame(rafRef.current);
    activeRef.current = false;
    // Ordinary URL navigation with a real focusable destination. No replay on refresh.
    // The isolated study deliberately uses a native document handoff so the browser
    // focuses the hash target. Shared client-route overlay persistence is Stage B.
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.assign("/ballet#ballet-story");
  }, []);

  useEffect(() => {
    let disposed = false;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onPreference = () => {
      setReduced(preference.matches);
      if (preference.matches && activeRef.current) finish();
    };
    onPreference();
    preference.addEventListener("change", onPreference);
    const preload = (src: string) => {
      const img = new window.Image();
      img.src = src;
      return img.decode();
    };
    // Optional assets only load on this explicitly opened study route.
    Promise.all([preload(SPRITES), preload(PLATE)]).then(() => {
      if (!disposed) setReady(true);
    }).catch(() => { /* Keep ordinary /ballet link behavior on asset failure. */ });
    const onResize = () => { if (activeRef.current) finish(); };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && activeRef.current) finish();
    };
    const onVisibility = () => {
      if (document.hidden && activeRef.current) finish();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      disposed = true;
      cancelledRef.current = true;
      cancelAnimationFrame(rafRef.current);
      preference.removeEventListener("change", onPreference);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [finish]);

  const start = (event: MouseEvent<HTMLDivElement>) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>('a.exhibit-link[href="/ballet"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey || link.download || link.target === "_blank") return;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (reduced || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ready || connection?.saveData) return;
    if (activeRef.current) { event.preventDefault(); return; }
    const visual = link.querySelector(".exhibit-visual");
    const target = targetRef.current?.querySelector(".ballet-heroImage");
    if (!visual || !target || !spriteRef.current || !plateRef.current || !landingRef.current) return;
    event.preventDefault();
    const sourceBounds = visual.getBoundingClientRect();
    const targetBounds = target.getBoundingClientRect();
    const from = dancerPoint(sourceBounds);
    const to = dancerPoint(targetBounds, true);
    const stage: Point = {
      x: window.innerWidth * .5,
      y: Math.min(window.innerHeight - 32, Math.max(window.innerHeight * .78, 300)),
      size: Math.min(window.innerHeight * .69, window.innerWidth * .78, 550),
    };
    const plate = plateRef.current;
    const landing = landingRef.current;
    for (const [element, bounds] of [[plate, sourceBounds], [landing, targetBounds]] as const) {
      Object.assign(element.style, { left: `${bounds.left}px`, top: `${bounds.top}px`, width: `${bounds.width}px`, height: `${bounds.height}px` });
    }
    const sprite = spriteRef.current;
    activeRef.current = true;
    cancelledRef.current = false;
    setPlaying(true);
    const started = performance.now();
    let revealed = false;
    const tick = (now: number) => {
      if (cancelledRef.current) return;
      const progress = clamp((now - started) / DURATION);
      const emerge = smooth(clamp(progress / .22));
      const settle = smooth(clamp((progress - .72) / .28));
      let point = {
        x: mix(from.x, stage.x, emerge),
        y: mix(from.y, stage.y, emerge),
        size: mix(from.size, stage.size, emerge),
      };
      if (progress >= .72) {
        if (!revealed) {
          revealed = true;
          setArriving(true);
          window.scrollTo({ top: 0, behavior: "instant" });
        }
        point = { x: mix(stage.x, to.x, settle), y: mix(stage.y, to.y, settle), size: mix(stage.size, to.size, settle) };
      }
      // Distinct full-body poses: preparation, front, profile, back, profile, resolve.
      // No CSS rotation or mirrored rectangle stands in for the pirouette.
      const frame = progress < .12 ? 0 : progress < .22 ? 1 : progress < .72 ? Math.min(7, 2 + Math.floor((progress - .22) / .5 * 6)) : 8;
      sprite.dataset.frame = String(frame);
      sprite.style.backgroundPosition = `${(frame % 3) * 50}% ${Math.floor(frame / 3) * 50}%`;
      sprite.style.width = `${point.size}px`;
      sprite.style.height = `${point.size}px`;
      sprite.style.transform = `translate3d(${point.x - point.size * .48}px, ${point.y - point.size * .94}px, 0)`;
      sprite.style.opacity = String(progress > .92 ? 1 - (progress - .92) / .08 : 1);
      plate.style.opacity = progress < .72 ? "1" : "0";
      landing.style.opacity = progress < .72 ? "0" : progress > .92 ? String(1 - (progress - .92) / .08) : "1";
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else finish();
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (!playing) return;
    const guard = window.setTimeout(finish, DURATION + 800);
    return () => window.clearTimeout(guard);
  }, [playing, finish]);

  return (
    <div className="entrance-study" data-playing={playing} data-arriving={arriving}>
      <aside className="entrance-study-bar" aria-label="Animation study controls">
        <div><strong>Ballet entrance · visual study</strong><span>Nine AI key poses · choreography and silhouette matching are provisional</span></div>
        <Link href="/ballet" className="entrance-study-direct">Open Ballet without animation ↗</Link>
      </aside>
      <noscript>The motion study needs JavaScript. The Ballet exhibit still opens the story directly.</noscript>
      <p className="entrance-study-note" role="status">{reduced ? "Reduced motion is on: selecting Ballet navigates immediately." : ready ? "Select the Ballet exhibit below to play the study once. Escape or Skip takes you straight to Ballet." : "Optional motion assets loading. The Ballet link already works."}</p>
      <div ref={sourceRef} hidden={arriving} onClickCapture={start}>{collection}</div>
      <div ref={targetRef} className={`entrance-study-destination${arriving ? " is-visible" : ""}`} aria-hidden={!arriving} inert={!arriving}>
        {destination}
      </div>
      <div className="entrance-study-overlay" aria-hidden="true" hidden={!playing}>
        <div ref={plateRef} className="entrance-study-plate" />
        <div ref={landingRef} className="entrance-study-landing" />
        <div ref={spriteRef} className="entrance-study-dancer" />
      </div>
      {playing && <Link href="/ballet#ballet-story" className="entrance-study-skip" onClick={(event) => { event.preventDefault(); finish(); }}>Skip animation <span aria-hidden="true">→</span></Link>}
    </div>
  );
}
