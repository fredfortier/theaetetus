# Workpad: Dialectical Skills Project

Status: runtime skills implemented; live conversational evaluation remains.

## Objective

Create two repo-local Codex skills that train and support human-led dialectical inquiry with an AI:

- `dialectical-inquiry`: the human drives as midwife; the runtime agent answers as a fallible oracle.
- `dialectical-tutor`: coaches the human's midwife craft when the main conversation shows an ineffective pattern.

The intended outcome is not a better question-answer script. It is a repeatable environment in which the human learns to form, test, revise, transfer, and defend a first-principles mental model without surrendering epistemic agency.

## Authority

1. Explicit user direction and approved skill `SPEC.md` files.
2. The DerivaDEX handbook's [Dialectic Method](https://gitlab.com/dexlabs/derivadex/-/blob/master-patch-ci-topology/wiki/handbook/ai-native-team.md#dialectic-method) for source intent.
3. This repository's approved project artifacts.
4. `$skill-writer` for skill architecture and validation mechanics.
5. Official OpenAI documentation for provider mechanics only.
6. Primary and scholarly sources catalogued in [RESEARCH.md](RESEARCH.md) for technique evidence.

Implementation or examples may demonstrate current behavior; they do not override approved intent.

## Non-negotiable principles

- The human drives the inquiry and owns the resulting model.
- The oracle answers substantively; it does not turn the main conversation into an agent-led interrogation.
- “Oracle” is a role, not an authority claim.
- The agent maintains a provisional model of the human's expressed understanding, never a claim about hidden mental state.
- First-principles understanding is evidenced through derivation, prediction, counterexample, transfer, and explicit unknowns—not agreement or paraphrase.
- Aporia is a valid result.
- The tutor intervenes minimally, coaches one observable move, and returns control.
- Dialectic cannot be reduced to a fixed script, score, or deterministic question ladder.
- Cargo-cult correction targets missing causal or authority relations, never the person's identity or intelligence.
- Evidence, inference, and assumption remain visibly distinct.

## Deliverables

| Artifact | Purpose | State |
| --- | --- | --- |
| `RESEARCH.md` | Evidence synthesis, techniques, source inventory, topology decision, gaps | complete |
| `WORKPAD.md` | Project governance, decisions, phase gates, progress | active |
| `skill/dialectical-inquiry/SPEC.md` | Approved blueprint for the main skill | approved |
| `skill/dialectical-tutor/SPEC.md` | Approved blueprint for the tutor skill | approved |
| `skill/dialectical-inquiry/SKILL.md` and references | Main runtime skill | implemented |
| `skill/dialectical-tutor/SKILL.md` and references | Tutor runtime skill | implemented |

## Phase gates

### Gate 1: research and topology

Pass when:

- canonical and applied sources have been read;
- techniques are mapped to runtime behavior and guardrails;
- topology, shapes, gaps, and portability decisions are explicit;
- both `SPEC.md` blueprints are ready for user review.

State: passed.

### Gate 2: blueprint approval

Requires explicit user approval or corrections for:

- skill names and locations;
- human/oracle/tutor role contracts;
- runtime workpad schema and lifecycle;
- formative calibration and tutor triggers;
- named cross-skill recruitment with portable fallback;
- completion and aporia conditions.

State: passed by explicit user approval on 2026-08-22. The approved runtime root is `skill/<name>/`.

### Gate 3: authoring

After approval:

1. Apply approved corrections to both specs.
2. Read the `$skill-writer` authoring, description-optimization, and registration-validation references.
3. Author runtime routers and focused flat references.
4. Add happy-path, robust, and anti-pattern/repair examples.
5. Register skills according to repository conventions approved at Gate 2.

State: passed. Both routers, all routed references, and transformed examples are implemented.

### Gate 4: validation

Pass when:

- structural validation succeeds;
- positive and negative trigger cases route correctly;
- scenario evals show the human remains the driver;
- tutor recruitment is brief, evidence-based, and returns cleanly;
- the workpad survives multi-turn updates without becoming a transcript;
- false-premise, sycophancy, overreliance, cargo-cult, and premature-closure cases are exercised;
- a human review confirms the interaction feels skilled rather than mechanical.

State: structural and static scenario validation passed; live human review remains open.

## Adopted decisions

| Decision | Basis |
| --- | --- |
| Two skills, not one monolith | Separates subject inquiry from coaching the inquiry skill. |
| Main skill name `dialectical-inquiry` | Names the activity without claiming generic ownership of all dialectics. |
| Tutor name `dialectical-tutor` | Makes the recruited role and trigger boundary explicit. |
| Human midwife / agent oracle | Explicit user intent; deliberately inverts classical maieutics. |
| Oracle is fallible and evidence-grounded | Prevents “oracle” from becoming authority or fluent completion. |
| Qualitative calibration, no score | Human skill and understanding cannot be mechanically certified. |
| Workpad at `.agent/<subject-slug>.md` | Persistent, subject-specific public model ledger required by user. |
| Tutor recruited after repeated or consequential evidence | Prevents interruption after every imperfect move. |
| Named tutor route plus portable fallback | Honors seamless recruitment while acknowledging `$skill-writer` portability guidance. |
| Reference-backed runtime skills | Keeps routers concise and loads calibration/examples only when relevant. |
| Runtime root `skill/<name>/` | Explicitly approved after the location decision was presented. |

## Rejected decisions

| Decision | Reason |
| --- | --- |
| Extend the existing DerivaDEX `dialectics` skill unchanged | Its agent-led interview elicits DRI premises; this project requires the human to question the oracle and master that craft. |
| One skill that silently switches personalities | Makes coaching hard to inspect and encourages tutor takeover. |
| Fixed thesis/antithesis/synthesis prompt chain | Treats skilled judgment as mechanical and encourages ritual compliance. |
| Numerical mastery or confidence score | Creates false precision and Goodhart pressure. |
| Agent-generated final mental model accepted by user | Approval is not ownership. |
| Tutor question bank as the core method | Question categories are scaffolds; selection, listening, and adaptation are the skill. |
| Always delay every oracle answer | Cognitive forcing is useful selectively and can harm usability. |
| Multi-agent implementation | The tutor is a conversational coaching route, not an independent workstream. |

## Remaining evaluation

- Exercise trigger and non-trigger fixtures in the target runtime.
- Exercise the integrated false-positive handoff and portable fallback paths in a live inquiry.
- Conduct a live human review for conversational agency and non-mechanical feel.

## Validation record

Static validation completed on 2026-08-22:

- the canonical `quick_validate.py` validator passed both skill roots;
- `git diff --check` passed;
- every bundled reference is flat and directly linked from its owning `SKILL.md`;
- no host-specific absolute path or `file://` link appears in project Markdown;
- transformed examples cover ownership and transfer, false framing and aporia, cargo-cult repair, false-positive tutor recruitment, bounded coaching, and oracle supervision;
- final descriptions preserve the approved positive and negative trigger boundaries.

These checks establish structure and static behavioral coverage. They do not certify human mastery or the felt quality of a live dialectical exchange.

## Update protocol

After each approved phase or material decision:

- update status and phase gates;
- record adopted, rejected, or deferred decisions;
- link new evidence at the exact claim it supports;
- keep research/maintenance provenance out of runtime skill references;
- never begin the next gated phase implicitly.
