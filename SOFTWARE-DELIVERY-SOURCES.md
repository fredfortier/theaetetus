<!-- markdownlint-disable MD013 -->

# Software Delivery Sources

This file records the evidence, adjudication, and translation behind the software-delivery
extension. It is maintenance evidence, not runtime instruction. Skill-local specifications may
deep-link here for lineage, but no runtime `SKILL.md` may depend on this file or inherit
source-project language from it.

## Authority and evidence order

This file records evidence; it does not assign authority by percentage. Explicit user direction and
accepted package specifications define local intent. `PHILOSOPHY.md` governs the package's stable
method commitments, `SOFTWARE-DELIVERY-SPEC.md` governs package behavior, skill-local specifications
govern their focused boundaries, and `evals/promptfoo/SPEC.md` governs evaluation. External and
source-project materials can support or defeat a local argument but cannot create local intent.
Runtime files, tests, evaluations, and history are observations of present behavior, not permission
or acceptance.

The inspected DerivaDEX state is commit
`81650fee140c422b2c890436f0415e8ab3810fa5`. The inspected Addy Osmani state is commit
`d2c37ef6225dd8726cdd369a8030307f48592d26`. Commit pinning prevents later edits from silently
changing the evidence cited here.

## Source inventory

| Source | Trust | Contribution | Disposition |
| --- | --- | --- | --- |
| User mandate in this change | Governing | Developer dialectical mastery, oracle role, portable-only kernel, naming restrictions, source quarantine, and `SPEC.md` lineage. | Adopted; veto authority. |
| [PHILOSOPHY.md](PHILOSOPHY.md) | Approved package philosophy | Human/oracle ownership, reflexive delivery, reviewable-contribution boundary, and efficacy limits. | Governing within its scope. |
| [`dialectical-inquiry` specification](skills/dialectical-inquiry/SPEC.md) | Approved local specification | Human-led inquiry, fallible oracle, workpad provenance, owned/aporetic closure, and runtime routing. | Adopted without widening its trigger. |
| [`dialectical-tutor` specification](skills/dialectical-tutor/SPEC.md) | Approved local specification | Behavior-only coaching, bounded intervention, no certification, and clean return. | Adopted without making the tutor a lifecycle controller. |
| [DerivaDEX AI-native handbook](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/wiki/handbook/ai-native-team.md#L16-100) | Local project authority for its repository | Specification as reviewable causal argument; code executes rather than owns reasoning. | Translated; project roles and artifacts omitted from runtime. |
| [DerivaDEX Development Charter](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/wiki/handbook/Development-Charter.md#L83-130) | Local project authority for its repository | Active human supervision, reflexive execution, and evidence not activity as progress. | Translated; organizational vocabulary omitted from runtime. |
| [DerivaDEX skill charter](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/CHARTER.md#L19-39) | Local skill-system authority for its repository | Separation of portable delivery procedure from stack and repository doctrine. | Adopted as a portability boundary, not copied as taxonomy. |
| [DerivaDEX dialectics skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/dialectics/SKILL.md) | Operational source | Premise gaps, causal handoff, stop behavior, and the danger of solution-first reasoning. | Partly adopted; agent-led interview, confidence number, fixed threshold, and local role language rejected. |
| [DerivaDEX planning skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/planning/SKILL.md) | Operational source | Context recovery, causal specification, positive invariants, lean artifact choice, and readiness dispositions. | Translated into `specification-development`; provider paths and named local dependencies rejected. |
| [DerivaDEX posterior analytics skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/posterior-analytics/SKILL.md) | Operational source | Argument-before-polish review, causal reconstruction, imitation signals, and readiness dispositions. | Generalized as `causal-readiness-review`; source title, roles, provider routes, and issue history rejected. |
| [DerivaDEX invariant formulation skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-invariants/SKILL.md) | Operational source | Positive, domain-native, boundary-bearing, refactor-stable invariants and guardrail compression. | Generalized as `invariant-formulation`; source routes and mandatory-phase implications rejected. |
| [DerivaDEX implementation skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/implementation/SKILL.md) | Operational source | Authority-to-repository trace, prohibition on architectural improvisation, reopen behavior, and two-way audit. | Split between specification implementation and conformance review; local artifact paths and fixed drift labels rejected. |
| [DerivaDEX test-driven workflow](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/ttd/SKILL.md) | Operational source | Same-claim failing/passing observation, causal failure check, smallest change, refactor rerun, and retained guardrail. | Folded into specification implementation as a conditional verification pattern. |
| [DerivaDEX goal formulation skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-goal/SKILL.md) | Adjacent operational source | Falsifiable future-state model, paired mandate/workpad, decision-relevant evidence, unresolved premises, and next discriminator. | Generalized as `goal-formulation`; theorem label, autonomous lifecycle, and universal path rejected. |
| [DerivaDEX diff review skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/diff-review/SKILL.md) | Operational source | Complete change surface, authority-bearing review, concrete defeaters, proof limits, and report discipline. | Portable kernel translated into conformance review; stack census, scheduling, provider reports, scripts, and local policy remain local. |
| [DerivaDEX evidence grounding skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/evidence-grounding/SKILL.md) | Operational source | Authority order, claim-sized support, observation/inference separation, and rejection of evidence/permission substitution. | Generalized as `evidence-grounding`; provider formatting and local artifact routes rejected. |
| [DerivaDEX architecture skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/architecture/SKILL.md) | Operational source | Lazy contract applicability, semantic amendment gate, decision correspondence, and historical reconciliation. | Generalized as `architecture-conformance`; fixed filename, path registry, caller census, and standards exposition rejected. |
| [DerivaDEX naming skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/naming-things/SKILL.md) | Operational source | Ordered naming criteria, referent/scope/audience discovery, controlled vocabulary, and atomic rename closure. | Generalized as `naming-things`; competing local doctrine route and language-specific overreach rejected. |
| [Addy Osmani meta-skill](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/using-agent-skills/SKILL.md) | Primary upstream implementation | Phase discovery, scope discipline, assumption surfacing, and verification. | Discovery intent adopted; mandatory sequence and universal checklist rejected. |
| [Addy Osmani orchestration patterns](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/references/orchestration-patterns.md#L78-L93) | Primary upstream design note | Human judgment between dependent lifecycle steps; warning against autonomous sequential orchestration. | Adopted as human checkpoints and explicit routing, without provider-specific orchestration. |
| [Addy Osmani Definition of Done](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/references/definition-of-done.md) | Primary upstream checklist | Distinction between task acceptance and a standing local quality floor. | Distinction adopted; checklist not made universal package law. |

## Decision synthesis

### Utility integration

The six reviewed utilities remain individual skills because each has a reusable decision object and
a stop boundary independent of the delivery phase that consumes it:

| Utility | Exclusive decision object | Caller result |
| --- | --- | --- |
| `invariant-formulation` | Stable valid-state property, illegal negation, and enforcement/verification boundary | Specification derives obligations; review consumes disputed invariant findings. |
| `goal-formulation` | Aligned stable mandate and changing continuity workpad | Delivery resumes from a coherent decision record. |
| `causal-readiness-review` | Whether problem-solution prose is causally ready to govern implementation | Specification repairs the verdict; conformance carries it without regrading. |
| `architecture-conformance` | Whether a proposal preserves, amends, or cannot be reconciled with applicable architecture decisions | Change skills stop or proceed at the decision owner's boundary. |
| `evidence-grounding` | Claim class and admissible support | Every caller uses grounded facts without inventing its own evidence hierarchy. |
| `naming-things` | Canonical name and complete rename transition | Authoring, implementation, and review consume one vocabulary decision. |

The complete clause adjudication, naming analysis, caller audit, and accidental-particular quarantine
are maintained in [DERIVADEX-MIGRATION.md](DERIVADEX-MIGRATION.md#utility-review-and-integration).
Runtime skills contain only the resulting delegation and their own work.

### Routing and human checkpoints

Addy's meta-skill shows that phase discovery can lower routing cost, while its orchestration note
argues that dependent steps benefit from human judgment between them.[^addy-routing] The local
inquiry contract already rejects an agent-led state machine and assigns direction and synthesis to
the human.[^local-inquiry] The resulting decision is an obligation router: it identifies the
earliest unsatisfied prerequisite, recommends one focused skill, and stops for human judgment after
consequential transitions. It does not automatically run a universal sequence.

### Specification authority

The DerivaDEX handbook treats its specification as an argument whose solution follows from problem,
domain, evidence, and doctrine, then uses it as the acceptance standard.[^source-spec] The existing
Theaetetus contract requires the human to own propositions and synthesis rather than approve an
oracle-authored model.[^local-ownership] The portable result is a governing specification derived
from a developer-owned causal account. Repository facts and tests evidence current behavior; they
do not supply missing intent.

### Invariants and verification

The source invariant workflow favors positive, domain-native properties stable under refactoring,
and the test-driven workflow preserves the same behavior claim from failing observation through
passing observation and retained guardrail.[^source-invariants][^source-testing] The portable result
keeps both procedures inside the skills that need them. Neither becomes a mandatory public phase or
chooses a stack-specific verification mechanism.

### Implementation and conformance

The source implementation contract traces governing intent into repository facts and audits both
specification-to-repository and repository-to-specification directions.[^source-implementation]
The larger review workflow adds full-surface inspection, concrete defeaters, and explicit evidence
limits, but also contains extensive repository-specific routing and report mechanics.[^source-review]
The portable split assigns bounded edits and verification to `specification-implementation`, and
read-only two-way judgment to `conformance-review`.

### Workpad and reflexivity

The goal-formulation source records a future-state account, decision-relevant evidence, unresolved
premises, and one next discriminator rather than activity logs.[^source-workpad] The development
charter treats implementation and verification as revisable hypotheses rather than evidence of
progress by phase completion.[^source-reflexive] The resulting delivery workpad is optional when
continuity does not require it, repository-resolved rather than path-prescribed, and updated only
when the governing account changes.

## Translation ledger

| Source expression or mechanism | Portable result | Rejected residue |
| --- | --- | --- |
| Source-specific human titles | developer, reviewer, accountable human, or decision owner | Organizational role names. |
| Source-specific planning artifact and fixed path | governing specification discovered from repository authority | Project filenames, issue conventions, and provider paths. |
| Numeric posterior confidence and fixed stop threshold | explicit unresolved premise and next discriminator | Numeric epistemic theater. |
| Opaque causal-analysis title | `causal-readiness-review` as a focused public utility | Philosophical title and source-local verdict ritual. |
| Imperative invariant route | `invariant-formulation` as a focused public utility | Source naming and mandatory phase ceremony. |
| Owner-real proof slogan | verification at the boundary responsible for the claim | Source-local slogan and universal test lane. |
| Exact drift taxonomy | missing, contradictory, extra, ambiguous, stale, or unverified behavior in plain language | Mandatory source labels. |
| GitLab and repository report modes | handoff to applicable local capabilities | Provider commands, paths, scripts, reactions, and scheduling. |
| Universal lifecycle sequence | current-obligation routing with human checkpoints | Automatic phase advancement. |
| Standing Definition of Done | applicable local standards considered during human acceptance | One package-wide checklist imposed on every repository. |

## Source adaptation and rights

The Addy Osmani repository is MIT-licensed at the inspected revision.[^addy-license] Its material is
used as design evidence and paraphrased; the runtime structure and prose are original. The DerivaDEX
materials are treated as local comparative evidence. No source prose, examples, templates, scripts,
paths, role names, or repository conventions are distributed under `skills/`.

## Coverage and stopping rationale

The source set covers the happy path, premise and authority failures, solution-first drift,
verification gaps, human checkpoints, implementation reopening, two-way review, artifact
boundaries, and migration concerns. The current sources repeatedly converge on those behaviors;
further collection is lower-yield than behavioral evaluation of the implemented topology.

Open evidence remains:

- cross-skill behavioral evaluation has not yet established the new topology;
- no human study establishes learning, retention, productivity, or safer delivery;
- replacement of source-project skills requires a separate clause-level migration ledger and
  repository-local cutover; and
- semantic portability requires exercises in unrelated repositories, not only lexical scans.

[^addy-routing]: Addy's [meta-skill lifecycle](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/using-agent-skills/SKILL.md#L12-L43)
    provides phase discovery, while its [orchestration catalog](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/references/orchestration-patterns.md#L78-L93)
    reserves dependent transitions for human-orchestrated steps.
[^local-inquiry]: [`dialectical-inquiry/SKILL.md`](skills/dialectical-inquiry/SKILL.md#run-the-judgment-loop)
    defines a responsive responsibility loop rather than a serial interview.
[^source-spec]: The [AI-native handbook](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/wiki/handbook/ai-native-team.md#L88-100)
    states the causal and acceptance function of its specification.
[^local-ownership]: [`dialectical-inquiry/SPEC.md`](skills/dialectical-inquiry/SPEC.md#role-contract)
    assigns proposition, revision, and synthesis ownership to the human.
[^source-invariants]: The [invariant skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-invariants/SKILL.md#L8-44)
    defines positive, enforceable, refactor-stable invariant quality.
[^source-testing]: The [test-driven skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/ttd/SKILL.md#L8-34)
    binds the red and green observations to one behavior claim and retains a regression guardrail.
[^source-implementation]: The [implementation skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/implementation/SKILL.md#L42-131)
    defines authority tracing, prohibited improvisation, and two-way conformance.
[^source-review]: The [diff review skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/diff-review/SKILL.md)
    adds full-surface, authority-bearing, adversarial review and repository-specific mechanics.
[^source-workpad]: The [goal formulation skill](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-goal/SKILL.md#L18-105)
    defines theorem, evidence, open-premise, and next-discriminator workpad duties.
[^source-reflexive]: The [Development Charter](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/wiki/handbook/Development-Charter.md#L105-130)
    treats phases as revisable hypotheses and rejects activity as proof.
[^addy-license]: The inspected Addy Osmani repository includes an [MIT license](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/LICENSE).
