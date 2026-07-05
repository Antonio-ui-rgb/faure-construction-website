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
  {
    slug: "commercial-buildout-before-after",
    title: "Commercial Buildout — Before & After",
    category: "Commercial Construction",
    description:
      "A ground-up commercial interior buildout, from framing and material staging to a fully finished retail space — custom marble surfaces, built-in millwork, and every detail checked before handoff.",
    highlights: [
      "On-site marble fabrication and installation by our own crew",
      "Custom millwork and built-in display cabinetry",
      "Protective staging kept finished areas spotless throughout the build",
    ],
    heroImage: "/images/projects/construction-install.jpg",
    images: [
      {
        src: "/images/projects/construction-install.jpg",
        alt: "Faure Construction crew installing a custom marble countertop mid-project, walls protected with plastic sheeting",
      },
      {
        src: "/images/projects/boutique-bar-counter.jpg",
        alt: "Finished marble bar-height counter with built-in display shelving after buildout",
      },
      {
        src: "/images/projects/boutique-bar-seating.jpg",
        alt: "Finished seating area with custom millwork and marble counter after buildout",
      },
    ],
  },
];
