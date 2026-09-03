# Specification: `specification-implementation`

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
2. Use `evidence-grounding` and, when applicable, `architecture-conformance` before mutation.
3. State the complete trace before every material edit.
4. Make the smallest repository change entailed by accepted authority.
5. Preserve unrelated user work and behavior.
6. Use `naming-things` for material names not fixed by authority.
7. Select verification at the boundary responsible for each claim.
8. Use same-claim failing and passing observations for suitable behavior changes.
9. Confirm a failing observation is causally related before implementing.
10. Retain the smallest useful regression guardrail.
11. Reassess the governing account after material evidence.
12. Stop and reopen rather than choose a new architecture, boundary, failure semantic, trust
    decision, public contract, or verification burden.
13. Report evidence limits and never self-accept.

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

## Evaluation argument

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

The decisive scenarios distinguish bounded implementation from code that silently chooses meaning.
They preserve the same claim and observation through a red/green repair, reject surrogate proof,
require applicable doctrine before mechanics, and reopen the owning specification when evidence
defeats a premise. Shared evaluation law belongs to
[`evals/promptfoo/SPEC.md`](../../evals/promptfoo/SPEC.md); no dedicated implementation family yet
establishes this contract behaviorally.

## Premise and lineage negotiation

| Decision | Addy `incremental-implementation` | DerivaDEX `implementation` | Theaetetus disposition |
| --- | --- | --- | --- |
| Unit of work | Uses small vertical, contract-first, or risk-first increments that remain compilable. | Implements the smallest change entailed by accepted SPEC and doctrine, then audits both directions. | Preserve bounded, coherent increments; the obligation and responsible boundary, not a preferred slice taxonomy, choose the unit. |
| Authority | Enforces scope and simplicity but permits common implementation defaults and feature flags. | Prohibits architecture first appearing in code and stops on missing authority. | Implement only mechanical entailment; no default, flag, wrapper, or fallback may resolve consequential ambiguity. |
| Doctrine | Relies on project conventions and specialist skills. | Loads every applicable doctrine owner before choosing stack mechanics. | Preserve doctrine-before-mechanics as mandatory local law distinct from the work SPEC. |
| Verification | Keeps each increment working and verifies behavior continuously. | Maps each obligation to owner-real proof and reopens when evidence defeats intent. | Preserve per-obligation evidence, same-claim red/green where appropriate, and boundary-real proof; passing checks cannot authorize extra behavior. |
| Completion | Optimizes rollback-friendly delivery and agent handoffs. | Returns implementation traces for independent conformance review. | Preserve reversible scope where governed, but completion is an evidence-bearing handoff—not integration or self-acceptance. |

Primary comparator: Addy Osmani,
[`incremental-implementation`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/incremental-implementation/SKILL.md#L21-L198).
Primary donor: DerivaDEX,
[`implementation`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/implementation/SKILL.md#L12-L144).
The donor's [`ttd`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/ttd/SKILL.md)
supports the conditional same-claim red/green route but does not redefine the primary skill.

Rejected ceremony: fixed slice sizes, universal feature flags or safe defaults, “always green” as a
substitute for claim-level proof, implementation-authored architecture, mock-only verification,
automatic integration, and rigid drift labels when a direct account is clearer.
