<!-- markdownlint-disable MD013 -->

# Workpad: SDLC Extension for Theaetetus

Status: topology implemented; governing authority now resides in `PHILOSOPHY.md`,
`SOFTWARE-DELIVERY-SPEC.md`, and the twelve skill-local specifications. Behavioral evaluation and
source-repository migration remain open.

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

**RUNTIME PURITY INVARIANT:** Source projects inform this research; they must never become runtime
context. No file distributed under `skills/` may name DerivaDEX, link to it, reproduce its paths or
artifact conventions, address one of its roles, or depend on its vocabulary. This applies to every
`SKILL.md`, `SPEC.md`, reference, asset, example, agent prompt, schema, and embedded template—not
only to user-visible prose. Source comparison and migration evidence must remain outside the skill
tree.

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
   puts human judgment between dependent phases. The local handbook assigns active supervision and
   arbitration to its named human role. The portable conclusion is only that an accountable human
   remains active between dependent transitions—not that the source project's role name or operating
   model belongs in a skill.[^human-orchestration]
5. **Verification must reach the responsible boundary.** The narrowest useful test is one that
   discriminates the behavior claim at the boundary responsible for it; passing adjacent or
   mock-only checks cannot settle a broader claim.[^owner-real-proof]
6. **Acceptance runs both directions.** Required intent must appear in repository facts, and every
   material changed fact must have authority. A one-way “acceptance criteria passed” check misses
   unauthorized additions and architectural meaning first introduced in code.[^bidirectional-conformance]
7. **Aporia and reopening are valid outcomes.** Missing evidence or an unowned architectural choice
   should stop delivery precisely, rather than be hidden by a plausible implementation.[^aporia]

### What does not survive

- A universal sequence of phase skills. It is useful as a discovery menu, not as a mandatory
  conveyor belt.
- A generic Definition of Done as sufficient acceptance authority. A standing quality floor may be
  locally useful, but it cannot replace task-specific causal obligations and verification at the
  responsible boundary.
- Agent-authored architecture followed by human approval. Approval of the oracle's prose does not
  demonstrate ownership.
- Numeric confidence, completion percentages, activity logs, and ritual status fields that cannot
  falsify an invariant or resolve an open premise.
- A single autonomous persona that discovers, specifies, implements, reviews, and declares its own
  work accepted.
- Portable rules for GitLab, releases, deployment, security policy, or a particular software stack.
- Source-project nouns presented as universal concepts. `DRI`, `Blueprint`, pod/shift language,
  repository paths, issue identifiers, route names, drift taxonomies, and branded process labels
  must not appear in the skills merely because they occurred in useful source material.

## Runtime purity and vocabulary quarantine

The plugin needs concepts, not borrowed dialect. Research must translate every admitted source idea
into domain-neutral language before runtime authoring.

`Dialectical` is not a package prefix. Use `dialectic` or `dialectical` in a skill name only when
the skill's primary runtime function is to conduct dialectic or coach the human's dialectical craft.
Do not attach it to routing, specification, implementation, verification, review, or integration
skills merely to signal philosophical affiliation. Such naming obscures the actual trigger and turns
a precise method into branding.

| Source-local expression | Portable concept, if retained | Runtime rule |
| --- | --- | --- |
| A project or company name | None | Omit completely. |
| `DRI`, Tech Lead, or another local title | Accountable human, developer, reviewer, or decision owner | Use the narrowest ordinary role required by the interaction. |
| Blueprint, uppercase `SPEC` in prose, or a fixed issue/file convention | Governing specification | Use the canonical term in runtime prose and discover the repository's artifact. Reserve `SPEC.md` for this package's established maintenance-file convention; never prescribe it as a target-repository path. |
| Pod, shift, issue IID, branch convention, or GitLab surface | Repository-specific operating mechanism | Route outward to local instructions or a specialist capability. |
| Stack doctrine or a named `*-development` route | Applicable repository and domain instructions | Obey discovered authority without copying its taxonomy. |
| Posterior chain or a named readiness engine | Causal account and adversarial specification review | Describe the epistemic function, not the source implementation. |
| Owner-real proof | Verification evidence at the boundary responsible for the claimed behavior | State the relation in ordinary language; do not preserve the slogan. |
| Source-specific drift classes | Missing, contradictory, extra, or ambiguously interpreted behavior | Use plain findings unless a target repository supplies its own taxonomy. |

