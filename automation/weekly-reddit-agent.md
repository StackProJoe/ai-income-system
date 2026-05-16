# Weekly Reddit Marketing Agent

## Purpose
Post 2 valuable Reddit posts per week that drive traffic to the Gumroad store and affiliate site. Always lead with genuine value — the product mention comes at the end naturally.

## Schedule
Every Tuesday at 10:00 AM

## Steps

1. Read `marketing/reddit/schedule.json` to check which subreddits are due this week (rotate through weeks 1-4)

2. Read all existing posts in `marketing/reddit/posts/` to understand tone and avoid repeating topics

3. Write 2 new Reddit posts for this week's subreddits. Rules:
   - Each post: 200-400 words
   - Lead with 3-5 actual useful prompts OR a genuine insight/observation
   - Mention the relevant product ONCE at the very end
   - Use the appropriate GUMROAD_URL from schedule.json or AFFILIATE_SITE_URL
   - Vary format week to week: list posts, story posts, question posts, comparison posts
   - Rotate which products get promoted (don't push the same one every week)
   - Never sound promotional — sound like a practitioner sharing what works

4. Save each post to `marketing/reddit/posts/` with filename: `[next-number]-[topic]-[subreddit].md`

5. Update `tracking/log.md` — append under the current month:
   ```
   ### Reddit Posts — [DATE]
   - Subreddits: [list]
   - Topics: [list]
   ```

6. Output a summary of what was written

## Do Not
- Post the same prompt twice across any posts
- Make the product mention the focus of the post
- Write generic "AI can help you" content — be specific
- Use the word "revolutionize", "game-changer", "unlock", or "leverage"
