---
name: goal-formulation
description: Authors or repairs an aligned goal prompt and continuity workpad for consequential, long-running software work. Use when the mandate, completion model, evidence record, or next decision must remain coherent across sessions. Do not use for ordinary task planning, delivery routing, or activity tracking.
---

# Goal Formulation

Produce an aligned goal prompt and continuity workpad. If the user requests an editorial plan before
mutation, return that plan without writing either artifact.

## Resolve authority and artifacts

1. Identify the decision owner, desired outcome, governing sources, affected boundary, and
   authorized write surfaces.
2. Read every selected governing source completely. Use `evidence-grounding` to separate authority
   from orientation, implementation evidence, observations, inferences, and assumptions.
3. Use paths named by the user. Otherwise follow the repository's established convention. If
   several artifacts plausibly own the goal, stop for selection.
   If no convention exists, propose a path before creating either artifact.
4. Read an existing workpad completely before proposing edits. State what to retain, replace,
   delete, and add. Do not overwrite valid local knowledge with a generic template.

## Define the outcome model

State the smallest falsifiable relation connecting the intended future state to the desired result:

```text
future state + governing conditions -> desired outcome
```

Include only the objects, authority boundaries, causal transitions, observable consequences, and
unresolved premises that can change the design or completion judgment. Use `invariant-formulation`
for stable invariants; do not restate its formulation procedure.

## Author the goal prompt

Include:

- one-sentence outcome;
- governing sources and their authority;
- outcome model and hard invariants;
- active scope and decision-relevant exclusions;
- session rule: compare the model, current artifact, and newest evidence, then select the most
  consequential mismatch;
- completion evidence required from each responsible boundary; and
- final handoff.

Link changing detail to the workpad instead of duplicating it in the prompt.

## Author the workpad

Keep only:

- authority and controlling sources;
- current outcome model;
- target objects, boundaries, and transitions;
- invariants and their enforcement or verification owners;
- evidence that changes confidence or a decision;
- open premises that can reverse a decision or completion claim;
- one next discriminator; and
- scope and exclusions implied by authority or invariants.

Replace stale claims. Delete phases, percentages, activity logs, repeated review fields, and metrics
that cannot falsify an invariant or resolve an open premise. Never let the workpad amend authority
implicitly.

## Validate and return

Reject or repair the pair when the outcome lacks a valid-state model, `invariant-formulation`
rejects an invariant, `evidence-grounding` rejects a claim, a reversible premise lacks a
discriminator, or the artifacts disagree.

Report both artifact locations or the complete prompt, the workpad disposition, the outcome-model
summary, editorial repairs, and unresolved owner decisions. Passing checks prove only the claims
they exercise.
