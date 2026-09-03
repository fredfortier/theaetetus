<!-- markdownlint-disable MD013 -->

# Workpad: Theaetetus Software-Delivery Method

Status: the twelve-skill topology is implemented; this workpad now records the comparative audit
that must defeat or justify its current boundaries. It is research and design evidence, not runtime
authority. `PHILOSOPHY.md` and `SOFTWARE-DELIVERY-SPEC.md` govern the implemented package.

## The Theaetetus premise

Software development is an intellectual discipline before it is a production process. In this method, a program
commits particulars—values, states, transitions, effects, and failures—to universal claims expressed
as types, contracts, invariants, algorithms, and specifications. A developer entrusted with a
consequential change must therefore be able to state the causal account that makes those particulars
instances of the intended universal, expose what would defeat that account, and revise it when
reality answers otherwise. This package makes that classical discipline an explicit job requirement;
it does not translate the discipline into a procedure that lets the developer avoid mastering it.[^local-philosophy]

Dialectic is the instrument of that discipline. The developer is the questioner and epistemic owner.
The AI is a reliable but fallible oracle: it recovers evidence, answers directly, reconstructs
independently, attacks its favored account, and performs bounded mechanical work, but it never owns
the premises, admits the specification, or accepts the result. `Dialectical` belongs in a skill name
only when direct dialectical engagement is the skill's primary operation.[^inquiry-contract]

The software-delivery method follows from that allocation:

```text
developer-owned causal account
    -> governing specification as causal argument
    -> bounded implementation hypotheses
    -> observations at the responsible boundary
    -> bidirectional conformance
    -> accountable human judgment
```

This is an obligation graph, not a mandatory sequence. Work enters at the earliest unsatisfied
premise, skips obligations already established, and returns to inquiry or specification whenever
evidence defeats the account. A workpad, phase name, checklist, test, citation, or agent verdict is
useful only insofar as it makes a claim answerable to evidence.[^delivery-spec]

## The Addy Osmani method

Addy Osmani's `agent-skills` presents software delivery as a broad, phase-oriented catalog from
definition through launch. Its meta-skill selects applicable workflows; each workflow usually
supplies triggers, ordered steps, common rationalizations, red flags, and a verification checklist.
The full-feature path is sequential, while smaller tasks may select a subset, and human checkpoints
remain between dependent phases.[^addy-router]

Its epistemic unit is normally an operationally checkable particular: a confirmed intent restatement,
a written requirement, a task, a threshold, a failing test, a diff finding, a runtime observation, or
a launch gate. Ambiguity is managed by structured elicitation, defaults, staged artifacts, fresh
reviewers, and explicit exit checks. The package also contains real first-principles pressure—contract
first design, source verification, adversarial review, root-cause debugging, and behavior-first
testing—so it would be false to reduce it to empty checklist culture.[^addy-anatomy]

For this workpad, **postmodern** is an interpretive classification, not a claim about the author's
stated philosophy or motives. It names the mainstream software culture in which locally negotiated
intent, plural perspectives, pragmatic artifacts, and operational success can stand without a
developer first defending one universal causal account. **Classical** names the contrary requirement
that a valid solution be derived from stable objects, boundaries, causes, and invariants that remain
true across particulars. The tension is therefore not “process versus no process.” It is whether
process machinery may compensate for an operator who does not personally own the intellectual
discipline on which the software claim depends.

`interview-me` makes the contrast unusually visible. It requires the agent to propose a hypothesis,
attach a confidence number, ask one question at a time with a guess, and obtain explicit confirmation.
That is an effective anti-assumption interaction design. Yet it places the agent in the questioning
role and the developer mainly in the reacting and approving role. `dialectical-inquiry` reverses the
roles: the developer must originate the questions, reconstruct and revise the account in their own
terms, and use the oracle as an answerable object of inquiry. The change is justified on method
grounds, not stylistic preference: confirmation can establish assent to an artifact, whereas active
questioning and changed-case transfer provide observable evidence that the developer owns the
account.[^interview-me][^dialectical-inquiry]

