# Developer Productivity Pack
### 30 Quick-Fire Prompts for Everyday Development Tasks

---

These are the prompts you reach for daily. Short, fast, no setup needed.

---

## QUICK WINS

**QW-01: Explain This Code**

```
Explain this code to a competent developer who is unfamiliar with this codebase:

[PASTE CODE HERE]

Cover:
1. What it does (plain English, 2-3 sentences)
2. Key decisions or non-obvious design choices
3. What would break if this code was removed or changed incorrectly
4. Any gotchas or side effects I should know about
```

---

**QW-02: Name This Thing**

```
Give me 5 naming suggestions for [VARIABLE / FUNCTION / CLASS / FILE].

Context: [WHAT IT DOES IN ONE SENTENCE]

Requirements:
- Use [camelCase / snake_case / PascalCase / kebab-case]
- Max [X] characters
- Must be clear to someone reading the code for the first time

For each suggestion, include a one-line explanation of why it works.
```

---

**QW-03: Write the Regex**

```
Write a regex that matches: [DESCRIBE WHAT IT SHOULD MATCH]

Language/flavor: [JavaScript / Python / Go / etc.]

Provide:
1. The regex pattern
2. At least 3 should-match examples
3. At least 3 should-NOT-match examples
4. A plain-English explanation of each part of the pattern
```

---

**QW-04: SQL Query Writer**

```
Write an optimized SQL query for the following need:

[DESCRIBE WHAT DATA YOU NEED AND FROM WHERE]

Schema context:
[PASTE RELEVANT TABLE DEFINITIONS OR DESCRIBE COLUMNS]

Database: [PostgreSQL / MySQL / SQLite / etc.]

Provide:
1. The query
2. Index hints or suggested indexes if relevant
3. A plain-English explanation of what the query does and why it's written this way
```

---

**QW-05: Git Command Finder**

```
What is the exact Git command to: [DESCRIBE WHAT YOU WANT TO DO]

Provide:
1. The exact command(s) with all flags
2. An explanation of what each flag does
3. A warning if this command is destructive or irreversible
4. An alternative safer approach if one exists
```

---

**QW-06: Bash One-Liner**

```
Write a Bash one-liner that: [DESCRIBE WHAT IT SHOULD DO]

Requirements:
- Must work on both Linux and macOS
- Assume standard tools (grep, awk, sed, find, xargs) are available

Provide:
1. The one-liner
2. A breakdown explaining each part (pipe by pipe, flag by flag)
3. Any edge cases it doesn't handle
```

---

**QW-07: Makefile Target**

```
Write a Makefile target that: [DESCRIBE WHAT IT SHOULD DO]

Context:
- Project type: [language/framework]
- Existing targets it depends on (if any): [LIST OR "none"]

Provide:
1. The Makefile target with proper tab indentation
2. Any dependencies (other targets it should call first)
3. A .PHONY declaration if appropriate
4. A ## help comment so it shows up in `make help`
5. Basic error handling
```

---

**QW-08: Environment Variable Setup**

```
Read this code and produce a complete .env.example file:

[PASTE CODE HERE]

For each environment variable found, document:
- Variable name
- Description (what it controls)
- Example value (realistic, not "your_value_here")
- Required or optional
- Where to get it (e.g., "Generated on first run", "From your AWS console", etc.)

Format as a commented .env.example file ready to commit to the repo.
```

---

**QW-09: Docker Setup**

```
Write a complete Docker setup for this project:

Project type: [language/framework, e.g., "Node.js Express API"]
What it does: [ONE SENTENCE]
External dependencies: [databases, caches, queues, etc.]

Provide:
1. Dockerfile (multi-stage: build + production)
2. docker-compose.yml (includes all dependencies)
3. docker-compose.override.yml (for local development)
4. .dockerignore
5. Health checks for all services
6. Any gotchas for this stack
```

---

**QW-10: CI/CD Pipeline**

```
Write a GitHub Actions CI/CD pipeline for:

Project type: [language/framework]
Test command: [e.g., npm test]
Lint command: [e.g., npm run lint]
Build command: [e.g., npm run build]
Deploy target: [e.g., AWS ECS, Vercel, Fly.io, or "no deploy needed"]

Requirements:
- Run tests and lint on every push and PR
- Deploy only on merge to main
- Cache dependencies to speed up runs
- Fail fast on errors

Provide the complete .github/workflows/ci.yml file with inline comments explaining non-obvious steps.
```

---

## ALGORITHMS & DATA

**ALG-01: Algorithm Explainer**

```
Explain the [ALGORITHM NAME] algorithm as if I need to understand it well enough to implement it from scratch.

Cover:
1. What problem it solves
2. Step-by-step walkthrough with a concrete example (use real numbers/strings, not abstract variables)
3. Time complexity (best, average, worst case) with explanation of why
4. Space complexity
5. When to use it vs. when to choose an alternative
6. A clean implementation in [LANGUAGE]
```

