<!-- markdownlint-disable MD013 -->

# DerivaDEX Migration

Status: delivery and utility replacements implemented; behavioral equivalence and repository cutover remain open.

This ledger governs retirement of DerivaDEX delivery skills in favor of the portable Theaetetus
plugin. It does not authorize deletion by analogy. A source skill may be retired only when every
runtime behavior and failure mode has an equivalent plugin owner or an explicitly retained local
owner, the plugin is installed and discoverable in DerivaDEX, callers are changed atomically, and
repository-specific verification passes.[^retirement]

The frozen comparison state is DerivaDEX commit
`81650fee140c422b2c890436f0415e8ab3810fa5` and Theaetetus branch `sdlc` at the eventual cutover
commit. Replace the branch reference with its immutable commit before a migration merge request.

## Candidate ledger

| Current skill | Portable replacement | Local residue | Current disposition |
| --- | --- | --- | --- |
| [`dialectics`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/dialectics/SKILL.md) | `dialectical-inquiry` for live human-led inquiry; `software-delivery` for handoff selection. | Existing callers must adopt explicit human-led entry and the inquiry workpad contract. | Candidate after multi-turn shadow tests; not yet equivalent. |
| [`planning`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/planning/SKILL.md) | `specification-development` for authoring, `invariant-formulation` for system truths, and `causal-readiness-review` for grading. | GitLab transport, repository context synthesis, external research mechanics, summaries, and tactical plan format need named local owners. | Split before retirement. |
| [`posterior-analytics`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/posterior-analytics/SKILL.md) | `causal-readiness-review`. | Provider publishing and repository authority remain with local capabilities. | Direct retirement candidate after route and outcome tests. |
| [`formulate-invariants`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-invariants/SKILL.md) | `invariant-formulation`. | None; callers must use the public utility rather than duplicate its rules. | Direct retirement candidate after route and outcome tests. |
| [`implementation`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/implementation/SKILL.md) | `specification-implementation` for mutation; `conformance-review` for read-only audit. | Repository specification discovery and stack-doctrine routing remain local. | Split and retire after installed-route verification. |
| [`ttd`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/ttd/SKILL.md) | Conditional test-driven verification route inside `specification-implementation`. | Container commands, framework testing rules, and browser mechanics remain local. | Strong retirement candidate after same-claim red/green shadow tests. |
| [`diff-review`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/diff-review/SKILL.md) | `conformance-review` for portable two-way authority review. | Complete stack census, doctrine closure, scheduler behavior, GitLab reporting, persisted worksheets, scripts, and local severity policy. | Retain a thinner local adapter; do not retire wholesale. |
| [`evidence-grounding`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/evidence-grounding/SKILL.md) | `evidence-grounding`. | Provider-specific formatting and identifier syntax remain local. | Direct retirement candidate after claim-placement shadow tests. |
| [`formulate-goal`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-goal/SKILL.md) | `goal-formulation`. | Repository selection of artifact locations remains local. | Direct retirement candidate after artifact-pair shadow tests. |
| [`architecture`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/architecture/SKILL.md) | `architecture-conformance`. | Repository instructions identify applicable architecture records and their owners. | Replace after lazy-discovery and history-reconciliation tests. |
| [`naming-things`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/naming-things/SKILL.md) | `naming-things`. | Language, framework, and public migration authority remain local. | Direct retirement candidate after naming and atomic-rename tests. |

## Utility review and integration

### Inspection completeness

The review read every file in the six requested source directories at frozen commit
`81650fee140c422b2c890436f0415e8ab3810fa5`, not only their entrypoints:

- invariant formulation: runtime and source ledger;[^invariant-files]
- goal formulation: runtime, specification, and interface metadata;[^goal-files]
- causal grading: runtime, provenance README, source ledger, and interface metadata;[^causal-files]
- architecture governance: runtime and specification;[^architecture-files]
- evidence grounding: runtime, specification, and source ledger;[^evidence-files]
- naming: runtime and source ledger.[^naming-files]

Interface metadata was inspected for trigger intent but not copied because plugin discovery is owned
by each portable `SKILL.md` description and the root manifest. Source ledgers and specifications
were treated as design evidence, never runtime text.

### Adjudication method

Each source clause was tested against four questions:

1. Is the operation useful outside its source repository?
2. Does it have a boundary distinct from the existing delivery skills?
3. Does preserving it require a project role, filename, provider, tool, or policy?
4. Would making it public reduce duplicated reasoning in callers?

