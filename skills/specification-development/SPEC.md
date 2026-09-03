# Specification: `specification-development`

Status: approved and implemented.

## Intent

Turn a developer-owned causal account into the leanest reviewable authority for implementation.
The skill may recover evidence, formulate candidate language and invariants, repair causal gaps, and
assess readiness. It must not originate consequential human-held premises or convert fluent prose
into authority.

## Scope

Use for creating, repairing, or assessing consequential software specifications, architecture
intent, obligation sets, and acceptance models.

Exclude:

- settled implementation against accepted obligations;
- task-list generation without specification work;
- generic brainstorming or one-shot explanation;
- repository-provider mechanics; and
- passive approval of an agent-authored design.

## Runtime trigger description

> Develops, repairs, or assesses a governing software specification from a developer-owned causal account. Use for consequential feature or change specifications, architecture intent, acceptance obligations, or specification-readiness review. Do not use for settled implementation, generic planning lists, or agent-authored intent awaiting approval.

## Reasoning model

The specification is an argument, not a template:

```text
problem + domain operation + current wrongness + authority
    + responsible boundary + failure semantics
    -> invariants + obligations + scope + verification
```

The left side must be prior to and capable of defeating the right side. Repository state can ground
or contradict a premise, but current code cannot authorize future intent. The oracle can propose a
derivation; the developer must own it before it governs implementation.

## Required behavior

1. Discover governing sources and repository evidence before authoring.
2. Classify authority, observation, inference, assumption, contradiction, and unknown.
3. Recover facts that are discoverable; route human-held missing premises to direct inquiry.
4. Make problem, domain operation, wrongness, authority, boundary, failure semantics, derivation,
   and defeaters reviewable.
5. Formulate positive, domain-native invariants with responsible enforcement and verification
   boundaries.
6. Derive implementation obligations rather than starting from code shape.
7. Choose the leanest artifact allowed by the repository; impose no universal path or outline.
8. Attack the candidate for solution-first reasoning, borrowed authority, blacklist invariants,
   decorative evidence, scope expansion, and undisclosed reviewer choices.
9. Preserve oracle-generated language as attributed until the developer demonstrates ownership.
10. Stop or reopen rather than filling a material gap.

## Invariants

- No material solution claim governs unless it follows from developer-owned or externally governed
  premises.
- Every obligation names the responsible boundary and a discriminating verification path.
- An invariant states a valid property rather than a task list or catalog of forbidden files.
- Artifact structure follows the causal account; a template never creates missing reasoning.
- Only an accountable human admits the specification.

## Dispositions

| Disposition | Condition |
| --- | --- |
| `ready for human judgment` | The argument is reviewable and materially complete. |
| `conditional` | Explicit limits remain but do not alter the conclusion. |
| `revise` | The account is plausible but its derivation or obligations are incomplete. |
| `reopen inquiry` | The developer's causal account is absent, borrowed, or defeated. |
| `unresolved` | Required authority or evidence is unavailable. |

## Handoffs

- Receive an owned causal account or explicit user direction from inquiry or the current request.
- Hand an admitted governing specification to `specification-implementation`.
- Hand a candidate or changed specification to `conformance-review` when independent judgment is
  requested.
- Return missing human-held premises to `dialectical-inquiry`.

## Validation cases

### Should trigger

- “Turn this causal account into the governing specification for the feature.”
- “Audit whether this design note actually derives its proposed boundary.”
- “Repair these acceptance obligations without inventing missing product intent.”

### Should not trigger

- “Implement obligation three from the approved specification.”
- “Break this settled change into coding tasks.”
- “Explain what eventual consistency means.”

### Behavioral cases

- A solution-first bug request reopens inquiry when the responsible boundary is not owned.
- A complete causal account yields a lean artifact rather than a fixed template.
- A negative exclusion list is compressed into positive invariants.
- A plausible specification with verification only at an adjacent boundary is revised.
- Human agreement with polished oracle prose does not by itself admit the specification.

## Lineage

This skill implements the specification-development obligation in
[`SOFTWARE-DELIVERY-SPEC.md`](../../SOFTWARE-DELIVERY-SPEC.md#handoff-contracts). Its causal-argument,
invariant, lean-artifact, evidence, and human-admission decisions are grounded in the adjudicated
source record at [`SOFTWARE-DELIVERY-SOURCES.md`](../../SOFTWARE-DELIVERY-SOURCES.md#specification-authority).
The runtime file contains only the resulting operating contract.

## Approved implementation decisions

- Skill name identifies the activity and remains distinct from the governing artifact.
- Primary execution shape is inline guidance with an internal readiness route.
- Invariant formulation and causal assessment are internal duties, not public phase skills.
- No bundled reference is justified because every runtime invocation needs the compact causal and
  readiness contracts.
