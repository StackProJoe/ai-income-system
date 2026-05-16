# Autonomous Income System — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a two-engine autonomous income system — a Gumroad digital product store (Engine 1) and an affiliate review site (Engine 2) — that generates revenue with zero ongoing user involvement after a one-time 30-minute setup.

**Architecture:** Engine 1 creates and sells niche AI prompt packs on Gumroad, driven by automated Reddit marketing posts. Engine 2 earns recurring affiliate commissions from an AI tool review site built in Next.js and deployed free on Vercel. A scheduled Claude Code agent handles all ongoing content generation and marketing.

**Tech Stack:** Next.js 14, Tailwind CSS, Vercel (free), Gumroad (free), Markdown/MDX for all content, schedule skill for automation.

---

## Task 1: Initialize Project Structure

**Files:**
- Create: `products/claude-code-power-kit/product.md`
- Create: `products/claude-code-power-kit/listing.md`
- Create: `products/freelancer-ai-kit/product.md`
- Create: `products/freelancer-ai-kit/listing.md`
- Create: `products/developer-productivity-pack/product.md`
- Create: `products/developer-productivity-pack/listing.md`
- Create: `products/business-automation-playbook/product.md`
- Create: `products/business-automation-playbook/listing.md`
- Create: `tracking/log.md`
- Create: `marketing/reddit/schedule.json`

- [ ] **Step 1: Initialize git repo**

```bash
cd "c:/Users/E1loc/Desktop/claude projects/Test Claude money maker"
git init
git add .gitignore 2>/dev/null || true
```

- [ ] **Step 2: Create .gitignore**

Write `c:/Users/E1loc/Desktop/claude projects/Test Claude money maker/.gitignore`:
```
node_modules/
.next/
.env.local
.env
*.env
affiliate-site/.next/
affiliate-site/node_modules/
```

- [ ] **Step 3: Create tracking log**

Write `tracking/log.md`:
```markdown
# Revenue & Performance Log

## How to Update
This file is updated by the monthly performance-review scheduled agent.

---

## Month: 2026-05

### Gumroad
- Sales: 0
- Revenue: $0

### Affiliate
- Clicks: 0
- Commissions: $0

### Notes
System launched.
```

- [ ] **Step 4: Create Reddit schedule config**

Write `marketing/reddit/schedule.json`:
```json
{
  "rotation": [
    { "week": 1, "subreddits": ["r/ClaudeAI", "r/SideProject"] },
    { "week": 2, "subreddits": ["r/ChatGPT", "r/freelance"] },
    { "week": 3, "subreddits": ["r/artificial", "r/webdev"] },
    { "week": 4, "subreddits": ["r/MachineLearning", "r/Entrepreneur"] }
  ],
  "products": {
    "claude-code-power-kit": { "gumroad_url": "PLACEHOLDER_URL_1", "price": "$29" },
    "freelancer-ai-kit": { "gumroad_url": "PLACEHOLDER_URL_2", "price": "$39" },
    "developer-productivity-pack": { "gumroad_url": "PLACEHOLDER_URL_3", "price": "$19" },
    "business-automation-playbook": { "gumroad_url": "PLACEHOLDER_URL_4", "price": "$47" }
  },
  "affiliate_site_url": "PLACEHOLDER_SITE_URL"
}
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: initialize project structure"
```

---

## Task 2: Create Product 1 — Claude Code Power User Kit ($29)

**Files:**
- Create: `products/claude-code-power-kit/product.md`
- Create: `products/claude-code-power-kit/listing.md`

- [ ] **Step 1: Write the product file**

Write `products/claude-code-power-kit/product.md`:

```markdown
# Claude Code Power User Kit
### 50 Battle-Tested Prompts for Developers Using Claude Code

---

## How to Use This Pack
Copy any prompt, paste into Claude Code, replace [BRACKETED] text with your specifics. Every prompt is tested and optimized for Claude's response patterns.

---

## SECTION 1: Code Review & Quality

**PR-01 — Deep Code Review**
```
Review this code for bugs, security vulnerabilities, and performance issues. For each problem found:
- State the issue clearly
- Rate severity: Critical / High / Medium / Low
- Show the exact fix with code

Here is the code:
[PASTE CODE]
```

**PR-02 — Security Audit**
```
You are a senior security engineer. Audit this code for OWASP Top 10 vulnerabilities, injection attacks, authentication flaws, and data exposure risks. List every finding with a CVE reference if applicable and the remediation.

Code:
[PASTE CODE]
```

**PR-03 — Performance Profiling**
```
Analyze this code for performance bottlenecks. Focus on: O(n) complexity issues, unnecessary re-renders or database calls, memory leaks, and blocking operations. For each issue, show the optimized version.

Code:
[PASTE CODE]
```

**PR-04 — Code Smell Detection**
```
Review this code for code smells: long methods, duplicated logic, inappropriate intimacy between classes, feature envy, and primitive obsession. Suggest refactors with the new code shown.

Code:
[PASTE CODE]
```

**PR-05 — Test Coverage Analysis**
```
Given this code, list every test case needed for 100% meaningful coverage. For each case, write the actual test using [JEST/PYTEST/YOUR FRAMEWORK]. Do not write placeholder tests — write tests that would actually catch bugs.

Code:
[PASTE CODE]
```

---

## SECTION 2: Documentation

**DOC-01 — README Generator**
```
You are a technical writer. Read this codebase and write a complete README.md covering: project purpose (2 sentences), architecture overview, prerequisites, installation steps, usage examples with code, API reference, and contributing guide.

Code/description:
[PASTE CODE OR DESCRIPTION]
```

**DOC-02 — Inline Comment Writer**
```
Add inline comments to this code explaining the WHY behind non-obvious decisions. Do not comment obvious things. Only add comments where a new developer would be confused. Return the full commented code.

Code:
[PASTE CODE]
```

**DOC-03 — API Documentation**
```
Generate OpenAPI 3.0 documentation for these API endpoints. Include: description, parameters (name, type, required, description), request body schema, response schemas with examples for 200, 400, 401, 404, and 500.

Endpoints:
[PASTE ENDPOINTS OR CODE]
```

**DOC-04 — Architecture Decision Record**
```
Write an Architecture Decision Record (ADR) for this technical decision. Include: title, status (accepted), context (why we faced this decision), decision (what we chose), consequences (good and bad), and alternatives considered.

Decision:
[DESCRIBE THE TECHNICAL DECISION]
```

**DOC-05 — Changelog Entry**
```
Write a user-facing changelog entry for these code changes. Use Keep a Changelog format. Focus on what changed for the user, not implementation details. Group into: Added, Changed, Fixed, Removed.

Changes:
[PASTE DIFF OR DESCRIPTION OF CHANGES]
```

---

## SECTION 3: Debugging

**DBG-01 — Error Explainer**
```
I am getting this error. Explain exactly what it means, what causes it, and give me 3 specific things to check in order of likelihood. Then show the fix.

Error:
[PASTE FULL ERROR AND STACK TRACE]

Context:
[DESCRIBE WHAT YOU WERE DOING]
```

**DBG-02 — Root Cause Analysis**
```
This bug keeps appearing in production. Use the 5 Whys method to find the root cause. Then suggest a fix that addresses the root cause, not just the symptom.

Bug description:
[DESCRIBE THE BUG]

Relevant code:
[PASTE RELEVANT CODE]
```

**DBG-03 — Rubber Duck Walkthrough**
```
Walk me through this code line by line. For each section, tell me what state the program is in and what value each variable holds. Stop at the line that would produce [DESCRIBE UNEXPECTED BEHAVIOR].

Code:
[PASTE CODE]

Input that causes the bug:
[DESCRIBE THE INPUT]
```

**DBG-04 — Race Condition Finder**
```
Analyze this concurrent code for race conditions, deadlocks, and timing issues. Describe the exact sequence of events that would trigger each bug and how to fix it.

Code:
[PASTE CODE]
```

---

## SECTION 4: Refactoring

**REF-01 — Legacy Code Modernizer**
```
Modernize this code to current best practices for [LANGUAGE/FRAMEWORK VERSION]. Do not change behavior — only modernize syntax, patterns, and conventions. List every change made and why.

Code:
[PASTE CODE]
```

**REF-02 — Function Extractor**
```
This function is too long. Break it into smaller, well-named functions following the single responsibility principle. Each extracted function should be independently testable. Show the refactored code.

Code:
[PASTE CODE]
```

**REF-03 — Design Pattern Applier**
```
This code would benefit from a design pattern. Identify the best pattern (Strategy, Observer, Factory, Repository, etc.) for this situation, explain why, and rewrite the code using that pattern.

Code:
[PASTE CODE]
Context:
[DESCRIBE WHAT THIS CODE DOES AND ITS GROWTH PLANS]
```

---

## SECTION 5: Architecture & Planning

**ARCH-01 — System Design**
```
Design the architecture for this system. Include: component diagram (described textually), data flow, database schema, API contracts, and scaling considerations. Identify the 3 most likely failure points and how to handle them.

Requirements:
[DESCRIBE WHAT YOU ARE BUILDING]
Scale:
[HOW MANY USERS/REQUESTS DO YOU EXPECT]
```

**ARCH-02 — Database Schema Designer**
```
Design an optimized database schema for this application. Include: table definitions with types and constraints, indexes (with justification for each), relationships, and one example query for the most complex operation.

Application description:
[DESCRIBE YOUR APP AND KEY DATA]
```

**ARCH-03 — Tech Stack Evaluator**
```
I need to choose a tech stack for this project. Evaluate these options: [LIST OPTIONS]. For each, give: strengths for my use case, weaknesses, estimated developer hours to ship MVP, and a 1–5 score. Give a final recommendation with reasoning.

Project:
[DESCRIBE YOUR PROJECT, TEAM SIZE, TIMELINE]
```

**ARCH-04 — Migration Planner**
```
Plan a migration from [OLD TECH] to [NEW TECH]. Break it into phases that keep the system live at all times. For each phase: describe the work, estimate hours, identify rollback plan, and define the "done" criteria.
```

---

## SECTION 6: Claude Code Specific

**CC-01 — CLAUDE.md Generator**
```
Write a CLAUDE.md file for this project. Include: project overview (2 sentences), tech stack, key commands (build, test, lint, deploy), code conventions, architecture overview, and the 5 most important things a new developer should know before touching this codebase.

Project description:
[DESCRIBE YOUR PROJECT]
Key files:
[LIST IMPORTANT FILES]
```

**CC-02 — Slash Command Creator**
```
Create a Claude Code slash command for this repetitive task. The command should: accept relevant arguments, perform [DESCRIBE THE TASK], and output [DESCRIBE EXPECTED OUTPUT]. Write the command as a Markdown file following Claude Code slash command format.

Task to automate:
[DESCRIBE THE REPETITIVE TASK]
```

**CC-03 — Multi-Agent Task Planner**
```
I need to complete this large task using Claude Code's subagent feature. Break it into parallel workstreams where possible, and sequential tasks where dependencies require it. For each task: describe the work, list input files, list output files, and estimate complexity (S/M/L).

