# Subreddit: r/Entrepreneur
# Flair: Tips / Tricks
# Title: 4 Claude prompts I use to run my business — not for content, for actual operations

Everyone talks about using AI for content creation. I want to share the prompts that actually help me run the business — the operational stuff that eats hours every week.

Background: I run a small SaaS, 4 employees, doing about $18k MRR. Been using Claude for operations for about 8 months.

---

**1. Monthly content calendar (the one that actually gets used):**

```
Create a 30-day content calendar for [describe your business and audience]. 

Parameters:
- Mix of content types: educational (60%), social proof (20%), promotional (20%)
- My main topics: [list 3-5 topics you're authoritative on]
- My audience's main pain points: [list 2-3]
- Platforms: [list platforms]

For each post, give me: day, platform, topic, angle (the specific take, not just the topic), and a one-line hook. Don't give me generic ideas — give me specific angles I could write 200 words about right now.
```

The "specific angles I could write 200 words about right now" constraint is what separates usable output from useless output.

---

**2. Sales page copy that doesn't sound like a sales page:**

```
Write a sales page for [product/service].

Target customer: [describe specifically]
Their main problem: [describe the problem, not the solution]
Price: [X]
Main objections they'll have: [list 2-3]

Structure:
- Open with the problem (not the product)
- Agitate it briefly
- Introduce the solution
- List outcomes, not features
- Handle the top objection directly
- Clear CTA

Tone: Direct, not hyped. No exclamation marks. Sound like a founder who respects their reader's intelligence.
```

"Sound like a founder who respects their reader's intelligence" gets you dramatically better copy than any other instruction I've tried.

---

**3. FAQ generator from customer emails:**

```
Here are 10 customer support emails I've received: [paste emails]

Generate a FAQ document that:
- Groups questions by theme
- Answers each question in 2-3 sentences
- Uses the customer's language, not internal jargon
- Flags any question that reveals a UX problem I should fix instead of just answering

Format as a proper FAQ I can put on my website.
```

This one is underrated. It generates FAQ content AND surfaces product issues at the same time.

---

**4. SOP writer:**

```
I need to write a Standard Operating Procedure for: [describe the process]

I'll describe the steps roughly: [brain dump the steps, as messy as you want]

Turn this into a clean SOP with:
- Purpose (one sentence)
- Who this applies to
- Numbered steps, specific enough that someone new could follow them
- Common mistakes to avoid
- What "done correctly" looks like

Flag any step where I was vague and you had to make an assumption.
```

The "flag assumptions" instruction is essential — otherwise you get a polished SOP with hidden gaps.

---

These aren't flashy but they've genuinely freed up 8-10 hours a month for me. Operations is the part of business that's easiest to automate and hardest to get help with, so this is where I see the biggest ROI.

---

*I documented a bigger library of these (including customer success workflows, hiring prompts, and a weekly review template) in the AI Business Automation Playbook ($47) — https://claudemint.gumroad.com/l/mhogs if you want the full set.*
