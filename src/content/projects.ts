export type ProjectStatus = "draft" | "concept" | "published";

export type ApprovedProjectMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  slot?: "device-screen";
  viewport?: "mobile" | "desktop";
  objectFit?: "cover" | "contain";
  objectPosition?: string;
};

export type CaseStudyStep = {
  title: string;
  description: string;
};

export type CaseStudyContent = {
  overview?: string;
  challenge?: string;
  contribution?: string;
  process?: readonly CaseStudyStep[];
  iterations?: readonly CaseStudyStep[];
  solution?: string;
  verifiedOutcomes?: readonly string[];
  reflection?: string;
};

export type PortfolioProject = {
  id: string;
  slug: string;
  index: string;
  title: string;
  description: string;
  category: string;
  tags: readonly string[];
  status: ProjectStatus;
  year?: number;
  role?: string;
  client?: string;
  media?: readonly ApprovedProjectMedia[];
  caseStudy?: CaseStudyContent;
};

// Concept projects remain unavailable as case studies until approved source
// material verifies any public detail beyond the portfolio overview.
export const portfolioProjects: readonly PortfolioProject[] = [
  {
    id: "rashan",
    slug: "rashan",
    index: "01",
    title: "Rashan",
    description: "A modern e-commerce experience.",
    category: "E-commerce",
    tags: ["Product design", "UI/UX", "E-commerce", "Design system"],
    status: "concept",
  },
  {
    id: "banka",
    slug: "banka",
    index: "02",
    title: "Banka",
    description: "A modern fintech mobile experience.",
    category: "Fintech",
    tags: ["Product design", "UI/UX", "Fintech", "Design system"],
    status: "concept",
  },
  {
    id: "taskly",
    slug: "taskly",
    index: "03",
    title: "Taskly",
    description: "A productivity experience for focused teams.",
    category: "Productivity",
    tags: ["Product design", "UI/UX", "Web app", "Productivity"],
    status: "concept",
  },
];
