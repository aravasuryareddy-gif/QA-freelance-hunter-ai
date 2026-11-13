import type { Job, ScoredJob } from "./types.js";

const positiveTerms = [
  "manual testing", "api testing", "postman", "mobile testing",
  "web testing", "regression testing", "playwright", "appium",
  "salesforce testing", "remote", "freelance", "contract"
];

export function scoreJob(job: Job): ScoredJob {
  const text = `${job.title} ${job.description}`.toLowerCase();
  const matched = positiveTerms.filter(term => text.includes(term));
  const concerns: string[] = [];
  if (!job.remote) concerns.push("Remote eligibility is not confirmed.");
  if (/unpaid|commission only|volunteer/i.test(text)) concerns.push("Compensation terms need review.");
  if (/citizen only|security clearance/i.test(text)) concerns.push("Potential location or eligibility restriction.");
  const score = Math.min(100, Math.round((matched.length / positiveTerms.length) * 100));
  return { ...job, score, rationale: matched, concerns };
}
