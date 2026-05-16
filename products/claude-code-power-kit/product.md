# Claude Code Power User Kit
### 50 Battle-Tested Prompts for Developers Using Claude Code

---

## How to Use This Pack
Copy any prompt, paste into Claude Code, replace [BRACKETED] text with your specifics. Every prompt is tested and optimized for Claude's response patterns.

---

## Section 1: Code Review & Quality

### PR-01: Deep Code Review

```
Review the following [LANGUAGE] code with the rigor of a senior engineer doing a pre-merge review. Analyze it across three dimensions:

1. BUGS — List any logic errors, edge cases, or incorrect assumptions. Rate each as Critical / High / Medium / Low. Include the exact line number and a corrected version.

2. SECURITY — Identify any vulnerabilities (injection, unvalidated input, insecure defaults, exposed secrets, improper error handling). Rate severity and provide exact remediation code.

3. PERFORMANCE — Flag any O(n²) or worse complexity, unnecessary allocations, blocking calls, or repeated computations. Show the before/after with estimated improvement.

Format your output as:

## Bugs
| Line | Severity | Issue | Fix |
|------|----------|-------|-----|

## Security Issues
| Line | Severity | Vulnerability | Remediation |
|------|----------|---------------|-------------|

## Performance Issues
| Line | Impact | Issue | Optimized Version |
|------|--------|-------|-------------------|

## Summary
[One paragraph with overall assessment and top 3 priorities to fix first]

Here is the code:

[PASTE CODE HERE]
```

---

### PR-02: Security Audit

```
Perform a security audit of the following [LANGUAGE] code using the OWASP Top 10 (2021) as your framework. For each vulnerability found:

- Map it to the relevant OWASP category (e.g., A03:2021 — Injection)
- Reference the closest CVE if one exists (or note "no direct CVE")
- Show the vulnerable code snippet
- Provide a complete, drop-in remediation with explanation

OWASP categories to check:
- A01: Broken Access Control
- A02: Cryptographic Failures
- A03: Injection (SQL, NoSQL, OS, LDAP, XPath)
- A04: Insecure Design
- A05: Security Misconfiguration
- A06: Vulnerable and Outdated Components
- A07: Identification and Authentication Failures
- A08: Software and Data Integrity Failures
- A09: Security Logging and Monitoring Failures
- A10: Server-Side Request Forgery (SSRF)

After the vulnerability list, provide a SECURITY SCORE from 0-100 and a prioritized remediation roadmap.

Code to audit:

[PASTE CODE HERE]

Context about this system: [DESCRIBE WHAT THIS CODE DOES AND HOW IT'S DEPLOYED]
```

---

### PR-03: Performance Profiling

```
Profile the following [LANGUAGE] code for performance issues. I need you to act as a performance engineer and identify every inefficiency.

Analyze for:

1. ALGORITHMIC COMPLEXITY — Identify any O(n²), O(n³), or exponential operations. Show the exact loop or recursive call causing it. Provide an optimized alternative with its new complexity.

2. MEMORY LEAKS — Find any objects/resources allocated but not released. Check for: unclosed file handles, event listeners not removed, circular references, large objects held in scope longer than needed.

3. BLOCKING OPERATIONS — Flag any synchronous I/O, database calls on the main thread, or long-running computations that should be async. Provide the async/non-blocking alternative.

4. UNNECESSARY RECOMPUTATION — Find values computed multiple times inside loops or called functions. Show how to cache or memoize them.

5. DATABASE/NETWORK INEFFICIENCY — Identify N+1 query patterns, missing indexes being queried, over-fetching, or sequential requests that could be parallelized.

For each issue provide: Location → Problem → Impact → Fix (with code).

Code:

[PASTE CODE HERE]

Environment context: [e.g., "Node.js 20, PostgreSQL, handling 10k req/min"]
```

---

### PR-04: Code Smell Detection

```
Analyze the following [LANGUAGE] code for code smells using Martin Fowler's catalog. I need specific, actionable findings — not generic advice.

Check for these smells:

BLOATERS (things grown too large):
- Long methods (>20 lines)
- Large classes (>200 lines or >10 methods)
- Long parameter lists (>4 parameters)
- Data clumps (same group of variables appearing together repeatedly)

OBJECT-ORIENTATION ABUSERS:
- Switch statements that should be polymorphism
- Temporary fields
- Refused bequest (subclass ignores parent behavior)
- Feature envy (method uses another class's data more than its own)

CHANGE PREVENTERS:
- Divergent change (one class changed for multiple reasons)
- Shotgun surgery (one change requires edits in many classes)
- Parallel inheritance hierarchies

DISPENSABLES:
- Duplicate code (exact or near-duplicate logic)
- Dead code (unreachable or unused)
- Speculative generality (code written for futures that never came)
- Data classes (classes that only hold data with getters/setters)

For each smell found, provide: File/Line → Smell Name → Why It's a Problem → Refactoring Recipe (with code example).

Code:

[PASTE CODE HERE]
```

