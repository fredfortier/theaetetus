# Specification: `conformance-review`

Status: approved and implemented.

## Intent

Provide a read-only, adversarial judgment of whether a software change expresses its governing
specification and whether every material change has authority. The result equips a human to accept,
rebut, reopen, or request repair without allowing the reviewing oracle to approve itself.

## Scope

Use for acceptance-bearing review of a branch, change set, patch, commit range, or equivalent
before/after repository state when a governing specification or accepted intent exists or should
exist.

Exclude:

- ordinary style-only or maintainability review without an authority question;
- remediation or implementation;
- authoring missing intent;
- repository-provider comment mechanics;
- merge, release, deployment, or acceptance authority; and
- universal stack-specific quality policy.

## Runtime trigger description

> Reviews the two-way correspondence between a governing software specification, repository changes, and verification evidence. Use for read-only acceptance review of a change against owned intent. Do not use for generic style review, remediation, specification authorship, or self-approval.

## Reasoning model

Conformance is the intersection of two complete traces:

```text
governing specification -> repository state
repository change -> governing specification or applicable local authority
```

The first detects missing or contradicted intent. The second detects extra meaning and choices that
originated in implementation. Verification evidence must then reach the boundary responsible for
each material claim.

## Required behavior

1. Resolve the complete material change surface and before/after state.
2. Read governing sources and applicable repository instructions before judgment.
3. Assess whether the governing argument is causal and sufficiently owned.
4. Trace every material obligation into repository facts and verification evidence.
5. Trace every material repository change back to authority.
6. Inspect additions, modifications, deletions, and non-code artifacts.
7. Construct concrete defeater scenarios from live claims and responsible boundaries.
8. Distinguish findings, observations, inferences, assumptions, and review limits.
9. Treat missing acceptance-bearing evidence as a finding.
10. Lead with actionable findings and exact anchors.
11. Remain read-only and reserve acceptance for an accountable human.

## Finding classes

Use plain descriptions selected from the actual relation:

- required behavior is missing;
- repository behavior contradicts the governing specification;
- material behavior has no governing authority;
- implementation chose among meanings the specification did not settle;
- cited authority is stale or no longer means what the specification claims;
- required verification evidence is absent or exercises the wrong boundary;
- a responsibility moved without authority; or
- isolated wording is satisfied while the governing causal account is violated.

Do not force a finding into a label when a direct sentence is clearer.

## Finding validity

A material finding requires:

- an exact repository anchor;
- the governing obligation or explicit absence of authority;
- the responsible boundary;
- a concrete violating path;
- the consequence;
- supporting evidence and known limits; and
- the smallest required resolution.

Speculation may direct further inspection but cannot appear as a demonstrated defect.

## Invariants

- Both conformance directions cover the complete material surface.
- Code and tests evidence behavior but never create permission.
- Verification is bounded to the claim and responsible boundary exercised.
- No acceptance-bearing evidence gap is hidden as a review limitation.
- The reviewer does not remediate or accept the reviewed change.

## Handoffs

- Receive an admitted specification and implementation evidence from
  `specification-implementation`.
- Return implementation defects to `specification-implementation` only after human direction.
- Return missing or contradicted governing obligations to `specification-development`.
- Return defeated or unowned causal premises to `dialectical-inquiry`.
- Hand accepted traces to repository-specific integration capabilities after human judgment.

## Validation cases

### Should trigger

- “Review this branch for conformance with the governing specification.”
- “Check both whether every obligation is implemented and whether the diff adds unapproved behavior.”
- “Give me a read-only acceptance review with verification limits.”

### Should not trigger

- “Clean up the style in this module.”
- “Fix every issue you find in this diff.”
- “Write the missing architecture specification.”

### Behavioral cases

- One review reports both a missing obligation and extra unowned behavior.
- A passing mock-level test does not satisfy a runtime-boundary obligation.
- A deletion receives the same authority scrutiny as an addition.
- A coherent implementation is blocked when its governing intent is absent.
- A no-finding result names the inspected surface and specific evidence limits without self-approval.

## Lineage

This skill implements the two-way conformance and human-judgment boundary in
[`SOFTWARE-DELIVERY-SPEC.md`](../../SOFTWARE-DELIVERY-SPEC.md#conformance-review-to-integration).
Its complete-surface, causal-assessment, authority-trace, concrete-defeater, and evidence-limit
decisions are grounded in
[`SOFTWARE-DELIVERY-SOURCES.md`](../../SOFTWARE-DELIVERY-SOURCES.md#implementation-and-conformance).
The runtime file contains only the resulting audit contract.

## Approved implementation decisions

- `conformance-review` distinguishes this skill from generic code review.
- Primary execution shape is ordered inline guidance with two mandatory review directions.
- Review remains read-only; remediation requires a separate authorized turn.
- Repository-specific report transports, stack rules, and scheduling remain outside this skill.
- No bundled reference is justified because the portable review contract is compact and universal
  within the skill's scope.
