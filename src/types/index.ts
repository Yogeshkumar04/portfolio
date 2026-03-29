export type Project = {
  title: string;
  slug: string;
  period: string;
  role: string;
  organization: string;
  summary: string;
  problem: string;
  approach: string[];
  stack: string[];
  outcomes: string[];
  featured?: boolean;
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  note?: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  organization: string;
  description: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};