---

### PR-05: Test Coverage Analysis

```
Analyze the following [LANGUAGE] code and write a complete test suite that achieves meaningful 100% coverage. Do not write trivial tests — every test must assert meaningful behavior.

For each function/method, identify:
1. The happy path
2. Edge cases (empty input, null, zero, max values, boundary conditions)
3. Error paths (what exceptions can be thrown and when)
4. Integration points that need mocking

Then write the actual tests using [TEST FRAMEWORK, e.g., Jest / pytest / JUnit / RSpec].

Requirements:
- Group tests by function using describe blocks
- Use descriptive test names that explain the SCENARIO, not just "test add()"
- Mock all external dependencies (DB, API calls, file system)
- Include at least one parameterized/data-driven test where applicable
- Add a coverage matrix at the top showing: function name → test count → cases covered

Source code:

[PASTE CODE HERE]

Testing framework and any existing test setup: [DESCRIBE YOUR TEST SETUP]
```

---

## Section 2: Documentation

### DOC-01: README Generator

```
Generate a complete, professional README.md for my project. Use the following information to populate every section:

Project name: [PROJECT NAME]
What it does (one sentence): [DESCRIPTION]
Tech stack: [LANGUAGES/FRAMEWORKS]
Target user: [WHO USES THIS]

Write the README with these sections:

# [Project Name]
> [Tagline — one punchy sentence]

## What It Does
[2-3 sentences explaining the problem it solves and how]

## Demo
[Placeholder for screenshot/gif with alt text]

## Quick Start
[Step-by-step setup: prerequisites, installation, configuration, first run]

## Usage
[Common use cases with actual command examples or code snippets]

## Configuration
[Table of all environment variables and config options with defaults]

## API Reference (if applicable)
[Endpoint table with method, path, params, response]

## Architecture
[Brief explanation of how the system is structured]

## Contributing
[How to set up dev environment, coding standards, PR process]

## License
[License name and brief statement]

Make the Quick Start section copy-pasteable — every command should work verbatim for a new user on [OS: Mac/Linux/Windows].
```

---

### DOC-02: Inline Comment Writer

```
Add inline comments to the following [LANGUAGE] code. Follow this strict rule: comment only the WHY, never the WHAT.

Bad comment (explains what, which is obvious from the code):
```python
# Increment counter by 1
counter += 1
```

Good comment (explains why, which is not obvious):
```python
# Counter must start at 1 not 0 — the upstream API uses 1-based pagination
counter += 1
```

For each comment you add:
- Place it on the line ABOVE the code it explains
- Keep it to one line maximum (unless truly complex — then use a block comment)
- Focus on: non-obvious business rules, workarounds for known bugs, performance trade-offs, security-critical decisions, historical context ("this was added because X broke in version Y")

Do NOT add comments to:
- Self-explanatory variable assignments
- Simple loop increments
- Straightforward return statements
- Standard library calls used in their obvious way

Return the fully commented code. For any section where you have questions about the "why," mark it with: `# TODO: CLARIFY — [your question]`

Code:

[PASTE CODE HERE]
```

---

### DOC-03: API Documentation

```
Generate complete API documentation in OpenAPI 3.0 (YAML format) for the following [LANGUAGE] API code.

For each endpoint, document:
- HTTP method and path
- Summary and description (include what the endpoint does and any side effects)
- Path parameters with types and constraints
- Query parameters with types, defaults, and valid values
- Request body schema with required/optional fields, types, formats, and example values
- All possible response codes (200, 201, 400, 401, 403, 404, 422, 500) with response schemas
- Authentication requirements
- Rate limiting if applicable

Also generate:
- `components/schemas` for all request/response objects
- `components/securitySchemes` for [AUTH TYPE, e.g., Bearer JWT / API Key]
- One realistic example request + response for each endpoint

After the YAML, provide a plain-English summary table:
| Method | Path | Auth Required | Description | Key Notes |

API code:

[PASTE CODE HERE]

Base URL: [YOUR API BASE URL]
Auth method: [JWT / API Key / OAuth / None]
```

---

### DOC-04: Architecture Decision Record

```
Write a formal Architecture Decision Record (ADR) for the following technical decision. Use the MADR (Markdown Architectural Decision Records) format.

Decision to document: [DESCRIBE THE DECISION, e.g., "Use PostgreSQL instead of MongoDB for our user data store"]

Context I can provide:
- Problem being solved: [DESCRIBE THE PROBLEM]
- Options we considered: [LIST OPTIONS]
- Constraints: [TEAM SIZE, BUDGET, TIMELINE, EXISTING STACK]
- Decision maker(s): [NAMES/ROLES]