---

**ALG-02: Data Structure Chooser**

```
I need to store [DESCRIBE YOUR DATA] and I need to perform these operations frequently:
- [OPERATION 1, e.g., "fast lookup by key"]
- [OPERATION 2, e.g., "iterate in insertion order"]
- [OPERATION 3, e.g., "remove from front"]

Compare the top 2 data structure choices for this use case:
1. Time complexity for each operation
2. Space complexity
3. Trade-offs
4. Winner recommendation with reasoning
5. Implementation of the winning choice in [LANGUAGE]
```

---

**ALG-03: Interview Problem Solver**

```
Solve this coding interview problem:

[PASTE PROBLEM STATEMENT]

Walk through it like you're in an interview:
1. Clarify assumptions and constraints
2. Describe your approach before writing code
3. Write the solution with inline comments explaining the logic
4. Analyze time and space complexity
5. List 2-3 follow-up questions an interviewer might ask and how you'd answer them
```

---

## TESTING

**TEST-01: Test Case Generator**

```
Generate a complete test suite for this function:

[PASTE FUNCTION CODE HERE]

Framework: [Jest / pytest / Go testing / RSpec / etc.]

Write tests for:
1. Happy path (typical valid inputs)
2. Edge cases (empty input, nulls, zero values, single items)
3. Boundary conditions (min/max values, exact limits)
4. Error cases (invalid input, exceptions that should be thrown)

Use realistic test data — no placeholder values like "test" or "foo". Tests should be copy-paste ready with no TODOs.
```

---

**TEST-02: Mock Builder**

```
Write mocks for the following dependencies used in this code:

[PASTE CODE WITH DEPENDENCIES]

Framework: [Jest / unittest.mock / Sinon / etc.]

Requirements:
- Use realistic data in mock responses (not "test", "example", or "mock_value")
- Mock only what's needed — don't over-mock
- Include at least one mock for the error/failure path
- Show how to use the mocks in a test setup
```

---

**TEST-03: Flaky Test Fixer**

```
This test is flaky — it sometimes passes and sometimes fails with no code changes:

[PASTE FLAKY TEST CODE]

[PASTE THE INTERMITTENT ERROR MESSAGE IF AVAILABLE]

Diagnose:
1. The most likely root cause (race condition, timing dependency, shared state, etc.)
2. Why it's flaky rather than consistently failing
3. The fix with explanation
4. How to verify the fix actually solved it
```

---

## WRITING & COMMUNICATION

**WR-01: Slack Message Rewriter**

```
Rewrite this Slack message to be clearer and more likely to get a response:

[PASTE ORIGINAL MESSAGE]

Context:
- Audience: [team member / manager / external partner]
- Goal: [what response or action you need]
- Urgency: [low / medium / high]

Keep it concise. Lead with what you need. End with a clear ask or next step.
```

---

**WR-02: Tech Blog Post**

```
Write a technical blog post on this topic:

Topic: [YOUR TOPIC]
My experience level with this: [beginner / intermediate / expert]
Target audience: [junior devs / senior devs / both]

Structure:
1. Hook — open with the problem or a surprising statement (not "In this post I will...")
2. The problem — why this matters
3. The solution — with real code examples
4. Key takeaways (3 bullet points)
5. Call to action

Target length: ~800 words
Tone: direct, practical, no fluff
Include an SEO-friendly title and a one-sentence meta description.
```

---

**WR-03: Stack Overflow Answer**

```
Write a Stack Overflow-quality answer for this question:

[PASTE THE QUESTION]

Structure your answer as:
1. Direct answer in the first sentence (don't make them read to find out)
2. Explanation of why this is the correct approach
3. Complete, working code example with comments
4. Edge cases or common mistakes to avoid
5. Brief description of any relevant official documentation (don't paste the URL, describe where to find it)
```

---

## PERFORMANCE

**PERF-01: Database Query Optimizer**

```
This query is running slow:

[PASTE SLOW QUERY]

Database: [PostgreSQL / MySQL / etc.]
Table sizes (approximate): [e.g., "users: 500k rows, orders: 2M rows"]
Current execution plan (if available): [PASTE EXPLAIN output or "not available"]

Provide:
1. Diagnosis of why it's slow
2. Index recommendations (exact CREATE INDEX statements)
3. Rewritten query optimized for performance
4. Explanation of the gains (what changed and why it's faster)
```

---

**PERF-02: Bundle Size Reducer**

```
Analyze this for bundle size reduction opportunities:

[PASTE package.json, import statements, or webpack/vite config]

Framework: [React / Vue / vanilla JS / etc.]
Bundler: [webpack / vite / rollup / esbuild]

Identify:
1. Packages imported in full that could be tree-shaken
2. Large dependencies that have lighter alternatives
3. Code that could be lazy-loaded instead of bundled upfront
4. Any duplicate functionality across packages

For each item, show the current import and the optimized version.
```