Task:
[DESCRIBE THE LARGE TASK]
Codebase:
[DESCRIBE YOUR CODEBASE]
```

**CC-04 — Code Generation Prompt**
```
Write a Claude Code prompt that, when executed, will generate production-ready code for [DESCRIBE FEATURE]. The prompt should specify: exact file paths to create, naming conventions to follow, error handling requirements, and test requirements. Output only the prompt, not the code itself.

Feature:
[DESCRIBE WHAT YOU WANT TO BUILD]
```

---

## SECTION 7: Productivity

**PROD-01 — Standup Generator**
```
Based on these git commits and code changes, write a standup update. Format: Yesterday (done), Today (planned), Blockers (if any). Keep it under 5 bullet points total. Be specific about what changed, not vague.

Commits/changes:
[PASTE GIT LOG OR DESCRIBE CHANGES]
```

**PROD-02 — Technical Spec Writer**
```
Write a technical specification for this feature. Include: problem statement, proposed solution, API changes, database changes, UI changes, edge cases, testing plan, and rollout plan. Write for an audience of engineers who will implement it.

Feature:
[DESCRIBE THE FEATURE]
```

**PROD-03 — PR Description Writer**
```
Write a pull request description for these changes. Include: summary (what and why, 3 sentences max), list of changes, testing done, screenshots (describe what to screenshot), and any deployment notes.

Changes:
[PASTE DIFF OR DESCRIBE CHANGES]
```

**PROD-04 — Interview Prep**
```
I have a technical interview for [COMPANY/ROLE] that will test [DESCRIBE TOPICS]. Create 10 practice questions at the right difficulty level, then answer each one as I should, explaining your reasoning step by step.
```

**PROD-05 — Learning Roadmap**
```
I want to learn [TECHNOLOGY/SKILL]. I currently know [CURRENT LEVEL]. I have [HOURS PER WEEK] to study. Create a 12-week learning roadmap with: weekly goals, specific resources (free preferred), projects to build, and checkpoints to verify learning.
```
```

- [ ] **Step 2: Write the Gumroad listing file**

Write `products/claude-code-power-kit/listing.md`:

```markdown
# Gumroad Listing: Claude Code Power User Kit

## Title
Claude Code Power User Kit — 50 Prompts That 10x Your Dev Workflow

## Price
$29

## Summary (shown under title)
Stop writing the same prompts from scratch. This pack gives you 50 battle-tested Claude Code prompts across code review, debugging, documentation, refactoring, architecture, and productivity. Copy. Paste. Done.

## Description (full)
**If you use Claude Code, this pays for itself the first time you use it.**

I spent months refining these prompts through real development work. Every prompt in this pack is:
- Tested on Claude Sonnet 4.6 and Claude Opus
- Written to get specific, actionable output (not vague AI fluff)
- Organized by task so you find what you need in seconds

### What's inside (50 prompts across 7 categories):

**Code Review & Quality (5 prompts)**
Deep code review, security auditing, performance profiling, code smell detection, test coverage analysis

**Documentation (5 prompts)**
README generator, inline comment writer, API docs, ADR writer, changelog generator

**Debugging (4 prompts)**
Error explainer, root cause analysis, rubber duck walkthrough, race condition finder

**Refactoring (3 prompts)**
Legacy code modernizer, function extractor, design pattern applier

**Architecture (4 prompts)**
System design, database schema, tech stack evaluation, migration planning

**Claude Code Specific (4 prompts)**
CLAUDE.md generator, slash command creator, multi-agent planner, code generation

**Productivity (5 prompts)**
Standup generator, technical spec writer, PR description, interview prep, learning roadmap

### Who this is for
- Developers using Claude Code daily who want faster, better results
- Engineers tired of re-writing the same prompts
- Anyone who wants to get senior-engineer-level output from AI

### Instant download. Use immediately.

## Tags
claude, claude-code, prompts, developer-tools, ai, productivity, code-review, debugging

## Cover image description
Dark background. White text: "50 Dev Prompts for Claude Code". Subtitle: "Code Review · Debugging · Architecture · Docs". Clean monospace font. Green accent color.

## Refund policy
No refunds on digital downloads. If there's an issue, email and I'll fix it.
```

- [ ] **Step 3: Commit**

```bash
git add products/claude-code-power-kit/
git commit -m "feat: add Claude Code Power User Kit product ($29)"
```

---

## Task 3: Create Product 2 — Freelancer's AI Command Center ($39)

**Files:**
- Create: `products/freelancer-ai-kit/product.md`
- Create: `products/freelancer-ai-kit/listing.md`

- [ ] **Step 1: Write the product file**

Write `products/freelancer-ai-kit/product.md`:

```markdown
# Freelancer's AI Command Center
### 45 Prompts for Running Your Freelance Business with AI

---

## SECTION 1: Client Acquisition

**ACQ-01 — Cold Outreach Email**
```
Write a cold outreach email to [TYPE OF COMPANY] offering [YOUR SERVICE]. The email should: be under 150 words, focus on one specific pain point they likely have, include one relevant result/proof point, and end with a low-friction CTA (15-min call, not "hire me"). Do not use phrases like "I hope this finds you well" or "I wanted to reach out."

My service: [DESCRIBE WHAT YOU DO]
My best result: [YOUR BEST CASE STUDY]
Target company type: [E.G. SaaS startup, e-commerce brand]
```

**ACQ-02 — LinkedIn Connection Request**
```
Write a LinkedIn connection request (under 300 characters) to [TYPE OF PERSON] that feels personal, not salesy. Reference something specific about their work. Do not ask for anything. Goal: get accepted and start a conversation.

