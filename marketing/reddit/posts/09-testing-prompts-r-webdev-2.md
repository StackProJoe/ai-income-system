# Subreddit: r/webdev
# Flair: Discussion
# Title: Claude prompts for testing specifically — the ones that actually help (test generation, mocks, flaky test debugging)

I've seen a lot of posts about using AI for writing code, but testing is where I've gotten the most consistent value. Probably because writing tests is the thing most developers find annoying and keep procrastinating, so the bar for "this is helpful" is lower.

Here are the prompts I actually use for testing work:

---

**1. Test case generator:**

```
Generate test cases for this function: [paste function]

Include:
- Happy path (normal inputs)
- Edge cases (empty, null, boundary values, max values)
- Error cases (what should throw or return an error)
- Any cases that are easy to miss

For each test case, give me:
- The input
- The expected output
- Why this case matters (one sentence)

Framework: [Jest/Pytest/Go testing/etc]
```

The "why this case matters" instruction is underrated — it forces Claude to think about the cases rather than just generating obvious variations.

---

**2. Mock builder:**

```
I need to mock [describe the external dependency — API, database, service] for testing [describe the function or module being tested].

The real implementation does: [describe what it does]
In tests, I need it to: [describe the test scenarios]

Generate:
- A mock that covers my test scenarios
- At least one "unhappy path" mock (error state, timeout, bad data)
- Usage example in a test

Framework: [specify framework and language]
```

Writing mocks from scratch is time-consuming and error-prone. This gets me 80% of the way there in under a minute.

---

**3. Flaky test investigator:**

```
I have a flaky test that fails intermittently. Here's the test: [paste test]

The test: [describe what it's testing]
When it fails, the error is: [paste error message]
It seems to fail more when: [describe any pattern you've noticed — CI only, certain times, etc]

What are the most likely causes of intermittent failures in a test like this? Give me the top 5 ranked by likelihood, and tell me how to diagnose each one.
```

"Ranked by likelihood" is the key instruction here. Without it you get a laundry list. With it you get a debugging priority list.

---

**4. Coverage gap finder:**

```
Here is my current test suite for [module/function]: [paste tests]
Here is the implementation: [paste code]

What is NOT covered by these tests? Look for:
- Logic branches that have no test
- Error paths that aren't exercised
- Edge cases in the business logic that would be easy to miss
- Any assumption the code makes that isn't verified

Don't tell me to add more tests for things already covered. Only flag genuine gaps.
```

"Don't tell me to add more tests for things already covered" stops it from just restating what you already have.

---

**5. Test refactoring:**

```
These tests work but they're hard to maintain: [paste tests]

Refactor them to be:
- DRY without being hard to read
- Independent (no test depends on another running first)
- Clearly named (the test name should tell you what broke without reading the code)
- Fast (flag anything that could be slowing them down)

Keep the same coverage. Don't change what's tested, only how.
```

---

Testing is genuinely one of the best use cases for Claude because the output is verifiable — you can just run the tests and see if they catch real bugs.

---

*I have a bigger collection of these (including integration test prompts, TDD workflow prompts, and a test audit checklist) in the Developer Productivity Pack ($19) — https://claudemint.gumroad.com/l/cmvhj if you want the full set.*