The blacklist is illustrative, not complete. A runtime author must ask whether a term would make
sense in an unrelated repository with no access to the research corpus. If not, the term is either
translated into a portable relation or omitted.

### Purity gate

Before any skill is accepted:

1. Scan every distributed file under `skills/` for source names, URLs, repository paths, local role
   titles, local artifact names, route names, and copied phrases.
2. Review semantically for renamed jargon; a lexical scan cannot detect a source-specific concept
   hidden behind a generic label.
3. Keep source citations, clause-coverage ledgers, and retirement reasoning in top-level research or
   migration artifacts outside `skills/`.
4. Exercise each skill in at least two unrelated repository fixtures. A prompt or output that assumes
   one issue tracker, role hierarchy, branch model, file layout, stack taxonomy, or release process
   fails portability.
5. Treat any source-project name or unexplained source-local term found under `skills/` as a blocking
   defect, even when it appears only in a maintenance SPEC, example, comment, or test prompt stored
   with the skill.
6. Reject any skill name containing `dialectic` or `dialectical` unless direct dialectical engagement
   is its primary purpose and its runtime contract actually performs that function.

## Proposed philosophy amendment

**PROPOSAL:** Add a future `PHILOSOPHY.md` whose central thesis is:

> Software delivery is a continuing dialectic between a developer's causal account and the reality
> that can defeat it. The developer's work is to preserve that account's coherence as evidence
> changes; the oracle's work is to make the account more answerable to reality without taking ownership of
> it.

The philosophy should extend, not dilute, the existing thesis:

- **Dialectical mastery is a job requirement for the developer.** “Mastery” means observable
  performance in the work: state the governing account without borrowing oracle wording; separate
  authority, observation, inference, assumption, and unknown; derive the proposed change; produce a
  defeater or changed-case prediction; recognize evidence that reopens intent; and arbitrate whether
  verification evidence satisfies the obligation.
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
- **No artifact proves understanding by existence.** A workpad, governing specification, test,
  change, review, or citation matters only through the claim it makes reviewable or the defeater it
  rules out.

**TENSION TO RESOLVE IN THE FUTURE SPECIFICATION:** The current project defines success as a first
reviewable contribution and explicitly does not claim production independence or broad
human-learning efficacy. The delivery extension must therefore describe a method and evaluation
hypothesis, not claim that the package already produces better engineers or safer delivery.[^claim-boundary]

## Proposed lifecycle kernel

This is an obligation graph, not a turn sequence. Nodes may be skipped for genuinely mechanical
work, revisited when evidence changes the causal account, or terminated in precise aporia.

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
     implementation: bounded change hypotheses
                         |
                         v
       verification: responsible observations
                         |
                         v
       human judgment: accept | rebut finding | reopen specification
                         |
                         +-----------> inquiry/specification
```

### 1. Inquiry obligation

Use the existing `dialectical-inquiry` contract. The human supplies the subject, current model, and
questions; the oracle answers and pressures that model. The output is either a human-owned causal
account capable of transfer or a precise aporia. Preserve the existing prohibition on using this
skill for settled implementation.[^inquiry-boundary]

**Handoff:** a concise developer-owned causal account containing purpose, domain primitives, decision boundary,
causal relations, relevant authority, invariants or invariant candidates, defeaters, unknowns, and
the concrete engineering consequence. The useful “posterior chain” from DerivaDEX may inform this
shape, but the agent-led interview, mandatory confidence number, and `95%` stop should not be copied
into Theaetetus.[^derivadex-posterior]

### 2. Specification obligation

Transform the causal account into the leanest governing specification. The oracle may recover
facts, propose candidate formulations, edit, and attack the argument. It must keep oracle-generated
text attributed until the developer can explain, revise, and use it. The final specification must
make these relations reviewable:

```text
problem + domain operation + authority + boundary + failure semantics
    -> architecture thesis + positive invariants + scope + verification obligations
