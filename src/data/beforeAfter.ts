export type BeforeAfterPair = {
  title: string;
  description: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
};

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    title: "VIP Lounge Buildout",
    description:
      "From bare framing and protected drywall to a fully finished lounge with custom millwork and built-in seating.",
    before: {
      src: "/images/projects/lounge-before.jpg",
      alt: "VIP lounge space during construction, with protected drywall and plywood subfloor",
    },
    after: {
      src: "/images/projects/lounge-after.jpg",
      alt: "Finished VIP lounge with custom millwork, leather seating, and wall-mounted display",
    },
  },
  {
    title: "Display Wall Installation",
    description:
      "Rough framing, electrical rough-in, and shelving supports transformed into a fully finished, backlit display wall.",
    before: {
      src: "/images/projects/shelving-before.jpg",
      alt: "Display wall during construction, showing framing, electrical rough-in, and shelving supports",
    },
    after: {
      src: "/images/projects/shelving-after.jpg",
      alt: "Finished backlit display wall with custom shelving and millwork",
    },
  },
];