## The defeater rule

The Addy package is the strongest external defeater in this audit. Its runtime design receives a
presumption of practical effectiveness because it combines exceptional adoption, extensive public
scrutiny, repeated maintenance, explicit trigger tests, and execution-trace evaluations. At the
inspected revision the local clone contains 458 commits, 139 commits touching `skills/`, one eval
case file for each of 25 skills, and a documented three-tier structural, routing, and behavioral
evaluation system. GitHub displayed roughly 80,900 stars and 8,700 forks when checked on
2026-09-03.[^addy-empirical]

Those observations prove scrutiny and adoption, not that every rule is true or that the package
improves human reasoning or delivery outcomes. They nevertheless reverse the ordinary adaptation
burden:

1. **Preserve exact intent by default.** A proven trigger, stop, safety boundary, failure mode, or
   verification relation survives unless it conflicts with approved local philosophy, assigns
   authority illegally, duplicates a single owner, or ceases to be portable.
2. **Defend every paraphrase.** Record the source proposition, the behavioral invariant that must
   survive, the exact incompatibility in its original form, and an evaluation that can distinguish
   the replacement from semantic weakening. “Local flavor” is not a reason.
3. **Defend every omission.** Show that another skill owns the behavior, that it is repository- or
   provider-specific, or that the behavior embodies a method the local philosophy rejects. Silence
   counts as an uncovered gap.
4. **Defend every addition.** Name a failure the upstream package does not prevent and show why the
   proposed behavior follows from the Theaetetus method rather than taste.
5. **Prefer delegation to duplication.** When a focused local utility owns evidence, naming,
   invariants, architecture conformance, or causal grading, an overlapping skill must invoke it and
   must not restate a weaker copy.

This standard replaces the former percentage weighting. Local philosophy governs the ends; Addy's
empirical runtime form defeats an untested local redesign of the means.

The defeater rule never overrides runtime purity. No distributed file under `skills/` may contain a
source-project name, link, path, role, provider, artifact convention, migration note, or unexplained
source-local vocabulary. Comparative evidence belongs only in top-level research and lineage
artifacts. A lexical scan is necessary but insufficient; every admitted skill must also make sense in
unrelated repositories. Likewise, no skill may acquire a `dialectical-` prefix unless conducting or
coaching dialectic is its primary runtime operation.[^delivery-spec]

## Loose equivalence map

“Equivalent” means nearest responsibility, not identical philosophy or full behavioral coverage.
`Partial` and `none` are findings, not invitations to pretend that a generic lifecycle skill covers
a specialist operation. Every Addy source below is pinned to the inspected commit.[^addy-pin]

