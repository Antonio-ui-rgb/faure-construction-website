export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation & Site Visit",
    description:
      "We start by listening. A walkthrough of your property lets us understand your goals, constraints, and vision before a single estimate is written.",
  },
  {
    step: "02",
    title: "Proposal & Estimate",
    description:
      "You receive a clear, detailed estimate outlining scope, materials, and timeline — no surprises, no vague line items.",
  },
  {
    step: "03",
    title: "Planning & Preparation",
    description:
      "Once approved, we finalize material selections, schedule trades, and prepare the site so work begins smoothly and on schedule.",
  },
  {
    step: "04",
    title: "Construction",
    description:
      "Our team executes the work with the same attention to detail whether we're repairing a wall or finishing an exterior — checked and corrected until it's right.",
  },
  {
    step: "05",
    title: "Final Walkthrough & Handoff",
    description:
      "We walk the finished property with you, addressing every detail before handoff, so the result matches the vision we started with.",
  },
];