Generate the full ADR with:

# ADR-[NUMBER]: [Short Title]

## Status
[Proposed / Accepted / Deprecated / Superseded]

## Context
[2-3 paragraphs explaining the situation, forces at play, and why a decision was needed]

## Decision Drivers
[Bulleted list of the key criteria that mattered]

## Considered Options
[For each option: name, brief description, pros, cons]

## Decision Outcome
[Chosen option and rationale — make this the most detailed section]

## Consequences
[Positive consequences | Negative consequences | Risks to monitor]

## Links
[Related ADRs, tickets, design docs]

Date: [TODAY'S DATE]
```

---

### DOC-05: Changelog Entry

```
Write a changelog entry for the following release using the "Keep a Changelog" format (keepachangelog.com). 

Release information:
- Version: [VERSION NUMBER, e.g., 2.4.0]
- Release date: [DATE]
- Git commits or changes to document: [PASTE GIT LOG OR DESCRIBE CHANGES]

Generate the entry with these sections (only include sections that have content):

## [VERSION] - YYYY-MM-DD

### Added
[New features — one bullet per item, written from the USER's perspective, not the developer's]

### Changed
[Changes to existing functionality — include what it was before and what it is now]

### Deprecated
[Features that will be removed in a future release — include migration path]

### Removed
[Features removed in this release — include what to use instead]

### Fixed
[Bug fixes — describe the bug that was fixed, not just "fixed bug in X"]

### Security
[Security patches — describe the vulnerability class and severity, do NOT disclose exploit details]

Rules:
- Write every entry in past tense
- Lead with the user-facing impact, not the technical change
- Link to issues/PRs in [#123] format where possible
- Group related changes together within each section
```

---

## Section 3: Debugging

### DBG-01: Error Explainer

```
I'm getting the following error in my [LANGUAGE] application. Help me understand and fix it systematically.

Error message:
```
[PASTE FULL ERROR MESSAGE AND STACK TRACE HERE]
```

Context:
- What I was doing when this happened: [DESCRIBE THE ACTION]
- Environment: [OS, runtime version, relevant dependencies]
- How often it occurs: [Always / Sometimes / Intermittently under X condition]

Please provide:

## Plain English Explanation
[Explain what this error actually means, without jargon. Pretend I'm a competent developer who hasn't seen this specific error before.]

## Root Cause Analysis
[What is actually causing this error to be thrown? Trace it back to the origin.]

## 3 Things to Check (In Order)
1. [Most likely cause + exactly how to verify it + how to fix it if confirmed]
2. [Second most likely cause + exactly how to verify it + how to fix it if confirmed]
3. [Third possibility + exactly how to verify it + how to fix it if confirmed]

## Quick Fix
[If there's a one-liner or minimal change that resolves the most common cause, show it here]

## Prevention
[How to write code that prevents this class of error in the future]
```

---

### DBG-02: Root Cause Analysis

```
Walk me through a systematic root cause analysis of the following bug using the 5 Whys method. Do not stop at the surface-level symptom.

Bug description: [DESCRIBE WHAT'S HAPPENING vs WHAT SHOULD HAPPEN]
Impact: [WHO IS AFFECTED AND HOW BADLY]

Relevant code or logs:

[PASTE CODE/LOGS HERE]

Structure your analysis as:

## Symptom
[What the user experiences]

## The 5 Whys
**Why 1:** [Surface observation] → Because: [First cause]
**Why 2:** [First cause] → Because: [Deeper cause]
**Why 3:** [Deeper cause] → Because: [Even deeper]
**Why 4:** [Even deeper] → Because: [Near root]
**Why 5:** [Near root] → Because: [Root cause]

## Root Cause Statement
[One clear sentence: "The root cause is [X], which occurred because [Y], resulting in [Z]"]

## Fix at the Root
[Code change that addresses the root cause, not just the symptom]

## Fix at the Symptom (if root fix takes time)
[Temporary workaround to stop the bleeding while root fix is deployed]

## Process Improvement
[What change to our development/testing/deployment process would have caught this earlier]
```

---

### DBG-03: Rubber Duck Walkthrough

```
Act as my rubber duck debugging partner. I'm going to share code that isn't behaving as expected. Your job is to walk through it with me line-by-line, tracking state explicitly as a computer would execute it.

Expected behavior: [WHAT SHOULD HAPPEN]
Actual behavior: [WHAT IS HAPPENING]
Input that triggers the bug: [EXACT INPUT VALUES]

Code:

[PASTE CODE HERE]

For each meaningful line of execution:
1. State the line
2. Show the VALUE of every variable after that line executes (use a table if there are many variables)
3. Flag any line where the state diverges from what you'd expect
4. When you find the divergence, explain WHY the code is doing what it's doing (not what I want it to do)

Format:
| Line # | Code | Variable State After | Notes |
|--------|------|---------------------|-------|

End with:
## The Bug
[Exact line and exact reason]

## The Fix
[Corrected code with explanation]
```

---

### DBG-04: Race Condition Finder

```
Analyze the following concurrent [LANGUAGE] code for race conditions, deadlocks, and thread-safety issues. I need exhaustive analysis — this is [PRODUCTION/CRITICAL] code.

Code:

[PASTE CODE HERE]

Concurrency model: [e.g., threads / async-await / goroutines / actors / Node.js event loop]
Shared state: [DESCRIBE ANY SHARED DATA STRUCTURES, CACHES, OR GLOBAL STATE]

Analyze for:

## Race Conditions
[For each: describe the exact interleaving scenario that causes the bug, the window of vulnerability, and what data corruption or incorrect behavior results]

## Deadlock Scenarios
[For each: describe the lock acquisition order that creates the deadlock cycle, draw the dependency graph in ASCII, and provide the fix]

## Atomicity Violations
[Operations that appear atomic but aren't — check-then-act patterns, read-modify-write without proper synchronization]

## Memory Visibility Issues
[Variables read without barriers/fences that may see stale values across cores/threads]

## Recommended Fixes
[For each issue: the minimal, correct fix with code. Prefer lock-free approaches where possible.]

## Testing Recommendations
[How to write tests that reliably reproduce each race condition you found]
```

---

## Section 4: Refactoring

### REF-01: Legacy Code Modernizer

```
Modernize the following [LANGUAGE] code to current best practices. The absolute requirement: do not change any observable behavior. This is a refactor-only operation.

Legacy code:

[PASTE CODE HERE]

Current language/framework version: [e.g., "Python 2.7, written in 2015"]
Target version: [e.g., "Python 3.12"]
Constraints: [e.g., "Cannot change public API signatures", "Must remain backward compatible with X"]

Modernize in these areas (only apply what's relevant):

## Syntax Modernization
[Replace deprecated syntax, use modern language features: arrow functions, destructuring, async/await, type hints, pattern matching, etc.]

## Dependency Updates
[Identify any library calls using deprecated APIs. Show old API → new API with migration notes]

## Error Handling
[Replace bare except/catch-all with specific exception types, use context managers, add proper cleanup]

## Type Safety
[Add type annotations/generics where missing — infer from usage]

## Security Hardening
[Fix any patterns that were acceptable before but are now known to be insecure]

For each change:
- Mark it with a comment: `# MODERNIZED: [reason]`
- Explain why the old way was problematic
- Confirm the behavior is identical

Deliver the complete modernized code, then a diff summary.
```

---

### REF-02: Function Extractor

```
Refactor the following [LANGUAGE] code by extracting functions to enforce the Single Responsibility Principle. No function should do more than one thing.

Code to refactor:

[PASTE CODE HERE]

Rules for extraction:
1. Each extracted function must have ONE clear purpose, nameable in 3 words or fewer
2. Functions should be 5-15 lines — if you can't make it fit, extract again
3. No side effects in functions that are named as queries (getX, findX, calculateX)
4. Functions that mutate state should be clearly named as commands (updateX, processX, sendX)
5. Group related functions together and note if they should become a class/module

For each extraction:
- Show the extracted function with its new name
- Show where the original call site changes
- Explain in one sentence: "This function was extracted because [reason]"

Deliver:
1. The refactored code (complete, runnable)
2. A before/after function responsibility map showing what changed
3. Any functions you considered extracting but didn't, and why
```

---

### REF-03: Design Pattern Applier

```
Analyze the following [LANGUAGE] code and apply the most appropriate design pattern(s) to improve its structure.

Code:

[PASTE CODE HERE]

Problem I'm experiencing with this code: [e.g., "Adding new payment methods requires modifying 5 different files", "Every time requirements change I break unrelated features"]

Step 1 — DIAGNOSE
Identify what structural problem the code has (tight coupling, poor extensibility, duplicated conditionals, etc.)

Step 2 — PATTERN RECOMMENDATION
Recommend the best design pattern(s) from:
- Creational: Factory, Abstract Factory, Builder, Singleton, Prototype
- Structural: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy
- Behavioral: Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor

For each recommended pattern:
- Name and category
- Why it solves THIS specific problem (not a generic explanation)
- Trade-offs in this context

Step 3 — REFACTORED CODE
Show the complete refactored version with the pattern applied. Use comments to highlight the pattern structure (e.g., `# STRATEGY: ConcreteStrategy`).

Step 4 — MIGRATION PATH
How to incrementally refactor from the old code to the new structure without breaking anything.
```

---

## Section 5: Architecture & Planning

### ARCH-01: System Design

```
Design the architecture for the following system. Be specific and production-ready — I need something I can actually build from.

System to design: [DESCRIBE WHAT THE SYSTEM NEEDS TO DO]
Scale requirements: [e.g., "10k users day 1, potentially 1M in year 2"]
Team size: [e.g., "3 engineers"]
Budget constraints: [e.g., "Startup budget, prefer managed services over self-hosted"]
Tech stack preferences or constraints: [e.g., "Must use Python, open to any cloud"]

Provide:

## Components
[Diagram in ASCII or Mermaid showing all major components and how they connect]

## Component Descriptions
[For each component: what it does, technology choice, why that technology, alternatives considered]

## Data Flow
[Step-by-step walkthrough of the main user journey through the system]

## Database Schema
[Key tables/collections with fields, types, and relationships. Include indexes for the main query patterns.]

## API Design
[Core endpoints with method, path, request/response shapes]

## Failure Points & Mitigations
[What breaks if each component fails, and how to handle it (circuit breakers, retries, fallbacks, queues)]

## Scaling Path
[What to do when you hit 10x current load — what breaks first and how you fix it]

## Phase 1 MVP
[Minimal version that validates the core value — what can be cut for the first version]
```

---

### ARCH-02: Database Schema Designer

```
Design a production-ready database schema for the following use case.

Application description: [DESCRIBE YOUR APPLICATION]
Database: [PostgreSQL / MySQL / SQLite / MongoDB / etc.]
Key operations (most frequent to least): [LIST MAIN QUERIES AND WRITES]
Scale: [Approximate rows per table at launch and in 2 years]

Design the schema with:

## Tables / Collections
[For each: CREATE TABLE statement or collection structure with ALL fields, types, constraints, and comments explaining non-obvious fields]

## Relationships
[ERD in ASCII/Mermaid showing all foreign keys and relationship types (1:1, 1:many, many:many)]

## Indexes
[Every index you recommend beyond primary keys, with explanation: what query it serves, why that column order]

## Example Queries
[The top 5 queries the application will run, written in SQL/query language, with EXPLAIN plan notes]

## Migration Script
[SQL to create the full schema from scratch, ready to run]

## Design Decisions
[For each non-obvious choice: why this structure vs alternatives (e.g., "Chose JSONB for preferences instead of a separate table because [reason]")]

## Potential Scaling Issues
[At what data volumes will each table become problematic and what to do then (partitioning, archiving, denormalization)]
```

---

### ARCH-03: Tech Stack Evaluator

```
Help me choose the right technology for the following decision. I need a structured evaluation, not an opinion.

Decision: [e.g., "Choose a message queue for our event-driven microservices"]
Options to evaluate: [e.g., "RabbitMQ, Kafka, AWS SQS, Redis Streams"]

My requirements (rank these by importance 1=most important):
- [REQUIREMENT 1, e.g., "At-least-once delivery guarantee"] — Priority: [1-5]
- [REQUIREMENT 2, e.g., "Message replay capability"] — Priority: [1-5]
- [REQUIREMENT 3, e.g., "Operational simplicity (small team)"] — Priority: [1-5]
- [REQUIREMENT 4, e.g., "Cost under $500/month at 1M messages/day"] — Priority: [1-5]
- [REQUIREMENT 5] — Priority: [1-5]

Constraints: [e.g., "We're on AWS", "Team has no Kafka experience", "Must be open source"]

Provide:

## Evaluation Matrix
| Criterion | Weight | [Option 1] | [Option 2] | [Option 3] | [Option 4] |
|-----------|--------|------------|------------|------------|------------|
[Score each 1-5, multiply by weight, total at bottom]

## Option Deep-Dives
[For each option: strengths in context, weaknesses in context, realistic operational cost, learning curve, community/support]

## Recommendation
[Recommended choice with justification tied to YOUR specific requirements, not generic best practices]

## Decision Risks
[What could make this recommendation wrong — what assumptions are you making]

## Migration Path
[If you choose this now, what does switching look like in 2 years if requirements change]
```

---

### ARCH-04: Migration Planner

```
Plan a zero-downtime migration for the following scenario. I need a phased plan I can execute safely.

Migration: [DESCRIBE WHAT YOU'RE MIGRATING, e.g., "Moving user authentication from our monolith to a standalone auth service"]
Current state: [DESCRIBE CURRENT SYSTEM]
Target state: [DESCRIBE WHERE YOU WANT TO BE]
Constraints:
- Downtime budget: [e.g., "Zero — 24/7 service", "Max 5 minutes at 3am"]
- Team capacity: [e.g., "2 engineers, 6-week timeline"]
- Rollback requirement: [e.g., "Must be able to roll back within 10 minutes at any phase"]

Provide:

## Risk Assessment
[What can go wrong at each stage, probability, impact, mitigation]

## Migration Phases
[For each phase:]
### Phase N: [Name]
- What changes
- Duration estimate
- Validation criteria (how do you know it worked)
- Rollback procedure (step-by-step)
- Go/no-go checklist before proceeding to next phase

## Data Migration Strategy
[How data is moved: dual-write, backfill, cutover sequence]

## Feature Flag / Strangler Fig Pattern
[How to use flags or routing to gradually shift traffic]

## Monitoring During Migration
[Exact metrics to watch, alert thresholds, who is on-call]

## Communication Plan
[What to tell users, stakeholders, and other teams at each phase]

## Post-Migration Cleanup
[Old code/infrastructure to remove after confidence period]
```

---

## Section 6: Claude Code Specific

### CC-01: CLAUDE.md Generator

```
Generate a complete CLAUDE.md file for my project. This file will be read by Claude Code at the start of every session to understand my project.

Answer these questions to populate the file:

Project name: [NAME]
What this project does: [2-3 sentences]
Primary language(s): [LANGUAGES]
Framework(s): [FRAMEWORKS]
Package manager: [npm/pip/cargo/etc.]

Key commands (I'll provide, you format):
- Build: [YOUR BUILD COMMAND]
- Test: [YOUR TEST COMMAND]
- Lint: [YOUR LINT COMMAND]
- Dev server: [YOUR DEV COMMAND]
- Deploy: [YOUR DEPLOY COMMAND]

Architecture overview: [DESCRIBE YOUR FOLDER STRUCTURE AND KEY FILES]
Key files to know: [LIST IMPORTANT FILES AND WHAT THEY DO]
External services used: [APIs, databases, queues, etc.]
Environment variables needed: [LIST THEM]

Coding conventions:
- Style guide: [YOUR STYLE GUIDE OR "None defined"]
- Testing approach: [UNIT/INTEGRATION/E2E, framework used]
- Branch strategy: [GITFLOW/TRUNK/ETC]
- PR requirements: [WHAT A PR NEEDS TO HAVE]

Things Claude should NEVER do: [LIST ANY RESTRICTIONS]
Gotchas and known issues: [THINGS THAT BITE NEW DEVELOPERS]

Generate a CLAUDE.md that is comprehensive but scannable — use headers and bullets, keep it under 400 lines.
```

---

### CC-02: Slash Command Creator

```
Create a Claude Code slash command that automates the following repetitive task.

Task to automate: [DESCRIBE THE REPETITIVE TASK, e.g., "Every time I start work on a new feature, I need to: check the current git status, create a branch, set up a test file, and add a TODO comment to the main file"]

This command should:
1. [STEP 1]
2. [STEP 2]
3. [STEP 3]
[Continue as needed]

Command name I want: /[YOUR-COMMAND-NAME]
Should it accept arguments? [YES — describe what args / NO]

Generate:

## The Slash Command Definition
[The complete command definition for .claude/commands/[name].md in proper format]

## What It Does Step by Step
[Plain English walkthrough of each action the command takes]

## Example Usage
```
/[command-name] [example args]
```
Expected output: [what the user will see]

## Edge Cases Handled
[What happens if git is dirty, file doesn't exist, arg is missing, etc.]

## Setup Instructions
[Exactly where to put the file and any other setup needed]
```

---

### CC-03: Multi-Agent Task Planner

```
Design a multi-agent Claude Code execution plan for the following complex task. I need to know how to break this into parallel workstreams with clear handoffs.

Task: [DESCRIBE THE FULL TASK, e.g., "Build a REST API with authentication, a React frontend, database migrations, and comprehensive tests"]

Constraints:
- Agents can work in parallel on independent tasks
- Sequential tasks must be clearly identified with dependencies
- Each agent gets one focused responsibility

Generate:

## Dependency Graph
[ASCII diagram showing which tasks depend on which]

## Parallel Wave 1 (can all start immediately)
For each agent:
- Agent name: [DESCRIPTIVE NAME]
- Responsibility: [ONE SENTENCE]
- Inputs needed: [What it needs to start]
- Outputs produced: [What it hands off]
- Prompt to use: [Exact prompt to give this agent]

## Parallel Wave 2 (starts after Wave 1 completes)
[Same structure]

## Sequential Tasks (must run in order)
[Task → dependency → task structure]

## Integration Points
[Where Wave 1 outputs become Wave 2 inputs — exact file names, API contracts, shared types]

## Verification Step
[How to verify all agents' work integrates correctly]

## Estimated Total Time
[If running agents in parallel vs sequential]
```

---

### CC-04: Code Generation Prompt

```
I need to generate [DESCRIBE WHAT YOU WANT TO GENERATE, e.g., "a complete React component with TypeScript, tests, and Storybook story"].

Create a meta-prompt that I can use repeatedly to generate this type of code consistently. The meta-prompt should:

1. Establish the exact output format and file structure
2. Define quality standards that must always be met
3. Include the right [PLACEHOLDER] variables for things that change each time
4. Force Claude to be specific and not use generic patterns

My standards for this type of code:
- Language/framework: [YOUR STACK]
- Style requirements: [e.g., "functional components only, no class components"]
- Test requirements: [e.g., "always include unit tests with >80% coverage"]
- Documentation requirements: [e.g., "JSDoc on every exported function"]
- Error handling: [e.g., "always handle loading, error, and empty states"]
- Accessibility: [e.g., "WCAG 2.1 AA compliant"]

Generate the meta-prompt, then demonstrate it by using it once to generate a sample [EXAMPLE OF WHAT TO GENERATE].
```

---

## Section 7: Productivity

### PROD-01: Standup Generator

```
Generate my daily standup update from the following git commits. Format it for a team standup where I have 60 seconds to speak.

Git log:
```
[PASTE OUTPUT OF: git log --oneline --since="yesterday" --author="YOUR NAME"]
```

Jira/Linear tickets in progress: [LIST TICKET IDs AND TITLES, or "None"]
Blockers: [ANY BLOCKERS OR "None"]
Today's plan: [WHAT YOU'RE WORKING ON TODAY]

Generate the standup in this format:

## Yesterday
[3-5 bullet points, each one sentence. Convert git commit messages into plain English achievements. Group related commits. Lead with the most important work.]

## Today
[3-5 bullet points of planned work, specific enough that your team knows what done looks like]

## Blockers
[If none: "No blockers." If blockers: one sentence per blocker with: what's blocked, why, and what help you need]

Tone: Professional but conversational. No jargon. Avoid "worked on" — use specific verbs: shipped, fixed, reviewed, designed, debugged, deployed, documented.

Also generate a Slack-formatted version (one paragraph, no bullets) for the async standup channel.
```

---

### PROD-02: Technical Spec Writer

```
Write a technical specification for the following feature. This spec will be used by engineers to implement the feature and by QA to write test cases.

Feature name: [FEATURE NAME]
Problem it solves: [WHY ARE WE BUILDING THIS]
Requested by: [STAKEHOLDER/TEAM]
Priority: [P0-P3]
Target completion: [DATE OR SPRINT]

User story: As a [USER TYPE], I want to [ACTION] so that [BENEFIT].

Technical context:
- Affected systems: [LIST SERVICES/DATABASES/APIs]
- Related features: [LINKS TO RELATED SPECS]
- Constraints: [TECHNICAL OR BUSINESS CONSTRAINTS]

Generate the spec with:

## Overview
[2-paragraph summary: the problem and the proposed solution]

## Detailed Requirements
[Numbered list of functional requirements — each one testable]

## Non-Functional Requirements
[Performance, security, scalability, accessibility requirements with measurable thresholds]

## Technical Design
[Architecture decision, data model changes, API changes, component changes]

## Edge Cases & Error Handling
[What can go wrong and what the system should do in each case]

## Testing Requirements
[Unit tests needed, integration tests, edge cases QA must cover]

## Open Questions
[Decisions not yet made — who owns each decision and by when]

## Out of Scope
[What this spec explicitly does NOT cover]
```

---

### PROD-03: PR Description Writer

```
Write a structured pull request description for the following change.

Branch: [BRANCH NAME]
What changed: [DESCRIBE WHAT THE CODE DOES]
Why it changed: [MOTIVATION — bug, feature, refactor, etc.]

Relevant context:
- Ticket/Issue: [LINK OR ID]
- Related PRs: [IF ANY]

Git diff summary (or paste actual diff):
[PASTE GIT DIFF OR DESCRIBE THE CHANGES]

Testing done:
- [HOW YOU TESTED THIS]

Generate the PR description in this format:

## Summary
[2-3 sentences: what changed and why. Written for a reviewer who has 30 seconds to decide if this needs their attention today.]

## Changes
- [Bullet per logical change group — not per file, but per concept]

## Why This Approach
[If there were alternative approaches considered, explain why this one was chosen]

## Testing
- [ ] [Specific test case 1]
- [ ] [Specific test case 2]
- [ ] [Edge case tested]

## Screenshots (if UI change)
[Placeholder with before/after labels]

## Checklist
- [ ] Tests pass locally
- [ ] No new lint warnings
- [ ] Documentation updated if needed
- [ ] No breaking changes (or breaking changes documented above)

## Reviewer Notes
[Anything specific you want the reviewer to focus on or that needs explanation]
```

---

### PROD-04: Interview Prep

```
Help me prepare for a [TYPE] interview at [COMPANY/ROLE LEVEL, e.g., "senior backend engineer at a Series B startup"].

Focus area: [e.g., "System design" / "Coding" / "Behavioral" / "All three"]
My background: [BRIEF SUMMARY OF YOUR EXPERIENCE]
Weak areas: [WHAT YOU WANT EXTRA PRACTICE ON]

Generate a prep session:

## Likely Questions
[10 questions most likely to be asked for this role/level/type, ranked by probability]

## For Each Question:
### Q: [Question]
**What they're really testing:** [The underlying skill or signal they want to see]
**Strong answer structure:** [How to structure your response]
**Example strong answer:** [Full sample answer written for MY background]
**Common mistakes:** [What weak candidates do here]
**Follow-up questions:** [What they'll drill into if your answer is good]

## 30-Minute Rapid Prep Drill
[A focused set of the 5 highest-priority questions to practice out loud]

## Questions to Ask the Interviewer
[5 smart questions that demonstrate senior-level thinking and genuine curiosity]
```

---

### PROD-05: Learning Roadmap

```
Create a structured 12-week learning roadmap for the following topic. I learn by building things — I don't retain information from passive reading alone.

Topic to learn: [e.g., "Kubernetes and container orchestration"]
My current level: [Complete beginner / Know the basics / Intermediate]
Goal: [WHAT YOU WANT TO BE ABLE TO DO AFTER 12 WEEKS]
Time available: [e.g., "1 hour on weekdays, 3 hours on weekends"]
Learning style: [e.g., "I prefer building projects over courses", "I like documentation + courses + projects"]

Generate a 12-week roadmap:

## Week-by-Week Plan
For each week:
### Week N: [Topic Name]
**Concept:** [What you're learning]
**Resources:** [Specific resources — not "read the docs" but "read specifically these chapters/sections"]
**Project:** [Small hands-on project that forces you to use this week's concept]
**Done when:** [Specific measurable outcome that proves you learned it]

## Milestone Projects (Weeks 4, 8, 12)
[Three larger projects that integrate multiple weeks' learning]

## Common Pitfalls to Avoid
[The 5 most common mistakes people make learning this topic]

## How to Know You're Ready
[Concrete checklist of skills/knowledge that defines "job-ready" for this topic]

## Recommended Sequence if You Fall Behind
[Which weeks can be compressed or skipped without undermining the rest]
```

---

*End of Claude Code Power User Kit — 50 prompts total*

---

## Quick Reference Index

| ID | Title | Use When |
|----|-------|----------|
| PR-01 | Deep Code Review | Before merging any significant PR |
| PR-02 | Security Audit | Before shipping features that handle user data |
| PR-03 | Performance Profiling | When you suspect slowdowns |
| PR-04 | Code Smell Detection | During refactoring sprints |
| PR-05 | Test Coverage Analysis | When coverage drops or tests are missing |
| DOC-01 | README Generator | New project or README rewrite |
| DOC-02 | Inline Comment Writer | Legacy code or complex algorithms |
| DOC-03 | API Documentation | Before sharing APIs with other teams |
| DOC-04 | Architecture Decision Record | After making a significant tech decision |
| DOC-05 | Changelog Entry | Before every release |
| DBG-01 | Error Explainer | Hitting a new error you don't understand |
| DBG-02 | Root Cause Analysis | Bug keeps coming back |
| DBG-03 | Rubber Duck Walkthrough | Logic bug with no error message |
| DBG-04 | Race Condition Finder | Intermittent bugs in concurrent code |
| REF-01 | Legacy Code Modernizer | Updating old codebases |
| REF-02 | Function Extractor | Functions growing too large |
| REF-03 | Design Pattern Applier | Structural code problems |
| ARCH-01 | System Design | Starting a new system from scratch |
| ARCH-02 | Database Schema Designer | Designing data models |
| ARCH-03 | Tech Stack Evaluator | Technology selection decisions |
| ARCH-04 | Migration Planner | Moving between systems safely |
| CC-01 | CLAUDE.md Generator | Setting up Claude Code on a project |
| CC-02 | Slash Command Creator | Automating repetitive tasks |
| CC-03 | Multi-Agent Task Planner | Large parallel workloads |
| CC-04 | Code Generation Prompt | Creating reusable generation prompts |
| PROD-01 | Standup Generator | Daily standups |
| PROD-02 | Technical Spec Writer | Planning new features |
| PROD-03 | PR Description Writer | Every pull request |
| PROD-04 | Interview Prep | Job search preparation |
| PROD-05 | Learning Roadmap | Learning new technologies |

---

*Claude Code Power User Kit v1.0 — affiliate1promotions@gmail.com*
