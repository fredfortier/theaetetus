<!-- markdownlint-disable MD013 -->

# Software Delivery Specification

Status: approved for implementation on branch `sdlc`.

## Intent

Extend the package from human-led inquiry into a coherent, portable software-delivery method. The
method must keep the developer responsible for the causal account and consequential decisions while
allowing a fallible AI oracle to recover evidence, challenge the account, perform bounded mechanical
work, and report defeaters.

The method succeeds when a change can move between inquiry, specification development,
implementation, verification, conformance review, and local integration without losing authority,
provenance, or the human acceptance boundary.[^philosophy]

## Scope

The package owns:

- formation and testing of a developer-owned causal account;
- development and repair of a governing specification;
- traceable implementation of accepted obligations;
- verification tied to the responsible boundary;
- two-way conformance review; and
- routing among those obligations.

The package does not own repository policy, domain doctrine, stack choices, issue tracking, source
control mechanics, deployment, release, operations, or organizational approval. It discovers and
obeys applicable local authority and hands accepted records to the relevant local capability.

## Roles and authority

### Developer

The developer owns the causal account, governing decisions, scope, specification admission,
rebuttals, reopening, and acceptance. The developer must be able to explain and transfer the account
in their own terms.

### Oracle

The AI oracle recovers evidence, reconstructs independently, answers, proposes attributed candidate
language, tests the causal chain, implements admitted obligations, verifies claims, and reports
defeaters. It does not become authority by producing an artifact or passing a check.

### Repository and external authorities

Explicit user direction and the accepted governing specification define task intent. Applicable
repository instructions and owned domain rules define local law. Official primary sources define
external contracts. Implementation, tests, runtime observations, and history evidence current
state; they do not authorize intended behavior.

Conflicts stop at the human or authority that owns the decision.

## Canonical vocabulary

| Term | Meaning |
| --- | --- |
| developer | Human who owns the causal account and directs the change. |
| oracle | Fallible AI role that answers, reconstructs, challenges, and exposes uncertainty. |
| causal account | Developer's explanation of relevant objects, boundaries, relations, and consequences. |
| governing specification | Accepted artifact that authorizes and constrains implementation. |
| obligation | Behavior, invariant, boundary, or outcome the implementation must satisfy. |
| verification | Collection and evaluation of observations against an obligation. |
| verification evidence | Observation produced by the selected verification mechanism. |
| conformance | Two-way correspondence between the governing specification and repository state. |
| acceptance | Accountable human judgment that obligations and applicable local standards are satisfied. |
| defeater | Evidence or reason that invalidates or materially narrows a live claim. |
| next discriminator | Next observation or action expected to distinguish competing accounts. |
| reopen | Return an invalidated or incomplete governing claim to inquiry or specification development. |
| unresolved | Delivery cannot advance because a decision-bearing premise or required evidence is missing. |

Use `proof` only for formal proof or when accurately quoting an external source.

## Skill topology

| Skill | Owns | Must not own |
| --- | --- | --- |
| `dialectical-inquiry` | Human-led formation and testing of the causal account. | Settled implementation or autonomous delivery. |
| `dialectical-tutor` | Repair of one observable lapse in the human's inquiry technique. | Subject matter, person-level grading, or lifecycle control. |
| `specification-development` | Development and repair of a governing specification. | Independent readiness grading, missing human-held premises, or repository-specific mechanics. |
| `specification-implementation` | Traceable edits and verification against accepted obligations. | Completion of the specification or acceptance of its own work. |
| `conformance-review` | Two-way review and defeater analysis over specification, changes, and evidence. | Remediation, acceptance, or local policy. |
| `invariant-formulation` | Positive, enforceable properties over valid states, transitions, and boundaries. | Missing intent, obligation derivation, or implementation authority. |
| `goal-formulation` | Aligned persistent mandate and continuity workpad. | Delivery routing, activity tracking, or autonomous execution. |
| `causal-readiness-review` | Read-only grading of the derivation from problem premises to proposed solution. | Proposal authorship, code conformance, or admission. |
| `architecture-conformance` | Semantic classification against applicable accepted architecture decisions. | Architecture authorship or amendment authority. |
| `evidence-grounding` | Claim classification, authority order, and claim-sized support. | General formatting or intended behavior. |
| `naming-things` | Canonical concept and identifier names plus complete rename transitions. | Domain authority or unrelated prose editing. |
| `software-delivery` | Identification of the current obligation and routing to the responsible skill. | Automatic phase advancement or acceptance. |

The names containing `dialectical` are limited to skills whose primary function is direct dialectic
or coaching in that craft. It is not a package prefix.

## Obligation graph

```text
developer-held purpose + repository evidence + applicable authority
                              |
                              v
                    inquiry: causal account
                              |
                              v
             specification: reviewable obligations
                              |
                              v
             implementation: bounded hypotheses
                              |
                              v
              verification: responsible observations
                              |
                              v
       human judgment: accept | rebut | reopen | unresolved
                              |
                              +--------> inquiry or specification
```

This graph states dependencies, not a required sequence. Enter at the earliest obligation whose
preconditions are not yet satisfied. Skip already-satisfied obligations. Never infer that one
artifact's existence satisfies its obligation.

## Handoff contracts

### Inquiry to specification development

Require a developer-owned causal account containing purpose, relevant domain objects, responsible
boundaries, causal relations, authority, invariant candidates, defeaters, unknowns, and the concrete
engineering consequence. A precise unresolved premise is a valid terminal result.