| Addy skill | Nearest Theaetetus skill or boundary | Coverage | Principal difference or gap |
| --- | --- | --- | --- |
| [`api-and-interface-design`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/api-and-interface-design/SKILL.md) | `specification-development`, `invariant-formulation`, `architecture-conformance`, `naming-things` | Partial | Local skills derive contracts but do not supply portable API mechanics. |
| [`browser-testing-with-devtools`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/browser-testing-with-devtools/SKILL.md) | `specification-implementation`, `conformance-review` | Partial | Claim/evidence law exists; browser operation and evidence capture do not. |
| [`ci-cd-and-automation`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/ci-cd-and-automation/SKILL.md) | Local integration capability | None in plugin | Pipeline and deployment policy remain repository-specific. |
| [`code-review-and-quality`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/code-review-and-quality/SKILL.md) | `conformance-review`, focused utilities | Partial | Conformance is covered; general correctness, maintainability, security, and performance review are not. |
| [`code-simplification`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/code-simplification/SKILL.md) | No current owner | None | Behavior-preserving simplification is a distinct missing operation. |
| [`constraint-driven-development`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/constraint-driven-development/SKILL.md) | `invariant-formulation`, local policy | Partial | The plugin can formulate properties but does not choose project-wide thresholds or enforcement tools. |
| [`context-engineering`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/context-engineering/SKILL.md) | `software-delivery`, `evidence-grounding` | Partial | Both recover decisive context; no local skill authors agent context surfaces. |
| [`debugging-and-error-recovery`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/debugging-and-error-recovery/SKILL.md) | No current owner | None | Implementation can repair a known defect, but causal diagnosis has no focused owner. |
| [`deprecation-and-migration`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/deprecation-and-migration/SKILL.md) | `conformance-review`, local integration capability | Partial | Bidirectional authority review exists; migration lifecycle and consumer closure do not. |
| [`documentation-and-adrs`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/documentation-and-adrs/SKILL.md) | `architecture-conformance`, `evidence-grounding` | Partial | Decision authority and claim support exist; documentation authoring does not. |
| [`doubt-driven-development`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/doubt-driven-development/SKILL.md) | `dialectical-inquiry`, `causal-readiness-review`, `conformance-review` | Partial | Both seek defeaters; Addy materializes an isolated reviewer, while Theaetetus requires developer-led dialectic and human reconciliation. |
| [`frontend-ui-engineering`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/frontend-ui-engineering/SKILL.md) | Applicable stack or product capability | None in plugin | UI doctrine is outside the portable reasoning kernel. |
| [`git-workflow-and-versioning`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/git-workflow-and-versioning/SKILL.md) | Local integration capability | None in plugin | Source-control and release mechanics remain local. |
| [`idea-refine`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/idea-refine/SKILL.md) | `dialectical-inquiry`, `goal-formulation`, `specification-development` | Partial | Divergence/convergence is useful, but agent-generated variations cannot substitute for developer-owned premises. |
| [`incremental-implementation`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/incremental-implementation/SKILL.md) | `specification-implementation` | Strong | Both use bounded, verified changes; local routing additionally stops when meaning first appears in code. |
| [`interview-me`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/interview-me/SKILL.md) | `dialectical-inquiry` | Counterpart, not substitute | Same ambiguity boundary; opposite questioner and ownership allocation. |
| [`observability-and-instrumentation`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/observability-and-instrumentation/SKILL.md) | Specification verification obligations plus local capability | Partial | Evidence semantics exist; telemetry design and operations do not. |
| [`performance-optimization`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/performance-optimization/SKILL.md) | Applicable stack capability | None in plugin | The plugin can govern a performance obligation but does not own profiling mechanics. |
| [`planning-and-task-breakdown`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/planning-and-task-breakdown/SKILL.md) | `specification-development`, `specification-implementation`, `goal-formulation` | Partial | Dependency and verification planning survive; universal paths, task sizes, and files do not. |
| [`security-and-hardening`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/security-and-hardening/SKILL.md) | Applicable security or stack capability | None in plugin | Trust invariants route through the kernel; security doctrine must come from a specialist. |
| [`shipping-and-launch`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/shipping-and-launch/SKILL.md) | Local integration capability | None in plugin | Launch, rollback, and operational authority are deliberately excluded. |
| [`source-driven-development`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/source-driven-development/SKILL.md) | `evidence-grounding` | Strong but narrower/broader in different axes | Addy deeply verifies external canon; local grounding additionally separates repository authority, observation, inference, and permission. |
| [`spec-driven-development`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/spec-driven-development/SKILL.md) | `specification-development`, `software-delivery` | Strong counterpart | Both govern implementation with a spec; local sufficiency is causal rather than template- or phase-completion based. |
| [`test-driven-development`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/test-driven-development/SKILL.md) | Test-driven route embedded in `specification-implementation` | Strong behavior, weak boundary | The red/green invariant survives, but embedding a mature focused workflow burdens the implementation skill and weakens independent routing. |
| [`using-agent-skills`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/using-agent-skills/SKILL.md) | `software-delivery` | Strong counterpart | Both route; local routing selects an unsatisfied epistemic obligation rather than advancing a lifecycle phase. |

