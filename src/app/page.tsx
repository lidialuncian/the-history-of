import { ArrowDown } from "lucide-react";
import { ExhibitGrid } from "@/components/exhibition/ExhibitGrid";
import { subjects } from "@/data/subjects";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header page-width">
        <span className="wordmark">THE HISTORY OF...</span>
        <nav aria-label="Main navigation">
          <a className="nav-link" href="#collection">Explore <ArrowDown size={14} aria-hidden="true" /></a>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="entrance page-width" aria-labelledby="entrance-title">
          <p className="eyebrow">An exploration through time</p>
          <h1 id="entrance-title">Everything has<br />a <em>history.</em></h1>
          <p className="entrance-description">Discover the extraordinary stories behind<br className="desktop-break" /> the things that move us.</p>
          <a className="explore-link" href="#collection">Explore the stories <ArrowDown size={17} aria-hidden="true" /></a>
        </section>
        <section id="collection" className="collection page-width" aria-labelledby="collection-title" tabIndex={-1}>
          <div className="collection-heading">
            <div>
              <p className="eyebrow">The collection</p>
              <h2 id="collection-title">Choose your curiosity.</h2>
            </div>
            <p>A world of stories, waiting to unfold.<br />Here is a glimpse of what’s to come.</p>
          </div>
          <ExhibitGrid subjects={subjects} />
        </section>
      </main>
      <footer className="site-footer page-width">
        <span className="wordmark">THE HISTORY OF...</span>
        <p>For the endlessly curious.</p>
      </footer>
    </>
  );
}