### Specification development to implementation

Require an admitted governing specification with:

- a problem intelligible without the proposed patch;
- the domain operation and current wrongness;
- governing authority and responsible boundaries;
- failure semantics and positive invariants where material;
- derived obligations and explicit scope;
- verification obligations capable of discriminating the claims; and
- human admission of the resulting authority.

### Implementation to conformance review

Require, for every material change:

```text
governing obligation -> responsible boundary -> repository fact -> verification evidence
```

Also require unresolved premises, known evidence limits, and every implementation discovery that
could defeat or widen the governing account.

### Conformance review to integration

Require findings or a bounded no-finding result, the specification-to-repository and
repository-to-specification traces, verification limits, developer disposition, and explicit
acceptance when granted. Local capabilities decide commit, review-system, deployment, release, and
operational mechanics.

## Delivery workpad

Use one change-bound workpad when the work spans sessions or when provenance would otherwise be lost.
Discover its path from repository instructions or user direction. Do not prescribe a universal
filename. Do not stretch a subject inquiry workpad into an implementation log.

```markdown
# Software delivery: <change>

Status: active | accepted | unresolved | superseded
Current activity: inquiry | specification development | specification implementation | verification | conformance review | integration

## Authority
- Developer:
- Governing sources:

## Developer's causal account

## Governing specification
- Source:
- Active obligations:
- Scope:

## Invariants

## Implementation hypothesis

## Verification plan

## Verification evidence

## Defeaters and competing explanations

## Unresolved premises

## Next discriminator

## Acceptance
- Judgment:
- Limits:
```

`Status` records the outcome; `Current activity` records the current kind of work. Update the
workpad only when an obligation, causal claim, defeater, unresolved premise, evidence judgment, or
next discriminator changes. Link to source artifacts instead of copying logs or transcripts.

## Global invariants

1. Consequential architecture originates in a developer-owned causal account before it appears in
   implementation.
2. Every material repository fact traces to a governing obligation or applicable local authority.
3. Repository facts, tests, and generated prose are evidence, never permission or acceptance.
4. Verification evidence is bounded to the claim and responsible boundary it exercises.
5. Conformance is evaluated in both directions.
6. New decision-bearing implementation discoveries reopen inquiry or specification development.
7. The oracle never admits, accepts, or merges its own consequential judgment.
8. Runtime skills contain no source-project names, paths, roles, conventions, or unexplained local
   vocabulary.
9. A skill name uses `dialectical` only when direct dialectical engagement is its primary operation.
10. Local repository and domain authorities retain every decision outside the portable kernel.

## Stop and reopen rules

Stop as `unresolved` when the responsible boundary, governing authority, failure semantics,
verification criterion, or accountable human decision is missing and cannot be recovered from
evidence.

Reopen inquiry when the developer's causal account is defeated or was never owned. Reopen
specification development when the account survives but an obligation, boundary, invariant, failure
semantic, scope decision, or verification burden is absent or contradicted. Return to implementation
when the specification remains sound and the defect is only in its repository expression.

## Acceptance model

The oracle may report `ready for human judgment`; it may not report accepted unless it is recording
an explicit accountable human decision. Acceptance requires:

- an admitted governing specification;
- complete material obligation traces;
- proportionate verification at the responsible boundaries;
- no unresolved defeater capable of reversing the outcome;
- satisfaction of applicable local standards; and
- a human judgment with known limits.

## Runtime purity

Every distributed file under `skills/` must be understandable in an unrelated repository without
access to the research corpus. Source acknowledgements, migration ledgers, and comparative reasoning
remain at repository top level.

Acceptance requires both:

1. a lexical scan for source names, links, paths, roles, artifact conventions, route names, and
   copied phrases; and
2. a semantic review in unrelated repository contexts for concepts that remain source-local despite
   renaming.

## Validation obligations

Evaluate at least:

- correct routing for mechanical, inquiry, specification, implementation, review, and integration
  requests;
- stop behavior for missing human-held premises;
- a solution-first defect that must reopen intent;
- a mechanical change that bypasses unnecessary inquiry;
- an implementation discovery that reopens the specification;
- a review with both an omitted obligation and an extra material behavior;
- verification at an adjacent boundary that must not satisfy the claim;
- human rebuttal and acceptance without agent self-approval;
- lexical and semantic runtime purity in unrelated repositories; and
- a matched procedural control that copies visible ceremony but lacks reconstruction, defeaters,
  provenance, and reopen behavior.

Automated success supports only the exercised workflow behavior. Human learning, productivity,
retention, and delivery efficacy require separate study.

## Lineage

This specification implements the explicit user decisions and stable method commitments in
[PHILOSOPHY.md](PHILOSOPHY.md). [SDLC.md](SDLC.md) is the active comparative-audit workpad; it may
propose or test a change but cannot amend this specification implicitly. The claim-level source
inventory and translation record is
[SOFTWARE-DELIVERY-SOURCES.md](SOFTWARE-DELIVERY-SOURCES.md). Skill-local specifications inherit
this contract and record why each runtime surface exists without placing research commentary in
`SKILL.md`. [evals/promptfoo/SPEC.md](evals/promptfoo/SPEC.md) alone governs evaluation design and
inference.

[^philosophy]: [PHILOSOPHY.md](PHILOSOPHY.md) defines the developer/oracle allocation, reflexive
    lifecycle, verification boundary, and human acceptance rule.
