---
name: specification-development
description: Develops or repairs a governing software specification from a developer-owned causal account. Use for consequential feature or change specifications, architecture intent, and acceptance obligations. Do not use for read-only readiness grading, settled implementation, generic planning lists, or agent-authored intent awaiting approval.
---

# Specification Development

Produce the leanest governing specification that makes implementation mechanical without inventing
decisions the developer must own.

## Establish authority

1. Identify the developer, requested change, governing artifact, applicable repository instructions,
   and explicit scope.
2. Read the governing sources and relevant repository evidence before drafting claims. Apply
   `evidence-grounding` to their authority, observations, inferences, assumptions, contradictions,
   and unknowns.
3. If repository instructions or affected scope identify accepted architecture decisions, use
   `architecture-conformance` before proposing any semantic change to them.
4. Recover repository-discoverable facts directly. If a consequential premise is human-held and
   missing, offer `dialectical-inquiry` or stop with one precise question; do not supply it or enter
   a sustained inquiry without the user's request.

## Reconstruct the causal account

Make these relations explicit before polishing prose:

- problem: what is wrong, missing, or required without naming the proposed patch;
- domain operation: who or what needs the outcome, and for what operation;
- current wrongness: the observable behavior, illegal state, missing capability, or violated contract;
- authority: what can legitimately decide intended behavior;
- responsible boundary: what owns the decision, state, side effect, input/output, trust, or lifecycle;
- failure semantics: how invalid, unavailable, partial, or conflicting states resolve;
- derivation: why the proposed outcome follows from those premises; and
- defeaters: observations or rival accounts that would invalidate or narrow the conclusion.

Keep oracle-proposed relations attributed until the developer restates, revises, or uses them.

## Formulate obligations

For each material boundary or transition:

1. Use `invariant-formulation` to obtain the retained invariants, illegal states, enforcement
   boundaries, verification observations, and missing premises.
2. Derive the smallest implementation obligation that preserves each retained invariant.
3. Name verification evidence capable of distinguishing compliance from credible alternatives.
4. Use `naming-things` when the specification introduces or changes a consequential concept,
   interface, field, or controlled term.

Prefer obligations stable under implementation refactoring. Reject obligations that merely restate a
task, filename, tool, or proposed code shape.

## Shape the governing specification

Use the artifact selected by the user or repository. Create a separate document only when required
or when it materially reduces review effort. Let the causal account determine the structure.

Include only content that constrains implementation or lowers review cost:

- causal premises and derivation;
- governing authority and responsible boundaries;
- positive invariants and failure semantics;
- obligations and explicit scope;
- verification obligations and known evidence limits; and
- unresolved premises that prevent admission.

Do not turn tactical sequencing, progress state, source dumps, or implementation detail into
governing intent.

## Obtain an independent readiness judgment

Use `causal-readiness-review` before presenting a consequential specification for admission. Apply
its verdict and smallest repairs; do not restate or weaken its causal standard here.

Only an accountable human admits the specification. Record that decision without treating agreement
with oracle prose as ownership.

## Return

Lead with the disposition, then provide:

- governing artifact created or changed;
- causal thesis and decisive premises;
- obligations, responsible boundaries, and verification mapping;
- oracle-proposed language still awaiting ownership;
- defeaters and unresolved premises; and
- the smallest valid next action.