A clause was retained only when the first two answers were yes and any dependency exposed by the
third answer could be generalized without weakening the behavior. The fourth answer determined
whether a utility remained independent or stayed internal. All six passed the independent-utility
test. This reverses the earlier decision to fold invariant formulation and causal grading into
larger skills: doing so duplicated their standards and denied non-specification callers a precise
route.

### Naming quality control

Names were judged in the order consistency, distinguishability, understandability, and concision.

| Source name | Plugin name | Decision |
| --- | --- | --- |
| `formulate-invariants` | `invariant-formulation` | Names the capability as a noun phrase, remains searchable by its output concept, and avoids an imperative phrase inconsistent with neighboring skill names. |
| `formulate-goal` | `goal-formulation` | Normalizes the same operation family and distinguishes mandate/workpad authoring from delivery routing. |
| `posterior-analytics` | `causal-readiness-review` | Replaces an opaque philosophical title with the actual review object, criterion, and result. |
| `architecture` | `architecture-conformance` | Narrows a name that otherwise claims the whole architecture discipline to the relation the skill judges. |
| `evidence-grounding` | `evidence-grounding` | Already states the exact claim-to-support operation and is narrower than research or documentation. |
| `naming-things` | `naming-things` | Established and broad enough for identifiers, concepts, namespaces, and vocabulary without claiming prose editing. |

No name uses `dialectical`: none of these skills directly conducts dialectic as its primary
operation. No source name is retained as an alias; cutover must change callers atomically.

### Invariant formulation

Retained:

- owned premise and governed-subject gate;
- positive valid-state property with one illegal negation;
- enforcement and verification boundaries;
- compression of overlapping guardrails; and
- rejection of implementation-, filename-, symptom-, and prose-shaped candidates.

Adjusted:

- removed named upstream/downstream skill routes and any claim that this is a mandatory phase;
- made missing intent an explicit non-authoring stop; and
- distinguished verification observation from implementation authorization.

Its boundary is now exclusive: it formulates or audits invariants, while specification development
uses the result to derive obligations and conformance review uses it only when an invariant itself
is disputed.

### Goal formulation

Retained:

- paired stable mandate and changing continuity workpad;
- complete reading and retain/replace/delete/add treatment of existing work;
- falsifiable relation from future state and conditions to desired outcome;
- decision-bearing evidence, reversible premises, and one next discriminator; and
- completion grounded in delivered state rather than process activity.

Adjusted:

- renamed `theorem` to `outcome model` because the operation requires falsifiability, not a formal
  proof claim or a new term teams must learn;
- removed a universal workpad filename and made artifact location repository- or user-selected;
- preserved a plan-only result when mutation is not requested; and
- removed autonomous goal lifecycle implications.

`software-delivery` now routes creation or material repair of a persistent mandate/workpad here and
does not restate the artifact schema.

### Causal readiness review

Retained:

- grading an argument rather than its polish;
- reconstruction before criticism;
- premises that are prior, grounded, and explanatory of the proposed solution;
- detection of solution-first, template-shaped, symptom-shaped, vocabulary-only, evidence-dump,
  accidental-scope, and ownership failures;
- separation of causal, specification-expression, evidence, scope, and prose defects; and
- a bounded readiness verdict with the smallest repair.

Adjusted:

- replaced the historical philosophical title with an operational name;
- removed organizational ownership labels, provider formatting routes, issue history, and fixed
  output ceremony;
- generalized the input-question mechanism to one targeted question rather than a provider tool;
- replaced pass language with `ready for human judgment` so the oracle cannot admit its own review.

Specification development authors and repairs; this utility grades. Conformance review invokes it
only when the governing argument itself is disputed, then carries its verdict into the two-way
repository judgment.

### Architecture conformance

Retained:

- lazy applicability;
- complete reading of every applicable architecture record;
- semantic classification as conforming, amendment, or uncertain;
- named-owner authority for amendments;
- decision fitness through scope, status, rationale, consequences, valid/illegal states,
  implementation correspondence, verification correspondence, and supersession; and
- exact-state reconciliation for history operations and paired behavior/verification disappearance.

Adjusted:

- removed the fixed `ARCHITECTURE.md` filename and global caller census;
- made repository instructions and affected scope responsible for record discovery;
- removed standards exposition and source-repository inventory from runtime;
- stopped short of imposing one universal architecture-record schema: only facts required to judge
  an applicable decision must be unambiguous.

The skill is a cross-cutting gate. It does not author architecture or accept amendments.

### Evidence grounding

Retained:

- authority ordering;
- distinction among navigation, citations, implementation evidence, observations, inference, and
  assumptions;