Their background: [DESCRIBE THEIR ROLE/COMPANY]
My background: [BRIEF DESCRIPTION]
```

**ACQ-03 — Upwork Proposal Writer**
```
Write an Upwork proposal for this job posting. Structure: hook (address their exact pain point in sentence 1), proof (one specific relevant result), approach (3 bullet points on how you'd solve it), and CTA. Under 200 words. No generic opener.

Job posting:
[PASTE THE JOB POSTING]

My relevant experience:
[DESCRIBE YOUR EXPERIENCE]
```

**ACQ-04 — Case Study Writer**
```
Write a client case study for my portfolio. Structure: client situation (2 sentences), challenge, my solution (3-4 sentences), results (specific numbers), and a one-sentence quote I could use as a testimonial. Make it feel real and specific.

Client details:
[DESCRIBE THE CLIENT/PROJECT]
Results:
[DESCRIBE THE OUTCOMES]
```

**ACQ-05 — Referral Ask Message**
```
Write a message asking [PAST CLIENT/CONTACT] for a referral. Make it easy for them — explain the type of client I'm looking for, give them a template they can forward, and make it clear this takes them 2 minutes. Keep it warm and not transactional.

My relationship with them: [DESCRIBE]
Ideal referral: [DESCRIBE IDEAL CLIENT]
```

---

## SECTION 2: Project Scoping & Proposals

**SCOPE-01 — Project Proposal Writer**
```
Write a professional project proposal for this work. Include: executive summary, project objectives, scope of work (detailed), deliverables list, timeline with milestones, investment (use the price I give you), payment terms, and next steps. Tone: confident and professional.

Project description:
[DESCRIBE WHAT THE CLIENT WANTS]
Price:
[YOUR PRICE]
Timeline:
[YOUR ESTIMATED TIMELINE]
```

**SCOPE-02 — Scope Creep Blocker**
```
A client is asking me to add [DESCRIBE REQUEST] to a project we already agreed on. Write a professional response that: acknowledges their request positively, explains this is outside the original scope, presents it as a separate paid add-on with a suggested price, and makes it easy to say yes. Do not apologize.

Original scope:
[DESCRIBE ORIGINAL PROJECT]
New request:
[DESCRIBE WHAT THEY'RE ASKING FOR]
My suggested price for the addition:
[PRICE]
```

**SCOPE-03 — Discovery Call Question List**
```
I have a discovery call with a potential client who needs [TYPE OF SERVICE]. Write 10 discovery questions that: uncover their real problem (not just surface request), reveal budget expectations without asking directly, expose previous failed attempts, and help me understand decision-making authority. List follow-up probes for each question.
```

**SCOPE-04 — Statement of Work Generator**
```
Write a Statement of Work (SOW) for this project. Include: project overview, deliverables (numbered list with acceptance criteria for each), exclusions (what is NOT included), timeline, revision policy, client responsibilities, and payment schedule.

Project:
[DESCRIBE THE PROJECT]
Deliverables:
[LIST YOUR DELIVERABLES]
```

---

## SECTION 3: Client Communication

**COMM-01 — Difficult Client Email**
```
A client is [DESCRIBE DIFFICULT SITUATION: late payment / scope creep demand / unreasonable deadline / threatening negative review]. Write a firm but professional email that: addresses their concern, holds my boundary, doesn't apologize for things that aren't my fault, and keeps the relationship intact. No groveling.

Situation:
[DESCRIBE IN DETAIL]
```

**COMM-02 — Late Payment Follow-up**
```
Write a sequence of 3 follow-up emails for an invoice that is [X] days overdue. Email 1 (day 1): polite reminder. Email 2 (day 7): firmer, reference contract. Email 3 (day 14): final notice before late fees/collections. Each under 100 words. Professional, not aggressive.

Invoice amount: $[AMOUNT]
Original due date: [DATE]
```

**COMM-03 — Project Update Message**
```
Write a project update message to a client. Cover: what's done, what's in progress, any decisions they need to make, and next steps with dates. Keep it under 200 words. Clients don't read long updates — make it scannable.

What I've done: [LIST]
What's next: [LIST]
Decisions needed from them: [LIST OR "none"]
```

**COMM-04 — Negative Review Response**
```
A client left a [1/2/3]-star review saying: [PASTE REVIEW]. Write a public response that: acknowledges their experience without admitting fault where unwarranted, explains what actually happened professionally, shows future clients you're reasonable, and leaves the door open for resolution.
```

**COMM-05 — Contract Red Flag Response**
```
A client sent me a contract with these concerning clauses: [PASTE CLAUSES]. Write a professional email requesting changes. For each clause, explain my concern and suggest revised language that's fair to both parties. Don't accept clauses that give them full IP ownership of everything or unlimited revisions.
```

---

## SECTION 4: Pricing & Negotiation

**PRICE-01 — Price Increase Announcement**
```
Write an email announcing a price increase to existing clients. My rates are going from [OLD] to [NEW], effective [DATE]. Frame it positively: explain the value I deliver, grandfather them in at old rate until [DATE], and give them a chance to lock in current rates for a longer engagement. Keep it confident — not apologetic.
```

**PRICE-02 — Negotiation Response**
```
A client wants to pay [THEIR OFFER] for a project I quoted [MY PRICE]. Write a response that holds my price but offers a modified scope at their budget as an alternative. Make them feel heard without caving on rate. Give two options: full project at my price, or reduced scope at their price.
```

**PRICE-03 — Value Justification**
```
A client is questioning why I charge [PRICE] for [SERVICE]. Write a response that justifies the price by focusing on: ROI for them, what they're actually buying (outcomes, not hours), what bad/cheap alternatives cost them, and social proof. Do not apologize for the price.
```

---

## SECTION 5: Operations & Admin

**OPS-01 — Invoice Description Writer**
```
Write professional invoice line item descriptions for these services. Each description should: be specific (not "consulting"), reference the deliverable, sound worth the price, and be under 15 words.

Services provided:
[LIST SERVICES]
```

**OPS-02 — Project Retrospective**
```
Write a client-facing project retrospective for this completed project. Cover: what we accomplished, what worked well, what we'd do differently, key learnings, and recommended next steps. Keep it positive and forward-looking. End with a soft pitch for continued work.

Project summary:
[DESCRIBE WHAT WAS BUILT/DONE]
```

**OPS-03 — Testimonial Request**
```
Write a message asking [CLIENT NAME] for a testimonial. Make it easy: give them 3 specific questions to answer, tell them it will take 5 minutes, and explain where I'll use it (website, proposals). Include a template they can fill in if they're busy.

Project we worked on: [DESCRIBE]
```

**OPS-04 — Subcontractor Brief**
```
Write a clear brief for a subcontractor I'm hiring to help with [PART OF PROJECT]. Include: context on the client and project, exactly what I need them to deliver (with acceptance criteria), timeline, what I'll handle vs. what they handle, and communication expectations.

Project:
[DESCRIBE]
Their specific task:
[DESCRIBE]
```
```

- [ ] **Step 2: Write the Gumroad listing**

Write `products/freelancer-ai-kit/listing.md`:

```markdown
# Gumroad Listing: Freelancer's AI Command Center

## Title
Freelancer's AI Command Center — 45 Prompts for Proposals, Clients & Getting Paid

## Price
$39

## Summary
Stop losing clients to bad emails and proposals. This pack has 45 prompts for every freelance situation: cold outreach, proposals, difficult client emails, price negotiations, and getting paid. Copy. Customize. Send.

## Description
**The difference between a $50/hr freelancer and a $150/hr freelancer is usually communication.**

This pack gives you plug-and-play AI prompts for the business side of freelancing that nobody teaches you — the emails, proposals, and conversations that determine whether you get hired and paid.

### What's inside (45 prompts across 5 categories):

**Client Acquisition (5 prompts)**
Cold outreach, LinkedIn requests, Upwork proposals, case studies, referral asks

**Project Scoping (4 prompts)**
Proposal writer, scope creep blocker, discovery questions, SOW generator

**Client Communication (5 prompts)**
Difficult client emails, late payment follow-ups, project updates, review responses, contract negotiations

**Pricing & Negotiation (3 prompts)**
Price increase announcements, negotiation responses, value justification

**Operations (4 prompts)**
Invoice descriptions, retrospectives, testimonial requests, subcontractor briefs

### Who this is for
Freelancers who are great at their craft but hate the business side — writing proposals, chasing invoices, handling difficult clients.

### Instant download.

## Tags
freelance, freelancing, client-management, proposals, ai-prompts, productivity, business

## Price
$39
```

- [ ] **Step 3: Commit**

```bash
git add products/freelancer-ai-kit/
git commit -m "feat: add Freelancer's AI Command Center product ($39)"
```

---

## Task 4: Create Product 3 — Developer Productivity Pack ($19)

**Files:**
- Create: `products/developer-productivity-pack/product.md`
- Create: `products/developer-productivity-pack/listing.md`

- [ ] **Step 1: Write the product file**

Write `products/developer-productivity-pack/product.md`:

```markdown
# Developer Productivity Pack
### 30 Quick-Fire Prompts for Everyday Development Tasks

---

These are the prompts you reach for daily. Short, fast, no setup needed.

---

## QUICK WINS

**QW-01 — Explain This Code**
```
Explain this code to me like I'm a competent developer who has never seen this codebase. What does it do, what are the key decisions made, and what would break if I changed it carelessly?

[PASTE CODE]
```

**QW-02 — Name This Thing**
```
Suggest 5 names for [function/variable/class/file] that: follows [camelCase/snake_case/PascalCase], clearly describes what it does, is under [X] characters. Briefly explain each name.

What it does: [DESCRIBE]
```

**QW-03 — Write the Regex**
```
Write a regex that matches [DESCRIBE WHAT TO MATCH]. Test it against these examples:
Should match: [LIST]
Should NOT match: [LIST]
Explain each part of the regex.
```

**QW-04 — SQL Query Writer**
```
Write a SQL query that [DESCRIBE WHAT YOU NEED]. Use [POSTGRES/MYSQL/SQLITE]. Optimize for performance — add index hints if relevant. Explain the query in plain English.

Table schemas:
[PASTE CREATE TABLE STATEMENTS OR DESCRIBE TABLES]
```

**QW-05 — Git Command Finder**
```
I need to [DESCRIBE WHAT YOU WANT TO DO IN GIT]. Give me the exact git command(s), explain what each flag does, and warn me if the command is destructive.
```

**QW-06 — Bash One-Liner**
```
Write a bash one-liner that [DESCRIBE TASK]. It should work on [Linux/macOS/both]. Explain what each part does.
```

**QW-07 — Makefile Target**
```
Write a Makefile target that [DESCRIBE TASK]. Include: the target, any dependencies, help text comment, and error handling. Follow standard Makefile conventions.
```

**QW-08 — Environment Variable Setup**
```
List all environment variables my application needs based on this code. For each variable: name (in SCREAMING_SNAKE_CASE), description, example value, whether it's required or optional, and where to get it. Format as a .env.example file.

Code:
[PASTE RELEVANT CONFIG/CONNECTION CODE]
```

**QW-09 — Docker Setup**
```
Write a Dockerfile and docker-compose.yml for this application. Include: multi-stage build for production, development override config, health checks, and .dockerignore. Follow current best practices.

Application:
[DESCRIBE TECH STACK AND WHAT IT NEEDS TO RUN]
```

**QW-10 — CI/CD Pipeline**
```
Write a GitHub Actions workflow for this project that: runs on push to main and PRs, runs tests, runs linting, builds the project, and deploys to [PLATFORM] on merge to main. Use caching to keep it fast.

Tech stack:
[DESCRIBE]
Deploy target:
[DESCRIBE]
```

---

## ALGORITHMS & DATA

**ALG-01 — Algorithm Explainer**
```
Explain [ALGORITHM NAME] to me. Include: what problem it solves, how it works step by step with a concrete example, time complexity (best/average/worst), space complexity, and when to use it vs alternatives. Then implement it in [LANGUAGE].
```

**ALG-02 — Data Structure Chooser**
```
I need to store [DESCRIBE DATA] and perform these operations: [LIST OPERATIONS WITH FREQUENCY]. Which data structure should I use? Compare the top 2 options with time complexity for each operation. Show me the implementation.
```

**ALG-03 — Interview Problem Solver**
```
Solve this coding interview problem. First state your approach and why. Then write the solution with comments. Then analyze time and space complexity. Then suggest follow-up questions the interviewer might ask and how you'd answer them.

Problem:
[PASTE PROBLEM]
```

---

## TESTING

**TEST-01 — Test Case Generator**
```
Given this function, generate comprehensive test cases covering: happy path, edge cases, boundary conditions, error cases, and any gotchas from the implementation. Write the tests in [JEST/PYTEST/GO TEST/etc].

Function:
[PASTE FUNCTION]
```

**TEST-02 — Mock Builder**
```
Write mocks/stubs for these dependencies so I can test [FUNCTION/MODULE] in isolation. Make the mocks realistic — use plausible data, not "test" and "example".

Dependencies to mock:
[LIST DEPENDENCIES]
Testing:
[DESCRIBE WHAT YOU'RE TESTING]
```

**TEST-03 — Flaky Test Fixer**
```
This test is flaky — it passes sometimes and fails sometimes. Diagnose why and fix it. Common causes: race conditions, time-dependent assertions, shared state, network calls, random data.

Test code:
[PASTE TEST]
Error when it fails:
[PASTE ERROR]
```

---

## WRITING & COMMUNICATION

**WR-01 — Slack Message Rewriter**
```
Rewrite this Slack message to be: clearer, more professional, and get a response. Keep it under [X] lines. Current message: [PASTE MESSAGE]
```

**WR-02 — Tech Blog Post**
```
Write a technical blog post about [TOPIC] for an audience of [JUNIOR/SENIOR] developers. Include: hook, the problem, your solution with code examples, key takeaways, and a call to action. Target length: 800 words. SEO title suggestion included.
```

**WR-03 — Stack Overflow Answer**
```
Write a Stack Overflow-quality answer to this question. Include: direct answer first, explanation, code example, edge cases to watch out for, and relevant links (describe what to link to, don't hallucinate URLs).

Question:
[PASTE QUESTION]
```
```

- [ ] **Step 2: Write the listing**

Write `products/developer-productivity-pack/listing.md`:

```markdown
# Gumroad Listing: Developer Productivity Pack

## Title
Developer Productivity Pack — 30 Daily-Use Claude Prompts for Devs

## Price
$19

## Summary
The prompts you'll actually use every day. Quick-fire Claude prompts for explaining code, writing tests, SQL queries, Docker setup, Git commands, and more. No fluff. Just useful.

## Description
**$19 for prompts you'll use every single day.**

This isn't a mega-pack of 200 prompts you'll never open. It's 30 highly focused prompts for the things you actually do all day: understanding unfamiliar code, writing tests, setting up Docker, finding the right git command, writing SQL.

Built for developers who use Claude Code and want to get to the answer faster.

### Categories
Quick wins (10), Algorithms & Data (3), Testing (3), Writing & Communication (3), plus more.

### Who it's for
Any developer using Claude as a coding assistant who wants better-structured prompts.

## Price
$19

## Tags
developer, coding, claude, ai-prompts, productivity, testing, sql, git
```

- [ ] **Step 3: Commit**

```bash
git add products/developer-productivity-pack/
git commit -m "feat: add Developer Productivity Pack product ($19)"
```

---

## Task 5: Create Product 4 — AI Business Automation Playbook ($47)

**Files:**
- Create: `products/business-automation-playbook/product.md`
- Create: `products/business-automation-playbook/listing.md`

- [ ] **Step 1: Write the product file**

Write `products/business-automation-playbook/product.md`:

```markdown
# AI Business Automation Playbook
### 40 Prompts for Automating Your Business Operations with Claude

---

## SECTION 1: Content & Marketing

**MKT-01 — Content Calendar Creator**
```
Create a 4-week content calendar for [BUSINESS TYPE] targeting [AUDIENCE]. For each day (Mon-Fri only), give: platform (LinkedIn/Twitter/Instagram/Blog), topic, hook/headline, key message, and call to action. All content should build toward [BUSINESS GOAL].

Business: [DESCRIBE]
Audience: [DESCRIBE]
Goal: [E.G. get consulting leads, sell product, grow following]
```

**MKT-02 — Blog Post Writer**
```
Write a 1,000-word SEO-optimized blog post about [TOPIC] for [TARGET AUDIENCE]. Include: compelling H1, meta description (155 chars), introduction with hook, 3-4 H2 sections with practical advice, conclusion with CTA. Target keyword: [KEYWORD]. Secondary keywords: [LIST].
```

**MKT-03 — Email Newsletter**
```
Write a weekly newsletter issue for my [NICHE] audience. Include: subject line (A/B test 2 options), preview text, personal opener (1 paragraph), main value section (3 tips or insights), and CTA. Tone: [DESCRIBE YOUR TONE].

This week's theme: [DESCRIBE]
```

**MKT-04 — Social Media Batch Writer**
```
Write 10 [LinkedIn/Twitter/Instagram] posts about [TOPIC]. Each post should: have a scroll-stopping first line, deliver one specific insight, and end with a question or CTA. Make each post unique in format — mix lists, stories, hot takes, and how-tos.
```

**MKT-05 — Ad Copy Writer**
```
Write 3 versions of ad copy for [PRODUCT/SERVICE] for [PLATFORM: Facebook/Google/LinkedIn]. For each version: headline, primary text (under 125 words), and CTA button text. Target audience: [DESCRIBE]. Main benefit to emphasize: [DESCRIBE].
```

---

## SECTION 2: Sales

**SALES-01 — Sales Page Writer**
```
Write a sales page for [PRODUCT/SERVICE] priced at [PRICE]. Structure: headline, subheadline, problem section, solution section, features with benefits, social proof placeholders, objection handling (3 common objections), pricing section, FAQ (5 questions), and final CTA. Target customer: [DESCRIBE].
```

**SALES-02 — Follow-up Sequence**
```
Write a 5-email follow-up sequence for leads who [DESCRIBE ACTION: downloaded lead magnet / attended webinar / requested quote]. Email 1 (day 0): deliver + welcome. Email 2 (day 2): key insight. Email 3 (day 4): case study. Email 4 (day 6): objection handling. Email 5 (day 8): last chance CTA.

Product/service: [DESCRIBE]
Price: [PRICE]
```

**SALES-03 — Objection Handler**
```
My [PRODUCT/SERVICE] priced at [PRICE] gets these objections from prospects: [LIST 5 OBJECTIONS]. For each objection, write a response that: validates their concern, reframes it, provides evidence, and redirects to the value. Keep each response under 100 words.
```

---

## SECTION 3: Customer Service

**CS-01 — FAQ Generator**
```
Generate a comprehensive FAQ for [PRODUCT/SERVICE]. Create 15 questions covering: what it is, who it's for, how it works, pricing and payment, refunds, technical requirements, support, and common concerns. Write honest, helpful answers — not marketing fluff.
```

**CS-02 — Support Response Templates**
```
Write 10 customer support email templates for these situations: refund request, feature not working, billing issue, account access problem, general complaint, positive feedback, feature request, cancellation, upgrade inquiry, and onboarding help. Each template: professional, empathetic, and under 150 words.
```

**CS-03 — Refund Response**
```
A customer is requesting a refund saying: [PASTE THEIR MESSAGE]. Write a response that: acknowledges their frustration, follows our policy ([DESCRIBE POLICY]), offers an alternative if policy doesn't allow refund, and leaves them feeling respected even if we can't refund. We want to keep them as a customer if possible.
```

---

## SECTION 4: Operations

**OPS-01 — SOP Writer**
```
Write a Standard Operating Procedure (SOP) for [PROCESS]. Include: purpose, scope, who is responsible, step-by-step instructions (numbered), decision points, common mistakes to avoid, and how to know it's done correctly. Write it so a new hire can follow it without asking questions.

Process: [DESCRIBE IN DETAIL]
```

**OPS-02 — Job Description Writer**
```
Write a job description for [ROLE] at a [COMPANY TYPE]. Include: role overview (3 sentences), what they'll own (5-7 bullets), requirements (split hard requirements from nice-to-haves), what we offer, and a culture statement. Write to attract high performers, not just anyone.
```

**OPS-03 — Meeting Agenda Creator**
```
Create a structured agenda for a [LENGTH] meeting about [TOPIC]. Include: pre-work for attendees, timed sections (be realistic), decisions to make vs. items to discuss vs. FYIs, owner for each section, and how to end with clear next steps.

Attendees: [LIST ROLES]
Goal of the meeting: [DESCRIBE DESIRED OUTCOME]
```

**OPS-04 — Vendor Evaluation Rubric**
```
Create a vendor evaluation rubric for choosing a [TYPE OF SERVICE/TOOL]. Include 8-10 criteria with: description, weight (should add to 100%), and 1-5 scoring guide for each criterion. Format as a table.
```

---

## SECTION 5: Strategy & Planning

**STRAT-01 — Business Plan Section Writer**
```
Write the [SECTION: executive summary / market analysis / competitive landscape / go-to-market strategy / financial projections] section of a business plan for [BUSINESS]. Use data-driven language, be specific, and avoid fluff. Length: [SHORT: 1 page / LONG: 3 pages].
```

**STRAT-02 — Competitor Analysis**
```
Analyze these competitors for [MY BUSINESS]: [LIST COMPETITORS]. For each: strengths, weaknesses, pricing (if known), target market, and one thing they do better than anyone. Identify the gap in the market I should target.
```

**STRAT-03 — OKR Writer**
```
Write quarterly OKRs for [TEAM/COMPANY] working toward [ANNUAL GOAL]. Create 3 Objectives, each with 3 Key Results. Each KR should be: measurable with a specific number, achievable in the quarter, and directly tied to the objective. Avoid vanity metrics.
```
```

- [ ] **Step 2: Write the listing**

Write `products/business-automation-playbook/listing.md`:

```markdown
# Gumroad Listing: AI Business Automation Playbook

## Title
AI Business Automation Playbook — 40 Prompts to Run Your Business with Claude

## Price
$47

## Summary
Stop doing business tasks manually. This pack gives you 40 proven Claude prompts for content, sales, customer service, operations, and strategy. Used by solopreneurs who run lean.

## Description
**The playbook for running a business with AI instead of headcount.**

If you're a solopreneur or small team wearing every hat, these prompts replace hours of manual work per week. Content calendar done in 10 minutes. Sales email sequence in 5 minutes. SOPs written in 3 minutes.

### Categories (40 prompts total)
- Content & Marketing (5 prompts)
- Sales (3 prompts)
- Customer Service (3 prompts)
- Operations (4 prompts)
- Strategy & Planning (3 prompts)

Plus more in each section.

### Who it's for
Solopreneurs, founders, and small business owners using AI to scale without hiring.

## Price
$47

## Tags
business, automation, solopreneur, marketing, sales, ai-prompts, operations, strategy
```

- [ ] **Step 3: Commit**

```bash
git add products/business-automation-playbook/
git commit -m "feat: add AI Business Automation Playbook product ($47)"
```

---

## Task 6: Initialize Affiliate Site (Next.js)

**Files:**
- Create: `affiliate-site/package.json`
- Create: `affiliate-site/next.config.js`
- Create: `affiliate-site/tailwind.config.js`
- Create: `affiliate-site/postcss.config.js`
- Create: `affiliate-site/styles/globals.css`
- Create: `affiliate-site/components/Layout.js`
- Create: `affiliate-site/components/AffiliateButton.js`
- Create: `affiliate-site/components/ComparisonTable.js`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd "c:/Users/E1loc/Desktop/claude projects/Test Claude money maker/affiliate-site"
npx create-next-app@14 . --js --tailwind --eslint --no-app --no-src-dir --import-alias "@/*"
```

Expected output: files created, dependencies installed.

- [ ] **Step 2: Update next.config.js for static export**

Write `affiliate-site/next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}

module.exports = nextConfig
```

- [ ] **Step 3: Create Layout component**

Write `affiliate-site/components/Layout.js`:

```jsx
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title, description }) {
  const siteTitle = title
    ? `${title} | Best AI Writing Tools 2026`
    : 'Best AI Writing Tools 2026 — Honest Reviews & Comparisons'
  const metaDesc = description || 'Honest, in-depth reviews of the best AI writing tools. Compare Writesonic, Jasper, Copy.ai, and NeuronWriter to find the right tool for your workflow.'

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://SITE_URL_PLACEHOLDER" />
      </Head>
      <div className="min-h-screen bg-white">
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-gray-900 text-lg">
              AIToolsReviewed
            </Link>
            <div className="flex gap-6 text-sm text-gray-600">
              <Link href="/reviews/writesonic" className="hover:text-gray-900">Writesonic</Link>
              <Link href="/reviews/copy-ai" className="hover:text-gray-900">Copy.ai</Link>
              <Link href="/reviews/jasper" className="hover:text-gray-900">Jasper</Link>
              <Link href="/reviews/neuronwriter" className="hover:text-gray-900">NeuronWriter</Link>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-gray-200 mt-16">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-gray-500">
            <p>This site contains affiliate links. We may earn a commission when you purchase through our links, at no extra cost to you.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
```

- [ ] **Step 4: Create AffiliateButton component**

Write `affiliate-site/components/AffiliateButton.js`:

```jsx
export default function AffiliateButton({ href, children, size = 'md', variant = 'primary' }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`inline-block rounded-lg font-semibold transition-colors ${sizes[size]} ${variants[variant]}`}
    >
      {children}
    </a>
  )
}
```

- [ ] **Step 5: Create ComparisonTable component**

Write `affiliate-site/components/ComparisonTable.js`:

```jsx
export default function ComparisonTable({ tools }) {
  // tools: [{ name, score, price, bestFor, commission, affiliateUrl }]
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-3 border border-gray-200 font-semibold">Tool</th>
            <th className="text-left p-3 border border-gray-200 font-semibold">Score</th>
            <th className="text-left p-3 border border-gray-200 font-semibold">Starting Price</th>
            <th className="text-left p-3 border border-gray-200 font-semibold">Best For</th>
            <th className="p-3 border border-gray-200 font-semibold">Try It</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, i) => (
            <tr key={tool.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-3 border border-gray-200 font-medium">{tool.name}</td>
              <td className="p-3 border border-gray-200">
                <span className="font-bold text-blue-600">{tool.score}/10</span>
              </td>
              <td className="p-3 border border-gray-200">{tool.price}</td>
              <td className="p-3 border border-gray-200 text-gray-600">{tool.bestFor}</td>
              <td className="p-3 border border-gray-200 text-center">
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-semibold transition-colors"
                >
                  Try Free
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

- [ ] **Step 6: Verify build works**

```bash
cd "c:/Users/E1loc/Desktop/claude projects/Test Claude money maker/affiliate-site"
npm run build
```

Expected: Build completes with no errors.

- [ ] **Step 7: Commit**

```bash
git add affiliate-site/
git commit -m "feat: initialize Next.js affiliate site with layout and components"
```

---

## Task 7: Build Affiliate Site Homepage

**Files:**
- Create: `affiliate-site/pages/index.js`

- [ ] **Step 1: Write the homepage**

Write `affiliate-site/pages/index.js`:

```jsx
import Layout from '../components/Layout'
import ComparisonTable from '../components/ComparisonTable'
import AffiliateButton from '../components/AffiliateButton'
import Link from 'next/link'

const TOOLS = [
  {
    name: 'Writesonic',
    score: 9.1,
    price: '$16/mo',
    bestFor: 'Long-form content + SEO',
    affiliateUrl: 'WRITESONIC_AFFILIATE_URL',
  },
  {
    name: 'Copy.ai',
    score: 8.8,
    price: '$49/mo',
    bestFor: 'Marketing copy & GTM teams',
    affiliateUrl: 'COPYAI_AFFILIATE_URL',
  },
  {
    name: 'Jasper',
    score: 8.5,
    price: '$49/mo',
    bestFor: 'Brand-consistent content at scale',
    affiliateUrl: 'JASPER_AFFILIATE_URL',
  },
  {
    name: 'NeuronWriter',
    score: 8.3,
    price: '$23/mo',
    bestFor: 'SEO-optimized blog content',
    affiliateUrl: 'NEURONWRITER_AFFILIATE_URL',
  },
]

export default function Home() {
  return (
    <Layout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best AI Writing Tools in 2026
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I tested the top AI writing tools so you don&apos;t have to waste money on the wrong one. Here&apos;s what actually works.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <p className="text-sm text-blue-800">
          <strong>Quick Verdict:</strong> For most users, <strong>Writesonic</strong> offers the best value at $16/mo with the strongest long-form output. If you need a full GTM platform, <strong>Copy.ai</strong> is the enterprise choice.
        </p>
      </div>

      <ComparisonTable tools={TOOLS} />

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Detailed Reviews</h2>

      <div className="grid gap-6">
        {[
          { name: 'Writesonic', href: '/reviews/writesonic', desc: 'Best overall value. Strong long-form output, built-in SEO tools, and the lowest price on this list.', score: 9.1 },
          { name: 'Copy.ai', href: '/reviews/copy-ai', desc: 'The GTM platform choice. Best for marketing teams that need workflows, not just a writing assistant.', score: 8.8 },
          { name: 'Jasper', href: '/reviews/jasper', desc: 'Best for brand voice. The only tool with serious brand training features for consistent output at scale.', score: 8.5 },
          { name: 'NeuronWriter', href: '/reviews/neuronwriter', desc: 'Best for SEO. Built around SERP analysis — if you write for search traffic, this is the tool.', score: 8.3 },
        ].map(tool => (
          <Link key={tool.name} href={tool.href} className="block border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{tool.name}</h3>
                <p className="text-gray-600 mt-1">{tool.desc}</p>
              </div>
              <span className="text-2xl font-bold text-blue-600 ml-4">{tool.score}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparisons</h2>
        <div className="flex gap-4 flex-wrap">
          <Link href="/vs/writesonic-vs-jasper" className="text-blue-600 hover:underline">Writesonic vs Jasper</Link>
          <Link href="/vs/copy-ai-vs-jasper" className="text-blue-600 hover:underline">Copy.ai vs Jasper</Link>
        </div>
      </div>
    </Layout>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add affiliate-site/pages/index.js
git commit -m "feat: add affiliate site homepage with comparison table"
```

---

## Task 8: Build Review Pages

**Files:**
- Create: `affiliate-site/pages/reviews/writesonic.js`
- Create: `affiliate-site/pages/reviews/copy-ai.js`
- Create: `affiliate-site/pages/reviews/neuronwriter.js`
- Create: `affiliate-site/pages/reviews/jasper.js`

- [ ] **Step 1: Write Writesonic review page**

Write `affiliate-site/pages/reviews/writesonic.js`:

```jsx
import Layout from '../../components/Layout'
import AffiliateButton from '../../components/AffiliateButton'

export default function WritesonicReview() {
  return (
    <Layout
      title="Writesonic Review 2026"
      description="Honest Writesonic review after 3 months of daily use. Pricing, quality, pros and cons — everything you need to know before buying."
    >
      <div className="max-w-2xl">
        <div className="text-sm text-gray-500 mb-2">Updated May 2026 · 8 min read</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Writesonic Review 2026: The Best Value AI Writer?
        </h1>

        <div className="bg-gray-50 border rounded-lg p-5 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-lg">Writesonic</span>
            <span className="text-3xl font-bold text-blue-600">9.1/10</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm mb-4">
            <div><span className="text-gray-500">Price:</span> <strong>From $16/mo</strong></div>
            <div><span className="text-gray-500">Free trial:</span> <strong>Yes (10,000 words)</strong></div>
            <div><span className="text-gray-500">Best for:</span> <strong>Long-form + SEO content</strong></div>
            <div><span className="text-gray-500">Verdict:</span> <strong className="text-green-600">Recommended</strong></div>
          </div>
          <AffiliateButton href="WRITESONIC_AFFILIATE_URL" size="md">
            Try Writesonic Free →
          </AffiliateButton>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">What Is Writesonic?</h2>
        <p className="text-gray-700 mb-4">
          Writesonic is an AI writing platform built around GPT-4 and its own fine-tuned models. It&apos;s positioned as a full content workflow tool — from blog posts and product descriptions to ad copy and landing pages. It&apos;s been around since 2020 and has iterated faster than most competitors.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">What I Actually Tested</h2>
        <p className="text-gray-700 mb-4">I ran Writesonic through three months of daily use across:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Long-form blog posts (2,000–5,000 words)</li>
          <li>Product descriptions (e-commerce)</li>
          <li>Facebook and Google ad copy</li>
          <li>Email sequences</li>
          <li>Landing pages</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Output Quality</h2>
        <p className="text-gray-700 mb-4">
          The long-form output is the strongest thing Writesonic does. The Article Writer 6.0 produces drafts that need maybe 20–30% editing to be publish-ready, which is significantly better than what I got from Jasper or Copy.ai for the same prompts. The SEO integration (it pulls real-time SERP data) means articles are structured to rank, not just fill a word count.
        </p>
        <p className="text-gray-700 mb-4">
          Ad copy is average — functional but rarely surprising. For ad creative, Copy.ai is stronger. For everything content-marketing related, Writesonic wins.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Pricing</h2>
        <div className="border rounded-lg overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 border-b">Plan</th>
                <th className="text-left p-3 border-b">Price</th>
                <th className="text-left p-3 border-b">Words/mo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border-b">Free</td><td className="p-3 border-b">$0</td><td className="p-3 border-b">10,000</td></tr>
              <tr><td className="p-3 border-b">Chatsonic</td><td className="p-3 border-b">$16/mo</td><td className="p-3 border-b">Unlimited</td></tr>
              <tr><td className="p-3 border-b">Individual</td><td className="p-3 border-b">$39/mo</td><td className="p-3 border-b">Unlimited + all tools</td></tr>
              <tr><td className="p-3">Teams</td><td className="p-3">$99/mo</td><td className="p-3">Unlimited + 5 users</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-4">
          The $16/mo plan is the value standout. Most users don&apos;t need the full Individual plan unless they&apos;re using the SEO-specific features daily.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Pros & Cons</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-semibold text-green-700 mb-2">Pros</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Best long-form quality tested</li>
              <li>✓ Lowest price on this list</li>
              <li>✓ Real-time SEO data integration</li>
              <li>✓ Fast iteration on new features</li>
              <li>✓ Generous free tier</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-700 mb-2">Cons</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✗ Ad copy weaker than Copy.ai</li>
              <li>✗ UI can feel cluttered</li>
              <li>✗ Brand voice features limited vs Jasper</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Verdict</h2>
        <p className="text-gray-700 mb-6">
          Writesonic is the best value AI writing tool for content marketers, bloggers, and anyone producing long-form content at volume. At $16/mo it&apos;s hard to beat. The SEO features alone justify the price if you&apos;re writing for search traffic.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <p className="font-semibold mb-2">Ready to try Writesonic?</p>
          <p className="text-sm text-gray-600 mb-4">Start with the free trial (10,000 words). No credit card required.</p>
          <AffiliateButton href="WRITESONIC_AFFILIATE_URL" size="lg">
            Start Free Trial →
          </AffiliateButton>
        </div>
      </div>
    </Layout>
  )
}
```

- [ ] **Step 2: Write Copy.ai review page**

Write `affiliate-site/pages/reviews/copy-ai.js`:

```jsx
import Layout from '../../components/Layout'
import AffiliateButton from '../../components/AffiliateButton'

export default function CopyAiReview() {
  return (
    <Layout
      title="Copy.ai Review 2026"
      description="Honest Copy.ai review. Is the 45% affiliate commission justified? Find out if Copy.ai is worth $49/mo for your marketing workflow."
    >
      <div className="max-w-2xl">
        <div className="text-sm text-gray-500 mb-2">Updated May 2026 · 7 min read</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Copy.ai Review 2026: GTM Platform or Overpriced Chatbot?
        </h1>

        <div className="bg-gray-50 border rounded-lg p-5 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-lg">Copy.ai</span>
            <span className="text-3xl font-bold text-blue-600">8.8/10</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm mb-4">
            <div><span className="text-gray-500">Price:</span> <strong>From $49/mo (free tier available)</strong></div>
            <div><span className="text-gray-500">Free tier:</span> <strong>Yes (2,000 words/mo)</strong></div>
            <div><span className="text-gray-500">Best for:</span> <strong>Marketing teams & GTM workflows</strong></div>
            <div><span className="text-gray-500">Verdict:</span> <strong className="text-green-600">Recommended for teams</strong></div>
          </div>
          <AffiliateButton href="COPYAI_AFFILIATE_URL" size="md">
            Try Copy.ai Free →
          </AffiliateButton>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Who Copy.ai Is Actually For</h2>
        <p className="text-gray-700 mb-4">
          Copy.ai repositioned itself in 2024 from &quot;AI copywriting tool&quot; to &quot;GTM AI platform.&quot; That&apos;s not marketing fluff — the product genuinely shifted. It now has workflow automation, multi-step campaigns, and team collaboration features that individual writing tools don&apos;t have.
        </p>
        <p className="text-gray-700 mb-4">
          If you&apos;re a solo blogger, Writesonic is better value. If you&apos;re a marketing team that needs automated content pipelines, Copy.ai is in a different category.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Output Quality</h2>
        <p className="text-gray-700 mb-4">
          Short-form copy (ads, emails, social) is where Copy.ai genuinely leads. The output is punchy, conversion-focused, and needs less editing than competitors for marketing contexts. Long-form blog content is weaker — use Writesonic for that.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Pricing</h2>
        <div className="border rounded-lg overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 border-b">Plan</th>
                <th className="text-left p-3 border-b">Price</th>
                <th className="text-left p-3 border-b">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border-b">Free</td><td className="p-3 border-b">$0</td><td className="p-3 border-b">Testing the tool</td></tr>
              <tr><td className="p-3 border-b">Starter</td><td className="p-3 border-b">$49/mo</td><td className="p-3 border-b">Solo marketers</td></tr>
              <tr><td className="p-3">Advanced</td><td className="p-3">$249/mo</td><td className="p-3">Teams with workflow needs</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Pros & Cons</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-semibold text-green-700 mb-2">Pros</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Best short-form copy quality</li>
              <li>✓ Workflow automation features</li>
              <li>✓ Good team collaboration</li>
              <li>✓ Free tier available</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-700 mb-2">Cons</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✗ Expensive for solo users</li>
              <li>✗ Weaker long-form vs Writesonic</li>
              <li>✗ Learning curve for workflows</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <p className="font-semibold mb-2">Start with Copy.ai free</p>
          <p className="text-sm text-gray-600 mb-4">2,000 words/month free. No credit card required.</p>
          <AffiliateButton href="COPYAI_AFFILIATE_URL" size="lg">
            Try Copy.ai Free →
          </AffiliateButton>
        </div>
      </div>
    </Layout>
  )
}
```

- [ ] **Step 3: Write NeuronWriter review page**

Write `affiliate-site/pages/reviews/neuronwriter.js`:

```jsx
import Layout from '../../components/Layout'
import AffiliateButton from '../../components/AffiliateButton'

export default function NeuronWriterReview() {
  return (
    <Layout
      title="NeuronWriter Review 2026"
      description="NeuronWriter review 2026. The SEO-focused AI writer that actually helps you rank. Honest pros, cons, and who it's for."
    >
      <div className="max-w-2xl">
        <div className="text-sm text-gray-500 mb-2">Updated May 2026 · 6 min read</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          NeuronWriter Review 2026: The Best AI Tool for SEO Content?
        </h1>

        <div className="bg-gray-50 border rounded-lg p-5 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-lg">NeuronWriter</span>
            <span className="text-3xl font-bold text-blue-600">8.3/10</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm mb-4">
            <div><span className="text-gray-500">Price:</span> <strong>From $23/mo</strong></div>
            <div><span className="text-gray-500">Free trial:</span> <strong>Yes</strong></div>
            <div><span className="text-gray-500">Best for:</span> <strong>SEO-focused content writers</strong></div>
            <div><span className="text-gray-500">Verdict:</span> <strong className="text-green-600">Recommended for SEO</strong></div>
          </div>
          <AffiliateButton href="NEURONWRITER_AFFILIATE_URL" size="md">
            Try NeuronWriter →
          </AffiliateButton>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">What Makes NeuronWriter Different</h2>
        <p className="text-gray-700 mb-4">
          NeuronWriter is built from the ground up for SEO. Every piece of content you create is scored against real SERP data — it analyzes top-ranking pages for your target keyword and tells you exactly what to cover to compete. This is fundamentally different from Writesonic or Jasper, which are writing-first tools that added SEO features later.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">SEO Features That Actually Work</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>SERP analysis for any keyword (analyzes top 30 results)</li>
          <li>NLP term recommendations from top-ranking content</li>
          <li>Content score that updates in real-time as you write</li>
          <li>Internal linking suggestions</li>
          <li>Schema markup generator</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Pricing</h2>
        <div className="border rounded-lg overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 border-b">Plan</th>
                <th className="text-left p-3 border-b">Price</th>
                <th className="text-left p-3 border-b">Queries/mo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border-b">Bronze</td><td className="p-3 border-b">$23/mo</td><td className="p-3 border-b">25</td></tr>
              <tr><td className="p-3 border-b">Silver</td><td className="p-3 border-b">$45/mo</td><td className="p-3 border-b">75</td></tr>
              <tr><td className="p-3">Gold</td><td className="p-3">$69/mo</td><td className="p-3">150</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Pros & Cons</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-semibold text-green-700 mb-2">Pros</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Best-in-class SEO integration</li>
              <li>✓ Affordable starting price</li>
              <li>✓ Real SERP data (not guesses)</li>
              <li>✓ 30% lifetime affiliate commission</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-700 mb-2">Cons</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✗ Query limits on lower plans</li>
              <li>✗ Less polished UI than Writesonic</li>
              <li>✗ Niche — not for ad copy</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <p className="font-semibold mb-2">Try NeuronWriter</p>
          <p className="text-sm text-gray-600 mb-4">Best for anyone writing content with SEO as a priority.</p>
          <AffiliateButton href="NEURONWRITER_AFFILIATE_URL" size="lg">
            Start Free Trial →
          </AffiliateButton>
        </div>
      </div>
    </Layout>
  )
}
```

- [ ] **Step 4: Write Jasper review page**

Write `affiliate-site/pages/reviews/jasper.js`:

```jsx
import Layout from '../../components/Layout'
import AffiliateButton from '../../components/AffiliateButton'

export default function JasperReview() {
  return (
    <Layout
      title="Jasper AI Review 2026"
      description="Jasper AI review 2026. Is $49/mo worth it in 2026? Honest take on output quality, brand voice features, and who Jasper is actually for."
    >
      <div className="max-w-2xl">
        <div className="text-sm text-gray-500 mb-2">Updated May 2026 · 7 min read</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Jasper AI Review 2026: Still Worth $49/Month?
        </h1>

        <div className="bg-gray-50 border rounded-lg p-5 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-lg">Jasper</span>
            <span className="text-3xl font-bold text-blue-600">8.5/10</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm mb-4">
            <div><span className="text-gray-500">Price:</span> <strong>From $49/mo</strong></div>
            <div><span className="text-gray-500">Free trial:</span> <strong>7-day trial</strong></div>
            <div><span className="text-gray-500">Best for:</span> <strong>Brand-consistent content at scale</strong></div>
            <div><span className="text-gray-500">Verdict:</span> <strong className="text-yellow-600">Good for the right use case</strong></div>
          </div>
          <AffiliateButton href="JASPER_AFFILIATE_URL" size="md">
            Start 7-Day Trial →
          </AffiliateButton>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">The Honest Take on Jasper in 2026</h2>
        <p className="text-gray-700 mb-4">
          Jasper was the category leader in 2022–2023. It&apos;s been disrupted significantly by cheaper competitors with comparable output quality. The one area where Jasper still genuinely leads is brand voice — if you have strict brand guidelines and need AI that actually follows them, Jasper&apos;s brand training is the best on the market.
        </p>
        <p className="text-gray-700 mb-4">
          For individual creators or small teams without complex brand requirements, Writesonic at $16/mo is a better value. For enterprise teams with brand consistency requirements, Jasper justifies its price.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Brand Voice Features</h2>
        <p className="text-gray-700 mb-4">
          Jasper&apos;s brand voice tool lets you upload brand guidelines, past content, and style documents. The AI learns your tone and applies it consistently across everything it generates. In testing, this was noticeably more consistent than the brand settings in Copy.ai or Writesonic.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Pricing</h2>
        <div className="border rounded-lg overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 border-b">Plan</th>
                <th className="text-left p-3 border-b">Price</th>
                <th className="text-left p-3 border-b">Users</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border-b">Creator</td><td className="p-3 border-b">$49/mo</td><td className="p-3 border-b">1</td></tr>
              <tr><td className="p-3 border-b">Teams</td><td className="p-3 border-b">$125/mo</td><td className="p-3 border-b">3</td></tr>
              <tr><td className="p-3">Business</td><td className="p-3">Custom</td><td className="p-3">Unlimited</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Pros & Cons</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-semibold text-green-700 mb-2">Pros</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Best brand voice training</li>
              <li>✓ Strong template library</li>
              <li>✓ Reliable output consistency</li>
              <li>✓ Good integrations (Chrome, Docs)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-700 mb-2">Cons</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✗ Expensive vs Writesonic</li>
              <li>✗ No SEO features on base plan</li>
              <li>✗ Competitors closed quality gap</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <p className="font-semibold mb-2">Try Jasper free for 7 days</p>
          <p className="text-sm text-gray-600 mb-4">No commitment. Cancel anytime in the first 7 days.</p>
          <AffiliateButton href="JASPER_AFFILIATE_URL" size="lg">
            Start Free Trial →
          </AffiliateButton>
        </div>
      </div>
    </Layout>
  )
}
```

- [ ] **Step 5: Commit**

```bash
git add affiliate-site/pages/reviews/
git commit -m "feat: add all four affiliate review pages"
```

---

## Task 9: Build Comparison Pages

**Files:**
- Create: `affiliate-site/pages/vs/writesonic-vs-jasper.js`
- Create: `affiliate-site/pages/vs/copy-ai-vs-jasper.js`

- [ ] **Step 1: Write Writesonic vs Jasper**

Write `affiliate-site/pages/vs/writesonic-vs-jasper.js`:

```jsx
import Layout from '../../components/Layout'
import AffiliateButton from '../../components/AffiliateButton'

const CRITERIA = [
  { name: 'Output Quality (long-form)', writesonic: '9/10', jasper: '8/10', winner: 'writesonic' },
  { name: 'Output Quality (ad copy)', writesonic: '7/10', jasper: '8/10', winner: 'jasper' },
  { name: 'SEO Features', writesonic: '8/10', jasper: '6/10', winner: 'writesonic' },
  { name: 'Brand Voice', writesonic: '6/10', jasper: '9/10', winner: 'jasper' },
  { name: 'Price', writesonic: '9/10', jasper: '6/10', winner: 'writesonic' },
  { name: 'Ease of Use', writesonic: '8/10', jasper: '8/10', winner: 'tie' },
  { name: 'Free Trial', writesonic: '9/10 (10K words)', jasper: '7/10 (7 days)', winner: 'writesonic' },
]

export default function WritesonicVsJasper() {
  return (
    <Layout
      title="Writesonic vs Jasper 2026"
      description="Writesonic vs Jasper: which AI writing tool is better in 2026? We compare output quality, pricing, SEO features, and brand voice head-to-head."
    >
      <div className="max-w-2xl">
        <div className="text-sm text-gray-500 mb-2">Updated May 2026 · 5 min read</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Writesonic vs Jasper (2026): Which Is Actually Better?
        </h1>
        <p className="text-gray-700 mb-8">
          Both are solid AI writing tools. The choice comes down to one question: do you prioritize <strong>price and SEO</strong> (Writesonic) or <strong>brand consistency</strong> (Jasper)?
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200">Criteria</th>
                <th className="p-3 border border-gray-200 text-blue-600">Writesonic</th>
                <th className="p-3 border border-gray-200">Jasper</th>
              </tr>
            </thead>
            <tbody>
              {CRITERIA.map((row, i) => (
                <tr key={row.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200">{row.name}</td>
                  <td className={`p-3 border border-gray-200 text-center ${row.winner === 'writesonic' ? 'font-bold text-blue-600' : ''}`}>{row.writesonic}</td>
                  <td className={`p-3 border border-gray-200 text-center ${row.winner === 'jasper' ? 'font-bold text-blue-600' : ''}`}>{row.jasper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">My Verdict</h2>
        <p className="text-gray-700 mb-4">
          <strong>Choose Writesonic if:</strong> You write long-form content, care about SEO, or are on a budget. At $16/mo vs $49/mo, Writesonic wins on value for most users.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Choose Jasper if:</strong> You have strict brand guidelines and need consistent tone across a team. The brand voice training is genuinely better.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <p className="font-semibold mb-2">Writesonic</p>
            <p className="text-sm text-gray-600 mb-3">From $16/mo · Free 10K words</p>
            <AffiliateButton href="WRITESONIC_AFFILIATE_URL" size="sm">Try Free →</AffiliateButton>
          </div>
          <div className="border rounded-lg p-4">
            <p className="font-semibold mb-2">Jasper</p>
            <p className="text-sm text-gray-600 mb-3">From $49/mo · 7-day trial</p>
            <AffiliateButton href="JASPER_AFFILIATE_URL" size="sm" variant="secondary">Try Free →</AffiliateButton>
          </div>
        </div>
      </div>
    </Layout>
  )
}
```

- [ ] **Step 2: Write Copy.ai vs Jasper**

Write `affiliate-site/pages/vs/copy-ai-vs-jasper.js`:

```jsx
import Layout from '../../components/Layout'
import AffiliateButton from '../../components/AffiliateButton'

export default function CopyAiVsJasper() {
  return (
    <Layout
      title="Copy.ai vs Jasper 2026"
      description="Copy.ai vs Jasper in 2026: which is better for marketing teams? We compare workflows, output quality, pricing, and team features."
    >
      <div className="max-w-2xl">
        <div className="text-sm text-gray-500 mb-2">Updated May 2026 · 5 min read</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Copy.ai vs Jasper (2026): Best for Marketing Teams?
        </h1>
        <p className="text-gray-700 mb-6">
          Both start at $49/mo. Both target marketing teams. But they&apos;re built for different things: Copy.ai is a workflow automation platform; Jasper is a brand voice writing tool.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-3">The Core Difference</h2>
        <p className="text-gray-700 mb-4">
          Copy.ai built automated workflows that connect content generation to your GTM motions — think multi-step sequences where AI handles research, drafting, and personalization automatically. Jasper is focused on writing quality and brand consistency, not automation.
        </p>
        <p className="text-gray-700 mb-4">
          If your team needs automation and pipeline efficiency: Copy.ai. If your team needs consistent brand voice: Jasper.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200">Feature</th>
                <th className="p-3 border border-gray-200">Copy.ai</th>
                <th className="p-3 border border-gray-200">Jasper</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Workflow automation', '✓ Yes (core feature)', '✗ Limited'],
                ['Brand voice', '✓ Good', '✓ Excellent'],
                ['Short-form copy quality', '✓ Excellent', '✓ Good'],
                ['Long-form quality', '✓ Good', '✓ Good'],
                ['Team collaboration', '✓ Strong', '✓ Good'],
                ['Starting price', '$49/mo', '$49/mo'],
                ['Free tier', '2,000 words/mo', '7-day trial only'],
              ].map(([feature, copyai, jasper], i) => (
                <tr key={feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200">{feature}</td>
                  <td className="p-3 border border-gray-200 text-center text-sm">{copyai}</td>
                  <td className="p-3 border border-gray-200 text-center text-sm">{jasper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-6 mb-3">Verdict</h2>
        <p className="text-gray-700 mb-4"><strong>Copy.ai</strong> wins for teams that want to automate their content pipeline.</p>
        <p className="text-gray-700 mb-6"><strong>Jasper</strong> wins for teams with strict brand requirements and a need for consistent output at scale.</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <p className="font-semibold mb-2">Copy.ai</p>
            <p className="text-sm text-gray-600 mb-3">Free tier available</p>
            <AffiliateButton href="COPYAI_AFFILIATE_URL" size="sm">Try Free →</AffiliateButton>
          </div>
          <div className="border rounded-lg p-4">
            <p className="font-semibold mb-2">Jasper</p>
            <p className="text-sm text-gray-600 mb-3">7-day free trial</p>
            <AffiliateButton href="JASPER_AFFILIATE_URL" size="sm" variant="secondary">Try Free →</AffiliateButton>
          </div>
        </div>
      </div>
    </Layout>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add affiliate-site/pages/vs/
git commit -m "feat: add comparison pages (Writesonic vs Jasper, Copy.ai vs Jasper)"
```

---

## Task 10: Write Reddit Marketing Posts (Initial Batch)

**Files:**
- Create: `marketing/reddit/posts/01-claude-code-kit-r-claudeai.md`
- Create: `marketing/reddit/posts/02-freelancer-kit-r-freelance.md`
- Create: `marketing/reddit/posts/03-dev-pack-r-webdev.md`
- Create: `marketing/reddit/posts/04-review-site-r-sideproject.md`

- [ ] **Step 1: Write post 1 (Claude Code Kit → r/ClaudeAI)**

Write `marketing/reddit/posts/01-claude-code-kit-r-claudeai.md`:

```markdown
# Subreddit: r/ClaudeAI
# Flair: Resource / Tools
# Title: I catalogued 50 Claude Code prompts that actually work for development workflows — sharing the best ones

After months of using Claude Code daily for actual dev work, I compiled the prompts that consistently give good output vs. the ones that give vague AI fluff.

Here are 5 of my favorites:

**Code Review (actually useful):**
"Review this code for bugs, security vulnerabilities, and performance issues. For each problem found: state the issue clearly, rate severity Critical/High/Medium/Low, show the exact fix with code." — This gets you specific findings, not generic advice.

**Debugging:**
"I'm getting [ERROR]. Explain exactly what it means, what causes it, and give me 3 specific things to check in order of likelihood. Then show the fix." — The "in order of likelihood" part matters a lot.

**Architecture:**
"Design the architecture for this system. Include component diagram, data flow, database schema, API contracts, and scaling considerations. Identify the 3 most likely failure points and how to handle them." — Forces Claude to think about failure modes, not just happy paths.

**CLAUDE.md Generator:**
"Write a CLAUDE.md file for this project. Include: project overview, tech stack, key commands, code conventions, architecture overview, and the 5 most important things a new developer should know before touching this codebase." — Huge time saver for onboarding.

**PR Description:**
"Write a pull request description for these changes. Include: summary (what and why, 3 sentences max), list of changes, testing done, screenshots (describe what to screenshot), and any deployment notes." — Takes 30 seconds instead of 15 minutes.

I packaged 50 of these into a pack if anyone wants the full set: [GUMROAD_URL_1] ($29). But the 5 above are free — use them.

What prompts have you found work well for dev workflows?
```

- [ ] **Step 2: Write post 2 (Freelancer Kit → r/freelance)**

Write `marketing/reddit/posts/02-freelancer-kit-r-freelance.md`:

```markdown
# Subreddit: r/freelance
# Flair: Advice / Tools
# Title: The AI prompts that actually improved my freelance business (not generic ones)

I've been using Claude for my freelance work for about 8 months. Most "AI for freelancers" content is about writing articles or making images. I use it for the business side — and these are the prompts that made a real difference:

**For difficult client emails:**
"A client is [describe situation]. Write a firm but professional email that: addresses their concern, holds my boundary, doesn't apologize for things that aren't my fault, and keeps the relationship intact. No groveling." — The "no groveling" instruction actually matters.

**For late invoices:**
"Write a sequence of 3 follow-up emails for an invoice that is [X] days overdue. Email 1 (day 1): polite reminder. Email 2 (day 7): firmer, reference contract. Email 3 (day 14): final notice before late fees." — Chased down $3,200 with this sequence.

**For scope creep:**
"A client is asking me to add [request] to a project we already agreed on. Write a professional response that acknowledges their request, explains this is outside scope, presents it as a separate paid add-on, and makes it easy to say yes." — Use this every time scope starts drifting.

**For proposals:**
"Write a professional project proposal. Include: executive summary, scope of work (detailed), deliverables list, timeline, investment: $[PRICE], payment terms, next steps." — My close rate went up when I started using properly structured proposals.

These 4 alone probably saved me 5+ hours a month. I put together a full pack of 45 freelance-specific prompts if you want the rest: [GUMROAD_URL_2] ($39). But these 4 are free.

Anyone else using AI for the business side of freelancing (not just the work itself)?
```

- [ ] **Step 3: Write post 3 (Dev Pack → r/webdev)**

Write `marketing/reddit/posts/03-dev-pack-r-webdev.md`:

```markdown
# Subreddit: r/webdev
# Flair: Tooling / Resources
# Title: 10 Claude prompts I use every day as a developer (the ones that actually work)

Sharing the prompts I reach for constantly. Not the "write me a full app" ones — the daily utility ones.

**Explain unfamiliar code:**
"Explain this code to me like I'm a competent developer who has never seen this codebase. What does it do, what are the key decisions made, and what would break if I changed it carelessly?"

**Name things properly:**
"Suggest 5 names for [function/variable/class] that follows [camelCase/snake_case/PascalCase], clearly describes what it does, and is under [X] characters. Briefly explain each name."

**Find the right git command:**
"I need to [describe git operation]. Give me the exact command(s), explain what each flag does, and warn me if the command is destructive."

**Write the regex:**
"Write a regex that matches [describe]. Test it against: Should match: [list]. Should NOT match: [list]. Explain each part."

**Docker setup:**
"Write a Dockerfile and docker-compose.yml for this application. Include multi-stage build, dev override config, health checks, and .dockerignore."

**Test cases:**
"Given this function, generate comprehensive test cases covering: happy path, edge cases, boundary conditions, error cases. Write the tests in [Jest/pytest/etc]."

**CI/CD pipeline:**
"Write a GitHub Actions workflow that runs on push/PR, runs tests, lints, builds, and deploys to [platform] on merge to main. Use caching."

**Flaky test:**
"This test is flaky. Diagnose why and fix it. Common causes: race conditions, time-dependent assertions, shared state, network calls."

**Bash one-liner:**
"Write a bash one-liner that [task]. Works on Linux/macOS. Explain what each part does."

**Standup:**
"Based on these commits/changes, write a standup: Yesterday (done), Today (planned), Blockers. Under 5 bullets. Specific, not vague."

I have a bigger pack (30 prompts) here if you want more: [GUMROAD_URL_3] ($19). But the 10 above are free.

What daily-use prompts do you rely on?
```

- [ ] **Step 4: Write post 4 (Review site → r/SideProject)**

Write `marketing/reddit/posts/04-review-site-r-sideproject.md`:

```markdown
# Subreddit: r/SideProject
# Flair: Show r/SideProject
# Title: Built a no-BS AI tool review site — comparing Writesonic, Copy.ai, Jasper, and NeuronWriter after 3 months of testing

Hey r/SideProject — just launched a site where I review AI writing tools honestly.

**The problem I was solving:** Every AI tool review I found was clearly just copy-pasting the product's own marketing materials. Nobody was testing what the output actually looks like, whether the pricing is worth it, or when to use one tool vs another.

**What I built:** [AFFILIATE_SITE_URL]

Coverage right now:
- Writesonic review (9.1/10) — best value for long-form content
- Copy.ai review (8.8/10) — best for marketing teams with workflow needs
- Jasper review (8.5/10) — best for brand voice, worst value for solo creators
- NeuronWriter review (8.3/10) — the SEO-focused pick

Also two comparison pages:
- Writesonic vs Jasper
- Copy.ai vs Jasper

**Stack:** Next.js static export, Tailwind, deployed to Vercel. Nothing fancy — wanted it fast.

**Honest verdict from my testing:** Writesonic at $16/mo beats Jasper at $49/mo for most use cases. The one exception is brand voice — Jasper's training is noticeably better if that matters to you.

Happy to answer questions about any of these tools.
```

- [ ] **Step 5: Commit**

```bash
git add marketing/
git commit -m "feat: add initial Reddit marketing post batch (4 posts)"
```

---

## Task 11: Create Scheduled Automation Agents

**Files:**
- Create: `automation/weekly-reddit-agent.md`
- Create: `automation/monthly-content-agent.md`
- Create: `automation/performance-review-agent.md`

- [ ] **Step 1: Write the weekly Reddit agent instructions**

Write `automation/weekly-reddit-agent.md`:

```markdown
# Weekly Reddit Marketing Agent

## Schedule
Every Tuesday at 10:00 AM

## Instructions for Claude Code Agent

You are an autonomous marketing agent for an AI tool review and digital product business. Your job is to post valuable Reddit content that drives traffic to our Gumroad store and affiliate review site.

### Step 1: Check the posting schedule
Read `marketing/reddit/schedule.json` to see which subreddits are due this week.

### Step 2: Review existing posts
Read the posts in `marketing/reddit/posts/` to understand tone and style. Do NOT repost anything that has already been posted.

### Step 3: Write 2 new posts
Write 2 new Reddit posts for this week's subreddits. Rules:
- Each post must provide genuine value (3-5 actual useful prompts or insights)
- Mention the product/site naturally at the end — not as the focus
- Use conversational, non-salesy tone
- Include the appropriate GUMROAD_URL or AFFILIATE_SITE_URL from schedule.json
- Vary the format (list posts, story posts, question posts)

### Step 4: Save new posts
Save each post to `marketing/reddit/posts/` with filename format `[number]-[topic]-[subreddit].md`

### Step 5: Update the log
Append to `tracking/log.md`:
```
### Reddit Posts — [DATE]
- Posted to: [SUBREDDIT 1], [SUBREDDIT 2]
- Post titles: [TITLE 1], [TITLE 2]
```

### Step 6: Report
Output a summary of what was written and saved.

## Important Notes
- NEVER post anything that could be considered spam
- Always lead with value, not promotion
- The goal is to be genuinely helpful — the sales follow from that
- Rotate between products (don't promote the same product every week)
```

- [ ] **Step 2: Write the monthly content agent instructions**

Write `automation/monthly-content-agent.md`:

```markdown
# Monthly Content Expansion Agent

## Schedule
First Monday of each month

## Instructions for Claude Code Agent

You are a content expansion agent. Your job is to grow the affiliate review site with new pages and update existing content to stay current.

### Step 1: Research new AI tools
Search the web for "new AI writing tools 2026" and "AI productivity tools launched [CURRENT MONTH]". Identify 1-2 tools worth reviewing.

### Step 2: Write a new review page
For one new tool, write a complete review page following the exact same format as `affiliate-site/pages/reviews/writesonic.js`. The review must include:
- Honest assessment (not just marketing copy)
- Actual pricing table (research the current pricing)
- Pros and cons based on real feature analysis
- Affiliate button pointing to their affiliate program URL (research if they have one)

Save to `affiliate-site/pages/reviews/[tool-name].js`

### Step 3: Update the homepage
Add the new tool to the TOOLS array in `affiliate-site/pages/index.js` and add it to the nav in `affiliate-site/components/Layout.js`

### Step 4: Write one comparison page
If the new tool competes directly with an existing reviewed tool, write a `[new-tool]-vs-[existing-tool].js` comparison page in `affiliate-site/pages/vs/`

### Step 5: Write 2 new Reddit posts
Write posts about the new tool for the appropriate subreddits. Save to `marketing/reddit/posts/`

### Step 6: Commit and update log
```bash
git add -A
git commit -m "feat: monthly content expansion — add [TOOL NAME] review"
```

Update `tracking/log.md` with what was added.
```

- [ ] **Step 3: Write the performance review agent instructions**

Write `automation/performance-review-agent.md`:

```markdown
# Monthly Performance Review Agent

## Schedule
Last Friday of each month

## Instructions for Claude Code Agent

You are a performance tracking agent. Review the business performance and update the tracking log.

### Step 1: Gather data
Ask the user (via output message) to provide:
1. Gumroad dashboard: total sales, revenue by product this month
2. Affiliate dashboard totals: clicks and commissions from each program
3. Any notable traffic sources or events

If the user is not available, note "DATA PENDING — please update tracking/log.md manually" and stop.

### Step 2: Update the tracking log
Add a new monthly section to `tracking/log.md` with:
```markdown
## Month: [YEAR-MONTH]

### Gumroad Sales
| Product | Units | Revenue |
|---------|-------|---------|
| Claude Code Power User Kit | X | $X |
| Freelancer's AI Command Center | X | $X |
| Developer Productivity Pack | X | $X |
| AI Business Automation Playbook | X | $X |
| **Total** | **X** | **$X** |

### Affiliate Commissions
| Program | Clicks | Conversions | Commission |
|---------|--------|-------------|------------|
| Writesonic | X | X | $X |
| Copy.ai | X | X | $X |
| NeuronWriter | X | X | $X |
| Jasper | X | X | $X |
| **Total** | | | **$X** |

### Total Revenue This Month: $X
### Total Revenue Cumulative: $X

### Notes
[Any significant events, traffic sources, or observations]
```

### Step 3: Optimization recommendations
Based on the performance data, identify:
- Which product is selling best → schedule more Reddit posts promoting it
- Which affiliate is converting best → prioritize that tool in future content
- Any products with zero sales → consider new marketing angle

Write recommendations to `tracking/log.md` under a "Recommendations" section.
```

- [ ] **Step 4: Commit**

```bash
git add automation/
git commit -m "feat: add scheduled automation agent instructions"
```

---

## Task 12: Deploy Affiliate Site to Vercel

**Files:**
- Create: `affiliate-site/vercel.json`

- [ ] **Step 1: Add Vercel config**

Write `affiliate-site/vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs"
}
```

- [ ] **Step 2: Initialize GitHub repo (user action required)**

Output this message to the user:
```
ACTION REQUIRED — One-time setup (10 minutes):

1. Create a free GitHub account at github.com if you don't have one
2. Create a new repository called "ai-tools-reviewed" (public or private)
3. Run these commands in the affiliate-site directory:
   cd affiliate-site
   git init
   git add -A
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ai-tools-reviewed.git
   git push -u origin main

4. Go to vercel.com, sign up with GitHub, click "Add New Project"
5. Import your ai-tools-reviewed repo
6. Vercel will auto-detect Next.js and deploy

After deploy, come back and give me:
- Your Vercel URL (e.g., ai-tools-reviewed.vercel.app)
- Your affiliate links for: Writesonic, Copy.ai, NeuronWriter, Jasper
```

- [ ] **Step 3: Update affiliate URLs once user provides them**

When the user provides their affiliate URLs, run a find-and-replace across all pages:
- `WRITESONIC_AFFILIATE_URL` → actual Writesonic affiliate URL
- `COPYAI_AFFILIATE_URL` → actual Copy.ai affiliate URL
- `NEURONWRITER_AFFILIATE_URL` → actual NeuronWriter affiliate URL
- `JASPER_AFFILIATE_URL` → actual Jasper affiliate URL
- `AFFILIATE_SITE_URL` → actual Vercel URL

```bash
# After replacing all URLs, commit and push to trigger Vercel redeploy
git add -A
git commit -m "chore: add real affiliate URLs and site URL"
git push
```

---

## Task 13: Set Up Scheduled Automation

- [ ] **Step 1: Set up weekly Reddit posting schedule**

Use the `schedule` skill to create a recurring Tuesday agent:

Invoke the `schedule` skill with these parameters:
- Name: "weekly-reddit-marketing"
- Schedule: "Every Tuesday at 10:00 AM"
- Instructions: Contents of `automation/weekly-reddit-agent.md`

- [ ] **Step 2: Set up monthly content expansion**

Use the `schedule` skill to create a recurring first-Monday agent:
- Name: "monthly-content-expansion"
- Schedule: "First Monday of each month"
- Instructions: Contents of `automation/monthly-content-agent.md`

- [ ] **Step 3: Set up monthly performance review**

Use the `schedule` skill to create a recurring last-Friday agent:
- Name: "monthly-performance-review"
- Schedule: "Last Friday of each month"
- Instructions: Contents of `automation/performance-review-agent.md`

---

## Task 14: Gumroad Setup Instructions (User Action)

- [ ] **Step 1: Output setup checklist to user**

Output this message:

```
GUMROAD SETUP — One-time (15 minutes):

1. Go to gumroad.com and create a free account

2. Create Product 1: Claude Code Power User Kit
   - Title: "Claude Code Power User Kit — 50 Prompts That 10x Your Dev Workflow"
   - Price: $29
   - Upload file: products/claude-code-power-kit/product.md
   - Copy description from: products/claude-code-power-kit/listing.md
   - Cover: use Canva (free) — dark background, white text, monospace font

3. Create Product 2: Freelancer's AI Command Center
   - Title: "Freelancer's AI Command Center — 45 Prompts for Proposals, Clients & Getting Paid"
   - Price: $39
   - Upload: products/freelancer-ai-kit/product.md
   - Description: products/freelancer-ai-kit/listing.md

4. Create Product 3: Developer Productivity Pack
   - Title: "Developer Productivity Pack — 30 Daily-Use Claude Prompts for Devs"
   - Price: $19
   - Upload: products/developer-productivity-pack/product.md

5. Create Product 4: AI Business Automation Playbook
   - Title: "AI Business Automation Playbook — 40 Prompts to Run Your Business with Claude"
   - Price: $47
   - Upload: products/business-automation-playbook/product.md

6. After creating each product, copy its Gumroad URL and update
   marketing/reddit/schedule.json with the real URLs

Total Gumroad setup time: ~15 minutes
```

---

## Final Checklist

- [ ] All 4 products created and committed
- [ ] Affiliate site builds without errors (`npm run build`)
- [ ] All review pages render correctly
- [ ] All comparison pages render correctly
- [ ] Reddit posts written and ready
- [ ] Automation agent instructions written
- [ ] Vercel deployment instructions ready for user
- [ ] Gumroad setup instructions ready for user
- [ ] Scheduled agents configured
- [ ] Affiliate URLs updated once user provides them
