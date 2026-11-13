import "dotenv/config";
import { scoreJob } from "./scoring.js";
import type { Job } from "./types.js";

// Safe starter: connect only to job sources whose APIs/terms allow automated access.
// Do not bypass CAPTCHAs, access controls, or platform anti-bot restrictions.
// This sample uses placeholder data until an approved source connector is configured.
const sample: Job[] = [{
  source: "sample",
  title: "Freelance Manual and API QA Tester",
  company: "Example client",
  location: "Remote",
  remote: true,
  description: "Manual testing, API testing with Postman, regression testing for a web application.",
  url: "https://example.com/job"
}];

for (const job of sample) {
  const scored = scoreJob(job);
  console.log(JSON.stringify({
    title: scored.title,
    score: scored.score,
    rationale: scored.rationale,
    concerns: scored.concerns,
    url: scored.url,
    nextStep: "Prepare proposal for user approval; do not auto-submit."
  }, null, 2));
}