- inline placement of implementation evidence;
- claim-sized support and precise anchors;
- stable historical references and explicit temporal limits; and
- rejection of code-as-intent, test-as-requirement, absence-as-nonexistence, and
  citation-volume-as-reasoning substitutions.

Adjusted:

- removed provider-specific identifier syntax and formatting routes;
- generalized published-link guidance while preserving revision stability;
- removed project roles, artifact names, and absolute source paths.

Every skill that makes consequential repository claims now delegates their classification and
support to this utility. Callers retain only their own domain-specific use of the grounded result.

### Naming things

Retained:

- referent, scope, audience, and full local-usage discovery;
- ordered consistency, distinguishability, understandability, and concision criteria;
- grammatical fit, cardinality, units, and paired-role distinctions;
- preference for domain language or standard technical terms according to the concept;
- controlled vocabulary and one canonical name per live concept; and
- rename economics, complete owner/consumer closure, atomic transition, and verification.

Adjusted:

- removed the source repository's competing semantic-doctrine route;
- removed exhaustive language examples that could masquerade as universal style law;
- retained the compatibility stop without source-local migration slogans; and
- made broad external changes stop for authority unless explicitly requested.

This utility owns naming judgment. Specification, implementation, and conformance skills invoke it
only when a material name or rename affects their own artifact.

### Full runtime-surface overlap audit

| Skill | Utility use | Procedure intentionally retained by caller |
| --- | --- | --- |
| `dialectical-inquiry` | `evidence-grounding`; `invariant-formulation` only after the human owns the account | Human-led questioning, oracle attribution, workpad provenance, coaching handoff, and owned/aporetic closure. |
| `dialectical-tutor` | None | Observable-move coaching; it classifies inquiry technique, not repository claims or system invariants. |
| `software-delivery` | Routes all six utilities | Earliest-unsatisfied-obligation selection, one-route limit, and human checkpoint. |
| `specification-development` | All six as applicable | Causal-account authoring, obligation derivation, artifact shaping, and human admission boundary. |
| `specification-implementation` | Evidence, architecture, and naming | Authority-to-edit trace, bounded mutation, verification loop, and reopen behavior. |
| `conformance-review` | Evidence; conditional causal, architecture, invariant, and naming review | Complete surface, two-way trace, defeater construction, findings, and read-only disposition. |
| `goal-formulation` | Evidence and invariants | Artifact-pair authorship, continuity separation, editorial repair, and pair validation. |
| `causal-readiness-review` | Evidence and conditional invariant audit | Argument reconstruction, imitation detection, defect separation, and readiness verdict. |
| `architecture-conformance` | Evidence | Applicability, semantic classification, amendment gate, and history reconciliation. |
| `invariant-formulation` | Evidence | Exclusive valid-state formulation and audit boundary. |
| `evidence-grounding` | None | Exclusive claim classification and support-placement boundary. |
| `naming-things` | Evidence | Exclusive naming and rename-closure boundary. |

The audit removed the duplicated invariant algorithm and readiness rubric from specification
development, the duplicated causal rubric from conformance review, the duplicated workpad contract
from software delivery, and local claim classification from applicable callers. Necessary caller
language remains where it states the caller's own inputs, results, or stop conditions rather than a
second implementation of the utility.

### Accidental-particular quarantine

The following source particulars are admitted only to this maintenance ledger and top-level source
inventory: repository and organization names, organizational titles, provider brands and syntax,
fixed artifact filenames and paths, issue or merge-request histories, source skill routes, interface
tool names, numeric confidence thresholds, local verdict slogans, global path registries, language
or stack inventories, and installation-candidate audits. Runtime files instead use developer,
decision owner, governing specification, architecture record, repository instruction, published
prose, targeted question, responsible boundary, and verification observation where those concepts
are genuinely portable.

The lexical purity check is necessary but insufficient. The semantic audit above is the acceptance
record for renamed particulars that could otherwise survive mechanically.

## Capability coverage

### `posterior-analytics`

| Frozen behavior | Replacement owner | Status |
| --- | --- | --- |
| Grade the argument before prose polish. | `causal-readiness-review`. | Implemented. |
| Reconstruct problem, domain operation, wrongness, boundary, required property, derivation, and verification. | `causal-readiness-review`. | Implemented. |
| Detect solution-first reasoning, template shape, symptom patching, borrowed vocabulary, blacklist invariants, evidence dumping, scope salvage, and missing ownership. | `causal-readiness-review`, with disputed invariants delegated to `invariant-formulation`. | Implemented, wording generalized. |
| Separate architecture, specification, evidence, scope, and prose defects. | `causal-readiness-review`. | Implemented semantically. |
| Return pass, conditional, revise, or reject. | `ready for human judgment`, `conditional`, `revise`, `reject`, and `unresolved`. | Implemented with human-judgment boundary. |

