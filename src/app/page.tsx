import { ArrowDown } from "lucide-react";
import { ExhibitGrid } from "@/components/exhibition/ExhibitGrid";
import { subjects } from "@/data/subjects";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="site-header-inner page-width">
          <div className="masthead">
            <span className="masthead-title">The History Of...</span>
            <span className="masthead-label">A collection of stories</span>
          </div>
          <nav aria-label="Main navigation">
            <a className="nav-link" href="#collection">The Collection <ArrowDown size={14} aria-hidden="true" /></a>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="entrance page-width" aria-labelledby="entrance-title">
          <div className="entrance-content">
            <p className="eyebrow">An exploration through time</p>
            <h1 id="entrance-title">Everything has a <em>history.</em></h1>
            <p className="entrance-description">Discover the extraordinary stories behind the things that move us.</p>
            <a className="explore-link" href="#collection">Discover the Collection <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
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
