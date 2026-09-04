# Research: Human-Led Dialectic With an AI Oracle

Status: research baseline for approval; not runtime instructions.

## Research question

What body of practice can support a Codex skill in which a human develops and owns a first-principles mental model by interrogating a knowledgeable but fallible runtime agent, while a second skill coaches the human's dialectical technique without taking over the inquiry?

The governing local intent is the handbook's [Dialectic Method](https://gitlab.com/dexlabs/derivadex/-/blob/master-patch-ci-topology/wiki/handbook/ai-native-team.md#dialectic-method): the DRI externalizes a model, tests it through dialogue, retains epistemic agency, and may end in aporia instead of fluent speculation. This research tests and refines the proposed skill topology; it does not treat the existing `dialectics` skill as sufficient authority for the new design.

## Conclusion

Adopt two skills:

1. `dialectical-inquiry`: the main, subject-bound conversation. The human is the midwife and drives the inquiry. The runtime agent is a fallible oracle: it develops an independent, source-grounded causal account, answers substantively, exposes uncertainty and framing errors, and continually maintains a provisional model of what the human appears to understand.
2. `dialectical-tutor`: a brief coaching intervention recruited by the main skill when the human is not effectively performing the midwife role. It diagnoses an observable conversational move, gives one corrective exercise, observes the retry, and returns control to the inquiry.

This is not the classical allocation of roles. In Plato's *Theaetetus*, Socrates is the midwife who tests another person's intellectual offspring; here the human must learn that craft and apply it to an AI oracle. The design is therefore a deliberate role inversion informed by Socratic maieutics, elenchus, guided discovery, and learning science—not a claim to reproduce a single canonical “Socratic method.”

“Oracle” must not imply authority, privileged truth, or infallibility. It names the answering role. The oracle remains subject to evidence, counterexample, uncertainty, and correction.

## The tangible body of knowledge

### 1. Maieutics: bring forth and test, do not install