### `formulate-invariants`

| Frozen behavior | Replacement owner | Status |
| --- | --- | --- |
| Name the governed object, boundary, or transition. | `invariant-formulation`. | Implemented. |
| State a positive property over valid states or outcomes. | `invariant-formulation`. | Implemented. |
| Negate once rather than enumerate forbidden subsystems. | `invariant-formulation`. | Implemented. |
| Name enforcement and verification responsibility. | `invariant-formulation`. | Implemented. |
| Compress overlapping guardrails and reject implementation-shaped invariants. | `invariant-formulation`. | Implemented. |

### `implementation` and `ttd`

| Frozen behavior | Replacement owner | Status |
| --- | --- | --- |
| Identify accepted specification authority before mutation. | `specification-implementation`. | Implemented. |
| Trace authority to every material repository fact. | `specification-implementation`. | Implemented. |
| Stop rather than resolve architectural ambiguity in code. | `specification-implementation` reopen model. | Implemented. |
| Audit specification-to-repository and repository-to-specification. | `conformance-review`. | Implemented. |
| Preserve one behavior claim and command from failing to passing observation. | `specification-implementation` test-driven route. | Implemented. |
| Confirm causal failure, make the smallest change, rerun after refactor, and retain a guardrail. | `specification-implementation`. | Implemented. |
| Use repository-specific commands and stack testing rules. | DerivaDEX local doctrine and mechanics skills. | Intentionally local; route update required. |

### `formulate-goal`

| Frozen behavior | Replacement owner | Status |
| --- | --- | --- |
| Produce an aligned goal prompt and workpad by default. | `goal-formulation`. | Implemented with a plan-only authorization exception. |
| Read authority and the complete existing workpad before editing. | `goal-formulation`, with claim classes delegated to `evidence-grounding`. | Implemented. |
| Model future state, conditions, causal transitions, invariants, observations, and reversible premises. | `goal-formulation`, with invariant mechanics delegated to `invariant-formulation`. | Implemented; source label generalized. |
| Separate stable mandate from changing evidence, unknowns, and next discriminator. | `goal-formulation`. | Implemented. |
| Reject phases, percentages, activity logs, and non-falsifiable completion. | `goal-formulation`. | Implemented. |
| Assume a fixed workpad path or autonomous goal lifecycle. | No portable owner. | Intentionally rejected. |

### `architecture`

| Frozen behavior | Replacement owner | Status |
| --- | --- | --- |
| Run lazily only when affected scope identifies an applicable architecture contract. | `architecture-conformance`. | Implemented without a fixed filename. |
| Read applicable contracts completely and judge affected decisions semantically. | `architecture-conformance`. | Implemented. |
| Classify conformance, amendment, and uncertainty; require exact owner authority for amendment. | `architecture-conformance`. | Implemented. |
| Reconcile exact states and account for removed behavior and proof during history operations. | `architecture-conformance`. | Implemented. |
| Maintain a global caller census, repository path registry, or one required record filename. | Local repository instructions, if desired. | Intentionally rejected from the plugin. |

### `evidence-grounding`

| Frozen behavior | Replacement owner | Status |
| --- | --- | --- |
| Order user/specification authority, repository law, external contracts, and implementation evidence. | `evidence-grounding`. | Implemented. |
| Distinguish navigation, inline code evidence, citations, footnotes, observations, and assumptions. | `evidence-grounding`. | Implemented. |
| Put implementation evidence at the exact claim and keep non-code footnotes evidentiary. | `evidence-grounding`. | Implemented. |
| Use stable links for historical claims and reject invalid evidence substitutions. | `evidence-grounding`. | Implemented. |
| Own provider identifier syntax and general Markdown formatting. | Applicable local publishing capability. | Intentionally local. |

### `naming-things`

| Frozen behavior | Replacement owner | Status |
| --- | --- | --- |
| Resolve referent, scope, audience, and local usage before choosing. | `naming-things`. | Implemented. |
| Order consistency, distinguishability, understandability, and concision. | `naming-things`. | Implemented. |
| Fit names to grammar, cardinality, units, namespace, and paired roles. | `naming-things`. | Implemented without language-specific universal law. |
| Plan non-trivial renames across owners, consumers, migration cost, and verification. | `naming-things`. | Implemented. |
| Add aliases, shims, duplicate paths, or dual vocabulary without an owned compatibility contract. | No owner. | Explicitly prohibited. |

## Caller audit

