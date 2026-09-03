<!-- markdownlint-disable MD013 -->

# Workpad: A Dialectical SDLC for Theaetetus

Status: exploratory; not governing doctrine or an implementation specification.

This workpad proposes how Theaetetus could grow from two inquiry skills into a coherent,
portable SDLC skill package. It records source weights, tensions, candidate boundaries, a
DerivaDEX convergence plan, and the evidence required before any existing skill is retired.

## Mandate

The extension should make dialectical craft a continuous condition of professional software
development, not merely a discovery technique. The developer remains the epistemic owner and must
be able to externalize, test, revise, transfer, and defend the causal model that governs a change.
Codex should behave as a reliable but fallible oracle: it reconstructs independently, answers
substantively, distinguishes evidence from inference, attacks its own favored account, stops on
unowned decisions, and never converts fluent output into authority. This continues the approved
Theaetetus role allocation rather than replacing it.[^theaetetus-thesis]

The target is **only the portable SDLC kernel**. Repository law, stack doctrine, provider mechanics,
GitLab transport, release policy, and operating runbooks remain owned by the repository or a
specialist capability. DerivaDEX itself distinguishes SDLC procedure from stack doctrine and forbids
SDLC skills from selecting stack owners, primitives, lifecycle semantics, failure behavior, or proof
lanes.[^derivadex-classification]

## Authority and source weights

Weights govern synthesis when sources are compatible; they do not override the authority order.
An explicit user decision or approved local `SPEC.md` remains a veto, not one weighted vote.

| Weight | Source class | What it may decide here |
| --- | --- | --- |
| Veto | This mandate and future approved Theaetetus SPECs | Purpose, role allocation, package boundary, and acceptance standard. |
| 40% | Current Theaetetus thesis, skill SPECs, and runtime contract | Human ownership, oracle discipline, tutor limits, workpad provenance, closure, and evidence-claim boundary. |
| 30% | DerivaDEX AI-native and development handbooks | The desired flavor of specification authority, reflexive execution, DRI responsibility, and acceptance judgment. |
| 20% | Current DerivaDEX SDLC skills and their deliberate consolidation history | Tested candidate procedures, useful stop states, artifact boundaries, and migration obligations. |
| 10% | Addy Osmani's `agent-skills` package | Rough lifecycle routing, human-orchestrated handoffs, scope discipline, and verification cues only. |

The low upstream weight is deliberate. Its phase router is useful orientation, but its typical
sixteen-skill sequence and standing checklist do not establish local intent, and a fixed sequence
would conflict with Theaetetus's rule that dialectic is responsive rather than a state machine.[^addy-router][^addy-done]
**INFERENCE FROM HISTORY:** DerivaDEX also favors compression: in June 2026 it removed the large `comprehension`
and `planning-warden` surfaces while reframing planning around a smaller causal and invariant
kernel.[^derivadex-consolidation]

## Source synthesis

### What survives triangulation

1. **Architecture begins as human-owned judgment.** Theaetetus requires the human to own the
   proposition, revisions, and synthesis. DerivaDEX makes the same division operational: the SPEC
   makes reasoning reviewable, code executes approved reasoning, and AI owns neither.[^ownership-convergence]
2. **A SPEC is an argument and an authority boundary.** Its solution must follow from the problem,
   domain, evidence, boundary, and governing doctrine; tests and code can show implementation state
   but cannot authorize the architecture.[^spec-as-argument]
3. **The lifecycle is reflexive, not linear.** Execution returns evidence that may correct the
   implementation account or reopen the SPEC. A phase, checklist, green command, or report is not
   progress unless it discharges an obligation or improves the governing account.[^reflexive-loop]
4. **The human orchestrates consequential transitions.** Addy's portable orchestration guidance
   puts human judgment between dependent phases. DerivaDEX requires active DRI supervision and
   arbitration throughout execution. These sources support human checkpoints, not an autonomous
   lifecycle agent.[^human-orchestration]
5. **Proof belongs to the claim's real owner and lifecycle.** The narrowest useful test is one that
   discriminates the behavior claim at its owning boundary; passing adjacent or mock-only checks
   cannot settle a broader claim.[^owner-real-proof]
6. **Acceptance runs both directions.** Required intent must appear in repository facts, and every
   material changed fact must have authority. A one-way “acceptance criteria passed” check misses
   unauthorized additions and architectural meaning first introduced in code.[^bidirectional-conformance]