## Individual quality audit

The verdicts below judge runtime form and substantive survival separately. `Admit` means the package
has exposed a real missing capability; it does not authorize implementation without a focused SPEC.

| Addy skill | Runtime quality | What survives scrutiny | Method-grounded disposition |
| --- | --- | --- | --- |
| `api-and-interface-design` | Strong contracts and concrete misuse cases; too much TypeScript/REST doctrine in one portable surface. | Contract-first reasoning, observable compatibility, boundary validation, error and idempotency semantics. | Retain as obligations and route mechanics outward; consider a future interface-contract skill only with stack-neutral examples. |
| `browser-testing-with-devtools` | Strong operational and prompt-injection safety contract; tightly coupled to one browser tool. | Real-runtime observation, before/after evidence, console/network/accessibility checks, evidence isolation. | Preserve evidence relations; leave mechanics to a browser capability or admit a provider-neutral browser-conformance skill. |
| `ci-cd-and-automation` | Actionable and verifiable, but universal gate order, tools, timings, and deployment rules overclaim. | Automated repeatability, fail-closed gates, feedback loops, secret separation, rollback evidence. | Specialist only; repository authority must choose gates and rollout policy. |
| `code-review-and-quality` | Broad, highly practical review surface with explicit severities and remedies; mixes portable review law with local numeric heuristics. | Complete change context, multi-axis review, finding severity, evidence, dependency scrutiny, disagreement handling. | The current topology has a real general-review gap; derive a focused `change-review` candidate that delegates conformance and specialists. |
| `code-simplification` | Clear preconditions, bounded scope, behavioral preservation, and reversal rule; some numeric smells are heuristics. | Understand before editing, preserve behavior and errors, simplify incrementally, compare before/after. | Admit `code-simplification` as an independent candidate; no present skill owns this operation. |
| `constraint-driven-development` | Excellent anti-ratchet and anti-suppression mechanics; prescribes a universal artifact, defaults, and tool stack. | Explicit quality authority, measurable commands, diff guards, ratchets, owned exceptions, cost-aware placement. | Retain as local policy evidence; a portable admission would need to discover rather than create the governing quality surface. |
| `context-engineering` | Strong context-budget and confusion management; artifact templates risk becoming boilerplate authority. | Read local instructions, load only decisive context, separate stable from task context, stop when confused. | Fold routing principles into delivery and skill authoring; do not add a lifecycle phase merely for context loading. |
| `debugging-and-error-recovery` | Strong stop-the-line, reproduce/localize/fix/guard loop; symptom taxonomies can encourage pattern matching. | Preserve original evidence, form and test a causal thesis, make the smallest repair, retain regression evidence. | Admit a causal diagnosis skill, strengthened by known-passing-anchor evidence where available. |
| `deprecation-and-migration` | Strong consumer inventory, staged transition, telemetry, rollback, and deletion closure. | Compatibility is a consumer relation; removal requires observed migration and cleanup, not a warning alone. | Candidate after core gaps; must delegate authority/conformance and discover local release policy. |
| `documentation-and-adrs` | Useful decision-record and maintenance discipline; one fixed README/ADR shape cannot govern all repositories. | Record context, decision, alternatives, consequences, public contracts, and documentation verification. | Keep authoring outside the kernel; architecture conformance may classify records but must not author them. |
| `doubt-driven-development` | Sophisticated artifact/contract isolation, adversarial prompt, bounded loop, and reconciliation; fresh-agent orchestration is costly and can become a proxy for developer judgment. | Explicit claim, independent attack, issues-only search, bounded reconciliation, reviewer fallibility. | Preserve defeater-seeking in inquiry/readiness/review. Reject a mandatory fresh-reviewer trick where direct developer-led dialectic is required. |
| `frontend-ui-engineering` | Practical coverage of components, accessibility, responsive states, and runtime proof; stack and product choices are normative. | User-state completeness, accessibility obligations, design-system consistency, browser proof. | Specialist only. |
| `git-workflow-and-versioning` | Mature hygiene, atomicity, and release mechanics; broad triggers collide with repository-specific commit skills, and the suggested hard-reset recovery can destroy uncommitted work. | Inspect before mutation, preserve user work, atomic history, generated-file provenance, recoverable save points. | Local integration only; retain the invariants but reject destructive recovery as a default. |
| `idea-refine` | Concise divergent/convergent loop with assumption and non-goal output; agent-generated option volume can displace premise ownership. | Explore alternatives, expose assumptions, reject flattery, converge only after user reaction. | Use selectively inside developer-led inquiry; do not create a separate ideation gate in the kernel. |
| `incremental-implementation` | Strong thin-slice and verify-before-expanding discipline; file-count limits are proxies. | One bounded obligation at a time, working intermediate states, checkpoints, explicit completion evidence. | Already survives in `specification-implementation`; replace numeric sizing with semantic boundary and verification burden. |
| `interview-me` | Exceptionally polished interaction mechanics and stop conditions; confidence percentages and agent guesses simulate ownership rather than establish it. | One consequential question at a time, explicit assumptions, non-goals, refusal to accept vague delegation. | Replace the questioner allocation with `dialectical-inquiry`; retain the anti-batching and explicit-ambiguity lessons only where they do not make the oracle lead. |
| `observability-and-instrumentation` | Strong symptom-oriented telemetry and verification; prescriptive signal sets can outrun the system's causal model. | Instrument claims and failure modes, avoid sensitive data, connect signals to action, verify emitted evidence. | Specialist candidate only after the governing specification names operational obligations. |
| `performance-optimization` | Broad, measurement-first, before/after workflow with rollback; large embedded technique catalog taxes runtime focus. | Baseline, profile, isolate bottleneck, change one variable, compare under the same conditions. | Specialist only; preserve measurement discipline in verification. |
| `planning-and-task-breakdown` | Practical dependency graph, vertical slicing, collision-safe persistence, and human gate; universal file paths, checkpoint counts, and file limits are mechanical substitutes for semantic size. | Dependency ordering, independent verification, non-overwrite, working intermediate states, explicit risks. | Keep planning subordinate to the governing specification; size work by one coherent obligation, not approximate file count. |
| `security-and-hardening` | Extensive and safety-conscious threat-first reference; generic defaults cannot replace current security authority or stack canon. | Threat model before controls, trust-boundary validation, least privilege, secret discipline, adversarial verification. | Specialist only, routed by local doctrine. |
| `shipping-and-launch` | Strong rollout, observation, rollback, and go/no-go form; product and operational authority is irreducibly local. | Reversibility, staged exposure, named rollback triggers, monitoring window, accountable decision. | Local integration only. |
| `source-driven-development` | Strong primary-source workflow, version checks, and citation demand; “official source” alone can still be irrelevant to local intent. | Search primary canon, pin versions, cite claim-sized support, test examples against the repository. | Preserve through `evidence-grounding`; add external-version depth only if evaluations show the current utility is too shallow. |
| `spec-driven-development` | Strong pre-code gate, live spec, capability decomposition, and cross-skill routing; six mandatory areas and fixed filenames can make template completion masquerade as readiness. | Written authority before consequential code, surfaced assumptions, explicit scope, living change control, human admission. | Preserve through `specification-development`; causal readiness decides sufficiency, and the repository decides artifact shape. |
| `test-driven-development` | One of the strongest skills: stack discovery, RED/GREEN discipline, bug reproduction, test quality, and real-browser escalation; its statement that tests are proof overstates what an exercised observation establishes. | Same claim and same observation across red/green, causal failure check, smallest change, retained boundary-level guardrail. | Promote the embedded route to a focused `test-driven-development` skill, but preserve the local evidence/acceptance distinction; Addy and the local source independently defeat continued embedding. |
| `using-agent-skills` | Excellent catalog discoverability, exclusions, failure modes, and cross-skill handoffs; its typical lifecycle can be mistaken for a conveyor belt. | Check for focused skills, invoke only applicable owners, verify outcomes, keep humans between dependent transitions. | Preserve via `software-delivery`; route by unsatisfied obligation and never auto-advance. |

