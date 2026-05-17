# Subreddit: r/ClaudeAI
# Flair: Tips & Tricks
# Title: 5 Claude Code prompts I actually use every day as a dev (copy-paste ready)

I've been using Claude Code for about 4 months now and went through the usual honeymoon phase where I tried to use it for everything. Now I've settled into a much more focused workflow. Here are the 5 prompts I actually reach for constantly — not the flashy ones, the boring useful ones.

---

**1. The "orient me" prompt when jumping into unfamiliar code:**

```
Read the files in this directory and give me:
- What this codebase does in 2 sentences
- The main entry points
- Any obvious code smells or tech debt
- What I should read first before touching anything
```

This saves me from the "where do I even start" paralysis on legacy projects.

---

**2. The "explain this like I'll maintain it" prompt:**

```
Explain what this function does, but frame it for someone who will need to modify it in 6 months without context. Include: what can go wrong, what assumptions it makes, and what you'd change if you were refactoring it.
```

Way more useful than just "explain this code" — it forces Claude to surface the gotchas.

---

**3. The PR description generator:**

```
Based on this diff, write a PR description with:
- One sentence summary
- What changed and why (not how)
- Testing notes
- Any breaking changes or migration steps

Keep it under 200 words. No bullet points for the summary.
```

I paste this output almost verbatim 80% of the time.

---

**4. The "name this thing" prompt:**

```
I need a name for: [describe the function/variable/class/component]
Give me 8 options ranging from very descriptive to concise. Flag which ones are idiomatic for [language/framework].
```

Naming is genuinely hard and this cuts the time I spend agonizing over it by like 90%.

---

**5. The debugging spiral-breaker:**

```
I've been stuck on this bug for [X] time. Here's what I know:
- What I expected: [X]
- What's actually happening: [Y]
- What I've already tried: [list]

Don't suggest things I've already tried. What am I probably missing?
```

The "don't suggest things I've already tried" constraint is key — without it Claude just rehashes the same stuff.

---

These are all pretty simple but the framing matters a lot. The difference between a vague prompt and a well-scoped one is night and day.

I've been going deeper on Claude Code-specific workflows lately (CLAUDE.md files, slash commands, the agentic stuff) — if you want I can share more on that angle.

---

*If you want a bigger collection of these, I picked up the Claude Code Power User Kit a few weeks ago — it's a doc of ~40 prompts organized by workflow type. Worth it if you're using Claude Code seriously: https://claudemint.gumroad.com/l/szzhld*
