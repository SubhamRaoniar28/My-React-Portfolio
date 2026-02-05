---
name: interactive-planning
description: Guide for creating structured project plans through interactive Q&A. Use when a user needs to break down a complex task, start a new feature, or organize a multi-step project.
---

# Interactive Planning

This skill guides you through a multi-phase workflow to transform a vague goal into a concrete, actionable plan.

## 🔄 Workflow

### Phase 1: Discovery (The Q&A Loop)

When triggered, do NOT jump straight to a plan. Instead:

1. Identify the domain (Software, Refactoring, Research, etc.).
2. Select 3-5 relevant questions from `references/question-banks.md`.
3. Present them to the user clearly.
4. Wait for the user's response.

### Phase 2: Drafting

Once answers are provided:

1. Synthesize the answers into a structured plan using the layout in `assets/plan-template.md`.
2. Ensure tasks are atomic and verifiable.
3. Identify at least one potential risk and a mitigation strategy.

### Phase 3: Refinement

Ask the user: "Would you like to adjust any milestones, add more detail to a specific task, or should we proceed?"

## 💡 Best Practices

- **Atomic Tasks:** Each task should take less than 4 hours to complete.
- **Explicit Success:** Define exactly how we know a milestone is "Done".
- **Tool Awareness:** If the plan involves codebase changes, suggest using `codebase_investigator` as the first task in Phase 1.

## 📂 Resources

- **Question Banks**: `references/question-banks.md` (Domain-specific discovery questions)
- **Plan Template**: `assets/plan-template.md` (Standard output format)
