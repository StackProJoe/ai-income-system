# Subreddit: r/ClaudeAI
# Flair: Tips & Tricks
# Title: 3 Claude Code workflows that changed how I work — CLAUDE.md, slash commands, and multi-agent planning

I shared some basic Claude Code prompts a while back. This is the deeper stuff — the workflows that actually change the structure of how you work, not just individual prompts.

---

**Workflow 1: The CLAUDE.md file that actually works**

Most people either don't use CLAUDE.md or put too little in it. Here's the prompt I use to generate a useful one for any new project:

```
Read the files in this project and generate a CLAUDE.md file that includes:

1. Project overview (2-3 sentences, technical)
2. Architecture — key directories, what lives where, how data flows
3. Development conventions — naming patterns, how we handle errors, testing approach
4. Commands I'll need constantly (run, test, lint, build, deploy)
5. What NOT to do — anti-patterns this codebase has established or explicitly avoids
6. External dependencies worth knowing about (APIs, services, quirks)

Be specific. Don't write generic advice — only include things that are true about THIS project.
```

The "only include things true about THIS project" instruction is what stops it from generating boilerplate advice.

A good CLAUDE.md means every subsequent session in that project starts with context. The difference is noticeable immediately.

---

**Workflow 2: Creating custom slash commands**

Claude Code lets you create project-specific slash commands in `.claude/commands/`. Here's how I use Claude to bootstrap them:

```
I want to create a Claude Code slash command for: [describe the repetitive task]

Generate:
1. The command file content (markdown with the prompt)
2. A good filename for it
3. The exact steps to set it up

The command should work without any additional context beyond what's in the CLAUDE.md file.
```

Commands I've built this way:
- `/review` — code review with project-specific standards
- `/pr-desc` — PR description generator using our PR template
- `/debug-log` — structured debugging workflow for our specific stack

Once you have 5-6 of these, you stop copy-pasting prompts and just use the slash commands. The cognitive overhead drops significantly.

---

**Workflow 3: Multi-agent planning for complex tasks**

For anything that's going to take more than a few hours, I use Claude to break it into a parallel task structure before I start. The prompt:

```
I need to implement: [describe feature/refactor/task]

Break this into parallel workstreams — tasks that can be done independently without blocking each other. For each workstream:
- What the task is
- What it depends on (if anything)
- What "done" looks like (acceptance criteria)
- Estimated size (S/M/L)
- What order to tackle them if I'm working alone

Flag any tasks that are high-risk or where the approach isn't clear yet.
```

This gives me a plan I can execute systematically instead of thrashing. The "flag high-risk tasks" instruction is important — it surfaces the parts that need more thinking before I start coding.

---

These three things together — project-level context via CLAUDE.md, project-specific commands, and structured planning before execution — make Claude Code feel less like a smart autocomplete and more like an actual collaborator.

---

*These workflows (and about 35 more) are in the Claude Code Power User Kit I put together — covers the full range from beginner prompts to agentic workflows: https://claudemint.gumroad.com/l/szzhld if you're interested.*
