<!-- markdownlint-disable MD013 -->

# DerivaDEX Migration

Status: replacement skills implemented; behavioral equivalence and repository cutover remain open.

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
| [`planning`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/planning/SKILL.md) | `specification-development` for causal specification, invariant formulation, and readiness assessment. | GitLab transport, repository context synthesis, external research mechanics, summaries, and tactical plan format need named local owners. | Split before retirement. |
| [`posterior-analytics`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/posterior-analytics/SKILL.md) | Causal assessment inside `specification-development` and `conformance-review`. | Caller descriptions and review routes must stop naming the standalone skill. | Strong retirement candidate after route and outcome tests. |
| [`formulate-invariants`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-invariants/SKILL.md) | Invariant formulation inside `specification-development`; conformance checking inside `conformance-review`. | Non-specification callers need a direct route to the relevant focused skill. | Strong retirement candidate after caller audit and outcome tests. |
| [`implementation`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/implementation/SKILL.md) | `specification-implementation` for mutation; `conformance-review` for read-only audit. | Repository specification discovery and stack-doctrine routing remain local. | Split and retire after installed-route verification. |
| [`ttd`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/ttd/SKILL.md) | Conditional test-driven verification route inside `specification-implementation`. | Container commands, framework testing rules, and browser mechanics remain local. | Strong retirement candidate after same-claim red/green shadow tests. |
| [`diff-review`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/diff-review/SKILL.md) | `conformance-review` for portable two-way authority review. | Complete stack census, doctrine closure, scheduler behavior, GitLab reporting, persisted worksheets, scripts, and local severity policy. | Retain a thinner local adapter; do not retire wholesale. |
| [`evidence-grounding`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/evidence-grounding/SKILL.md) | Existing shared `evidence-grounding` capability, not one of the four delivery skills. | GitLab formatting remains locally routed. | Dependency convergence candidate; independent of this cutover. |
| [`formulate-goal`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-goal/SKILL.md) | Delivery-workpad concepts overlap with `software-delivery`. | Autonomous-goal formulation, persistent mandate, and workpad-authoring behavior exceed delivery routing. | Retain pending a separate scope split. |

## Capability coverage

### `posterior-analytics`

| Frozen behavior | Replacement owner | Status |
| --- | --- | --- |
| Grade the argument before prose polish. | `specification-development` readiness attack; `conformance-review` governing-argument assessment. | Implemented. |
| Reconstruct problem, domain operation, wrongness, boundary, required property, derivation, and verification. | Both replacement skills reconstruct these relations before judgment. | Implemented. |
| Detect solution-first reasoning, template shape, symptom patching, borrowed vocabulary, blacklist invariants, evidence dumping, scope salvage, and missing ownership. | `specification-development` rejects these causes; `conformance-review` rejects polish and citation volume as substitutes. | Implemented, wording compressed. |
| Separate architecture, specification, evidence, scope, and prose defects. | Replacement skills report the broken relation and route to inquiry, specification revision, implementation repair, or evidence recovery. | Implemented semantically; exact taxonomy intentionally retired. |
| Return pass, conditional, revise, or reject. | `ready for human judgment`, `conditional`, `revise`, `reopen inquiry`, and `unresolved`. | Implemented with human-judgment boundary. |

### `formulate-invariants`

| Frozen behavior | Replacement owner | Status |
| --- | --- | --- |
| Name the governed object, boundary, or transition. | `specification-development` invariant formulation. | Implemented. |
| State a positive property over valid states or outcomes. | `specification-development`. | Implemented. |
| Negate once rather than enumerate forbidden subsystems. | `specification-development`. | Implemented. |
| Name enforcement and verification responsibility. | `specification-development` and `conformance-review`. | Implemented. |
| Compress overlapping guardrails and reject implementation-shaped invariants. | `specification-development`. | Implemented. |

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
9. local stack or provider mechanics that must remain with DerivaDEX.

Compare admitted and refused intents, artifacts touched, authority decisions, responsible
boundaries, invariant and verification mappings, stop/reopen behavior, local handoffs, and false
acceptance. Equivalent vocabulary without equivalent decisions fails.

## Atomic cutover order

1. Publish or pin an immutable Theaetetus plugin revision.
2. Install it in the DerivaDEX evaluation and developer environment; verify all six skills are
   discoverable.
3. Run the shadow cases and record clause-level results here.
4. Retire `posterior-analytics` and `formulate-invariants` together with all callers that now use the
   internal replacement duties.
5. Split `implementation` into plugin mutation/review responsibilities and retained local authority
   discovery; retire `ttd` in the same change that redirects its callers.
6. Split `planning` and `diff-review`, preserving their named local residue before deleting any
   portable duplicate.
7. Retire `dialectics` only after live human-led inquiry and handoff cases establish that no useful
   stop behavior was lost.
8. Audit the final installed routes, repository documentation, and specialized mechanics before
   declaring migration complete.

No compatibility aliases are planned. During each coherent slice, old routes remain authoritative
until their replacement is installed and verified; then callers and directories change atomically.

## Open gates

- No immutable plugin cutover commit exists yet.
- The new delivery skills have structural validation but not recorded shadow-case results.
- The exact DerivaDEX installation mechanism has not been selected.
- Planning and diff-review local adapters have not been authored.
- The source repository caller list must be converted from name matches into exact runtime-route
  dispositions before deletion.

[^retirement]: The DerivaDEX [skill replacement law](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/CHARTER.md#L148-180)
    requires equivalent-or-better coverage and exact replacement routing; its
    [change protocol](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/CHARTER.md#L517-544)
    requires atomic route and deletion changes without compatibility aliases.