---

**PERF-03: Memory Leak Hunter**

```
Analyze this code for memory leaks:

[PASTE CODE HERE]

Language/runtime: [Node.js / browser JS / Python / Go / etc.]

For each leak found:
1. Identify the exact location
2. Explain why it's a leak (what holds the reference and prevents GC)
3. Show the fix
4. Explain how to verify the fix in a profiler or with a simple test
```

---

## SECURITY

**SEC-01: Input Validation**

```
Write input validation for this user-facing input:

Input type: [form field / API endpoint / file upload / etc.]
What it accepts: [DESCRIBE VALID INPUT]
Language/framework: [LANGUAGE + FRAMEWORK]

The validation must protect against:
- SQL injection
- XSS (cross-site scripting)
- Buffer overflow / overly large input
- [ANY OTHER SPECIFIC THREATS FOR THIS INPUT TYPE]

Provide the validation function with inline comments explaining what each check prevents.
```

---

**SEC-02: Dependency Audit**

```
Audit these dependencies for security and maintenance issues:

[PASTE package.json / requirements.txt / go.mod / Gemfile]

For each problematic package, identify:
1. The issue (known CVE, abandoned, deprecated, etc.)
2. Current version vs. safe version
3. Recommended alternative if the package should be replaced
4. Migration difficulty (drop-in replacement vs. requires refactoring)

Sort by severity: critical first.
```

---

**SEC-03: Secret Finder**

```
Scan this code for accidentally hardcoded secrets:

[PASTE CODE HERE]

Look for:
- API keys and tokens
- Passwords and passphrases
- Private keys or certificates
- Database connection strings with credentials
- Webhook URLs with embedded auth
- Any string that looks like it should be an environment variable

For each finding:
1. The exact location (line reference)
2. What type of secret it appears to be
3. How to move it to an environment variable safely
```

---

**SEC-04: Auth Flow Review**

```
Review this authentication/authorization code for security vulnerabilities:

[PASTE AUTH CODE HERE]

Check for:
1. Broken authentication (missing checks, bypassable logic)
2. Privilege escalation (can a lower-privilege user reach higher-privilege actions)
3. Insecure session management (weak tokens, no expiry, no invalidation)
4. Missing rate limiting on sensitive endpoints
5. Information leakage in error messages

For each issue: severity (critical/high/medium/low), description, and fix.
```

---

## DEVOPS

**OPS-01: nginx Config**

```
Write an nginx config for this setup:

What I'm serving: [DESCRIBE YOUR APP, e.g., "React SPA + Node.js API on port 3000"]
Domain: [yourdomain.com]
SSL: [yes — assume certbot/Let's Encrypt already set up / no]
Special requirements: [WebSocket support / large file uploads / rate limiting / etc.]

Provide:
1. Complete nginx.conf or site config file
2. SSL configuration with modern cipher settings
3. Reverse proxy setup for the backend
4. Static file caching headers
5. gzip compression settings
6. Any security headers (HSTS, X-Frame-Options, etc.)
```

---

**OPS-02: Linux Cron**

```
Write a cron job for the following task:

What it should do: [DESCRIBE THE TASK]
Schedule: [DESCRIBE IN PLAIN ENGLISH, e.g., "every day at 2am", "every 15 minutes on weekdays"]
Script location: [/path/to/script.sh or "I need the script written too"]

Provide:
1. The cron expression with explanation of each field
2. The full crontab entry (with PATH and any env vars needed)
3. The script itself if needed
4. Where to send output/errors (log file setup)
5. How to verify the cron is registered correctly
```

---

**OPS-03: Log Parser**

```
Write a command to parse this log:

Log format: [DESCRIBE OR PASTE A SAMPLE LOG LINE]
What I want to extract: [DESCRIBE, e.g., "all lines with status 500 in the last hour, with timestamp and URL"]
Log file location: [/var/log/app.log or "streamed from stdin"]

Provide:
1. The complete command (grep/awk/sed pipeline)
2. A breakdown of each part
3. A variation that outputs to a file
4. A variation that counts occurrences instead of listing them
```

---

**OPS-04: Health Check Script**

```
Write a health check script for:

Service: [DESCRIBE THE SERVICE, e.g., "PostgreSQL database", "Redis cache", "REST API at /health"]
Check from: [same server / external monitoring / Kubernetes liveness probe]
Language: [Bash / Python / Node.js]

The script should:
1. Check that the service is reachable
2. Verify it's actually responding correctly (not just port open)
3. Exit with code 0 on healthy, non-zero on unhealthy
4. Output a clear status message
5. Have a configurable timeout

Include instructions for adding it to a Kubernetes liveness/readiness probe or systemd if applicable.
```

---

*30 prompts. Copy, fill in the brackets, get results.*