The current DerivaDEX tree names the candidates from its Charter, inventory, handbook, architecture
specification, planning and review skills, doctrine registry, specialist development skills, and
several maintenance specifications. The cutover is therefore not a directory deletion. It must
update:

1. skill inventory and doctrine registry routes;
2. runtime cross-skill calls and descriptions;
3. handbook and repository-agent routing;
4. maintenance specifications and source inventories;
5. review adapter references and reports; and
6. tests or fixtures that assert old skill names.

Incidental historical references may remain only where they are clearly historical and cannot
route runtime behavior.

## Required shadow cases

Run each case against the frozen source skills and the installed plugin replacement:

1. solution-first bug with an unowned responsible boundary;
2. exact mechanical change that must bypass inquiry;
3. accepted behavior change with identical failing and passing verification;
4. implementation discovery that adds failure semantics and must reopen the specification;
5. specification with a blacklist instead of a positive invariant;
6. review with both a missing obligation and extra unowned behavior;
7. verification at an adjacent or mock-only boundary;
8. non-interactive review with missing human-held authority; and
9. local stack or provider mechanics that must remain with DerivaDEX;
10. existing goal artifacts containing useful evidence plus process-theater fields;
11. an architecture-governed rebase that removes behavior and its verification together;
12. a claim whose implementation link proves current behavior but not intended authority; and
13. a public rename whose compatibility boundary has no authorized migration owner.

Compare admitted and refused intents, artifacts touched, authority decisions, responsible
boundaries, invariant and verification mappings, stop/reopen behavior, local handoffs, and false
acceptance. Equivalent vocabulary without equivalent decisions fails.

## Atomic cutover order

1. Publish or pin an immutable Theaetetus plugin revision.
2. Install it in the DerivaDEX evaluation and developer environment; verify all twelve skills are
   discoverable.
3. Run the shadow cases and record clause-level results here.
4. Retire `posterior-analytics` and `formulate-invariants` together with all callers redirected to
   `causal-readiness-review` and `invariant-formulation`.
5. Split `implementation` into plugin mutation/review responsibilities and retained local authority
   discovery; retire `ttd` in the same change that redirects its callers.
6. Split `planning` and `diff-review`, preserving their named local residue before deleting any
   portable duplicate.
7. Retire `dialectics` only after live human-led inquiry and handoff cases establish that no useful
   stop behavior was lost.
8. Retire `formulate-goal`, `architecture`, `evidence-grounding`, and `naming-things` only in
   coherent slices that redirect their complete callers and preserve the local residue recorded
   above.
9. Audit the final installed routes, repository documentation, and specialized mechanics before
   declaring migration complete.

No compatibility aliases are planned. During each coherent slice, old routes remain authoritative
until their replacement is installed and verified; then callers and directories change atomically.

## Open gates

- No immutable plugin cutover commit exists yet.
- The package skills have structural validation but not recorded utility shadow-case results.
- The exact DerivaDEX installation mechanism has not been selected.
- Planning and diff-review local adapters have not been authored.
- The source repository caller list must be converted from name matches into exact runtime-route
  dispositions before deletion.

[^retirement]: The DerivaDEX [skill replacement law](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/CHARTER.md#L148-180)
    requires equivalent-or-better coverage and exact replacement routing; its
    [change protocol](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/CHARTER.md#L517-544)
    requires atomic route and deletion changes without compatibility aliases.

[^invariant-files]: The complete frozen directory contains the
    [runtime contract](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-invariants/SKILL.md)
    and [source ledger](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-invariants/SOURCES.md).
[^goal-files]: The complete frozen directory contains the
    [runtime contract](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-goal/SKILL.md),
    [specification](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-goal/SPEC.md),
    and [interface metadata](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-goal/agents/openai.yaml).
[^causal-files]: The complete frozen directory contains the
    [runtime contract](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/posterior-analytics/SKILL.md),
    [provenance record](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/posterior-analytics/README.md),
    [source ledger](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/posterior-analytics/SOURCES.md),
    and [interface metadata](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/posterior-analytics/agents/openai.yaml).
[^architecture-files]: The complete frozen directory contains the
    [runtime contract](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/architecture/SKILL.md)
    and [specification](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/architecture/SPEC.md).
[^evidence-files]: The complete frozen directory contains the
    [runtime contract](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/evidence-grounding/SKILL.md),
    [specification](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/evidence-grounding/SPEC.md),
    and [source ledger](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/evidence-grounding/SOURCES.md).
[^naming-files]: The complete frozen directory contains the
    [runtime contract](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/naming-things/SKILL.md)
    and [source ledger](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/naming-things/SOURCES.md).
