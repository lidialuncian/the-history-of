import { ExhibitCard } from "./ExhibitCard";
import type { Subject } from "@/types/subject";

export function ExhibitGrid({ subjects }: { subjects: readonly Subject[] }) {
  const isOpeningTrio =
    subjects.length === 3 &&
    subjects.filter((subject) => subject.featured).length === 1;

  return (
    <ul className={`exhibit-grid${isOpeningTrio ? " exhibit-grid-trio" : ""}`} aria-label="Exhibition previews">
      {subjects.map((subject) => <ExhibitCard key={subject.id} subject={subject} />)}
    </ul>
  );
}
