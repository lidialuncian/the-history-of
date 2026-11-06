import { ExhibitCard } from "./ExhibitCard";
import type { Subject } from "@/types/subject";

export function ExhibitGrid({ subjects }: { subjects: readonly Subject[] }) {
  return (
    <ul className="exhibit-grid" aria-label="Exhibition previews">
      {subjects.map((subject) => <ExhibitCard key={subject.id} subject={subject} />)}
    </ul>
  );
}
