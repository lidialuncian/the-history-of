import "./ballet.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { ChapterNav } from "@/components/story/ChapterNav";
import { balletChapters } from "@/data/ballet";
import { subjects } from "@/data/subjects";

export const metadata: Metadata = {
  title: "The History of Ballet | The History Of...",
  description: "Enter a living exhibition of ballet in six chapters, from Renaissance courts to the present. A provisional first edition for visual and editorial review.",
};

export default function BalletPage() {
  const artwork = subjects.find((subject) => subject.id === "ballet")!.artwork.image!;
  return (
    <div className="ballet-exhibition">
      <a className="skip-link" href="#ballet-story">Skip to the story</a>
      <header className="ballet-header">
        <Link href="/#collection" className="ballet-returnLink"><ArrowLeft size={16} aria-hidden="true" /> Back to the collection</Link>
        <Link href="/" className="ballet-wordmark">The History Of...</Link>
        <span className="ballet-headerLabel">The living exhibition / 001</span>
      </header>
      <main id="ballet-story" tabIndex={-1}>
        <section className="ballet-hero" aria-labelledby="ballet-title">
          <div className="ballet-heroCopy">
            <p className="ballet-eyebrow">Dance · A living exhibition</p>
            <h1 id="ballet-title">The History of <em>Ballet</em></h1>
            <p className="ballet-deck">An art of fleeting moments.<br />A story centuries in the making.</p>
            <p className="ballet-heroDescription">From courtly gatherings to worlds imagined on stage, follow the changing shape of a living art.</p>
            <a href="#renaissance-courts" className="ballet-beginLink">Enter the exhibition <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
          <figure className="ballet-heroFigure">
            <div className="ballet-heroImage">
              <Image src="/animations/ballet/approved-final.webp" alt={`Illustration: ${artwork.alt}`} width={1080} height={1080} sizes="(min-width: 960px) 55vw, 100vw" preload />
            </div>
            <figcaption>{artwork.attribution} · Matched animation frame · AI-extended stage backdrop · Not an archival photograph</figcaption>
          </figure>
        </section>
        <aside className="ballet-draftNotice" aria-label="Editorial status">
          <p><strong>First edition · Provisional editorial draft.</strong> All chapter text and periods await historical verification. <a href="#editorial-note">Read the editorial note</a>.</p>
        </aside>
        <div className="ballet-threshold">
          <p>Six rooms. One evolving art.</p>
          <span>Read at your own pace, or choose a chapter below.</span>
        </div>
        <div className="ballet-storyLayout">
          <ChapterNav chapters={balletChapters.map(({ id, label, period }) => ({ id, label, period }))} />
          <div className="ballet-chapters">
            {balletChapters.map((chapter, index) => {
              const next = balletChapters[index + 1];
              return (
                <section key={chapter.id} id={chapter.id} className="ballet-chapter" data-room={index + 1} aria-labelledby={`${chapter.id}-title`} tabIndex={-1}>
                  <div className="ballet-roomEntrance">
                    <p className="ballet-eyebrow">Room {String(index + 1).padStart(2, "0")} <span aria-hidden="true">/</span> {chapter.period}</p>
                    <p className="ballet-roomLabel">{chapter.label}</p>
                    <h2 id={`${chapter.id}-title`}>{chapter.heading}</h2>
                    <p className="ballet-summary">{chapter.summary}</p>
                    <span className="ballet-motif" aria-hidden="true">{chapter.motif}</span>
                  </div>
                  <div className="ballet-storyText">
                    {chapter.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {chapter.discoveries?.map((discovery) => (
                      <aside key={discovery.id} className="ballet-discovery" aria-labelledby={`${discovery.id}-title`}>
                        <p className="ballet-eyebrow">From the study collection</p>
                        <h3 id={`${discovery.id}-title`}>{discovery.title}</h3>
                        <p>{discovery.description}</p>
                        <span className="ballet-previewLabel">Discovery preview · Not yet interactive</span>
                      </aside>
                    ))}
                    {next ? (
                      <a className="ballet-nextLink" href={`#${next.id}`}>Next room: {next.label} <ArrowRight size={16} aria-hidden="true" /></a>
                    ) : <Link className="ballet-nextLink" href="/#collection">Return to the collection <ArrowRight size={16} aria-hidden="true" /></Link>}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
        <section id="editorial-note" tabIndex={-1} className="ballet-editorial" aria-labelledby="editorial-title">
          <p className="ballet-eyebrow">A note from the exhibition</p>
          <h2 id="editorial-title">A first draft, with room to grow.</h2>
          <p>All chapter text and period labels are provisional editorial scaffolding adapted from our approved exhibition outline, not a verified historical publication. Periods overlap; these rooms are narrative guides, not exact boundaries.</p>
          <p>Historical references, artist profiles and archival media await research and editorial review. No historical quotations or archival objects are presented in this edition. The opening artwork is a matched frame from an AI-generated illustrative animation with an AI-extended stage surround, not evidence of a particular dancer, costume, performance or era.</p>
          <a href="#ballet-title" className="ballet-nextLink">Back to the entrance ↑</a>
        </section>
      </main>
      <footer className="ballet-footer"><Link href="/">The History Of...</Link><p>For the endlessly curious.</p></footer>
    </div>
  );
}
