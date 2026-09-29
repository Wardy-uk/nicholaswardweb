export type WorkItem = {
  slug: string;
  type: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string[];
  deliverables: string[];
};

// Add verified client work here as it is completed. Keep outcomes specific and attributable.
export const workItems: WorkItem[] = [
  {
    slug: "nicholas-ward",
    type: "Personal brand · 2026",
    title: "Nicholas Ward",
    summary: "A deliberate repositioning of a dated personal site into a clear, conversion-led consultancy and web offering.",
    challenge: "Create a confident digital home that could carry both professional credibility and a new commercial web practice—without leaning on empty superlatives or invented social proof.",
    approach: ["Clarified the offer around real client problems", "Built a visual system with typography, rhythm and editorial contrast", "Created a responsive Next.js build with accessible navigation and a direct contact path"],
    deliverables: ["Positioning & page architecture", "Visual direction & responsive UI", "Next.js implementation", "SEO and social-sharing foundations"],
  },
];
