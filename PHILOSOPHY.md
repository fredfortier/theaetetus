<!-- markdownlint-disable MD013 -->

# Philosophy

Software delivery is a continuing dialectic between a developer's causal account and the reality
that can defeat it. The developer preserves and revises that account as evidence changes. The AI
oracle makes the account more answerable to reality without taking ownership of it.

## The developer owns the account

Dialectical mastery is a job requirement for a developer entrusted with consequential software
decisions. This does not mean winning arguments or using a philosophical vocabulary. It means being
able to:

- state the governing causal account without borrowing the oracle's wording;
- distinguish authority, observation, inference, assumption, and unknown;
- derive a proposed change from the problem, responsible boundary, and invariants;
- produce a defeater or predict a changed case;
- recognize evidence that reopens intent; and
- judge whether verification evidence satisfies the governing obligation.

The package helps exercise these abilities. It does not certify people, infer private cognition, or
replace human hiring, readiness, and performance judgment. The tutor assesses a visible move, never
a person's intelligence or permanent competence.[^tutor-boundary]

## The oracle earns trust procedurally

“Oracle” names a role, not an authority. A reliable oracle reconstructs independently, answers
directly, distinguishes what it found from what it inferred, tests its favored account, states what
would revise it, corrects itself visibly, and stops at decisions the developer must own.[^oracle]
Its fluency, confidence, citations, code, tests, and reports are never acceptance by themselves.

The oracle may choose reversible mechanical means once intent constrains the valid outcome. That
freedom ends when implementation exposes a new boundary, public contract, failure behavior, trust
decision, or verification obligation. The work then returns to the developer for inquiry or
specification development.

## A specification is a causal argument

A governing specification is not a filled template. It makes a proposed outcome follow from a
problem, domain operation, authority, responsible boundary, failure semantics, and positive
invariants. It reduces implementation freedom only where the developer has actually made a
decision. Repository facts and tests may support or defeat its claims; they cannot create its
authority.[^specification]

The leanest sufficient artifact governs. It may be an issue, request, design note, or repository
document. Its filename, location, and section structure are local choices. A separate document is
useful only when it lowers review cost or satisfies repository law.

## Delivery is reflexive

Inquiry, specification development, implementation, verification, conformance review, and
integration are obligations, not a conveyor belt. A change may enter at any obligation for which
its prerequisites already hold. Evidence may send it backward. A mechanical change should not be
forced through ceremonial discovery, while an unresolved architectural premise should not be
smuggled forward as implementation detail.[^routing]

Progress means discharging an obligation or improving the causal account. Phase labels, activity
logs, completion percentages, green commands, and polished reports do not establish progress by
themselves.

## Verification serves claims

Verification begins with the obligation and the boundary responsible for it. The useful observation
is the narrowest one that distinguishes the claimed behavior from credible alternatives. Different
obligations may require tests, traces, runtime observations, migration exercises, screenshots,
formal proof, or human inspection. No portable workflow should choose a repository's verification
mechanism for it.

Passing evidence remains bounded by what was exercised. It becomes acceptance only through an
accountable human judgment that considers the governing specification, applicable local standards,
competing explanations, and known limits.

## Conformance runs both ways

Review must ask both whether every obligation appears in repository state and whether every
material repository change has governing authority. The first direction detects omissions and
evidence gaps. The second detects contradictions, extra behavior, and choices whose meaning first
appeared in implementation.[^conformance]

The reviewing oracle finds and explains defeaters. It does not remediate unless asked, approve its
own work, or convert a report into merge authority. The developer may accept, rebut with grounded
reasoning, reopen the governing specification, or seek another accountable human judgment.

## Local systems retain local authority

This package supplies a portable reasoning and delivery kernel. Repository instructions, domain
doctrine, programming-language rules, provider mechanics, security policy, release practice, and
operational runbooks remain authoritative in their own scope. The package discovers and obeys them;
it does not universalize them.

## Evidence boundary

The package's current evidence supports a method and a testable hypothesis: its skills can preserve
human ownership, evidence discipline, responsive challenge, and bounded handoffs on the evaluated
fixtures. It does not yet establish that teams learn faster, retain more, or deliver safer software.
Those are human and longitudinal claims requiring different evidence.[^claim-boundary]

[^tutor-boundary]: [`skills/dialectical-tutor/SPEC.md`](skills/dialectical-tutor/SPEC.md#role-contract)
    prohibits person-level scoring and certification while permitting behavior-specific coaching.
[^oracle]: [`skills/dialectical-inquiry/references/oracle-discipline.md`](skills/dialectical-inquiry/references/oracle-discipline.md)
    defines independent reconstruction, epistemic labels, disconfirmation, revision conditions,
    and visible self-correction.
[^specification]: [`specification-development/SPEC.md`](skills/specification-development/SPEC.md#premise-and-lineage-negotiation)
    records the causal-argument, authority, and comparator negotiation for governing specifications.
[^routing]: [`software-delivery/SPEC.md`](skills/software-delivery/SPEC.md#premise-and-lineage-negotiation)
    distinguishes adaptive obligation routing from a mandatory lifecycle sequence.
[^conformance]: [`conformance-review/SPEC.md`](skills/conformance-review/SPEC.md#premise-and-lineage-negotiation)
    records the source negotiation for doctrine-aware two-way conformance and human judgment.
[^claim-boundary]: [`dialectical-tutor/EVAL.md`](skills/dialectical-tutor/EVAL.md) limits the sole
    current behavioral claim to one restraint handoff; the [Promptfoo harness
    specification](evals/promptfoo/SPEC.md#purpose-and-authority-boundary) prohibits automated
    certification of human efficacy.
