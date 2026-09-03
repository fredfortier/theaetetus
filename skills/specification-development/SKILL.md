---
name: specification-development
description: Develops, repairs, or assesses a governing software specification from a developer-owned causal account. Use for consequential feature or change specifications, architecture intent, acceptance obligations, or specification-readiness review. Do not use for settled implementation, generic planning lists, or agent-authored intent awaiting approval.
---

# Specification Development

Produce the leanest governing specification that makes implementation mechanical without inventing
decisions the developer must own.

## Establish authority

1. Identify the developer, requested change, governing artifact, applicable repository instructions,
   and explicit scope.
2. Read the governing sources and relevant repository evidence before drafting or assessing claims.
3. Separate accepted authority, observation, inference, assumption, contradiction, and unknown.
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

1. State a positive, domain-native invariant over valid states, transitions, or visible outcomes.
2. Negate it once to expose the illegal state; do not replace it with a blacklist.
3. Name the boundary responsible for enforcing it.
4. Derive the smallest implementation obligation that preserves it.
5. Name verification evidence capable of distinguishing compliance from credible alternatives.

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

## Attack readiness

Before presenting the specification for human judgment:

- remove the proposed solution and confirm the problem remains intelligible;
- test whether each conclusion follows from prior grounded premises;
- seek the strongest contrary source or changed case;
- reject convention, existing code, tests, and polished prose as substitute authority;
- check that exclusions follow from positive boundaries or invariants;
- check that every material obligation has a discriminating verification path; and
- identify any choice a reviewer would otherwise have to invent.

Classify the result as:

- `ready for human judgment`: the causal chain is reviewable and no material premise is missing;
- `conditional`: named limits remain but do not change the governing conclusion;
- `revise`: the account is plausible but an obligation or derivation is incomplete;
- `reopen inquiry`: the developer's causal account is missing, borrowed, or defeated; or
- `unresolved`: required authority or evidence is unavailable.

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