## What survives the Theaetetus method

The comparative result is not wholesale rejection. The strongest Addy forms survive almost intact:

- precise trigger and exclusion language;
- one focused owner per operation and explicit cross-skill delegation;
- ordered runtime procedures with named preconditions and stops;
- rationalization and red-flag defenses tied to observed failure modes;
- claim-sized verification rather than “looks right” completion;
- small reversible increments, real-runtime observations, and preserved user changes;
- human checkpoints between dependent judgments;
- progressive disclosure, portability awareness, trigger evaluation, and behavioral fixtures.

The regime changes only the point at which those forms obtain authority. A checklist does not create
an invariant; a threshold does not explain a boundary; a fresh reviewer does not own the developer's
judgment; a confidence percentage does not establish understanding; a template does not make a
solution follow from a problem. These mechanisms may expose or test the causal account after the
developer owns it. They may not replace ownership.

## Audit of the additional local source surface

All 63 immediate source-skill directories were censused by name, trigger description, and runtime
structure. The most plausible portable omissions were then read as operating contracts rather than
admitted mechanically. Project names, role titles, paths, providers, artifact conventions, and
stack doctrine remain quarantined outside `skills/`.[^source-census]

### Admission candidates

| Proposed name | Source evidence | Gap and method case | Priority |
| --- | --- | --- | --- |
| `test-driven-development` | [`ttd`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/ttd/SKILL.md) and Addy's skill | The current behavior is buried in `specification-implementation`. Two independent mature sources establish a focused red/green owner. Extracting it reduces the caller and improves direct routing without changing the invariant. | Admit next. |
| `regression-investigation` | [`anchored-debugging`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/anchored-debugging/SKILL.md) and Addy's debugging skill | No skill owns causal diagnosis. A known-passing revision is a prior premise that constrains the thesis; symptom text remains evidence, not cause. The proposed noun names the problem class and operation without importing the source metaphor. | Admit next. |
| `repository-explanation` | [`code-exegesis`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/code-exegesis/SKILL.md) | Evidence-grounding classifies claims but does not trace entrypoints, state ownership, data flow, terminal effects, active alternatives, and unknown intent into an explanation. The proposed name is plainer and accurately includes non-code repository facts. | High. |
| `change-review` | [`diff-review`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/diff-review/SKILL.md) and Addy's review skill | `conformance-review` deliberately excludes generic quality. A broader read-only review owner could resolve the complete surface, delegate conformance and specialist axes, and report correctness/maintainability findings without duplicating them. | High, after boundary SPEC. |
| `semantic-conflict-review` | [`semantic-conflict-watchdog`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/semantic-conflict-watchdog/SKILL.md) | Textually clean merges, rebases, cherry-picks, and reversions can violate established behavior. The cheap evidence-escalation pattern is distinct from ordinary diff review and diagnosis. `Review` names the read-only operation; `watchdog` is metaphorical and implies autonomous monitoring. | Medium. |
| `browser-conformance-review` | [`playwright-audit`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/playwright-audit/SKILL.md) and Addy's browser skill | Screenshots alone do not establish interactive, semantic, or same-run conformance. A provider-neutral contract could join visual evidence, execution trace, accessibility structure, and exact scenario authority. | Defer pending portability proof. |
| `deprecation-management` | Source [`implementation`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/implementation/SKILL.md), retirement law, and Addy's migration skill | Current conformance detects unauthorized residue but no portable owner inventories consumers, stages compatibility, observes migration, and proves deletion closure. | Defer until a non-release-specific contract exists. |

