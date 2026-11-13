# QA Freelance Hunter AI — starter

Initial TypeScript foundation and dashboard mock-up for finding and evaluating freelance QA opportunities.

## Included
- Candidate profile and target-role configuration in `config/candidate-profile.json`
- Basic job-fit scoring in `src/scoring.ts`
- Typed job model in `src/types.ts`
- Safe placeholder runner in `src/index.ts`
- Static dashboard mock-up in `dashboard/index.html`

## Run the TypeScript starter
1. Install Node.js 20 or later.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and add an OpenAI API key only when proposal generation is configured.
4. Run `npm run dev`.

## View the dashboard
Open `dashboard/index.html` in a browser. It is currently a mock-up; it does not contain live job listings or platform connections.

## Remaining build stages
1. Add permitted job-source connectors (API/RSS or approved integrations).
2. Normalize listings and remove duplicates.
3. Add LLM-assisted relevance scoring and proposal drafts.
4. Store opportunities and application status in SQLite/PostgreSQL.
5. Connect the dashboard to the data store and add a daily schedule.
6. Add submission only through permitted flows and only after explicit candidate approval or narrowly pre-approved rules.

## Safety and accuracy
- This starter does not log in to platforms or submit applications.
- Never bypass CAPTCHAs, access controls, or anti-bot measures.
- Never invent experience, rates, certifications, or screening answers.
- Verify remote eligibility, contract terms, time-zone expectations, and client legitimacy before applying.
