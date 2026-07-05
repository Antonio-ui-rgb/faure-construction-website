export type Service = {
  title: string;
  description: string;
  icon: "commercial" | "residential" | "remodeling" | "interior" | "management" | "consulting";
};

export const services: Service[] = [
  {
    title: "Commercial Construction",
    description:
      "Ground-up builds and commercial buildouts delivered with precision, code compliance, and a finish that reflects your brand.",
    icon: "commercial",
  },
  {
    title: "Residential Construction",
    description:
      "Custom homes built from the foundation up, tailored to how your family lives and designed to last for generations.",
    icon: "residential",
  },
  {
    title: "Remodeling",
    description:
      "Full-scale transformations — from structural repairs and resurfacing to complete exterior and interior makeovers.",
    icon: "remodeling",
  },
  {
    title: "Interior Finishes",
    description:
      "The details that define luxury: refined surfaces, custom millwork, and finishes prepared for long-lasting beauty.",
    icon: "interior",
  },
  {
    title: "Project Management",
    description:
      "One point of contact from permits to punch list, keeping every trade, timeline, and budget precisely on track.",
    icon: "management",
  },
  {
    title: "Consulting",
    description:
      "Honest, experienced guidance on scope, materials, and budget before a single wall comes down.",
    icon: "consulting",
  },
];
