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

### `software-delivery` comparative audit

This is the first line-complete audit increment required by [SDLC.md](SDLC.md#next-discriminator).
The local baseline is commit `342ed5bef9c673b457b643f1b16687ad33ba69fc`; the retained repair is
the current working-tree state. The external baselines remain the immutable commits recorded above.
Line ranges identify physical source lines; proposition identifiers remain stable if later wrapping
changes those lines. Headings, fences, and separators are classified with the proposition they
structure. Blank lines carry no proposition.

The audit inspected the complete local runtime and SPEC, all eleven sibling trigger descriptions,
the complete Addy `using-agent-skills` runtime and its directly referenced Definition of Done, the
complete orchestration reference, the complete DerivaDEX `dialectics` runtime, current callers and
registration, decision-bearing history, and every Promptfoo test/config/assertion line that claims
routing. The source texts were read from their pinned commits; external texts remain evidence and
defeaters, never local intent.

#### Local runtime: proposition-to-authority ledger

| ID and local lines | Proposition | Authority and strongest comparison | Disposition and discriminating observation |
| --- | --- | --- | --- |
| `SD-L01`, 1-6 | Portable skill metadata names current-obligation routing and excludes an already focused request. | Package topology and direct-invocation objection in orchestration lines 11-44, 284-300. | Preserve. A direct focused request must bypass the router while an unclear coordination request invokes it. |
| `SD-L02`, 8-9 | Select the earliest outcome-changing unsatisfied obligation, route once, preserve developer authority, return, and never run a lifecycle automatically. | Philosophy reflexivity; Addy lines 141-165 and orchestration 78-93, 316-326. | Transform the comparator's phase sequence into the local obligation graph. A case with two apparent phases must select one prerequisite and stop. |
| `SD-L03`, 11-14 | Orient by identifying change, developer, artifact, limits, and authorized actions. | Package authority model; Addy scope and assumption rules at 49-61, 97-108. | Preserve with authority classification delegated to `evidence-grounding`. A route lacking mutation authority must not mutate. |
| `SD-L04`, 15-16 | Read workpad, specification, repository instructions, implementation, and verification evidence before routing. | Obligation graph and Addy active-confusion rule. | Preserve. Identical artifact labels with different contents must yield different routes. |
| `SD-L05`, 17-18 | Use the evidence owner for authority, observation, inference, assumption, and unresolved-premise distinctions. | Approved `evidence-grounding` contract. | Delegate. A target that treats code or a test as intent fails even if it names the expected phase. |
| `SD-L06`, 19-20 | Yield when the user already selected a focused operation. | User authority; Addy direct invocation and router-persona objection. | Preserve. Any paraphrasing route or substitute procedure fails the direct-request near miss. |
| `SD-R01`, 22-26 | The table is a one-route decision surface; sustained inquiry or an unowned consequential premise belongs to `dialectical-inquiry`. | Developer-ownership law; DerivaDEX lines 1-40. | Transform: recommend inquiry for an unowned premise, but preserve that skill's explicit human-led start contract. |
| `SD-R02`, 27 | Stable valid-state properties belong to `invariant-formulation`. | Approved sibling trigger and exclusive decision object. | Delegate. A blacklist request must select the invariant owner rather than let specification development restate its algorithm. |
| `SD-R03`, 28 | Independent causal grading belongs to `causal-readiness-review`. | Approved sibling trigger and exclusive review object. | Delegate. A completed proposal must be graded, not edited. |
| `SD-R04`, 29 | Owned accounts with absent, draft, contradicted, or repairable obligations belong to `specification-development`. | Accepted handoff contract. | Preserve. A draft with owned premises must not be sent back to inquiry merely because it is unfinished. |
| `SD-R05`, 30 | A long-running mandate/workpad needing creation or material repair belongs to `goal-formulation`. | Approved sibling artifact-pair boundary. | Delegate. Ordinary continuation must not invoke artifact authorship. |
| `SD-R06`, 31 | Applicable accepted architecture decisions require `architecture-conformance` before affected change or history work. | Accepted architecture boundary and sibling trigger. | Delegate. A governed rebase cannot route directly to implementation. |
| `SD-R07`, 32 | Accepted governing meaning plus mutation authority belongs to `specification-implementation`. | Accepted implementation handoff. | Preserve. A file or test without accepted intent cannot satisfy this precondition. |
| `SD-R08`, 33 | Existing implementation and evidence plus a requested acceptance-bearing read-only review belongs to `conformance-review`. | Accepted two-way conformance boundary. | Preserve and narrow. Generic quality review is not conformance review. |
| `SD-R09`, 34 | Claim grounding and material naming decisions belong to their focused utilities. | Approved sibling triggers and exclusive objects. | Delegate. The router may identify the object but cannot repeat either procedure. |
| `SD-R10`, 35 | A pre-acceptance operation outside the portable kernel, including causal diagnosis or generic quality review, goes to its repository owner. | Package scope; Addy routes at 30-36; current topology has no portable owner. | Add after audit defeated the former post-acceptance-only handoff. A regression-diagnosis case must leave repair authority unresolved; a generic review must not masquerade as conformance. |
| `SD-R11`, 36 | Accepted work needing integration mechanics goes to a local capability. | Local-authority invariant; Addy lines 37-42 and 187-192. | Preserve. The router names the handoff but does not prescribe provider or release policy. |
| `SD-R12`, 37 | Missing authority, evidence, or accountable judgment stops as unresolved. | Human authority and stop law; Addy confusion lines 63-73. | Preserve. The output must name the missing premise and next discriminator rather than choose the nearest label. |
| `SD-L07`, 39-40 | Inquiry is a recommendation unless explicitly entered; its own start contract controls. | Human-led inquiry contract. | Preserve. Autonomous or non-interactive premise gaps must stop rather than simulate an interview. |
| `SD-L08`, 42-44 | Exact mechanical direction can govern direct implementation when no consequential decision or verification burden remains. | Philosophy's ceremony prohibition; Addy mechanical/scope discipline. | Transform the comparator's default-spec rule. A rename and a solution-first boundary change must separate. |
| `SD-L09`, 46-48 | Overlap resolves to the earliest unsatisfied prerequisite; material ambiguity permits one discriminating question. | Obligation graph; Addy one-question confusion response. | Preserve. Multiple questions or arbitrary table-order selection fail. |
| `SD-L10`, 50-51 | Focused utilities own their complete standards; callers may state applicability and effect but cannot restate, weaken, or contradict them. | Single-owner theorem invariant. | Add relative to Addy to prevent local sibling duplication. Compare the handoff with each sibling's full return contract. |
| `SD-L11`, 53-63 | After one focused result, classify it as same-obligation continuation, handoff-ready, specification reopen, inquiry reopen, recorded human acceptance, or unresolved. | Reflexive delivery and stop/reopen law. | Preserve local semantics; transform phase completion. A new decision must reopen without automatically remediating. |
| `SD-L12`, 65-66 | The developer decides whether to follow, rebut, reopen, or accept. | Human judgment invariant; orchestration lines 78-93, 316-326. | Preserve. Agent self-approval or automatic next-hop invocation fails. |
| `SD-L13`, 68-73 | Delegate mandate/workpad creation or material repair; update ordinary continuity only for decision-bearing change; prohibit diaries, duplicate inquiry artifacts, and universal paths. | Approved `goal-formulation` boundary and philosophy economy. | Transform Addy's standing workflow artifacts. A no-change continuation must create nothing. |
| `SD-L14`, 75-83 | Report route evidence, governing artifact/current obligation, focused action, state/checkpoint, and one next discriminator or local handoff. | Evidence-grounding and human checkpoint obligations. | Preserve as the minimum observable handoff. Ceremony-matched headings without correct route evidence fail. |

Every nonblank runtime line is covered once by `SD-L01` through `SD-L14` and `SD-R01` through
`SD-R12`. The new `SD-R10` clause is the only runtime repair in this increment; it is owned by the
portable-boundary invariant rather than by comparator vocabulary.

#### Local specification: proposition-to-authority ledger

| ID and current SPEC lines | Proposition set | Authority, disposition, and observation |
| --- | --- | --- |
| `SD-S01`, 1-26 | Status, intent, scope, exclusions, and trigger constrain the router to genuinely unclear consequential delivery entry while excluding focused requests, autonomous lifecycle control, acceptance/integration authority, local policy, and project tracking. | Preserve from package scope and direct-invocation objection. Trigger and near-miss cases distinguish useful discovery from pure paraphrase. |
| `SD-S02`, 28-73 | The causal account states the phase/artifact/duplication/paraphrase problem; entry operation and observable wrongness; developer, repository, router, specialist, and human boundaries; prerequisite derivation; mechanical and local-capability exceptions; ambiguity/unresolved semantics; and defeaters. | Add as specification-expression repair derived from the accepted obligation graph and comparator objections. Causal-readiness must be able to reconstruct the thesis without inventing intent. |
| `SD-S03`, 75-85 | Delivery is an evidence-sensitive obligation graph, not a phase sequence; evidence can reopen earlier nodes and consequential transitions retain human judgment. | Preserve and transform Addy's lifecycle catalog under philosophy reflexivity. A later-looking artifact with an earlier premise gap must route backward. |
| `SD-S04`, 87-102 | Twelve route rows assign inquiry, invariants, causal grading, specification, continuity artifacts, architecture, implementation, conformance, claims/names, pre-acceptance local operations, accepted integration, and unresolved states to one owner with a required handoff. | Each row is governed and tested by `SD-R01` through `SD-R12`; `SD-R10` is the retained audit repair. A bidirectional owner census must find no listed owner without a condition and no declared condition without an owner. |
| `SD-S05`, 104-119 | Required behavior reads decision evidence, grounds claims, yields focused asks, selects one earliest route, preserves entry contracts, bypasses ceremony for mechanical work, asks one discriminator, returns after one result, reopens defeated intent, records only human acceptance, and routes integration outward. | Preserve as implementation obligations. These are not extra invariants; each implements one of the six retained properties. |
| `SD-S06`, 121-131 | Misroutes recover by reopening the defeated premise, returning expression-only defects to implementation after human direction, removing an unnecessary routing layer, or stopping unresolved. | Preserve from reflexive delivery. Reopen controls must reject automatic remediation and nearest-phase fallback. |
| `SD-S07`, 133-142 | Six invariants state positive property, illegal negation, enforcement boundary, and observation for route fidelity, focused ownership, reflexive checkpoint, proportional entry, portable boundary, and continuity economy. | Replace the former untestable bullets after invariant review. Fixed positive and single-defect controls must calibrate each semantic oracle before live results count. |
| `SD-S08`, 144-148 | `goal-formulation` exclusively creates or materially repairs the continuity pair; the router may update an existing workpad only after a decision-bearing change. | Preserve focused ownership. A ceremony-only case that creates a diary without changed state must fail. |
| `SD-S09`, 150-177 | Trigger, exclusion, and behavioral examples cover unclear coordination, explicit focused work, mechanical rename, owned draft, blacklist invariant, causal grading, requested conformance, diagnosis, generic review, reopen, and accepted integration. | Retain as scenario obligations, not evidence. The diagnosis and generic-review rows were added for `SD-R10`; unimplemented rows remain explicitly unautomated in the Promptfoo claim graph. |
| `SD-S10`, 179-195 | Lineage ties the contract to package authority and evidence; implementation decisions defend the name, prompt-router shape, currently implemented owner precondition, one-hop checkpoint, and no bundled reference. | Preserve with topology-completeness overclaim narrowed. The comparator ledger and live cases, not historical implementation, decide admission. |

Every nonblank line of the current local SPEC is assigned to `SD-S01` through `SD-S10`. This ledger
is maintenance evidence in the source record, not an additional self-governing SPEC clause.

#### Strongest-comparator ledger

| ID and source lines | Reconstructed proposition | Disposition and rationale |
| --- | --- | --- |
| `AO-01`, `using-agent-skills` 1-10 | A meta-skill discovers a phase-specific senior-engineering workflow. | Transform. Retain discovery; reject seniority and nominal phase as authority. `SD-L01` and `SD-L02` route by obligation evidence. |
| `AO-02`, 12-43 | The complete catalog routes: unknown intent to interview; rough ideas to refinement; features to specification; absent quality bars to constraints; specs to task planning; code to implementation plus UI/API/context/source/doubt specialists; tests to TDD/browser testing; breakage to debugging; review to quality plus simplification/security/performance; and Git, CI, migration, documentation, observability, and launch to their specialists. | Split and transform. Inquiry, specification, invariant, implementation, conformance, evidence, and naming operations map to focused plugin owners. Tactical planning, idea generation, UI/API/context work, diagnosis, generic review, security, performance, source control, CI, migration, docs, observability, browser mechanics, and launch remain local capabilities unless a later topology audit derives a portable owner. The former router omitted pre-acceptance local operations; `SD-R10` repairs that gap. |
| `AO-03`, 45-61 | Surface non-trivial requirement, architecture, and scope assumptions early; never fill ambiguity silently. | Preserve through `SD-L03`, `SD-L05`, `SD-L09`, and `SD-R12`. Reject the fixed output template as ceremony. |
| `AO-04`, 63-73 | Stop on inconsistency or unclear specification, name it, expose the tradeoff or question, and wait. | Preserve through the one-question/unresolved failure semantics. The local router first recovers repository-discoverable facts. |
| `AO-05`, 75-84 | Push back with a concrete downside and alternative, then honor informed human override. | Delegate concrete technical judgment to the focused or local owner; preserve conflict reporting and human decision authority in `SD-L12`. |
| `AO-06`, 86-95 | Prefer the simplest implementation that earns its complexity. | Delegate to implementation and local quality review. A routing skill cannot judge line-count or abstraction quality without stealing that boundary. |
| `AO-07`, 97-108 | Touch only requested scope; do not remove, refactor, delete, or add orthogonal behavior. | Preserve authorized actions in `SD-L03`; delegate repository mutation discipline to `specification-implementation`. |
| `AO-08`, 110-115 | Every skill verifies locally and every change also clears a standing Definition of Done. | Transform. Preserve claim-bound verification and applicable local acceptance standards; reject a universal portable checklist. See `AO-DOD`. |
| `AO-09`, 116-130 | Ten failure modes restate unchecked assumptions, unmanaged confusion, hidden inconsistency/tradeoff, sycophancy, complexity, scope creep/removal, specless building, and skipped verification. | Merge into `AO-03` through `AO-08`; route-only observations cover assumption, confusion, scope, authority, and evidence, while specialist behaviors remain delegated. |
| `AO-10`, 131-140 | Check for skills, treat their ordered workflows as mandatory, allow multi-skill sequences, and default non-trivial work to specification. | Split. Preserve focused-skill discovery and full specialist contracts; reject automatic ordering, multi-hop invocation, and default-spec routing when an earlier premise is missing or explicit direction already governs. |
| `AO-11`, 141-165 | A sixteen-step typical feature sequence exists, with observability partly parallel; small fixes may use a subset. | Transform into a prerequisite graph with optional entry and backward edges. Preserve the insight that work has dependencies and subsets; reject sequence position as evidence. |
| `AO-12`, 166-192 | The quick-reference table repeats all catalog owners by phase. | Merge into `AO-02`; the duplicate table adds navigation but no new router proposition. |
| `AO-DOD`, `definition-of-done` 1-67 | Task acceptance and a fixed project-wide completion bar are distinct; the bar covers runtime correctness, red/green tests, regressions, errors, code quality, scope, lint, integration, migration/config/compatibility, documentation, security, observability, rollback, and human approval, applied per task/feature/release without deadline drift. | Transform. The distinction survives as governing obligations plus applicable local standards at human acceptance. Each checklist item remains with its specification, verifier, repository policy, or specialist owner. Reject imposing the source project's fixed list on unrelated repositories; a green router cannot establish any of these outcomes. |
| `AO-O01`, `orchestration-patterns` 1-44 | The user orchestrates; direct invocation is the cheapest default; a saved single-persona command is valid only when it avoids repeated setup, and a command that merely decides a known persona is waste. | Preserve the objection as `SD-L06` and a router defeater. The local skill remains admissible only for genuinely unclear current obligations and must yield to a named operation. |
| `AO-O02`, 48-77 | Independent specialist reports may fan out with an explicit merge when independence, context isolation, merge size, and latency justify the cost. | Reject from this unit. Parallel report orchestration is a local capability and does not alter one-route delivery classification. |
| `AO-O03`, 78-94 | Dependent lifecycle work remains user-driven because human judgment between steps prevents summary loss, skipped checkpoints, and doubled paraphrasing cost. | Preserve intent in `SD-L02`, `SD-L11`, and `SD-L12`; transform slash-command mechanics into a harness-neutral one-hop return. |
| `AO-O04`, 96-173 | Research isolation, provider subagent/team mechanics, built-ins, frontmatter, and parallel invocation rules govern context and provider behavior. | Reject from the portable router unit as provider-specific orchestration, while leaving such capabilities local. |
| `AO-O05`, 174-280 | A worked competing-hypothesis debugging example distinguishes collaborative diagnosis from parallel verdict review and gives provider setup, execution, cleanup, cost, and exclusions. | Reject mechanics and personas from runtime. Retain only as evidence that causal diagnosis is a distinct pre-acceptance operation, now exposed by `SD-R10` pending its own topology audit. |
| `AO-O06`, 282-300 | A router persona that only selects a persona adds no domain value, paraphrases twice, duplicates known intent, and should be replaced by direct commands. | Preserve as the strongest router defeater. `SD-L06` defeats known-intent routing; route evidence, one focused hop, and no second persona distinguish the local contract from this anti-pattern. |
| `AO-O07`, 302-339 | Persona chaining, sequential paraphrasing orchestration, and deep trees lose context, hide cost, remove agency, and add no decision value; recommend follow-up and keep depth shallow. | Transform. The local router may apply one focused skill in the same context, then returns a result and next handoff without calling a second phase. Any autonomous second route fails. |
| `AO-O08`, 343-370 | Choose direct work for one perspective, user-driven sequence for dependent work, fan-out for independent work, and add a catalog pattern only after repeated real use with a concrete artifact, alternative failure, and anti-pattern. | Narrow to the user checkpoint and evidence burden. Orchestration-pattern admission itself remains local; the business theorem supplies the stronger clause-level admission law. |
| `DD-01`, DerivaDEX `dialectics` 1-16 | Architecture must originate in developer-owned premises; symptom, patch, convention, and polish can imitate reasoning; expose the gap before backward rationalization; then hand the owned chain to other skills. | Preserve the premise-gap discriminator but delegate the entire live operation to `dialectical-inquiry`. The router identifies the unmet obligation only. |
| `DD-02`, 18-43 | Trigger on missing causal premises and solution/symptom/convention-first requests; exclude mechanical, explanatory, discoverable-fact, and already-governed work; require a live user and narrow premise questions. | Transform into `SD-R01`, `SD-L07`, `SD-L08`, and `SD-L09`. Reject the local role name and provider tool rule. |
| `DD-03`, 44-234 | Hypothesize with numeric confidence, ask guessed premise questions, detect conclusion-before-premise reasoning, restate a posterior chain, confirm ownership, stop at a prediction threshold, and return named downstream routes. | Delegate the valid inquiry behavior to `dialectical-inquiry`; reject numeric confidence, fixed threshold, agent-led ownership confirmation, and source-local routes from the router. |
| `DD-04`, 236-285 | The retry/readiness example demonstrates that a flaky-test symptom and requested retry can hide a service-owned lifecycle invariant. | Preserve only the general solution-first near miss as a route discriminator; reject source domain nouns and the worked transcript from portable runtime. |
| `DD-05`, 287-293 | Planning, causal grading, invariant formulation, repository context recovery, and implementation have distinct handoffs. | Transform to the current focused skill names and outward local capability boundary in `SD-R01` through `SD-R10`. |
| `DD-06`, 295-337 | Rationalizations, red flags, and a verification checklist defend premise ownership, one-question interaction, no premature artifact, positive invariants, evidence limits, and owned handoffs. | Split: route-level stops survive in `SD-L03` through `SD-L12`; inquiry technique and verification details remain delegated. Reject numeric thresholds and mandatory ceremony. |

The comparator ledger covers every nonblank line in the complete comparator sources and the
complete directly referenced Definition of Done. Broad ranges are used only where one proposition
is repeated as a table, example, rationalization, provider mechanic, or checklist; every row or
example within the range is explicitly enumerated or assigned to the named owner above.

#### Sibling, caller, and evaluation audit

| Surface | Observation | Disposition |
| --- | --- | --- |
| Eleven sibling frontmatter descriptions | Every route in `SD-R01` through `SD-R09` matches the sibling's positive trigger and exclusions. `dialectical-inquiry` requires explicit sustained entry, so an unowned-premise route remains a recommendation. `conformance-review` excludes generic quality review. | Preserve focused routes; add the generic local-capability distinction in `SD-R10`. |
| `SOFTWARE-DELIVERY-SPEC.md`, README, plugin manifest, and skill-local lineage | The package specification assigns the router classification only; README and manifest expose it without a second procedure. | Preserve. No caller or registration edit is required by the bounded route addition. |
| Git history at `a7d52fe` and `5cb4b56` | The initial six-skill router later added six focused utilities and removed duplicated utility procedures. | Treat as implementation rationale, not authority. The history supports why delegation exists but not topology completeness. |
| Promptfoo configs, tests, assertions, rubrics, scripts, and results | The new router family calibrates nine fixed controls and defines six triplicated cases against current, pinned comparator, mechanical placebo, and no-skill conditions. | The fixed-output oracle calibration remains design evidence, but raw traces show the live conditions could load the installed Theaetetus plugin. All behavioral scores are invalid until calibration and the full family replay under the evaluation-owned Codex home. |

#### Invariant and causal-readiness disposition

Invariant review retains six properties in the skill SPEC: route fidelity, focused ownership,
reflexive checkpoint, proportional entry, portable boundary, and continuity economy. The former
bullet list was rejected because it omitted illegal states, enforcement boundaries, and
discriminating observations. “Read all files,” “choose one route,” and “report five fields” remain
implementation obligations rather than additional invariants.

Causal-readiness disposition: **conditional**. The router thesis follows from the accepted
obligation graph, developer authority, focused ownership, and human checkpoint premises. The Addy
router-persona objection is defeated structurally for explicit focused requests and one-hop returns,
but not yet behaviorally for unclear entry. Although the fixed-output router oracle passed 9/9, raw
execution traces show the live provider conditions were not isolated from the installed Theaetetus
plugin. The reported current, comparator, placebo, and no-skill scores are invalid and cannot support
either bounded conformance or the unnecessary-router null. Complete sibling return contracts,
architecture precedence, ambiguity, unavailable authority, continuity economy, post-focus
classification, and the portable-owner question for diagnosis and generic review remain open. The
next router discriminator is unchanged, but it follows isolated recalibration and full replay: require
repository evidence not supplied in the request and compare an applicable accepted architecture
record with a matched no-record case.

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