7. **Aporia and reopening are valid outcomes.** Missing evidence or an unowned architectural choice
   should stop delivery precisely, rather than be hidden by a plausible implementation.[^aporia]

### What does not survive

- A universal sequence of phase skills. It is useful as a discovery menu, not as a mandatory
  conveyor belt.
- A generic Definition of Done as sufficient acceptance authority. A standing quality floor may be
  locally useful, but it cannot replace task-specific causal obligations and owner-real proof.
- Agent-authored architecture followed by human approval. Approval of the oracle's prose does not
  demonstrate ownership.
- Numeric confidence, completion percentages, activity logs, and ritual status fields that cannot
  falsify an invariant or resolve an open premise.
- A single autonomous persona that discovers, specifies, implements, reviews, and declares its own
  work accepted.
- Portable rules for GitLab, releases, deployment, security policy, or a particular software stack.

## Proposed philosophy amendment

**PROPOSAL:** Add a future `PHILOSOPHY.md` whose central thesis is:

> Software delivery is a continuing dialectic between an owned account and the reality that can
> defeat it. The developer's work is to preserve that account's coherence as evidence changes;
> the oracle's work is to make the account more answerable to reality without taking ownership of
> it.

The philosophy should extend, not dilute, the existing thesis:

- **Dialectical mastery is a job requirement for the developer.** “Mastery” means observable
  performance in the work: state the governing account without borrowing oracle wording; separate
  authority, observation, inference, assumption, and unknown; derive the proposed change; produce a
  defeater or changed-case prediction; recognize evidence that reopens intent; and arbitrate whether
  proof discharges the obligation.
- **The plugin does not certify people.** The tutor continues to assess one visible move, never a
  personality, intelligence, level, or permanent mastery score. Hiring, role readiness, and
  performance judgment stay with accountable humans.[^tutor-boundary]
- **The oracle is reliable by discipline, not status.** “Oracle” never means authority. Reliability
  is an inspectable behavior contract: independent reconstruction, direct answer, provenance,
  disconfirmation, explicit uncertainty, bounded pressure, self-correction, and a stop on decisions
  the human must own.[^oracle-contract]
- **Mechanical work should be delegated.** Once intent constrains the valid outcome sufficiently,
  Codex should be free over reversible mechanical means. If a material architectural choice appears,
  that freedom ends and the account returns to dialectic.
- **No artifact proves understanding by existence.** A workpad, SPEC, test, diff, review, or citation
  matters only through the claim it makes reviewable or the defeater it rules out.

**TENSION TO RESOLVE IN THE FUTURE SPEC:** The current project defines success as a first reviewable
contribution and explicitly does not claim production independence or broad human-learning efficacy.
The SDLC extension must therefore describe a method and evaluation hypothesis, not claim that the
package already produces better engineers or safer delivery.[^claim-boundary]

## Proposed lifecycle kernel

This is an obligation graph, not a turn sequence. Nodes may be skipped for genuinely mechanical
work, revisited when evidence changes the account, or terminated in precise aporia.

```text
human-held purpose + repository evidence + governing doctrine
                         |
                         v
             inquiry: owned causal account
                         |
                         v
           specification: reviewable obligations
                         |
                         v
          execution: bounded change hypotheses
                         |
                         v
             proof: owner-real observations
                         |
                         v
       conformance judgment: accept | rebut | reopen
                         |
                         +-----------> inquiry/specification
```

### 1. Inquiry obligation

Use the existing `dialectical-inquiry` contract. The human supplies the subject, current model, and
questions; the oracle answers and pressures that model. The output is either a human-owned causal
account capable of transfer or a precise aporia. Preserve the existing prohibition on using this
skill for settled implementation.[^inquiry-boundary]

**Handoff:** a concise human-owned account containing purpose, domain primitives, decision boundary,
causal relations, relevant authority, invariants or invariant candidates, defeaters, unknowns, and
the concrete engineering consequence. The useful “posterior chain” from DerivaDEX may inform this
shape, but the agent-led interview, mandatory confidence number, and `95%` stop should not be copied
into Theaetetus.[^derivadex-posterior]

### 2. Specification obligation

