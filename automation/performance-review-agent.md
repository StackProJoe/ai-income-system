# Monthly Performance Review Agent

## Purpose
Track revenue and optimize the system based on what's working.

## Schedule
Last Friday of each month

## Steps

1. Ask the user (output this message):
   "Monthly performance check — please paste:
   1. Gumroad dashboard: sales and revenue by product this month
   2. Affiliate dashboard totals: clicks and commissions per program
   If unavailable, type 'skip' to defer until next session."

2. If user provides data, update `tracking/log.md` with a new section:
   ```markdown
   ## Month: [YEAR-MONTH]

   ### Gumroad
   | Product | Units | Revenue |
   |---------|-------|---------|
   | Claude Code Power User Kit | X | $X |
   | Freelancer's AI Command Center | X | $X |
   | Developer Productivity Pack | X | $X |
   | AI Business Automation Playbook | X | $X |
   | **Total** | **X** | **$X** |

   ### Affiliate
   | Program | Clicks | Commissions |
   |---------|--------|-------------|
   | Writesonic | X | $X |
   | Copy.ai | X | $X |
   | NeuronWriter | X | $X |
   | Jasper | X | $X |
   | **Total** | | **$X** |

   ### Total This Month: $X
   ### Cumulative Total: $X

   ### Optimization Notes
   - Best selling product: [name] → increase Reddit posts promoting it
   - Best converting affiliate: [name] → prioritize in new review content
   - Zero-sale products: [list any] → try new marketing angle next month
   ```

3. Commit: `git add tracking/log.md && git commit -m "chore: monthly performance review [MONTH]"`
