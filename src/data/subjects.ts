import type { Subject } from "@/types/subject";

// Provisional editorial copy; these previews do not assert historical facts.
export const subjects: readonly Subject[] = [
  {
    id: "ballet", number: "001", title: "Ballet", category: "Dance",
    description: "Behind the weightless beauty, a world of discipline, dreams, and reinvention.",
    featured: true, status: "published", href: "/ballet", artwork: {
      theme: "ballet",
      image: {
        src: "/images/exhibits/ballet.webp",
        alt: "Ballerina in an ivory costume performing on a softly lit stage",
        attribution: "AI-generated illustrative artwork",
      },
    },
  },
  {
    id: "tango", number: "002", title: "Tango", category: "Dance",
    description: "An embrace, a conversation, an entire world between two steps.",
    status: "coming-soon", artwork: {
      theme: "tango",
      image: {
        src: "/images/exhibits/tango.webp",
        alt: "Tango partners dancing in burgundy stage light",
        attribution: "AI-generated illustrative artwork",
      },
    },
  },
  {
    id: "opera", number: "003", title: "Opera", category: "Music & theatre",
    description: "Where the human voice makes room for the largest of emotions.",
    status: "coming-soon", artwork: {
      theme: "opera",
      image: {
        src: "/images/exhibits/opera.webp",
        alt: "Opera singer performing in an ornate gold theater",
        attribution: "AI-generated illustrative artwork",
      },
    },
  },
];
