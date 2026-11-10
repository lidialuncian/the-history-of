"use client";

import { useBalletEntrance } from "@/components/ballet/BalletEntrance";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Subject } from "@/types/subject";

export function ExhibitCard({ subject }: { subject: Subject }) {
  const beginEntrance = useBalletEntrance();
  const content = (
    <>
      <div className={`exhibit-visual artwork-${subject.artwork.theme}`}>
        {subject.artwork.image ? (
          <Image
            src={subject.artwork.image.src}
            alt={subject.artwork.image.alt}
            fill
            sizes={subject.featured ? "(min-width: 72rem) 66vw, 100vw" : "(min-width: 30rem) 50vw, 100vw"}
          />
        ) : (
          <>
            <div className="artwork-composition" aria-hidden="true">
              <span /><span /><span />
            </div>
            <span className="artwork-caption">Prototype artwork</span>
          </>
        )}
      </div>
      {subject.artwork.image && (
        <p className="image-credit">{subject.artwork.image.attribution}</p>
      )}
      <p className="exhibit-label">{subject.category} <span aria-hidden="true">/</span> No. {subject.number}</p>
      <div className="exhibit-title-row">
        <h3>{subject.title}</h3>
        {subject.status === "published" && <ArrowUpRight size={22} aria-hidden="true" />}
      </div>
      <p className="exhibit-description">{subject.description}</p>
      {subject.status === "coming-soon" && <p className="exhibit-status">Coming soon</p>}
    </>
  );

  return (
    <li className={`exhibit${subject.featured ? " exhibit-featured" : ""}`}>
      {subject.status === "published" ? (
        <Link className="exhibit-link" href={subject.href} onClick={(event) => {
          if (subject.id !== "ballet" || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          if (beginEntrance(event.currentTarget)) event.preventDefault();
        }}>{content}</Link>
      ) : (
        <article>{content}</article>
      )}
    </li>
  );
}