### Candidates not admitted

- `planning` and `implementation` are already represented by `specification-development`,
  `specification-implementation`, `causal-readiness-review`, and the focused utilities. Re-admission
  would recreate overlap.[^source-planning]
- `architecture`, `formulate-goal`, `formulate-invariants`, `posterior-analytics`,
  `evidence-grounding`, and `naming-things` already have normalized plugin equivalents with
  clause-level migration ledgers in `DERIVADEX-MIGRATION.md`.
- stack-development, language, framework, provider, Git hosting, commit, release, deployment,
  runbook, and live-operations skills own local mechanics or doctrine, not the portable SDLC kernel.
- `agents-md`, `monorepo-audit`, and `skill-writer` govern agent-package maintenance rather than the
  delivery of an application change. They may belong in another plugin surface, but not this one.
- `quiz` and meeting/session utilities do not fill a software-delivery obligation. The existing
  dialectical tutor coaches observable inquiry moves without turning professional mastery into an
  automated person-level grade.

## Revised topology judgment

The twelve implemented skills remain coherent, but the comparison defeats the claim that the
topology is complete. Three gaps are now strong enough to carry the burden for a future SPEC:

1. Extract `test-driven-development` from `specification-implementation`; the caller should route to
   it for behavioral red/green work and retain other verification mechanisms itself.