Transform the owned account into the leanest governing SPEC surface. The oracle may recover facts,
propose candidate formulations, edit, and attack the argument. It must keep oracle-generated text
attributed until the developer can explain, revise, and use it. The final SPEC must make these
relations reviewable:

```text
problem + domain operation + authority + boundary + failure semantics
    -> architecture thesis + positive invariants + scope + proof obligations
```

A template must not determine the structure. An issue body may be the SPEC when it is sufficient; a
separate file is justified only when it reduces reviewer effort or the repository requires it. This
preserves DerivaDEX's lean artifact rule without making its GitLab path portable law.[^lean-spec]

**Gate:** the developer can defend each material claim, identify what would defeat it, and perform a
changed-case transfer. The oracle then attacks causal order, authority, boundary, invariant,
failure, scope, and proof. A human decision—not an agent verdict—admits the SPEC.

### 3. Execution obligation

Treat each bounded change as a hypothesis that a repository fact can directly express SPEC
authority. Before a material edit, the oracle must be able to state:

```text
SPEC obligation -> affected owner -> proposed repository fact -> discriminating proof
```

Codex may choose mechanical details that do not change system meaning. It must stop when execution
reveals ambiguity, a new boundary, failure behavior, trust decision, public contract, or proof
burden. New evidence may rebut the implementation hypothesis or reopen the SPEC; neither outcome is
failure.

**Gate:** the developer can explain why the change is entailed rather than merely plausible, and
the workpad records the newest decision-relevant evidence and next discriminator—not a progress
diary.

### 4. Proof obligation

For behavior changes, prefer a stable behavior claim, a narrow owner-real failing observation, the
smallest implementation that changes it, the same passing observation, and a retained regression
guardrail. DerivaDEX's `ttd` skill already states this compactly and stops when the owner, expected
failure, real proof lane, or acceptance oracle is unknown.[^ttd]

Proof is plural when the SPEC is plural: a unit test may prove a local transition, while a trace,
screenshot, migration exercise, runtime observation, or human review proves another obligation.
The portable skill must not choose a stack-specific proof lane.

**Gate:** for every material proof claim, name the obligation, owner, observation, competing
explanation ruled out, and known limit. Green output alone is an observation, not the acceptance
judgment.

### 5. Conformance obligation

Review in both directions:

```text
SPEC -> repository     detects omission and evidence gaps
repository -> SPEC     detects contradiction, unauthorized addition, and unowned interpretation
```

The reviewing oracle should seek concrete defeater paths and report its limits. The developer may
accept, rebut with grounded reasoning, reopen the account, or escalate for human arbitration. The
agent never converts its own report into merge authority.

### 6. Integration obligation

Commit mechanics, issue/MR updates, deployment, release, migration, observability, and operations are
repository- or provider-specific. The portable kernel hands its accepted SPEC mapping and proof
record to the selected local capability. It may verify that integration evidence exists when the
SPEC requires it; it must not invent a universal shipping policy.

## Proposed package shape

**PROPOSAL:** retain the two current skills and add four deliberately narrow skills.

| Skill | Responsibility | Must not own |
| --- | --- | --- |
| `dialectical-inquiry` | Human-led formation and testing of the causal model. | Settled implementation or autonomous delivery. |
| `dialectical-tutor` | Repair one observable lapse in the human's midwife craft. | Subject matter, person-level grading, or lifecycle control. |
| `dialectical-sdlc` | Meta-router, shared role contract, obligation graph, and handoff/reopen rules. | Automatic phase advancement or acceptance. |
| `dialectical-specification` | Turn an owned account into a lean SPEC; formulate invariants; adversarially audit readiness. | Inventing missing human-held premises or choosing repository mechanics. |
| `spec-governed-implementation` | Trace approved obligations into bounded edits, maintain the evidence ledger, and stop/reopen on drift. | Completing the SPEC or accepting its own work. |
| `dialectical-review` | Bidirectional conformance and defeater analysis over a SPEC, change surface, and proof record. | Remediation, merge authority, or stack doctrine. |

`dialectical-sdlc` should resemble the useful part of Addy's meta-skill: discover the current
obligation and route to a focused skill. It should follow Addy's stronger orchestration constraint
that dependent phases retain human judgment between them, while rejecting the fixed lifecycle as a
required path.[^addy-orchestration]

