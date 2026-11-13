export type Job = {
  source: string;
  title: string;
  company?: string;
  location?: string;
  remote?: boolean;
  description: string;
  url: string;
  postedAt?: string;
};

export type ScoredJob = Job & {
  score: number;
  rationale: string[];
  concerns: string[];
};
