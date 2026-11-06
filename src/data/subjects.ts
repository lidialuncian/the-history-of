import type { Subject } from "@/types/subject";

// Provisional editorial copy; these previews do not assert historical facts.
export const subjects: readonly Subject[] = [
  {
    id: "ballet", number: "001", title: "Ballet", category: "Dance",
    description: "Behind the weightless beauty, a world of discipline, dreams, and reinvention.",
    featured: true, status: "coming-soon", artwork: { theme: "ballet" },
  },
  {
    id: "tango", number: "002", title: "Tango", category: "Dance",
    description: "An embrace, a conversation, an entire world between two steps.",
    status: "coming-soon", artwork: { theme: "tango" },
  },
  {
    id: "opera", number: "003", title: "Opera", category: "Music & theatre",
    description: "Where the human voice makes room for the largest of emotions.",
    status: "coming-soon", artwork: { theme: "opera" },
  },
];