TDD should become a routed proof pattern within `spec-governed-implementation`, not a separate
top-level skill. Invariant formulation and posterior/spec auditing should become internal mandatory
routes of `dialectical-specification`; making them independent top-level skills invites the very
ritualized decomposition that DerivaDEX has already had to consolidate.

## Shared SDLC workpad

**PROPOSAL:** the extension should use one change-bound workpad linked to, but distinct from, a
subject inquiry workpad. Do not stretch the human-model ledger into an execution log.

```markdown
# Dialectical SDLC: <decision or change>

Status: inquiry | specification | execution | review | accepted | aporia | superseded

## Authority and owner
## Human-owned account
## Governing SPEC and obligations
## Invariants and proof owners
## Current implementation hypothesis
## Decision-relevant evidence
## Defeaters and competing explanations
## Open premises
## Next discriminator
## Acceptance judgment and limits
```

Status is navigational, not evidence of progress. Each update must change an obligation, confidence
in the account, a defeater, an open premise, or the next discriminating action. The workpad may link
to tests, logs, diffs, and reviews; it should not duplicate them or become a transcript.

**OPEN DESIGN QUESTION:** Should an owned inquiry be copied into the SDLC workpad or linked by
stable claim identifiers? Linking better preserves provenance; selective copying may improve
portability across issue trackers. The future SPEC should test both against resumption and drift
scenarios before deciding.

## DerivaDEX convergence and retirement map

No retirement is authorized by this workpad. DerivaDEX's own replacement law requires an
equivalent-or-better line-by-line coverage map, installed replacement, route cutover, and deletion in
the same change; any uncovered behavior defeats deletion.[^retirement-law]

| DerivaDEX skill | Proposed disposition | Replacement or residue | Retirement evidence required |
| --- | --- | --- | --- |
| [`dialectics`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/dialectics/SKILL.md) | **Retire** | `dialectical-inquiry` plus the decision-target handoff in `dialectical-sdlc`. | Preserve premise ownership, repo-fact recovery boundary, precise blocker, invariants/proof handoff, and interaction with planning; prove human-led behavior replaces agent-led interviewing without losing useful stops. |
| [`planning`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/planning/SKILL.md) | **Retire** | `dialectical-specification`; local GitLab capability supplies issue transport. | Cover context recovery, research, lean SPEC choice, causal derivation, citation routing, invariant formulation, audit dispositions, and tactical-plan boundary. |
| [`posterior-analytics`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/posterior-analytics/SKILL.md) | **Retire as a public route** | Mandatory causal-audit route inside `dialectical-specification` and `dialectical-review`. | Preserve argument-before-polish grading, defect classes, cargo-cult checks, and pass/conditional/revise/reject semantics without creating a second authority. |
| [`formulate-invariants`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-invariants/SKILL.md) | **Retire as a public route** | Mandatory invariant route inside `dialectical-specification`; reused by review. | Preserve positive, domain-native, refactor-stable invariants; illegal negation; enforcement/proof owner; and compression of blacklist guardrails. |
| [`implementation`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/implementation/SKILL.md) | **Retire** | `spec-governed-implementation`. | Preserve preconditions, direct authority trace, forbidden improvisation, reopen behavior, bidirectional drift vocabulary, and evidence-gap reporting. |
| [`ttd`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/ttd/SKILL.md) | **Retire** | Routed owner-real proof pattern inside `spec-governed-implementation`. | Preserve identical red/green claim, causal failure check, smallest change, refactor rerun, retained guardrail, and stop conditions. |
| [`formulate-goal`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-goal/SKILL.md) | **Retain pending scope split** | The SDLC theorem and evidence-ledger subset may converge later; autonomous or long-running goal contracts are not yet shown equivalent. | Inventory SDLC versus non-SDLC use cases; retire only the covered subset or the whole skill after all goal-lifecycle behaviors have an owner. |
| [`diff-review`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/diff-review/SKILL.md) | **Split, then retain a thin DerivaDEX adapter** | `dialectical-review` owns portable conformance; local adapter keeps stack-facet census, scheduled operation, GitLab report surfaces, and DerivaDEX doctrine routing. | Extract and test the portable kernel; demonstrate that local scripts, report persistence, stack ownership, and stop-gates still route exactly once. |
| [`evidence-grounding`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/evidence-grounding/SKILL.md) | **External dependency candidate** | Depend on one maintained shared skill rather than copying it into every repository. | Prove identical authority order, claim support, inline implementation evidence, footnote rules, and final gate; update every route atomically. |
| `architecture`, stack `*-development`, GitLab, commit, release, and runbook skills | **Retain locally or as specialist plugins** | These own repository law, stack choices, external-service mechanics, or operational policy outside the portable kernel. | No retirement unless a future candidate proves repository-specific decisions remain locally owned and every mechanics route remains complete. |