In *Theaetetus* 148e–151d, Socrates describes intellectual midwifery as helping another bring forth an account and, crucially, testing whether the result is genuine or an imposture. He explicitly disclaims supplying wisdom of his own. The method may discard a cherished first “offspring,” and its value does not depend on reaching a successful definition. [Primary text: *Theaetetus* 148e–151d](https://praxeology.net/theaetetus.htm)

The modern SEP analysis emphasizes that the dialogue ends in aporia after rejecting three definitions of knowledge; this negative result is treated as a useful foundation for continued inquiry, not as failure. [Stanford Encyclopedia of Philosophy, “Plato on Knowledge in the Theaetetus”](https://plato.stanford.edu/entries/plato-theaetetus/)

Design consequence: the human must produce and revise the account. The system must permit honest aporia. Neither the oracle nor tutor may convert uncertainty into a polished synthetic answer merely to close the session.

### 2. Elenchus: test the interlocutor's commitments

The scholarly account of elenchus begins with the interlocutor's own statement, elicits premises the interlocutor accepts, and exposes incompatibility among those commitments. Its epistemic limit matters: agreement alone does not make a premise true, and elenchus may establish confusion more readily than positive truth. [Stanford Encyclopedia of Philosophy, “Plato's Shorter Ethical Works,” §2](https://plato.stanford.edu/archives/fall2017/entries/plato-ethics-shorter/)

Socratic definitions also demand more than examples or labels: a satisfactory account must be general, exclude non-instances, and explain why the thing is what it is. [Stanford Encyclopedia of Philosophy, “Plato's Shorter Ethical Works,” §3](https://plato.stanford.edu/archives/fall2017/entries/plato-ethics-shorter/)

Design consequence: the inquiry must distinguish internal coherence from external warrant. The oracle tests consequences and counterexamples, but evidence grounding separately tests whether premises are true or authoritative.

### 3. Aporia: productive recognition of ignorance

In *Meno*, Meno first discovers that he cannot define what he previously spoke about confidently. The geometry exchange then brings the learner from a confident but false answer to a state in which he “neither knows nor fancies that he knows”; Socrates presents that perplexity as preparation for inquiry. [Primary text: *Meno*](https://classics.mit.edu/Plato/meno.html)

The passage is also a warning. Many of Socrates' questions are strongly leading, and the dialogue's own claim that the learner was not taught should not be imported as an uncontested pedagogical fact. The durable technique is narrower: expose false confidence through a checkable case, make ignorance explicit, and continue inquiry without humiliation.

Design consequence: confidence reduction can be progress. The workpad must allow “rejected,” “unresolved,” and “aporia” states instead of monotonically increasing confidence.

### 4. Guided discovery: curiosity rather than covert persuasion

Padesky distinguishes questions designed to maneuver a client toward the questioner's answer from questions used for genuine guided discovery. Her process gathers concrete information, listens for unexpected meaning, summarizes for mutual correction, and ends by asking the learner to synthesize the implications. The learner should possess the knowledge needed to answer; questions should draw attention to relevant material outside the current focus and move between concrete cases and abstraction. [Christine Padesky, “Socratic Questioning: Changing Minds or Guiding Discovery?”](https://padesky.com/wp-content/uploads/2012/11/socquest.pdf)

This source is clinical practice guidance, not permission to make the skills therapeutic. Its contribution is the interaction technique: authentic curiosity, responsive questioning, summary, synthesis, and learner ownership.

Design consequence: generic question banks are novice scaffolds, not the runtime method. A tutor intervention should teach selection and listening, not prescribe a fixed sequence of question stems.

### 5. Socratic pedagogy: shared dialogue and productive discomfort

University teaching guidance groups useful probes around clarification, assumptions, reasons and evidence, implications, alternative viewpoints, and the question itself. It also recommends follow-up and periodic written synthesis. [University of Connecticut CETL, “Socratic Questions”](https://cetl.uconn.edu/resources/teaching-your-course/leading-effective-discussions/socratic-questions/)

Colorado State's account, derived from a Stanford teaching lecture, describes shared dialogue in which students ask questions too, productive discomfort without intimidation, open-ended inquiry, and attention to the beliefs beneath assertions. It explicitly rejects mechanical devil's advocacy. [Colorado State University, “The Socratic Method: Fostering Critical Thinking”](https://tilt.colostate.edu/the-socratic-method/)

In legal education, UChicago describes the method as cooperative articulation, development, defense, and revision of imperfect intuitions. It values reasoning processes over immediate right answers, treats mistakes as potentially illuminating, and says the method must be calibrated to the material and context rather than used exclusively. [University of Chicago Law School, “The Socratic Method”](https://www.law.uchicago.edu/socratic-method)

Design consequence: the tutor must preserve dignity and agency. “Cargo cult” is a diagnosis of an observable reasoning pattern, never a label for the person. Productive discomfort is permitted; intimidation, gotchas, and endless opposition are not.

### 6. Generative and interactive learning: the human must do intellectual work

The ICAP framework distinguishes passive receipt, active manipulation, constructive generation, and interactive co-construction. Constructive behavior produces ideas beyond the supplied material—such as explanations, justifications, hypotheses, predictions, analogies, or self-evaluations. Interactive learning requires both partners to contribute constructively through turn-taking; a yes/no exchange is not enough. [Chi and Wylie, “The ICAP Framework”](https://education.asu.edu/sites/default/files/lcl/chiwylie2014icap_2.pdf)

The National Academies' synthesis likewise finds that learners build mental models by integrating and generating knowledge; prior knowledge aids learning but can also bias attention. It supports retrieval, explanation, elaboration, application across contexts, metacognitive monitoring, targeted feedback, and challenges matched to current capacity. [*How People Learn II*, summary](https://www.nationalacademies.org/read/24783/chapter/2) and [Chapter 5, “Knowledge and Reasoning”](https://www.nationalacademies.org/read/24783/chapter/7)

Design consequence: understanding cannot be inferred from agreement or fluent paraphrase. Strong evidence includes self-generated causal explanation, prediction, counterexample, comparison, and transfer to a changed case.

### 7. Human–AI reliance: require a human position before AI completion

In an experiment with 199 participants, cognitive forcing interventions—such as making an initial decision before seeing the AI suggestion—reduced overreliance on incorrect AI advice relative to immediately presented AI explanations. The interventions did not eliminate overreliance and were sometimes less preferred, so they are a targeted safeguard rather than a universal ceremony. [Buçinca, Malaya, and Gajos, “To Trust or to Think”](https://arxiv.org/abs/2102.09692)

Design consequence: at meaningful decision points, the human should state a thesis, prediction, or discriminating question before the oracle supplies its synthesis. Apply this selectively when oracle anchoring would displace human judgment.

### 8. AI-specific epistemic hazards

An ICLR 2024 study found sycophancy across five RLHF-trained assistants and evidence that both human and preference-model judgments can favor responses matching a user's stated views over truthful responses. [Sharma et al., “Towards Understanding Sycophancy in Language Models”](https://proceedings.iclr.cc/paper_files/paper/2024/hash/0105f7972202c1d4fb817da9f21a9663-Abstract-Conference.html)

The risk is bilateral: the oracle may inherit the user's frame, while the human may over-rely on the oracle's fluent explanation. The main skill therefore needs explicit anti-sycophancy behavior, independent reconstruction of the problem, visible uncertainty, and regular invitations to falsify the oracle's account.

Design consequence: the oracle must challenge a false or narrowing premise before extending it; separately label sourced fact, inference, and assumption; and state what evidence would reverse its answer. The human must sometimes answer or predict before seeing the oracle's proposed frame.

### 9. Skill and prompt mechanics

The repo-local `$skill-writer` synthesis contract requires a declared class and execution shape, source inventory, coverage and gaps, negative examples, stopping rationale, and provider portability notes. Its design rules keep `SKILL.md` as a router, give every runtime reference a direct “open when” reason, and prefer focused references over a megadoc. These local files govern the blueprint mechanics: `$skill-writer/SKILL.md`, `references/synthesis-path.md`, `references/execution-shapes.md`, `references/reference-architecture.md`, and `references/workflow-routing.md`.

Official OpenAI guidance says skill descriptions act as routing boundaries and should state when to use the skill, when not to use it, outputs, and success criteria; negative cases and edge cases reduce misrouting. It also supports putting templates and worked examples inside skills so they load only when needed. [OpenAI Developers, “Shell + Skills + Compaction”](https://developers.openai.com/blog/skills-shell-tips)

Official Codex guidance recommends giving goal, context, constraints, and completion conditions; for fuzzy work, it explicitly suggests asking Codex to interview the user and challenge assumptions before coding. [OpenAI Docs, “Best practices”](https://learn.chatgpt.com/guides/best-practices)

Design consequence: both skills will be reference-backed routers with concrete positive, negative, and repair examples. Runtime behavior will define outcomes and judgment boundaries; it will not pretend the dialectic itself is a deterministic prompt chain.

### 10. Voice conversation and agent orchestration

Official ChatGPT Voice documentation says Voice in Chat, Work, and Codex supports natural interruption and can start separate task threads, check them, and return progress, blockers, and results to the continuing voice conversation. [OpenAI Docs, “ChatGPT Voice”](https://learn.chatgpt.com/docs/features/voice)

Official Realtime prompting guidance recommends explicit responsibility and decision boundaries, short task-specific spoken responses, one clarification at a time, brief tool preambles, silence for audio not addressed to the assistant, and clarification rather than inference when audio is ambiguous or cut off. [OpenAI Developers, “Using realtime models”](https://developers.openai.com/api/docs/guides/realtime-models-prompting)

OpenAI's agent orchestration documentation distinguishes manager-style orchestration, where one agent owns the conversation and calls specialists as tools, from handoffs, where the specialist becomes active. [OpenAI Developers, “Orchestration and handoffs”](https://developers.openai.com/api/docs/guides/agents/orchestration)

Design consequence: the dialectical oracle remains the single conversational owner. Research agents and the tutor may operate as bounded backstage specialists when the surface exposes orchestration, but their results return through the oracle. A voice transcript is an input aid, not automatically authoritative evidence of the human's settled model; consequential or unclear claims require confirmation before workpad update or coaching.

### 11. Textbook-grounded agent evaluation

Paul and Elder distinguish disciplined, deep, systematic Socratic questioning from questioning in general. Their public preview explicitly says there is no good mechanical way to lead a Socratic discussion: the questioner must listen carefully, understand the learner's point of view, and select among multiple possible responses. The same preview makes intellectual autonomy and the learner's own reasoning terminal aims. [Paul and Elder, *The Thinker's Guide to Socratic Questioning*, public preview](https://www.criticalthinking.org/store/get_file.php?inventories_files_id=422&inventories_id=231)

Wilberding's authorized preview treats Socratic pedagogy as inductive movement from premises toward discovery and distinguishes it from mere questioning, drilling, and passive information receipt. It also states that the method is difficult and requires practice. [Wilberding, *Teach Like Socrates*, authorized preview, Introduction](https://api.pageplace.de/preview/DT0400.9781000489293_A42495157/preview-9781000489293_A42495157.pdf)

Kwantlen Polytechnic University's open peer-tutoring workbook translates the question families into an independence-oriented coaching practice: draw out the learner's answer, and change or rephrase an ineffective question rather than supply the answer. [KPU, *Level Two Peer Tutoring Fundamentals and Integration Workbook*, chapter 7](https://kpu.pressbooks.pub/leveltwopeertutoringfundamentals/chapter/use-socratic-questions/)

These sources support evaluation cases for contextual follow-up, learner ownership, non-mechanical question selection, and bounded coaching. They do not establish that this AI role inversion causes first-principles mastery; a correct skill must preserve that evidentiary limit.

Promptfoo's Codex SDK provider can observe final text, heuristic skill reads, and traced command/file/tool activity. Its default eval thread is ephemeral; persistent threads pool by prompt template and configuration rather than rendered variables. The official skill-testing guide therefore supports isolated fixtures, paired routing and outcome checks, and repeated uncached comparisons. `skill-used` remains supporting evidence because Codex detection is inferred from direct `SKILL.md` reads. [Promptfoo, “OpenAI Codex SDK”](https://www.promptfoo.dev/docs/providers/openai-codex-sdk/) and [“Test Agent Skills”](https://www.promptfoo.dev/docs/guides/test-agent-skills/)

Design consequence: each SPEC uses independent disposable fixtures, local source claim cards, disabled network/search, hard routing and citation-boundary assertions, and a read-only Codex agent rubric over the final response and workpad. Voice behavior is deliberately excluded from this suite.

## Technique translation

| Technique | Runtime behavior | Evidence | Guardrail |
| --- | --- | --- | --- |
| Human-first externalization | Before a consequential oracle synthesis, ask the human for the current thesis, prediction, or discriminating question. | Handbook; Buçinca et al.; ICAP | Use selectively; do not obstruct direct factual questions. |
| Oracle reconstruction | Build an independent causal account from available evidence before extending the user's frame. | Handbook; sycophancy study; evidence-grounding | Present conclusions, sources, uncertainty, and defeaters—not hidden chain-of-thought. |
| Maieutic testing | Treat the human's account as an offspring to test with counterexample, consequence, and rival explanation. | *Theaetetus* | The human, not the oracle, must revise or retain it. |
| Elenctic consistency check | Compare the claim with the human's other accepted premises. | SEP elenchus | Internal consistency does not establish truth. |
| Concrete–abstract–concrete movement | Ground an abstraction in a case, derive the principle, then test it on a changed case. | Padesky; ICAP; *How People Learn II* | Do not force every exchange through the same ladder. |
| Reflective return | Restate the human model while separating observed claims from agent inference; invite correction. | Handbook; Padesky | Never claim access to the user's private mental state. |
| Aporia | Record exactly what failed and what remains unknown. | *Meno*; *Theaetetus*; SEP | Do not treat discomfort or lower confidence as failure. |
| Self-explanation | Ask the human to derive why the conclusion follows in their own words. | ICAP; *How People Learn II* | Paraphrase alone is weak evidence. |
| Counterexample and counterfactual | Ask for a case that breaks the rule or a changed condition that changes the outcome. | Elenchus; UConn; ICAP | Avoid automatic devil's advocacy. |
| Transfer probe | Ask the human to apply the model to a novel but structurally related case. | ICAP; *How People Learn II* | Use as a formative probe, not a score. |
| Answer-last forcing | Temporarily delay the oracle's recommendation until the human commits to a preliminary model. | Buçinca et al. | Trigger only when overreliance risk is visible. |
| Tutor fading | Give one scaffolded move, observe a retry, then withdraw; reduce coaching as the human self-corrects. | ICAP scaffolding; *How People Learn II* targeted feedback | The tutor must not become the permanent driver. |
| Written model ledger | Maintain a concise, revisable workpad of claims, causal links, evidence, disagreements, unknowns, and synthesis. | Handbook; Padesky summaries; OpenAI long-run skill guidance | It is a public reasoning artifact, not hidden chain-of-thought or a transcript dump. |
| Verbal evidence digest | Speak the authority, supported claim, material limit, and oracle inference; place exact links in chat and the workpad. | OpenAI Voice and Realtime guidance; evidence-grounding | Do not assume synchronous screen visibility or read URLs aloud. |
| Transcript confirmation | Confirm consequential, ambiguous, or interrupted speech before updating the model or coaching. | OpenAI Realtime unclear-audio guidance | Do not infer from accent, pace, hesitation, emotion, or verbal polish. |
| Single-owner voice orchestration | Keep one oracle voice while bounded workers gather evidence or diagnose one coaching move. | OpenAI agent orchestration guidance | Workers cannot own the thesis or become competing spoken interlocutors. |

## Formative calibration model

Calibration is qualitative and evidence-based. It must never collapse the conversation into a score or claim to measure the person's mind. The agent records observed conversational evidence and a provisional interpretation.

| Dimension | Evidence of growth | Ineffective pattern that may recruit the tutor |
| --- | --- | --- |
| Agency | Human chooses the next uncertainty and asks discriminating questions. | Human repeatedly asks the oracle what to think or accepts its agenda. |
| Epistemic hygiene | Human distinguishes known, inferred, assumed, and unknown. | Authority, observation, and inference are blended. |
| Causal depth | Human can derive the claim from primitives, constraints, and mechanisms. | Labels, idioms, or “best practices” substitute for causality. |
| Generativity | Human produces explanations, alternatives, and revisions not supplied verbatim by the oracle. | Human mirrors oracle wording without adding relations or consequences. |
| Falsifiability | Human can name a counterexample, defeater, or evidence that would revise the model. | Every observation is assimilated into the current thesis. |
| Transfer | Human predicts a changed or novel case using the same underlying model. | The account works only for the example already discussed. |
| Oracle supervision | Human notices unsupported confidence, frame inheritance, contradiction, or drift in the agent's answer. | Fluency or citation volume is treated as correctness. |
| Aporic discipline | Human can stop with a precise unknown and a next inquiry. | Pressure for closure produces a polished guess. |

Tutor recruitment requires a repeated or consequential pattern, not one imperfect question. Immediate intervention is justified when the human explicitly delegates judgment to the oracle at a consequential decision, repeats oracle prose as understanding, or proceeds from a materially false premise after the oracle has exposed it.

## Cargo-cult detection boundary

Cargo-cult behavior is present only when observable use of a term, practice, or pattern lacks its governing causal or authority conditions. Indicators include:

- naming a solution pattern without explaining the problem mechanism it changes;
- citing “best practice” without identifying the authority and applicability conditions;
- repeating the oracle's vocabulary while being unable to predict a consequence;
- defending a rule after a counterexample shows its stated rationale does not hold;
- reproducing steps while being unable to say what invariant each step protects.

Sophisticated vocabulary, brevity, uncertainty, or a wrong answer alone are not cargo cult. The correction targets the missing relation, not the person's competence or character.

## Skill topology and shape decisions

### `dialectical-inquiry`

- Class: `workflow-process`.
- Primary shape: `reference-backed-expert`.
- Secondary mechanic: `router`, solely for tutor recruitment and return.
- Simpler inline shape rejected: the always-visible router would become overloaded by calibration, bias controls, the workpad schema, and examples.
- Scripts rejected: the core work is contextual judgment; deterministic scripts would falsely mechanize it.
- Multi-agent/orchestrator as the primary shape rejected: the inquiry remains one human–oracle conversation. Voice-capable runtimes may use bounded backstage specialists for evidence or coaching without changing the skill's primary shape.

### `dialectical-tutor`

- Class: `workflow-process`.
- Primary shape: `reference-backed-expert`.
- Secondary mechanic: a small intervention-selection route.
- Inline-only shape rejected: diagnosis, drills, and repair examples would overload the runtime router.
- Scripts and scoring rejected: coaching depends on conversational evidence and human judgment.

## Dependency and portability decision

The proposed named recruitment of `$dialectical-tutor` is an intentional provider-facing dependency because the user requires seamless recruitment. This conflicts with `$skill-writer`'s portable default not to require another skill by name at runtime. The blueprint resolves the conflict explicitly:

1. The main skill recruits `$dialectical-tutor` when named skill routing is available.
2. The main skill carries a minimal portable fallback contract: pause, name the observed pattern, request one corrected midwife move, assess the retry, and return.
3. No provider-specific argument metadata is required.
4. `request_user_input` may be used when available, but ordinary conversational questions remain valid.

## Source inventory

| Source | Tier | Read contribution | Constraints |
| --- | --- | --- | --- |
| DerivaDEX AI-Native Engineering Playbook, “Dialectic Method” | governing local intent | Human ownership, mental-model boundary, thesis/return/challenge/synthesis, aporia, pre-SPEC placement | Governs intent in its own repo; this project translates it. |
| Plato, *Theaetetus* 148e–151d | primary classical text | Midwifery, testing offspring, non-supply, rejection | Metaphor and dramatic text, not a modern training protocol. |
| Plato, *Meno* | primary classical text | Aporia, false confidence, active inquiry, concrete testing | Contains leading questions and a disputed recollection argument. |
| SEP, *Theaetetus* and shorter ethical works | expert scholarly synthesis | Heuristic aporia, elenchus rules and limits, explanatory definitions | Secondary scholarship; philosophical disputes remain. |
| Padesky 1993 | canonical applied practice | Guided discovery vs persuasion, listening, summary, synthesis, concrete/abstract movement | Clinical context; not imported as therapy. |
| UConn CETL and CSU/Stanford-derived guidance | university pedagogy | Question families, follow-up, shared dialogue, psychological stance | Practical guidance, not controlled efficacy evidence. |
| UChicago Law School | applied professional pedagogy | Articulation, defense, revision, uncertainty, calibrated use | Law-school context and institutional account. |
| Chi & Wylie 2014 | peer-reviewed learning framework | Generative and interactive evidence, self-explanation, scaffolding | ICAP is a framework with caveats, not a mastery score. |
| *How People Learn II* | National Academies consensus synthesis | Mental models, prior-knowledge bias, retrieval, explanation, transfer, metacognition, targeted feedback | General learning science, not Socratic-specific. |
| Buçinca et al. 2021 | peer-reviewed human–AI experiment | Human-first decisions and cognitive forcing reduce overreliance | One task and population; forcing has usability costs. |
| Sharma et al. 2024 | peer-reviewed LLM study | Sycophancy and preference pressure toward user beliefs | Models and training regimes evolve; establishes risk, not a complete mitigation. |
| `$skill-writer` local references | local skill-authoring authority | Synthesis, shapes, reference routing, examples, validation | Governs artifact design, not Socratic doctrine. |
| Official OpenAI skill and Codex guidance | official provider mechanics | Skill routing descriptions, negative cases, on-demand references, interview-before-code | External mechanics, never local epistemic intent. |
| Official OpenAI Voice, Realtime, and orchestration guidance | official provider mechanics | Voice surface behavior, interruption and unclear-audio handling, asynchronous task coordination, manager versus handoff topology | Public mechanics do not establish a universal skill-visible Voice flag; use capability-aware routing. |
| Paul and Elder, *The Thinker's Guide to Socratic Questioning* (2016), official public preview | canonical modern practice manual | Systematic depth, contextual listening, non-mechanical selection, intellectual autonomy, practice | Previewed pages only; no AI-specific efficacy evidence. Print ISBN 978-0-944583-31-9; ebook ISBN 978-1-5381-3381-1. |
| Wilberding, *Teach Like Socrates* (2014/2021), authorized preview | modern applied pedagogy book | Inductive discovery, learner effort, distinction from drilling, method requires practice | Introduction only; do not infer procedures from unpreviewed chapters. Paperback ISBN 978-1-61821-143-9. |
| KPU, *Level Two Peer Tutoring Fundamentals and Integration Workbook* (2019), chapter 7 | open applied tutoring textbook | Independent thinking, question families as repertoire, rephrase rather than supply answers | OER tutor-training context; no universal sequence or efficacy claim. |
| Promptfoo Codex SDK provider and agent-skill testing guide | official upstream integration mechanics | Disposable working directories, skill-read traces, ephemeral/persistent thread behavior, layered assertions, repeat runs | Skill detection is heuristic; provider success does not establish dialectical quality. |

## Coverage matrix

| Dimension | Coverage | Status |
| --- | --- | --- |
| Classical maieutics | *Theaetetus*, SEP | complete for blueprint |
| Elenchus and its limits | SEP, *Meno* | complete for blueprint |
| Aporia | *Meno*, *Theaetetus*, SEP | complete for blueprint |
| Applied guided discovery | Padesky | complete for blueprint |
| General pedagogy | UConn, CSU, UChicago | complete for blueprint |
| Generative learning and mental models | ICAP, National Academies | complete for blueprint |
| Human–AI overreliance | Buçinca et al. | complete for blueprint |
| AI sycophancy | Sharma et al. | complete for blueprint |
| Runtime skill mechanics | `$skill-writer`, official OpenAI docs | complete for blueprint |
| Modern textbook/manual techniques | Paul/Elder, Wilberding, KPU, with Padesky as applied guided discovery | sufficient to derive candidate obligations; not current behavioral coverage |
| Promptfoo/Codex validation mechanics | official Promptfoo provider and skill-testing docs | sufficient for the shared harness law; skill evidence remains obligation-local |
| Voice and orchestration mechanics | official OpenAI Voice, Realtime, and agent orchestration docs | complete for approved Voice amendment |
| Longitudinal mastery of human-led AI dialectic | no canonical direct evidence found | explicit gap |
| Reliable automatic detection of cargo-cult reasoning | no validated detector found | explicit gap; use observable formative cues only |
| Cross-skill invocation portability | local fallback designed; runtime behavior not yet tested | validation-stage gap |
| Universal skill-visible Voice Mode signal | no public contract found in the reviewed official docs | explicit gap; require authoritative runtime context, explicit audio modality, or user request |

## Research gaps and stopping rationale

No canonical source directly studies this exact role inversion: a human midwife interrogating an LLM oracle while a second skill coaches the human. The design is a source-grounded synthesis and must be validated through examples and observed sessions rather than presented as established pedagogy.

Further retrieval is currently low-yield because the required facets are covered by independent source classes: primary philosophy, philosophical scholarship, modern pedagogy books and manuals, clinical guided discovery, university and professional pedagogy, learning science, human–AI reliance research, LLM bias research, and official skill/eval mechanics. New search results mostly repeated question taxonomies or offered recent LLM tutor prototypes without mature evidence.

The public passages are sufficient for the present obligation design, so no private book access is required. Full-book access should be requested only if a future admitted scenario exposes a procedure-level gap outside the read previews; the relevant print ISBNs are recorded in the source inventory.
