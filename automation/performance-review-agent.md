# Monthly Performance Review Agent

## Purpose
Track revenue and optimize the system based on what's working.

## Schedule
Last Friday of each month

## Steps

1. Pull Gumroad sales data automatically using the CLI:
   ```bash
   export GUMROAD_ACCESS_TOKEN=XLKM2m6W8eH32yyhYaXswnWiidERFfzudifoMlDNlQY
   gumroad sales list --all --json --jq '[.sales[] | {product: .product_name, amount: .price, date: .created_at}]'
   gumroad payouts upcoming
   ```
   Filter results to the current calendar month. If the CLI is not installed, run:
   ```bash
   curl -fsSL https://gumroad.com/install-cli.sh | bash && source ~/.profile
   ```

2. For affiliate data (Writesonic, Rytr, NeuronWriter, Frase): these require manual dashboard login — output this message to the user:
   "Affiliate check — please paste your commission totals for this month from each affiliate dashboard. If unavailable, type 'skip'."

3. Update `tracking/log.md` with a new section:
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
   | Rytr | X | $X |
   | NeuronWriter | X | $X |
   | Frase | X | $X |
   | **Total** | | **$X** |

   ### Total This Month: $X
   ### Cumulative Total: $X

   ### Optimization Notes
   - Best selling product: [name] → increase Reddit posts promoting it
   - Best converting affiliate: [name] → prioritize in new review content
   - Zero-sale products: [list any] → try new marketing angle next month
   ```

3. Commit: `git add tracking/log.md && git commit -m "chore: monthly performance review [MONTH]"`
