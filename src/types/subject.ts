export type Subject = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  featured?: boolean;
  artwork: {
    theme: "ballet" | "tango" | "opera";
    image?: { src: string; alt: string; attribution: string };
  };
} & (
  | { status: "coming-soon"; href?: never }
  | { status: "published"; href: `/${string}` }
);