### Migration sequence

1. Freeze the current DerivaDEX candidate contracts at commit
   `81650fee140c422b2c890436f0415e8ab3810fa5` and create a clause-level capability ledger.
2. Write and approve `PHILOSOPHY.md` and a package-level SDLC SPEC before runtime skill edits.
3. Specify the four proposed skills, their shared vocabulary, artifacts, handoffs, stop conditions,
   and explicit non-ownership boundaries.
4. Extend the evaluation suite before implementation so ceremonial lifecycle routing cannot pass as
   dialectical competence.
5. Implement the plugin skills and run them in shadow against representative DerivaDEX feature,
   bug, incident, and review cases.
6. For each retirement candidate, map every current clause and scenario to an equivalent-or-better
   plugin behavior, an explicitly retained local owner, or a named gap.
7. Cut over one coherent slice at a time. Remove old routes and skills only in the same change that
   installs and enables their replacements; do not add compatibility aliases.
8. Audit DerivaDEX's complete skill routing and handbook references, then run repository-specific
   proof. Plugin conformance does not prove the local cutover.

## Evaluation plan

The current suite proves protocol behavior on frozen fixtures but not human learning or delivery
outcomes. The extension should retain that claim boundary and add tests in layers.[^current-evidence]

### A. Contract and routing tests

- Correctly distinguish mechanical tasks, active inquiry, specification work, governed
  implementation, conformance review, and repository-specific integration.
- Preserve the human/oracle/tutor boundaries across every handoff.
- Stop rather than infer when authority, owner, failure semantics, or proof oracle is missing.
- Reopen inquiry or specification when execution evidence defeats the governing account.

### B. Lifecycle case studies

Use multi-turn repository sandboxes for at least:

- a solution-first bug whose visible failure is downstream of the real owner;
- a feature with a public contract, failure semantics, and changed-case transfer;
- an incident where evidence changes the initial causal account during execution;
- a refactor that should remain mechanical and must not trigger unnecessary ceremony;
- a review containing both an omitted requirement and an unauthorized addition;
- a precise aporia where stopping is the only responsible result.

Each case must end in a reviewable artifact and bidirectional trace, not correct vocabulary alone.

### C. Matched procedural placebo

Create a lifecycle placebo that emits the same statuses, workpad headings, SPEC links, trace rows,
and verification markers but does not independently reconstruct, seek defeaters, preserve human
authorship, or reopen intent. If it passes a semantic case, the evaluation still rewards ceremony.
This extends the causal logic of the repository's current matched placebo.[^matched-placebo]

### D. Oracle reliability faults

Plant source errors, stale implementation evidence, seductive user framing, false green tests,
adjacent but non-owning proof, and implementation discoveries that require a new decision. Score
self-correction, provenance, stop/reopen behavior, and the developer's ability to challenge the
oracle.

### E. Human gate

Only human study can test whether developers acquire and retain the required dialectical craft.
Measure observable work products and transfer: independent model reconstruction, correction burden,
defeater quality, changed-case prediction, recognition of SPEC-reopening evidence, and review
judgment. The plugin and tutor must not convert these observations into an automated person-level
certification.

### F. DerivaDEX replacement proof

Before each retirement, run old and new routes on the same frozen task packets and compare:

- admitted and refused intents;
- authority and provenance decisions;
- artifacts created or modified;
- owner, invariant, and proof mapping;
- stop and reopen behavior;
- local handoffs and non-portable residue;
- false acceptance under an adversarial changed case.

Behavioral equivalence is necessary but not sufficient: the plugin replacement should be simpler in
public topology and preserve the stronger dialectical ownership model.

## Proposed implementation order

1. `PHILOSOPHY.md`: approve the dialectical SDLC thesis, human job requirement, oracle reliability
   contract, claim boundary, and portable/local split.
2. Package SDLC SPEC: approve the obligation graph, artifacts, vocabulary, routing law, and
   acceptance model.
