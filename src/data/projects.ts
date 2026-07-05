export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  heroImage: string;
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "modern-exterior-transformation",
    title: "Modern Exterior Transformation",
    category: "Remodeling / Exterior",
    description:
      "A full exterior paint transformation that took this home from faded to absolutely stunning. A modern combination of white, grey, and black completely redefined the property, with clean lines, sharp contrasts, and that signature Faure finish.",
    highlights: [
      "Complete exterior repaint & color redesign",
      "Clean lines and sharp architectural contrast",
      "Fresh, modern result built to last",
    ],
    heroImage: "/images/projects/transformation-front.png",
    images: [
      {
        src: "/images/projects/transformation-front.png",
        alt: "Modernized home exterior with white, grey, and black finish and red entry door",
      },
      {
        src: "/images/projects/transformation-daylight.png",
        alt: "Transformed home exterior in daylight showing garage and driveway",
      },
      {
        src: "/images/projects/transformation-dusk.png",
        alt: "Transformed home exterior with landscaping and warm evening light",
      },
    ],
  },
  {
    slug: "structural-repair-resurfacing",
    title: "Structural Repair & Resurfacing",
    category: "Remodeling / Repair",
    description:
      "An extensive repair project where multiple walls and ceilings were carefully resurfaced and patched. Years of natural wear, water infiltration, and structural stress had left several areas of the property weakened and deteriorated — our team restored them with precision.",
    highlights: [
      "Repaired and resurfaced damaged walls to restore structural integrity",
      "Patched and refinished ceilings affected by moisture and cracking",
      "Prepared surfaces for long-lasting, high-quality finishes",
    ],
    heroImage: "/images/projects/repair-exterior.png",
    images: [
      {
        src: "/images/projects/repair-exterior.png",
        alt: "Home exterior wall before repair with visible surface damage near window",
      },
      {
        src: "/images/projects/repair-detail.png",
        alt: "Close-up detail of freshly patched and resurfaced stucco wall",
      },
      {
        src: "/images/projects/repair-window.png",
        alt: "Repaired exterior wall and window ready for final finish",
      },
    ],
  },
];