2. Add `regression-investigation` for causal diagnosis, including an optional known-passing-revision
   route. Diagnosis must precede authorization to repair.
3. Specify `change-review` as the general review coordinator while keeping `conformance-review`,
   architecture, evidence, naming, and future specialists as exclusive owners of their axes.

`repository-explanation` is also well-supported, but it is a knowledge operation adjacent to the
delivery kernel rather than a missing lifecycle gate. `code-simplification` is supported by Addy's
defeater even without a portable local-source counterpart and deserves its own subsequent admission
study. The remaining candidates require more evidence that a portable contract would outperform a
specialist route.

## Evaluation obligations created by this audit

The next iteration must test substance rather than vocabulary:

1. Run Addy and Theaetetus counterparts on matched tasks and compare admitted intent, authority,
   stops, mutations, evidence, and human decisions.
2. Give `interview-me` and `dialectical-inquiry` the same solution-first request. Test whether the
   developer can reconstruct, challenge, and transfer the resulting account—not merely confirm it.
3. Construct a procedural placebo with the same workpad, phases, and checklists but no independent
   reconstruction, defeater, or reopen behavior.
4. For every paraphrased upstream behavior, add a discriminator that would fail if the local wording
   weakened the source invariant.
5. Test each admission candidate in two unrelated repositories before placing source-specific
   language or mechanics under `skills/`.
6. Do not claim safer delivery, faster learning, or developer mastery from trigger or agent-trace
   evaluations. Those remain longitudinal human-study questions.[^claim-boundary]

## Implementation and migration state

The current branch already contains the approved philosophy, delivery specification, twelve focused
skills with separate runtime and lineage surfaces, cross-skill delegation, source quarantine, and a
source migration ledger. Structural validation, plugin validation, runtime-purity checks, fixture
preparation, Markdown checks apart from the repository's accepted line-length exception, and Git
whitespace checks passed on the implemented topology. These checks establish only their exercised
contracts; they do not discharge the comparative behavioral work above.

No source-repository retirement is authorized by this audit. Retirement still requires
equivalent-or-better clause coverage, installed replacement, route cutover, matched shadow evidence,
and atomic removal without compatibility aliases.[^retirement-law]

## Next discriminator

Write the focused SPEC for `test-driven-development` first. Map every behavior in the current
embedded route, the compact local-source workflow, and Addy's mature workflow; preserve the strongest
common invariant; explicitly reject only stack-specific or ownership-inverting mechanics; then run a
matched bug fixture against the embedded and extracted routes. If extraction does not improve direct
routing or preserve behavior exactly, the proposed topology change is defeated.

## Evidence notes