3. `dialectical-specification`: it closes the current gap between owned inquiry and governed work.
4. `spec-governed-implementation`: it makes reopen-on-discovery operational.
5. `dialectical-review`: it completes the reverse argument and acceptance boundary.
6. `dialectical-sdlc`: add the meta-router only after the leaf contracts are real; otherwise the
   router would advertise an imaginary lifecycle.
7. Cross-skill and placebo evaluation.
8. DerivaDEX shadow runs, coverage ledgers, atomic cutovers, and retirement.
9. Documentation and human pilot, with efficacy claims still withheld until evidence exists.

## Open premises

- **Owner decision:** Is the plugin's primary unit a consequential *decision*, an issue/change, or a
  SPEC? “Decision” aligns with inquiry; issue/change aligns with delivery tooling.
- **Owner decision:** Must every material SDLC checkpoint require a new human-authored synthesis, or
  is a human-authored rebuttal/acceptance note sufficient once the governing model is already owned?
- **Research question:** Which observable behaviors distinguish professional dialectical mastery
  from one successful inquiry without creating a person-level score?
- **Design question:** How should the workpad preserve stable claim identity across inquiry, SPEC,
  code, proof, and review without becoming a traceability bureaucracy?
- **Migration question:** Which `formulate-goal` uses are truly SDLC, and which belong to persistent
  autonomous-goal management outside this package?
- **Integration question:** Should `evidence-grounding` ship inside this plugin, be a declared
  dependency, or remain an independently installed cross-cutting skill?

## Next discriminator

Draft the package-level SDLC SPEC from this workpad and test it against two frozen DerivaDEX cases:
one solution-first bug that should reopen intent and one already-owned mechanical change that should
bypass inquiry. If the same routing and artifact model handles both without ceremony or authority
leakage, the proposed four-skill topology is plausible. If it cannot, revise the topology before
writing runtime skills.

## Sources actually read

All repository links below identify the inspected state. DerivaDEX and Addy sources are pinned to
commits so later edits cannot silently change what this workpad claims they support.

