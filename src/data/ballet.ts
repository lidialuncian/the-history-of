export type StoryChapter = {
  id: string;
  label: string;
  period: string;
  heading: string;
  summary: string;
  motif: string;
  story: readonly string[];
  discoveries?: readonly {
    id: string;
    subjectId: string;
    chapterId: string;
    title: string;
    description: string;
  }[];
};

// Phase 1 editorial scaffolding, adapted from the approved task outline.
// Periods overlap deliberately. Historical narrative and citations await review.
export const balletChapters: readonly StoryChapter[] = [
  {
    id: "renaissance-courts", label: "Renaissance courts", period: "15th–16th centuries",
    heading: "Before the curtain, a court.", motif: "Gathering",
    summary: "Begin in a world where dancing belongs to the occasion, and the room itself becomes a stage.",
    story: [
      "Our opening room looks towards the festivities of Renaissance Italy. Music, dress and patterned movement offer a starting point for exploring ballet’s courtly roots.",
      "Imagine the relationship between those who dance and those who watch. The story begins with a shared social space, before following the art towards the theatre. The people, places and occasions that shaped this change will be explored in the researched edition.",
    ],
  },
  {
    id: "court-to-stage", label: "From court to stage", period: "17th–18th centuries",
    heading: "A new place in the spotlight.", motif: "Form",
    summary: "The journey turns towards France, and towards the making of a theatrical language.",
    story: [
      "This room follows the thread from French court ballet towards institutions, professional training and public performance. It asks how a dance changes when the audience moves to the other side of the stage.",
      "Gesture, technique and storytelling become the subjects of closer attention. A later editorial pass will introduce the artists and institutions behind these developments, with references rather than a single, tidy origin story.",
    ],
  },
  {
    id: "romantic-dream", label: "Romantic dream", period: "19th century",
    heading: "Between the earth and the imagined.", motif: "Reverie",
    summary: "An atmospheric room for otherworldly stories, changing silhouettes and the illusion of weightlessness.",
    story: [
      "The Romantic chapter considers ballet’s fascination with supernatural worlds. Costume, stage atmosphere and pointe technique become ways to explore the distance between everyday life and an imagined elsewhere.",
      "Look beyond the impression of effortlessness. Our future narrative will connect that image to the work of dancers and theatre makers, checking the histories of individual productions before naming pioneers or claiming firsts.",
    ],
    discoveries: [{ id: "ballet-costume-and-illusion", subjectId: "ballet", chapterId: "romantic-dream", title: "The shape of a dream", description: "How might a costume change the way we see movement? A future discovery will explore silhouette, fabric and theatrical illusion, with sourced examples." }],
  },
  {
    id: "classical-spectacle", label: "Classical spectacle", period: "Later 19th century",
    heading: "An entire world on a stage.", motif: "Scale",
    summary: "From an intimate gesture to an ensemble: ballet opens into theatrical spectacle.",
    story: [
      "This room turns towards large-scale ballet in nineteenth-century Russia. It offers a place to consider how choreography, orchestral music, design and ensemble dancing build a world together.",
      "The familiar idea of a timeless classic deserves a closer look. The researched edition will distinguish original productions from later revisions and trace how works change as they pass between artists and companies.",
    ],
  },
  {
    id: "reinvention", label: "Reinvention", period: "20th century",
    heading: "A tradition learns to question itself.", motif: "Experiment",
    summary: "New collaborators and new settings invite different answers to what ballet can be.",
    story: [
      "Here the exhibition opens onto twentieth-century experimentation. The proposed narrative brings choreography into conversation with music, visual art and changing ideas about performance.",
      "There is no single path through this room. Future profiles will follow particular companies and artists across places and traditions, acknowledging both continuity and disagreement rather than presenting innovation as one inevitable march forward.",
    ],
  },
  {
    id: "ballet-today", label: "Ballet today", period: "21st century · ongoing",
    heading: "The story is still moving.", motif: "Possibility",
    summary: "A living art, carried forward by the people who practise it and the audiences who meet it.",
    story: [
      "The final room stays open. It is a starting point for exploring ballet’s global presence, contemporary expression and ongoing conversations about who gets to dance, whose stories are told and how traditions are taught.",
      "This chapter will need living voices and careful attribution. For now, it ends with an invitation: when you next watch a performance, notice what feels inherited, what feels newly imagined, and where the two meet.",
    ],
  },
];