[^local-philosophy]: [PHILOSOPHY.md](PHILOSOPHY.md) is the approved local statement of developer
    ownership, oracle discipline, causal specification, reflexive delivery, verification, and
    bidirectional conformance. [WORKPAD.md, “Governing thesis”](WORKPAD.md#governing-thesis) limits
    the project's demonstrated claim to a first reviewable contribution.
[^inquiry-contract]: [`dialectical-inquiry/SPEC.md`](skills/dialectical-inquiry/SPEC.md) and
    [`dialectical-tutor/SPEC.md`](skills/dialectical-tutor/SPEC.md) define direct inquiry, human
    authorship, aporia, transfer, and the prohibition on person-level certification.
[^delivery-spec]: [SOFTWARE-DELIVERY-SPEC.md](SOFTWARE-DELIVERY-SPEC.md) governs the obligation graph,
    authority allocation, handoffs, stops, acceptance, and runtime purity.
[^addy-router]: Addy's pinned [`using-agent-skills`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/using-agent-skills/SKILL.md)
    defines the lifecycle catalog, subset routing, failure modes, and human checkpoints. Its
    [`orchestration-patterns.md`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/references/orchestration-patterns.md)
    explains why dependent phases retain human orchestration.
[^addy-anatomy]: Addy's pinned [`skill-anatomy.md`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/docs/skill-anatomy.md)
    explicitly requires actionable process, evidence, anti-rationalization, progressive disclosure,
    focused descriptions, and cross-skill delegation.
[^interview-me]: Addy's pinned [`interview-me/SKILL.md`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/interview-me/SKILL.md)
    supplies the hypothesis, confidence, guessed-question, restatement, confirmation, and stop
    mechanics described here.
[^dialectical-inquiry]: [`dialectical-inquiry/SKILL.md`](skills/dialectical-inquiry/SKILL.md) makes the
    human lead the questioning and requires human-authored synthesis, defeaters, changed-case
    transfer, and closure by ownership or precise aporia.
[^addy-empirical]: Repository observations were made against local commit
    [`d2c37ef6225dd8726cdd369a8030307f48592d26`](https://github.com/addyosmani/agent-skills/tree/d2c37ef6225dd8726cdd369a8030307f48592d26)
    with `git rev-list --count HEAD`, `git log --format='%H' -- skills | wc -l`, and a census of
    `evals/cases/*.json`. The pinned [`evals/README.md`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/evals/README.md)
    defines structural, lexical-routing, and execution-trace tiers and states their limits. The
    mutable [GitHub repository page](https://github.com/addyosmani/agent-skills) supplied the dated
    adoption counts; popularity is treated as scrutiny evidence, not outcome proof.
[^addy-pin]: All Addy runtime files in the equivalence and quality tables were read from local clone
    commit `d2c37ef6225dd8726cdd369a8030307f48592d26` (2026-08-28). The table links each full runtime
    source directly rather than relying on a secondary summary.
[^source-census]: The source census covered all 63 immediate directories under
    [`.agents/skills`](https://gitlab.com/dexlabs/derivadex/-/tree/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills)
    at commit `81650fee140c422b2c890436f0415e8ab3810fa5`; shortlisted portable contracts were inspected in
    full. This repository-specific evidence remains outside the distributed `skills/` tree.
[^source-planning]: The source [`planning`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/planning/SKILL.md)
    and [`implementation`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/implementation/SKILL.md)
    contracts are already mapped clause-by-clause in [DERIVADEX-MIGRATION.md](DERIVADEX-MIGRATION.md).
[^claim-boundary]: [PHILOSOPHY.md, “Evidence boundary”](PHILOSOPHY.md#evidence-boundary) explicitly
    withholds human learning, productivity, retention, and delivery-efficacy claims pending suitable
    evidence.
[^retirement-law]: The pinned source
    [skill charter](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/CHARTER.md#L148-180)
    requires equivalent-or-better replacement coverage and verified cutover; its
    [change protocol](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/CHARTER.md#L517-544)
    requires atomic removal without compatibility aliases.