[^theaetetus-thesis]: The governing project thesis defines the human-led role allocation, the
    reviewable-contribution boundary, and the distinction between runtime behavior evidence and
    human efficacy: [WORKPAD.md, “Governing thesis”](WORKPAD.md#governing-thesis).
[^derivadex-classification]: The DerivaDEX Charter defines `sdlc` as non-stack process work and
    forbids it from selecting stack ownership or semantics:
    [`.agents/skills/CHARTER.md` lines 19–39](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/CHARTER.md#L19-39).
[^addy-router]: Addy's meta-skill supplies a phase-oriented discovery tree and a typical lifecycle,
    while explicitly allowing smaller task-specific subsets:
    [`using-agent-skills/SKILL.md` routing lines 12–43](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/using-agent-skills/SKILL.md#L12-L43) and
    [lifecycle lines 131–192](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/using-agent-skills/SKILL.md#L131-L192).
[^addy-done]: Addy's standing Definition of Done is a project-wide checklist that complements
    task-specific acceptance criteria:
    [`definition-of-done.md` lines 1–59](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/references/definition-of-done.md#L1-L59).
[^derivadex-consolidation]: Commit `3fc32b27f0` removed the separate comprehension and
    planning-warden surfaces and reframed planning around posterior analysis and invariants:
    [DerivaDEX consolidation commit](https://gitlab.com/dexlabs/derivadex/-/commit/3fc32b27f05779a439240fefada54236a911a21a).
[^ownership-convergence]: Theaetetus assigns proposition, revision, and synthesis ownership to the
    human ([WORKPAD.md, “What dialectic means here”](WORKPAD.md#what-dialectic-means-here)); the
    DerivaDEX handbook states that the SPEC makes reasoning reviewable, code executes it, and AI owns
    neither ([`ai-native-team.md` lines 16–34](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/wiki/handbook/ai-native-team.md#L16-34)).
[^spec-as-argument]: The DerivaDEX handbook defines the SPEC as an argument whose claims must follow
    from problem, domain, evidence, and doctrine, then makes it the acceptance standard:
    [`ai-native-team.md` lines 88–100](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/wiki/handbook/ai-native-team.md#L88-100).
[^reflexive-loop]: The Development Charter treats every phase as a revisable hypothesis and rejects
    phases, tests, reports, and activity as proof without a discharged obligation or improved
    account: [`Development-Charter.md` lines 105–130](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/wiki/handbook/Development-Charter.md#L105-130).
[^human-orchestration]: Addy's orchestration catalog makes the user the orchestrator for dependent
    lifecycle phases ([`orchestration-patterns.md` lines 78–93](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/references/orchestration-patterns.md#L78-L93)); DerivaDEX assigns the DRI active model ownership and acceptance judgment ([`Development-Charter.md` lines 83–92](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/wiki/handbook/Development-Charter.md#L83-92)).
[^owner-real-proof]: DerivaDEX's compact TTD workflow binds the behavior claim, expected failure,
    implementation, and retained guardrail to the real owner and proof lane:
    [`.agents/skills/ttd/SKILL.md` lines 8–34](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/ttd/SKILL.md#L8-34).
[^bidirectional-conformance]: The implementation contract requires both `SPEC -> repository` and
    `repository -> SPEC` audits and classifies untraced material as drift:
    [`.agents/skills/implementation/SKILL.md` lines 76–131](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/implementation/SKILL.md#L76-131).
[^aporia]: The inquiry contract accepts precise aporia and requires it to name the blocking premise
    and next discriminating evidence: [`dialectical-inquiry/SKILL.md`, “Close only with ownership or aporia”](skills/dialectical-inquiry/SKILL.md#close-only-with-ownership-or-aporia).
[^tutor-boundary]: The approved tutor SPEC prohibits numerical scores, levels, personality labels,
    and mastery certification while allowing behavior-specific calibration:
    [`dialectical-tutor/SPEC.md`, “Role contract”](skills/dialectical-tutor/SPEC.md#role-contract).
[^oracle-contract]: The oracle reference requires independent reconstruction, disconfirming
    evidence, epistemic labels, direct answers, revision conditions, and explicit self-correction:
    [`oracle-discipline.md`](skills/dialectical-inquiry/references/oracle-discipline.md).
[^claim-boundary]: The current project explicitly limits its evidence claim to a first reviewable
    contribution and reserves human learning, productivity, and retention for longitudinal study:
    [WORKPAD.md, “Success boundary”](WORKPAD.md#success-boundary).
[^inquiry-boundary]: The approved inquiry SPEC excludes mechanical changes, implementation under an
    owned SPEC, and autonomous runs:
    [`dialectical-inquiry/SPEC.md`, “Scope”](skills/dialectical-inquiry/SPEC.md#scope).
[^derivadex-posterior]: DerivaDEX's dialectics skill outputs a confirmed posterior chain but obtains
    it through agent-led premise questions, numeric confidence, and a `95%` stop:
    [`.agents/skills/dialectics/SKILL.md` lines 44–82 and 157–234](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/dialectics/SKILL.md#L44-82).
[^lean-spec]: DerivaDEX planning treats the issue description or a linked document as the one
    governing SPEC concept and admits a separate file only when needed:
    [`.agents/skills/planning/SKILL.md` lines 119–149](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/planning/SKILL.md#L119-149).
[^ttd]: The exact red/green/refactor/guardrail procedure and its stop state are defined in the
    current DerivaDEX TTD skill:
    [`.agents/skills/ttd/SKILL.md` lines 13–34](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/ttd/SKILL.md#L13-34).
[^addy-orchestration]: Addy's catalog says dependent phases benefit from human judgment between
    steps and warns that an LLM lifecycle orchestrator can skip those checkpoints:
    [`orchestration-patterns.md` lines 78–93](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/references/orchestration-patterns.md#L78-L93).
[^retirement-law]: DerivaDEX requires equivalent-or-better coverage, an exact replacement route,
    verified installation, and deletion only after every behavior and failure mode is covered:
    [`.agents/skills/CHARTER.md` lines 148–180](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/CHARTER.md#L148-180). Its change protocol also requires an atomic cutover without compatibility aliases:
    [`.agents/skills/CHARTER.md` lines 517–544](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/CHARTER.md#L517-544).
[^current-evidence]: The project records automated protocol success but keeps human productivity as
    an open research gate: [WORKPAD.md, opening status and governing thesis](WORKPAD.md#governing-thesis).
[^matched-placebo]: The current evaluation uses a matched procedural placebo to test whether visible
    ceremony alone explains semantic success:
    [README.md, “Evaluation as a causal argument”](README.md#evaluation-as-a-causal-argument).
