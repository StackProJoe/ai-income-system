# One-Time Setup Guide (~30 minutes)

After this setup, the system runs autonomously.

---

## Step 1: Gumroad Store (15 min)

1. Create account at gumroad.com (free)

2. Create 4 products:

   **Product 1: Claude Code Power User Kit**
   - Title: "Claude Code Power User Kit — 50 Prompts That 10x Your Dev Workflow"
   - Price: $29
   - Upload: `products/claude-code-power-kit/product.md`
   - Copy description from: `products/claude-code-power-kit/listing.md`

   **Product 2: Freelancer's AI Command Center**
   - Title: "Freelancer's AI Command Center — 45 Prompts for Proposals, Clients & Getting Paid"
   - Price: $39
   - Upload: `products/freelancer-ai-kit/product.md`
   - Description from: `products/freelancer-ai-kit/listing.md`

   **Product 3: Developer Productivity Pack**
   - Title: "Developer Productivity Pack — 30 Daily-Use Claude Prompts for Devs"
   - Price: $19
   - Upload: `products/developer-productivity-pack/product.md`

   **Product 4: AI Business Automation Playbook**
   - Title: "AI Business Automation Playbook — 40 Prompts to Run Your Business with Claude"
   - Price: $47
   - Upload: `products/business-automation-playbook/product.md`

3. After creating each product, copy its Gumroad URL and **give it to Claude** to replace the GUMROAD_URL_1/2/3/4 placeholders

---

## Step 2: Affiliate Program Signups (10 min)

All free. Sign up for:

1. **Writesonic** — writesonic.com/affiliate (30% lifetime recurring)
2. **Copy.ai** — copy.ai/affiliates (45% commission)
3. **NeuronWriter** — neuronwriter.com/affiliate (30% lifetime recurring)
4. **Jasper** — jasper.ai/affiliates (25% for 12 months)

After getting approved (usually instant), **give Claude your affiliate links** for each.

---

## Step 3: Deploy Affiliate Site to Vercel (5 min)

1. Create free GitHub account at github.com (if you don't have one)

2. Create a new repository called `ai-tools-reviewed`

3. In the `affiliate-site/` directory, run:
   ```bash
   git init
   git add -A
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ai-tools-reviewed.git
   git push -u origin main
   ```

4. Go to vercel.com, sign up with GitHub, click "Add New Project"

5. Import `ai-tools-reviewed` — Vercel auto-detects Next.js and deploys

6. **Give Claude your Vercel URL** (e.g., ai-tools-reviewed.vercel.app)

---

## Step 4: Give Claude Your Links

Once you have everything above, tell Claude:
- Gumroad URLs for all 4 products
- Affiliate links for all 4 programs
- Your Vercel site URL

Claude will replace all placeholders in one pass and trigger a Vercel redeploy.

---

## After Setup

Everything is automated:
- **Weekly Tuesdays**: Claude posts 2 Reddit posts driving traffic to your store + site
- **Monthly (1st Monday)**: Claude adds new review pages to the affiliate site
- **Monthly (last Friday)**: Claude logs performance and optimizes

Your only job: check your Gumroad and affiliate dashboards occasionally.