```

A template must not determine the structure. An issue body may be the governing specification when
it is sufficient; a separate file is justified only when it reduces reviewer effort or the
repository requires it. This preserves DerivaDEX's lean artifact rule without making its GitLab
path portable law.[^lean-spec]

**Gate:** the developer can defend each material claim, identify what would defeat it, and perform a
changed-case transfer. The oracle then attacks causal order, authority, boundary, invariant,
failure, scope, and verification. A human decision—not an agent verdict—admits the specification.

### 3. Implementation obligation

Treat each bounded change as a hypothesis that a repository fact can directly express an obligation
from the governing specification. Before a material edit, the oracle must be able to state:

```text
specification obligation -> responsible boundary -> proposed repository fact
    -> discriminating verification
```

Codex may choose mechanical details that do not change system meaning. It must stop when implementation
reveals ambiguity, a new boundary, failure behavior, trust decision, public contract, or
verification burden. New evidence may rebut the implementation hypothesis or reopen the
specification; neither outcome is failure.

**Gate:** the developer can explain why the change is entailed rather than merely plausible, and
the workpad records the newest decision-relevant evidence and next discriminator—not a progress
diary.

### 4. Verification obligation

For behavior changes, prefer a stable behavior claim, a narrow failing observation at the boundary
responsible for the behavior, the smallest implementation that changes it, the same passing
observation, and a retained regression guardrail. DerivaDEX's `ttd` skill already states this
compactly and stops when the owner, expected failure, real proof lane, or acceptance oracle is
unknown.[^ttd]

Verification is plural when the specification has multiple obligations: a unit test may verify a
local transition, while a trace, screenshot, migration exercise, runtime observation, or human
review may verify another obligation. The portable skill must not choose a stack-specific
verification mechanism.

**Gate:** for every material verification claim, name the obligation, responsible boundary,
observation, competing
explanation ruled out, and known limit. Green output alone is an observation, not the acceptance
judgment.

### 5. Conformance obligation

Review in both directions:

```text
specification -> repository     detects omission and evidence gaps
repository -> specification     detects contradiction, extra behavior, and unowned interpretation
```

The reviewing oracle should seek concrete defeater paths and report its limits. The developer may
accept, rebut with grounded reasoning, reopen the governing specification, or escalate for human arbitration. The
agent never converts its own report into merge authority.

### 6. Integration obligation

Commit mechanics, issue/MR updates, deployment, release, migration, observability, and operations are
repository- or provider-specific. The portable kernel hands its accepted specification mapping and
verification record to the selected local capability. It may verify that integration evidence
exists when the specification requires it; it must not invent a universal shipping policy.

## Semantic naming decisions

The audience is mixed: developers invoking skills, maintainers evolving the package, and reviewers
reading durable artifacts. Skill names are public module names, so each must identify one primary
operation and remain distinguishable when installed beside unrelated skills.

### Skills

| Chosen name | Exact referent | Semantic disposition |
| --- | --- | --- |
| `dialectical-inquiry` | A live inquiry in which the human questions and tests a fallible oracle. | **Keep.** Consistent with the established skill; the adjective names its primary method rather than package affiliation. |
| `dialectical-tutor` | Coaching the human's technique during or in preparation for dialectical inquiry. | **Keep.** Distinguishable from subject tutoring; direct dialectical coaching is its primary purpose. |
| `software-delivery` | The meta-skill that identifies the current delivery obligation and routes to the responsible skill. | **Choose over `sdlc`.** Expands the acronym, names the full workflow scope, and avoids pretending that routing itself is dialectic. |
| `specification-development` | Developing, repairing, and assessing a governing specification from an owned causal account. | **Choose over `specification`.** The second noun distinguishes the activity from the artifact and from implementation. |
| `specification-implementation` | Implementing obligations already established by a governing specification. | **Choose over `spec-governed-implementation`.** Uses the same canonical `specification` term, removes an abbreviation, and names the externally relevant operation rather than its enforcement mechanism. |
| `conformance-review` | Reviewing the two-way correspondence between a governing specification, repository changes, and verification evidence. | **Keep.** `Conformance` distinguishes it from general code review; `review` identifies the operation. |

Rejected names must not survive as aliases. `dialectical-sdlc`, `dialectical-specification`, and
`dialectical-review` misuse the method as branding. `sdlc` hides the scope behind an acronym.
`specification` names an artifact rather than the skill's operation. `spec-governed-implementation`
mixes an abbreviation with an implementation-detail adjective.

### Durable artifacts

| Chosen name | Exact referent | Semantic disposition |
| --- | --- | --- |
| `PHILOSOPHY.md` | Stable project beliefs about human ownership, dialectical craft, and the oracle's role. | **Keep.** The name matches the normative and conceptual content; it must not carry procedures or migration state. |
| `SOFTWARE-DELIVERY-SPEC.md` | The approved package-level contract for the portable delivery workflow. | **Choose.** `SOFTWARE-DELIVERY` names the governed scope; `SPEC` matches the repository's established governing-document convention. |
| `SOFTWARE-DELIVERY-SOURCES.md` | Source adjudication and source-to-portable translation for the delivery extension. | **Choose.** It is distinguishable from the existing inquiry-focused `RESEARCH.md` and states that it contains evidence, not runtime law. |
| `DERIVADEX-MIGRATION.md` | The target-specific coverage ledger and retirement plan for the DerivaDEX cutover. | **Choose.** Naming the target is required here because the artifact is intentionally project-specific and remains outside `skills/`. |
| `SDLC.md` | This explicitly requested exploratory workpad. | **Keep until superseded.** It records unsettled design work; it must not become runtime authority merely because its name is broad. |
| Delivery workpad | A repository-resolved mutable record for one software change from active inquiry through acceptance. | **Choose as the canonical concept.** Do not prescribe a universal filename or path; the target repository owns those mechanics. |

The selected names pass the naming criteria as follows:

| Name | Consistency | Distinguishability | Understandability | Conciseness |
| --- | --- | --- | --- | --- |
| `dialectical-inquiry` | Pass: established project term. | Pass: distinct from tutoring and delivery work. | Pass: names method and activity. | Pass: both words discriminate. |
| `dialectical-tutor` | Pass: paired with inquiry. | Pass: distinguishes technique coaching from subject tutoring. | Pass: names method and role. | Pass: both words discriminate. |
| `software-delivery` | Pass: domain noun phrase. | Pass: distinct from any one phase skill. | Pass: expands the workflow scope. | Pass: `workflow` would be redundant for a skill. |
| `specification-development` | Pass: reuses the canonical artifact term. | Pass: distinct from implementation. | Pass: covers creation, repair, and maturation. | Pass: the second noun is necessary. |
| `specification-implementation` | Pass: paired with specification development. | Pass: names the implementation boundary explicitly. | Pass: means implementing the specification's obligations. | Pass: no enforcement mechanism appears in the name. |
| `conformance-review` | Pass: uses the canonical relation. | Pass: distinct from generic code review. | Pass: names both object of judgment and operation. | Pass: neither noun is redundant. |
| `PHILOSOPHY.md` | Pass: follows top-level document style. | Pass: distinct from research and governing procedure. | Pass: names stable beliefs. | Pass. |
| `SOFTWARE-DELIVERY-SPEC.md` | Pass: follows the repository's `SPEC.md` convention. | Pass: scoped against skill-level specifications. | Pass: names scope and authority type. | Pass: scope is necessary at repository root. |
| `SOFTWARE-DELIVERY-SOURCES.md` | Pass: paired with the delivery specification. | Pass: distinct from inquiry research. | Pass: names scope and evidentiary function. | Pass: both qualifiers prevent collision. |
| `DERIVADEX-MIGRATION.md` | Pass: target plus operation. | Pass: cannot be mistaken for portable doctrine. | Pass: names the exact migration. | Pass: the target is necessary. |
| `SDLC.md` | Pass by explicit owner instruction. | Pass while it remains the sole exploratory SDLC workpad. | Pass for the engineering audience. | Pass: the acronym is established by the mandate. |
| Delivery workpad | Pass: extends the established workpad concept. | Pass: distinct from the inquiry workpad. | Pass: names lifecycle and artifact. | Pass: no filename is imposed. |

### Controlled vocabulary

Use one term for each live concept in all new skills and artifacts:

| Canonical term | Meaning | Excluded synonyms or overloads |
| --- | --- | --- |
| `developer` | The human who owns the causal account and directs the change. | Do not import organizational titles. |
| `oracle` | The fallible AI role that answers, reconstructs, challenges, and exposes uncertainty. | Never use as a synonym for authority or acceptance. |
| `causal account` | The developer's current explanation of the relevant objects, boundaries, relations, and consequences. | Do not alternate with model, thesis, mental model, or posterior when the same referent is meant. |
| `governing specification` | The accepted artifact that authorizes and constrains implementation. | Do not alternate with Blueprint, uppercase `SPEC`, design, plan, or requirements when the same referent is meant. |
| `obligation` | One behavior, invariant, boundary, or outcome the implementation must satisfy. | Do not use task, criterion, or checkbox interchangeably. |
| `verification` | The act of collecting and evaluating observations against an obligation. | Reserve `proof` for formal proof or a quoted source term. |
| `verification evidence` | The observation produced by a test, trace, runtime check, review, or other selected mechanism. | Evidence is not authority or acceptance. |
| `conformance` | The two-way correspondence between the governing specification and repository state. | Do not use as a synonym for generic quality. |
| `acceptance` | An accountable human judgment that the obligations and applicable local standards are satisfied. | A green check or agent verdict is not acceptance. |
| `defeater` | Evidence or a reason that invalidates or materially narrows a live claim. | Do not use for any criticism or failed check. |
| `next discriminator` | The next observation or action expected to distinguish the live competing accounts. | Do not use as a synonym for next task. |
| `reopen` | Return an invalidated or incomplete governing claim to inquiry or specification development. | Do not call ordinary implementation repair reopening. |
| `unresolved` | Delivery cannot responsibly advance because a decision-bearing premise or required evidence is missing. | Keep `aporia` within direct dialectical inquiry, where the term has precise meaning. |

## Proposed package shape

**PROPOSAL:** retain the two current skills and add four deliberately narrow skills.

| Skill | Responsibility | Must not own |
| --- | --- | --- |
| `dialectical-inquiry` | Human-led formation and testing of the causal account. | Settled implementation or autonomous delivery. |
| `dialectical-tutor` | Repair one observable lapse in the human's midwife craft. | Subject matter, person-level grading, or lifecycle control. |
| `software-delivery` | Identify the current delivery obligation and route to the responsible skill. | Automatic phase advancement or acceptance. |
| `specification-development` | Develop, repair, and assess a governing specification from the developer's causal account. | Inventing missing human-held premises or choosing repository mechanics. |
| `specification-implementation` | Trace approved obligations into bounded edits, maintain the evidence ledger, and stop or reopen on unsupported decisions. | Completing the specification or accepting its own work. |
| `conformance-review` | Bidirectional conformance and defeater analysis over a specification, change surface, and verification record. | Remediation, acceptance, or repository-specific policy. |

`software-delivery` should resemble the useful part of Addy's meta-skill: discover the current
obligation and route to a focused skill. It should follow Addy's stronger orchestration constraint
that dependent phases retain human judgment between them, while rejecting the fixed lifecycle as a
required path.[^addy-orchestration]

All six skill directories must satisfy the runtime-purity invariant. Their language must be
self-contained and repository-neutral; even source acknowledgements and migration notes belong
elsewhere.

The proposed public paths are exactly:

```text
skills/dialectical-inquiry/
skills/dialectical-tutor/
skills/software-delivery/
skills/specification-development/
skills/specification-implementation/
skills/conformance-review/
```

Each directory owns `SKILL.md` and `SPEC.md` under the repository's existing convention. Add no
reference, asset, example, schema, or template merely to complete a package shape. Name such an
artifact only after one required runtime lookup function establishes its referent.

Test-driven development should become a routed verification pattern within
`specification-implementation`, not a separate top-level skill. Invariant formulation and causal
specification assessment should become internal mandatory routes of `specification-development`;
making them independent top-level skills invites the very
ritualized decomposition that DerivaDEX has already had to consolidate.

## Delivery workpad

**PROPOSAL:** the extension should use one change-bound workpad linked to, but distinct from, a
subject inquiry workpad. Do not stretch the inquiry's causal-account ledger into an implementation
log.

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

`Status` records the workpad outcome while `Current activity` records what kind of work is underway;
mixing both in one status field would make `accepted` and `implementation` appear to be comparable
states. Neither field is evidence of progress. Each update must change an obligation, confidence in
the causal account, a defeater, an unresolved premise, or the next discriminator. The workpad may
link to tests, logs, changes, and reviews; it should not duplicate them or become a transcript.

The field names are intentionally non-overlapping. `Authority` identifies who and what can govern;
`Governing specification` identifies the accepted artifact and current obligations; `Implementation
hypothesis` states the proposed repository expression; `Verification plan` names intended
observations; `Verification evidence` records actual observations; and `Acceptance` records the
developer's judgment and its limits. None is a synonym for another.

**OPEN DESIGN QUESTION:** Should an owned inquiry be copied into the delivery workpad or linked by
stable claim identifiers? Linking better preserves provenance; selective copying may improve
portability across issue trackers. The future governing specification should test both against
resumption and drift scenarios before deciding.

## DerivaDEX convergence and retirement map

No retirement is authorized by this workpad. DerivaDEX's own replacement law requires an
equivalent-or-better line-by-line coverage map, installed replacement, route cutover, and deletion in
the same change; any uncovered behavior defeats deletion.[^retirement-law]

| DerivaDEX skill | Proposed disposition | Replacement or residue | Retirement evidence required |
| --- | --- | --- | --- |
| [`dialectics`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/dialectics/SKILL.md) | **Retire** | `dialectical-inquiry` plus the decision-target handoff in `software-delivery`. | Preserve premise ownership, repository-fact recovery boundary, precise blocker, invariants/verification handoff, and interaction with planning; verify that human-led behavior replaces agent-led interviewing without losing useful stops. |
| [`planning`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/planning/SKILL.md) | **Retire** | `specification-development`; local GitLab capability supplies issue transport. | Cover context recovery, research, lean specification choice, causal derivation, citation routing, invariant formulation, assessment dispositions, and tactical-plan boundary. |
| [`posterior-analytics`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/posterior-analytics/SKILL.md) | **Replace** | `causal-readiness-review`; callers consume its verdict instead of duplicating its rubric. | Preserve argument-before-polish grading, defect classes, imitation checks, and bounded readiness semantics. |
| [`formulate-invariants`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-invariants/SKILL.md) | **Replace** | `invariant-formulation`; callers consume its invariant result. | Preserve positive, domain-native, refactor-stable invariants; illegal negation; responsible verification boundary; and compression of blacklist guardrails. |
| [`implementation`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/implementation/SKILL.md) | **Retire** | `specification-implementation`. | Preserve preconditions, direct authority trace, forbidden improvisation, reopen behavior, bidirectional conformance vocabulary, and evidence-gap reporting. |
| [`ttd`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/ttd/SKILL.md) | **Retire** | Routed test-driven verification pattern inside `specification-implementation`. | Preserve identical red/green claim, causal failure check, smallest change, refactor rerun, retained guardrail, and stop conditions. |
| [`formulate-goal`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-goal/SKILL.md) | **Replace** | `goal-formulation` owns the aligned mandate and continuity workpad without a universal path. | Preserve complete artifact reading, falsifiable outcome model, editorial repair, open premises, discriminator, and completion evidence. |
| [`diff-review`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/diff-review/SKILL.md) | **Split, then retain a thin DerivaDEX adapter** | `conformance-review` owns portable conformance; local adapter keeps stack-facet census, scheduled operation, GitLab report surfaces, and DerivaDEX doctrine routing. | Extract and test the portable kernel; demonstrate that local scripts, report persistence, stack ownership, and stop conditions still route exactly once. |
| [`evidence-grounding`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/evidence-grounding/SKILL.md) | **Replace** | `evidence-grounding`; provider formatting remains local. | Prove identical authority order, claim support, inline implementation evidence, footnote rules, and final gate; update every route atomically. |
| `architecture` | **Replace portable conformance; retain local discovery authority** | `architecture-conformance` classifies decisions; repository instructions identify applicable records and owners. | Exercise ungoverned, conforming, amendment, uncertain, and history-omission cases. |
| `naming-things` | **Replace** | `naming-things`; language rules and public migration authority remain local. | Exercise identifier choice, controlled vocabulary, ambiguity, and atomic rename closure. |
| Stack `*-development`, GitLab, commit, release, and runbook skills | **Retain locally or as specialist plugins** | These own repository law, stack choices, external-service mechanics, or operational policy outside the portable kernel. | No retirement unless a future candidate establishes that repository-specific decisions remain locally owned and every mechanics route remains complete. |

### Migration sequence

1. Freeze the current DerivaDEX candidate contracts at commit
   `81650fee140c422b2c890436f0415e8ab3810fa5` and create a clause-level capability ledger.
2. Write and approve `PHILOSOPHY.md` and `SOFTWARE-DELIVERY-SPEC.md` before runtime skill edits.
3. Create `SOFTWARE-DELIVERY-SOURCES.md` outside `skills/`; reject every term whose
   portable meaning cannot be stated without source context.
4. Specify the delivery skills and focused utilities, their shared vocabulary, artifacts, handoffs, stop conditions,
   explicit non-ownership boundaries, and purity gate.
5. Extend the evaluation suite before implementation so ceremonial lifecycle routing cannot pass as
   dialectical competence.
6. Implement the plugin skills and run them in shadow against representative DerivaDEX feature,
   bug, incident, and review cases.
7. Record each retirement candidate in `DERIVADEX-MIGRATION.md`, mapping every current clause and
   scenario to an equivalent-or-better plugin behavior, an explicitly retained local owner, or a
   named gap.
8. Run lexical and semantic purity review over the complete `skills/` tree. Keep all source and
   migration material outside that tree.
9. Cut over one coherent slice at a time. Remove old routes and skills only in the same change that
   installs and enables their replacements; do not add compatibility aliases.
10. Audit DerivaDEX's complete skill routing and handbook references, then run repository-specific
   verification. Plugin conformance does not establish the local cutover.

## Evaluation plan

The current suite establishes protocol behavior on frozen fixtures but not human learning or delivery
outcomes. The extension should retain that claim boundary and add tests in layers.[^current-evidence]

### A. Contract and routing tests

- Correctly distinguish mechanical tasks, active inquiry, specification work, governed
  implementation, conformance review, and repository-specific integration.
- Preserve the human/oracle/tutor boundaries across every handoff.
- Stop rather than infer when authority, responsible boundary, failure semantics, or verification
  criterion is missing.
- Reopen inquiry or specification development when implementation evidence defeats the causal account.
- Reject every distributed skill containing a source-project name, link, path, role, artifact
  convention, or unexplained local process term.
- Exercise runtime prompts and outputs in unrelated repositories to detect semantic contamination
  that a forbidden-string scan misses.

### B. Lifecycle case studies

Use multi-turn repository sandboxes for at least:

- a solution-first bug whose visible failure is downstream of the responsible boundary;
- a feature with a public contract, failure semantics, and changed-case transfer;
- an incident where evidence changes the initial causal account during implementation;
- a refactor that should remain mechanical and must not trigger unnecessary ceremony;
- a review containing both an omitted requirement and an unauthorized addition;
- a precise aporia where stopping is the only responsible result.

Each case must end in a reviewable artifact and bidirectional trace, not correct vocabulary alone.

### C. Matched procedural placebo

Create a lifecycle placebo that emits the same states, workpad headings, specification links, trace rows,
and verification markers but does not independently reconstruct, seek defeaters, preserve human
authorship, or reopen intent. If it passes a semantic case, the evaluation still rewards ceremony.
This extends the causal logic of the repository's current matched placebo.[^matched-placebo]

### D. Oracle reliability faults

Plant source errors, stale implementation evidence, seductive user framing, false green tests,
verification at an unrelated boundary, and implementation discoveries that require a new decision. Score
self-correction, provenance, stop/reopen behavior, and the developer's ability to challenge the
oracle.

### E. Human gate

Only human study can test whether developers acquire and retain the required dialectical craft.
Measure observable work products and transfer: independent causal-account reconstruction, correction burden,
defeater quality, changed-case prediction, recognition of evidence that reopens the governing specification, and review
judgment. The plugin and tutor must not convert these observations into an automated person-level
certification.

### F. DerivaDEX replacement verification

Before each retirement, run old and new routes on the same frozen task packets and compare:

- admitted and refused intents;
- authority and provenance decisions;
- artifacts created or modified;
- responsible boundary, invariant, and verification mapping;
- stop and reopen behavior;
- local handoffs and non-portable residue;
- false acceptance under an adversarial changed case.

Behavioral equivalence is necessary but not sufficient: the plugin replacement should be simpler in
public topology and preserve the stronger account-ownership method.

## Proposed implementation order

1. `PHILOSOPHY.md`: approve the SDLC thesis, its dialectical foundation, the human job requirement,
   oracle reliability contract, claim boundary, and portable/local split.
2. `SOFTWARE-DELIVERY-SPEC.md`: approve the obligation graph, artifacts, vocabulary, routing law,
   and acceptance model.
3. `SOFTWARE-DELIVERY-SOURCES.md`: establish the forbidden-source boundary before any new runtime
   prose exists.
4. `specification-development`: it closes the current gap between owned inquiry and governed work.
5. `specification-implementation`: it makes reopen-on-discovery operational.
6. `conformance-review`: it completes the reverse argument and acceptance boundary.
7. `software-delivery`: add the meta-router only after the leaf contracts are real; otherwise the
   router would advertise an imaginary lifecycle.
8. Complete-tree lexical and semantic purity audit.
9. Cross-skill and placebo evaluation.
10. `DERIVADEX-MIGRATION.md`: record shadow runs, coverage, atomic cutovers, and retirement.
11. Documentation and human pilot, with efficacy claims still withheld until evidence exists.

## Open premises

- **Decision needed:** Is the plugin's primary unit a consequential *decision*, a software change, or
  a governing specification? “Decision” aligns with inquiry; “software change” aligns with delivery tooling.
- **Decision needed:** Must every material delivery checkpoint require a new human-authored
  synthesis, or is a human-authored rebuttal or acceptance note sufficient once the causal account
  and governing specification are already owned?
- **Research question:** Which observable behaviors distinguish professional dialectical mastery
  from one successful inquiry without creating a person-level score?
- **Design question:** How should the workpad preserve stable claim identity across inquiry,
  governing specification, implementation, verification, and review without becoming a traceability
  bureaucracy?
- **Migration question:** Which `formulate-goal` uses are truly SDLC, and which belong to persistent
  autonomous-goal management outside this package?
- **Integration question:** Should `evidence-grounding` ship inside this plugin, be a declared
  dependency, or remain an independently installed cross-cutting skill?

## Implementation record: 2026-09-02

- Added the four selected skill directories with focused runtime instructions and skill-local
  specifications: `software-delivery`, `specification-development`,
  `specification-implementation`, and `conformance-review`.
- Added `PHILOSOPHY.md`, `SOFTWARE-DELIVERY-SPEC.md`, `SOFTWARE-DELIVERY-SOURCES.md`, and
  `DERIVADEX-MIGRATION.md` outside the runtime skill tree.
- Added `.codex-plugin/plugin.json` so the initial six skills form one validated plugin.
- Changed evaluation fixture preparation to install the complete current skill tree.
- Added `npm run eval:skill-purity` and made it a precondition of the full evaluation command.
- Structural validation passed for the initial six skills; plugin validation, lexical quarantine, Markdown
  lint apart from the repository's accepted line-length convention, and Git whitespace checks pass.
- Two isolated read-only routing smokes passed: an exact documentation rename bypassed inquiry for
  `specification-implementation`; a solution-first retry request with no owned boundary or failure
  semantics recommended `dialectical-inquiry` and stopped without editing.

These smokes establish only the two exercised routing decisions. They do not establish cross-skill
behavioral equivalence, human efficacy, or readiness to retire source-repository skills.

## Implementation record: 2026-09-03

- Added six focused utilities: `invariant-formulation`, `goal-formulation`,
  `causal-readiness-review`, `architecture-conformance`, `evidence-grounding`, and `naming-things`.
- Gave every utility a runtime-only `SKILL.md` and a reasoning-and-lineage `SPEC.md`.
- Audited all twelve runtime skills and replaced overlapping evidence, invariant, causal-readiness,
  naming, architecture, and workpad procedures with calls to their single owners.
- Updated the delivery router, package manifest, public inventory, source synthesis, and migration
  ledger for the twelve-skill topology.

## Next discriminator

Run the implemented topology against two frozen DerivaDEX cases: one solution-first bug that should
reopen intent and one already-owned mechanical change that should bypass inquiry. Compare the new
routes with the frozen source behavior, then add an unrelated-repository pair to test semantic
purity. The topology remains behaviorally provisional until it handles both without ceremony,
authority leakage, or source-local assumptions.

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
