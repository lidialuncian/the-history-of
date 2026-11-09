"use client";

import { useEffect, useState } from "react";
import type { StoryChapter } from "@/data/ballet";

type ChapterLink = Pick<StoryChapter, "id" | "label" | "period">;

export function ChapterNav({ chapters }: { chapters: readonly ChapterLink[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = chapters.map(({ id }) => document.getElementById(id));
    let frame = 0;
    const update = () => {
      frame = 0;
      // Reading location, never a percentage of historical time.
      const readingLine = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top <= readingLine) current = section.id;
      }
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [chapters]);

  return (
    <nav className="ballet-chapterNav" aria-label="Ballet chapters">
      <p className="ballet-navTitle">Inside the exhibition <span>Six chapters</span></p>
      <ol>
        {chapters.map((chapter, index) => (
          <li key={chapter.id}>
            <a href={`#${chapter.id}`} aria-current={active === chapter.id ? "location" : undefined}>
              <span className="ballet-navNumber" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span>{chapter.label}<small>{chapter.period}</small></span>
            </a>
          </li>
        ))}
      </ol>
      <a className="ballet-navFoot" href="#editorial-note">About this first edition ↗</a>
    </nav>
  );
}
