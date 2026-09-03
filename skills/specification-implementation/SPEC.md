# Specification: `specification-implementation`

Status: approved and implemented.

## Intent

Implement already-owned software intent without allowing architecture to originate in code. The
skill translates accepted obligations into bounded repository facts, gathers proportionate
verification evidence, and reopens earlier reasoning when implementation discovers a new decision.

## Scope

Use for implementation, repair, and verification when an accepted governing specification or
explicit constrained obligation fixes the intended meaning.

Exclude:

- invention or completion of consequential intent;
- implementation against an unidentified or unowned specification;
- read-only conformance review;
- human acceptance, merge, release, or deployment authority; and
- repository-specific stack or provider policy.

## Runtime trigger description

> Implements obligations from an accepted governing specification and records verification at the responsible boundaries. Use when software intent is settled enough for bounded repository changes. Do not use to complete ambiguous specifications, invent architecture, or accept the resulting work.

## Reasoning model

Each material change is a hypothesis:

```text
governing obligation -> responsible boundary -> repository fact
    -> discriminating verification evidence
```

The trace authorizes the edit and predicts the observation. Evidence can support the implementation
hypothesis, rebut it, or defeat the governing account. It cannot retroactively authorize a decision
that first appeared in code.

## Preconditions

- The governing specification or constrained excerpt is identified.
- The obligation is admitted by an accountable human or explicit user direction.
- The responsible boundary and expected behavior are known.
- Applicable repository instructions are available.
- The user has authorized the requested repository mutation.

Missing preconditions produce analysis or `unresolved`, not speculative edits.

## Required behavior

1. Extract active obligations, scope, boundaries, failure semantics, and verification requirements.
2. State the complete trace before every material edit.
3. Make the smallest repository change entailed by accepted authority.
4. Preserve unrelated user work and behavior.
5. Select verification at the boundary responsible for each claim.
6. Use same-claim failing and passing observations for suitable behavior changes.
7. Confirm a failing observation is causally related before implementing.
8. Retain the smallest useful regression guardrail.
9. Reassess the governing account after material evidence.
10. Stop and reopen rather than choose a new architecture, boundary, failure semantic, trust
    decision, public contract, or verification burden.
11. Report evidence limits and never self-accept.

## Test-driven verification route

Use the red/green route only when one stable behavior claim can be observed before and after the
change. The command or observation and claim remain identical across both runs. Setup failures,
unrelated dependency failures, changed commands, mock-only observations, and structure-coupled tests
do not satisfy the route.

Other obligations may require a build, type check, static analysis, trace, screenshot, migration
exercise, formal proof, generated-artifact comparison, runtime observation, or human inspection.
Select the mechanism from the claim and local authority.

## Reopen model

| Result | Condition | Next owner |
| --- | --- | --- |
| `continue` | Account and obligation still entail the next edit. | Implementation. |
| `repair implementation` | Specification is sound; repository expression is defective. | Implementation. |
| `reopen specification` | An obligation, boundary, invariant, failure semantic, scope choice, contract, or verification burden is absent or contradicted. | Specification development and developer. |
| `reopen inquiry` | The causal account is defeated or was never developer-owned. | Dialectical inquiry and developer. |
| `unresolved` | Required authority, evidence, or judgment is unavailable. | Accountable human or named authority. |

## Invariants

- Every material edit has an authority trace written before the edit.
- Mechanical freedom never changes system meaning.
- Verification claims no more than the responsible observation supports.
- A green check cannot clear an authority or scope defect.
- Decision-bearing discoveries stop implementation before they enter repository state.
- The implementing oracle does not accept its own work.

## Handoffs

- Receive an admitted governing specification from `specification-development` or explicit user
  direction narrow enough to govern a mechanical change.
- Hand completed traces and verification evidence to `conformance-review`.
- Return defeated causal premises to `dialectical-inquiry`.
- Return missing or contradicted obligations to `specification-development`.
- Hand commit, review-system, deployment, release, and operations work to applicable local
  capabilities after human judgment.

## Validation cases

### Should trigger

- “Implement these accepted obligations and show the verification trace.”
- “Make this behavior change test-first against the responsible API boundary.”
- “Continue the approved specification until evidence forces a reopen.”

### Should not trigger

- “Decide what architecture this vague feature should use.”
- “Review this diff without changing it.”
- “Deploy the accepted change.”

### Behavioral cases

- A typo or exact rename proceeds from explicit direction without inquiry ceremony.
- A behavior change preserves one claim and command through failing and passing observations.
- An adjacent unit test cannot satisfy a broader integration obligation.
- Discovery of unspecified failure behavior reopens specification development before code encodes it.
- A test passing does not authorize an extra material behavior.

## Lineage

This skill implements the implementation and verification handoffs in
[`SOFTWARE-DELIVERY-SPEC.md`](../../SOFTWARE-DELIVERY-SPEC.md#handoff-contracts). Its authority trace,
same-claim verification, smallest-change, evidence-limit, and reopen decisions are grounded in the
adjudicated record at
[`SOFTWARE-DELIVERY-SOURCES.md`](../../SOFTWARE-DELIVERY-SOURCES.md#implementation-and-conformance).
The runtime file contains only the resulting operating contract.

## Approved implementation decisions

- Skill name pairs with `specification-development` and names the externally relevant operation.
- Primary execution shape is ordered inline guidance with a validation loop.
- Test-driven verification is a conditional internal route, not a separate public skill.
- No universal workpad path or verification command is prescribed.
- No bundled reference is justified because all runtime branches fit one compact execution surface.
