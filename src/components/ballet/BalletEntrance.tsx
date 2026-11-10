"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { CSSProperties } from "react";

const EntranceContext = createContext<(element: HTMLElement) => boolean>(() => false);
export const useBalletEntrance = () => useContext(EntranceContext);
// Source time, inspected at 24fps: airborne arc ends just before landing contact.
const HANDOFF = 14.42;
const SOURCE = "/animations/ballet/painting-comes-alive-1080.mp4";
type Box = { left: number; top: number; width: number; height: number };
function square(element: HTMLElement): Box {
  const r = element.getBoundingClientRect();
  const size = Math.min(r.width, r.height);
  return { left: r.left + (r.width - size) / 2, top: r.top + (r.height - size) / 2, width: size, height: size };
}

export function BalletEntrance({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [box, setBox] = useState<Box | null>(null);
  const [ready, setReady] = useState(false);
  const [arch, setArch] = useState<Box | null>(null);
  const video = useRef<HTMLVideoElement>(null);
  const frameCallback = useRef<number | null>(null);
  const active = useRef(false);
  const destination = useRef(false);
  const lastProgress = useRef(0);
  const lastTime = useRef(-1);
  const navigating = useRef(false);
  const pendingFocus = useRef(false);

  const finish = useCallback((navigate = true) => {
    if (!active.current) return;
    active.current = false;
    video.current?.pause();
    setBox(null);
    setArch(null);
    setReady(false);
    document.documentElement.removeAttribute("data-ballet-entrance");
    pendingFocus.current = navigate;
    if (navigate && !destination.current) router.push("/ballet");
    if (navigate) requestAnimationFrame(() => document.getElementById("ballet-story")?.focus({ preventScroll: true }));
  }, [router]);

  const begin = useCallback((element: HTMLElement) => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "")) return false;
    if (active.current) return true;
    const visual = element.querySelector<HTMLElement>(".exhibit-visual");
    if (!visual) return false;
    active.current = true;
    destination.current = false;
    navigating.current = false;
    lastProgress.current = performance.now();
    lastTime.current = -1;
    setBox(square(visual));
    router.prefetch("/ballet");
    const still = new Image();
    still.src = "/animations/ballet/approved-final.webp";
    void still.decode().catch(() => {});
    return true;
  }, [router]);

  useEffect(() => {
    if (!box) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") finish(); };
    const interrupt = () => finish(false);
    const resize = () => finish();
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const timer = setInterval(() => {
      if (performance.now() - lastProgress.current > 3500) finish();
    }, 500);
    window.addEventListener("keydown", onKey);
    window.addEventListener("popstate", interrupt);
    window.addEventListener("resize", resize);
    window.addEventListener("wheel", resize, { passive: true });
    window.addEventListener("touchmove", resize, { passive: true });
    motion.addEventListener("change", resize);
    return () => {
      clearInterval(timer);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("popstate", interrupt);
      window.removeEventListener("resize", resize);
      window.removeEventListener("wheel", resize);
      window.removeEventListener("touchmove", resize);
      motion.removeEventListener("change", resize);
    };
  // Bounds change during playback; listeners intentionally follow the active box.
  }, [box, finish]);

  useEffect(() => {
    if (pathname === "/ballet" && pendingFocus.current) {
      document.getElementById("ballet-story")?.focus({ preventScroll: true });
      pendingFocus.current = false;
    }
    if (!active.current) return;
    if (pathname !== "/" && pathname !== "/ballet") finish(false);
  }, [pathname, finish]);

  const update = () => {
    const v = video.current;
    if (!v || !active.current) return;
    if (v.currentTime !== lastTime.current) {
      lastTime.current = v.currentTime;
      lastProgress.current = performance.now();
    }
    if (v.currentTime >= HANDOFF && !navigating.current) {
      navigating.current = true;
      // Keep the airborne frame while the prefetched destination commits.
      v.pause();
      document.documentElement.setAttribute("data-ballet-entrance", "landing");
      router.push("/ballet", { scroll: true });
    }
  };

  useEffect(() => {
    if (pathname !== "/ballet" || !active.current || !navigating.current) return;
    let frame = 0;
    const align = () => {
      const hero = document.querySelector<HTMLElement>(".ballet-heroImage img");
      if (!hero) { frame = requestAnimationFrame(align); return; }
      destination.current = true;
      hero.scrollIntoView({ behavior: "instant", block: "center" });
      const bounds = hero.parentElement!.getBoundingClientRect();
      setArch({ left: bounds.left, top: bounds.top, width: bounds.width, height: bounds.height });
      setBox(square(hero));
      document.documentElement.setAttribute("data-ballet-entrance", "landing");
      lastProgress.current = performance.now();
      video.current?.play().catch(() => finish());
    };
    frame = requestAnimationFrame(align);
    return () => cancelAnimationFrame(frame);
  }, [pathname, finish]);

  return <EntranceContext.Provider value={begin}>
    {children}
    {box && <>
      <div className="ballet-entrance-film" aria-hidden="true" style={{ ...(arch ?? box), opacity: ready ? 1 : 0, ...(arch ? { overflow: "hidden", borderRadius: "48% 48% 2px 2px" } : {}) } as CSSProperties}>
        <video style={arch ? { position: "absolute", left: box.left - arch.left, top: box.top - arch.top, width: box.width, height: box.height } : undefined} ref={video} src={SOURCE} poster="/animations/ballet/approved-start.webp" width="1080" height="1080" muted playsInline preload="auto"
          onCanPlay={() => { if (!navigating.current) video.current?.play().catch(() => finish()); }}
          onPlaying={() => {
            setReady(true);
            const v = video.current;
            if (!v?.requestVideoFrameCallback) return;
            if (frameCallback.current !== null) v.cancelVideoFrameCallback(frameCallback.current);
            const tick = () => {
              update();
              if (active.current && !v.paused) frameCallback.current = v.requestVideoFrameCallback(tick);
            };
            frameCallback.current = v.requestVideoFrameCallback(tick);
          }} onTimeUpdate={update} onEnded={() => finish()} onError={() => finish()} />
      </div>
      <button className="ballet-entrance-skip" onClick={() => finish()}>Skip animation</button>
    </>}
  </EntranceContext.Provider>;
}
