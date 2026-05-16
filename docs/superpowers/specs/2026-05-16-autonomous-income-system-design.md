# Autonomous Income System — Design Spec

## Goal

Build a two-engine digital income system that generates revenue autonomously after a one-time ~30-minute user setup. Engine 1 sells niche AI prompt packs on Gumroad. Engine 2 earns recurring affiliate commissions from an AI tool review site. Both engines drive traffic to each other and compound over time.

---

## Research Basis

Evidence gathered 2026-05-16:

- Niche AI prompt packs on Gumroad: documented creators at $1K–$2,500/mo with zero paid ads
- Copy.ai affiliate: 45% commission; Writesonic: 30% lifetime recurring; NeuronWriter: 30% lifetime recurring; Jasper: 25% for 12 months
- Combined digital product + affiliate system: documented at $10K/mo ($6.5K products, $2.3K affiliate, $1.2K newsletter)
- Generic prompt packs are dead — specificity is the only thing that converts

---

## Engine 1 — Gumroad Product Store

### Products (4 packs, all Claude/AI dev niche)

| Product | Price | Target Buyer |
|---------|-------|-------------|
| Claude Code Power User Kit | $29 | Developers maximizing Claude Code |
| Freelancer's AI Command Center | $39 | Freelancers using AI for client work |
| Developer Productivity Pack | $19 | Devs wanting fast code/debug/doc prompts |
| AI Business Automation Playbook | $47 | Solopreneurs automating with Claude |

### Format
Each pack: a well-formatted Markdown file (50–100 prompts with explanations), delivered as a `.md` or `.pdf` download via Gumroad. Buyers can use them immediately.

### Traffic Sources
Automated weekly posts to: r/ClaudeAI, r/SideProject, r/freelance, r/ChatGPT, r/artificial, r/webdev

### Monetization
Gumroad free tier — they take 10% per sale. Zero monthly cost.

---

## Engine 2 — Affiliate Review Site

### Niche
AI writing and productivity tools (highest affiliate commissions in AI space).

### Affiliate Programs (all free to join)
- Copy.ai — 45% commission — `copy.ai/affiliates`
- Writesonic — 30% lifetime recurring — `writesonic.com/affiliate`
- NeuronWriter — 30% lifetime recurring — `neuronwriter.com/affiliate`
- Jasper — 25% for 12 months — `jasper.ai/affiliates`

### Site Pages
- `/` — Hub: "Best AI Writing Tools 2026" (drives all reviews)
- `/reviews/writesonic` — Full review + affiliate CTA
- `/reviews/copy-ai` — Full review + affiliate CTA
- `/reviews/neuronwriter` — Full review + affiliate CTA
- `/reviews/jasper` — Full review + affiliate CTA
- `/vs/writesonic-vs-jasper` — Comparison page (high search intent)
- `/vs/copy-ai-vs-jasper` — Comparison page

### Tech Stack
- Next.js (static export) — deployed free on Vercel
- Tailwind CSS — fast styling
- MDX — review content as files (easy for me to generate new content)
- No database, no auth, no backend — pure static

### SEO Strategy
Target long-tail keywords: "[tool] review 2026", "[tool A] vs [tool B]", "best AI writing tool for [use case]"

### Traffic
- Reddit: post review links in r/AITools, r/SideProject, r/SEO, r/artificial
- Organic search: static Next.js with proper meta tags and structured data

---

## Automation Layer

All automation runs via the `schedule` skill — Claude Code agents on a cron, using the existing subscription (zero API cost).

### Scheduled Jobs

| Job | Frequency | What it does |
|-----|-----------|-------------|
| reddit-marketing | Weekly (Tuesday 10am) | Writes and posts 2 Reddit posts promoting products/reviews |
| content-expansion | Monthly | Generates 2 new review pages or product updates |
| performance-review | Monthly | Checks Gumroad sales + affiliate dashboard, logs to tracking/log.md |

---

## One-Time User Setup (30 min total)

1. **Gumroad account** — gumroad.com/signup (free)
2. **Affiliate signups** (all free):
   - writesonic.com/affiliate
   - copy.ai/affiliates
   - neuronwriter.com/affiliate
3. **Vercel account** — vercel.com/signup (free, GitHub login)
4. **GitHub account** (if not already) — for Vercel deploy
5. **Domain** (optional but recommended) — ~$12/yr on Namecheap

User provides: Gumroad account URL, affiliate link codes, Vercel project URL.
Claude handles: everything else.

---

## File Structure

```
Test Claude money maker/
├── products/
│   ├── claude-code-power-kit/
│   │   ├── product.md          # The actual prompt pack (50+ prompts)
│   │   └── listing.md          # Gumroad title, description, tags, price
│   ├── freelancer-ai-kit/
│   │   ├── product.md
│   │   └── listing.md
│   ├── developer-productivity-pack/
│   │   ├── product.md
│   │   └── listing.md
│   └── business-automation-playbook/
│       ├── product.md
│       └── listing.md
├── affiliate-site/
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── pages/
│   │   ├── index.js
│   │   ├── reviews/
│   │   │   ├── writesonic.js
│   │   │   ├── copy-ai.js
│   │   │   ├── neuronwriter.js
│   │   │   └── jasper.js
│   │   └── vs/
│   │       ├── writesonic-vs-jasper.js
│   │       └── copy-ai-vs-jasper.js
│   ├── content/
│   │   └── reviews/             # MDX source files
│   ├── components/
│   │   ├── Layout.js
│   │   ├── ReviewCard.js
│   │   ├── ComparisonTable.js
│   │   └── AffiliateButton.js
│   └── styles/
│       └── globals.css
├── marketing/
│   ├── reddit/
│   │   ├── posts/               # Pre-written Reddit posts (batch of 12)
│   │   └── schedule.json        # Subreddit rotation schedule
│   └── templates/
│       └── post-template.md
├── automation/
│   ├── weekly-reddit-agent.md   # Instructions for scheduled agent
│   ├── monthly-content-agent.md
│   └── performance-review-agent.md
└── tracking/
    └── log.md                   # Revenue + performance log
```

---

## Revenue Projections (Conservative)

**Month 1:** $100–$400 (first Gumroad sales from Reddit traffic, first affiliate clicks)
**Month 2–3:** $400–$1,200 (compounding Reddit presence, organic search starting)
**Month 6+:** $1,000–$3,000 (SEO traffic, established Gumroad store, recurring affiliate commissions)

These are conservative based on the documented creator evidence gathered in research.

---

## Constraints

- Zero API costs — all automation runs via Claude Code subscription (schedule skill)
- Zero monthly hosting — Vercel free tier
- Zero storefront cost — Gumroad free tier (10% per sale only)
- User is out of the loop after initial setup
- All content generated by Claude Code using existing subscription
