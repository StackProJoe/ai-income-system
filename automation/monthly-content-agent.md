# Monthly Content Expansion Agent

## Purpose
Add new review pages to the affiliate site and generate fresh Reddit posts.

## Schedule
First Monday of each month

## Steps

1. Research: Web search "new AI writing tools [CURRENT MONTH YEAR]" to find 1-2 tools worth reviewing

2. Write a new review page following the exact structure in `affiliate-site/pages/reviews/writesonic.js`. The review must include:
   - Honest assessment based on the tool's documented features and pricing
   - Actual current pricing (research it)
   - Pros and cons
   - Affiliate button pointing to their affiliate program if one exists (search "[tool name] affiliate program")
   - Save to `affiliate-site/pages/reviews/[kebab-case-name].js`

3. Update `affiliate-site/pages/index.js`: Add the new tool to the TOOLS array and add a nav link in `affiliate-site/components/Layout.js`

4. If the new tool competes with an existing reviewed tool, write a comparison page in `affiliate-site/pages/vs/[new-tool]-vs-[existing-tool].js`

5. Run `npm run build` from `affiliate-site/` to verify no errors

6. Write 2 new Reddit posts about the new tool for relevant subreddits. Save to `marketing/reddit/posts/`

7. Commit everything:
   ```
   git add -A
   git commit -m "feat: monthly expansion — add [TOOL NAME] review + [X] Reddit posts"
   ```

8. Update `tracking/log.md` with what was added
