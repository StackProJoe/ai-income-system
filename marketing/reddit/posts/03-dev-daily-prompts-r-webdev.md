# Subreddit: r/webdev
# Flair: Discussion
# Title: 10 Claude prompts I use so often they're basically muscle memory at this point

Not "use AI to build an entire app" stuff. Just the small daily things that shave 5-10 minutes off repetitive tasks. After 5 months of daily use these are the ones I keep coming back to.

---

**1. Explain this code to me like I'll be paged about it at 2am:**
```
Explain what this code does. Focus on: what can fail, what it assumes is true, and what I'd need to know if something breaks at 2am.
```

**2. Write me a regex for this:**
```
Write a regex that matches [describe the pattern]. Show me 3 test cases that should match and 2 that should not. Explain each part of the pattern.
```
Always ask for the breakdown — copy-pasting a regex you don't understand is how you get burned later.

**3. Name this thing:**
```
I need to name a [function/variable/component] that [describe what it does]. Give me 6 options from descriptive to concise. Note which is most idiomatic for [React/Python/Go/etc].
```

**4. Write the git commit message:**
```
Write a git commit message for these changes: [paste diff or describe changes]. Follow conventional commits format. One line summary, then a body if needed.
```

**5. Turn this comment into documentation:**
```
Turn this into proper JSDoc/docstring documentation. Include: what the function does, params with types, return value, and one usage example.
[paste function]
```

**6. Find the bug:**
```
This code is supposed to [expected behavior] but instead [actual behavior]. I've checked [X and Y]. What am I missing? Don't suggest things I've already checked.
```

**7. Write the error message:**
```
Write a user-facing error message for when [describe the error condition]. Should be: specific enough to be helpful, not technical, and tell the user what to do next.
```

**8. Convert this to TypeScript:**
```
Convert this JavaScript to TypeScript. Add proper types — don't use `any` unless there's genuinely no better option. Note anywhere you had to make assumptions.
```

**9. Review this for security issues:**
```
Review this code for security issues only. Don't comment on style or performance — just flag anything that could be a vulnerability and explain why.
```

**10. Write the SQL query:**
```
Write a SQL query that [describe what you need]. I'm using [PostgreSQL/MySQL/SQLite]. Optimize for readability first, performance second unless I say otherwise.
```

---

The pattern with all of these: be specific about what you don't want as much as what you do want. "Don't use any" and "don't suggest things I've already tried" are the constraints that actually make the output useful.

---

*I collected a bigger version of this list (50+ prompts organized by task type — debugging, refactoring, documentation, code review, deployment) into a pack if you want more: Developer Productivity Pack ($19) — https://claudemint.gumroad.com/l/cmvhj*
