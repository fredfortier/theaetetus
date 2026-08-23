# Workpad: Dialectical Skills Project

Status: runtime skills implemented; the protocol-level run exposed a persistent-thread coaching
failure. The six domain sandboxes are approved in principle; their execution contract is ready for
explicit implementation permission.

## Governing thesis

The project is for a competent software engineer entering an unfamiliar technical domain or
codebase. Its practical hypothesis is that a person who already knows how to reason about programs
can become useful much sooner when they can conduct a disciplined dialectic with a capable but
fallible AI oracle. “Useful” has a narrow operational meaning here: the engineer can produce a
reviewable causal model, locate the decision-owning boundary, state the relevant invariants and
unknowns, and propose discriminating tests or a bounded change without a domain expert supplying
the missing architecture. It does not mean instant domain expertise, production independence, or
guaranteed correctness.

The two repo-local Codex skills support that hypothesis:

- `dialectical-inquiry`: the human drives as midwife; the runtime agent answers as a fallible oracle.
- `dialectical-tutor`: coaches the human's midwife craft when the main conversation shows an ineffective pattern.

The intended outcome is not a better question-answer script. It is a repeatable environment in
which the human forms, tests, revises, transfers, and defends a first-principles mental model without
surrendering epistemic agency. The human must drive because the capability being developed is the
human skill of dialectic; an agent-led tutorial can deliver an answer while leaving that capability
untested.

This is a research and evaluation hypothesis, not an established efficacy claim. The present
automated suite can test runtime behavior. Only longitudinal human evidence can establish whether
the method actually shortens time to a first useful contribution.

## Learner classification

Do not describe the target learner as innately intelligent or merely “predisposed to reasoning.”
Use the following observable classification:

> **Cross-domain acclimating engineer on an adaptive-expertise trajectory**: proficient in a source
> software discipline, novice or early-acclimating in the target domain, able to inspect code and
> evidence, and willing to expose, test, and revise a provisional account.

This combines three academic lineages without pretending they are one scale:

- The Model of Domain Learning distinguishes acclimation, competence, and proficiency within a
  domain. The same engineer can therefore be proficient in software engineering while acclimating
  in derivatives, cryptography, or blockchain mechanics.[^mdl]
- Expertise is substantially domain-specific; proficiency in one field does not itself prove
  transfer into another. Source-domain competence is a resource, not a waiver of target-domain
  learning.[^expertise-domain]
- Adaptive expertise distinguishes efficient execution of familiar routines from flexible,
  principle-guided response to novel problems. Preparation-for-future-learning assessments test
  whether a learner can use a later resource to learn and transfer, which is closer to this
  project's aim than unaided recall or a static post-test.[^adaptive-expertise]

Admission to a case is behavioral, not psychometric. The persona must specify what the engineer can
already do—read the relevant language, trace state, formulate invariants, run tests, and explain a
causal hypothesis—and what target concepts they do not yet know. The dialogue may assume
willingness to state a tentative thesis and revise it. It may not assume general transfer ability,
domain intuition, or hidden “reasoning talent.”

## What dialectic means here

Classical dialectic supplies the governing form. In the ancient questioner/answerer practice, a
determinate thesis is drawn out, commitments are tested together, contradiction or counterexample
forces revision, and aporia is a legitimate result. The point of refutation is the untenable
starting point, not a diagnosis of the person.[^classical-dialectic] Plato's elenchus tests an
interlocutor's own commitments and can terminate in aporia; the method of hypothesis treats the
working account as provisional, tests whether cases agree with it, and can ascend to a premise that
better explains the first.[^plato-elenchus][^plato-hypothesis]

This project deliberately changes the classical role allocation:

- the human is the questioner and midwife;
- the runtime agent is the knowledgeable but fallible answerer/oracle;
- the human owns the proposition, revisions, and terminal synthesis;
- the oracle must expose its evidence, assumptions, and possible contradictions rather than seek
  victory or manufacture agreement.

The notation **proposition → commitments → discriminating case → contradiction or surviving
account → higher premise or precise aporia → changed-case transfer** is an editorial map of
recognizable movements, not a procedure. A conversation may skip, repeat, reverse, or remain within
any of them; several may occur in one exchange; aporia may be the responsible ending. The notation
must never become a turn sequence, state machine, coverage checklist, prompt ladder, branch table,
or rule for choosing the next question. Scholars dispute whether Socrates can be assigned any one
uniform method at all.[^socrates-no-uniform-method] The next useful question depends on what the
human actually heard in the oracle's last answer and on the realities of the problem, not on an
abstract slot waiting to be filled.

Plotinus sharpens this distinction without proving a software-pedagogy design. In *Ennead* I.3 he
calls dialectic the noblest method and a precious part of philosophy, yet denies that it consists
of bare theories and rules and contrasts its concern with realities and truth with the machinery of
premises and conclusions left to another discipline.[^plotinus-dialectic] The applicable lesson is
qualified: dialectic has form and discipline, but its excellence lies in truth-directed judgment
about the thing under inquiry, not faithful execution of formal conversational machinery.

That is why the tutor is indispensable but subordinate. No encoded workflow can supply the human's
responsive judgment. The tutor watches for an observable loss of that judgment—passive acceptance,
failure to follow an answer, covert persuasion, cargo-cult terminology, or failure to test a
premise—then coaches one missing operation and returns control. It does not select a path through
the editorial map or conduct the inquiry on the human's behalf. Modern Socratic pedagogy is admitted
only where it helps the human practise such operations: responsive listening, genuine curiosity,
evidence separation, self-explanation, falsification, and transfer.[^pe16][^p93][^w14][^kpu19]

## Success boundary

The immediate product is the engineer's first reviewable contribution, not a claim that they have
become a domain expert. A successful case ends with all of the following:

1. a human-owned causal account that uses target-domain primitives correctly;
2. at least one familiar analogy that has been retained, narrowed, or rejected for an explicit
   reason;
3. a prediction or counterexample on a changed case;
4. evidence, inference, and unknowns kept separate;
5. a concrete engineering artifact: a failing test, invariant set, diagnostic plan, change boundary,
   or small patch design;
6. an oracle challenge that the artifact survives, or a precise aporia naming the missing evidence.

Correct final terminology without that derivation is cargo-cult success and must fail. A useful but
incomplete aporia can pass when it prevents an unsafe change and identifies the next discriminating
observation.

## Authority

1. Explicit user direction and approved skill `SPEC.md` files.
2. The DerivaDEX handbook's Dialectic Method for source intent.[^derivadex-dialectic]
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

## Evaluation strategy and current-suite critique

### Verdict on the present scenarios

Verdict: **Revise as an effectiveness benchmark; retain as protocol-unit coverage.**

The current suite has strong internal value for routing, workpad ownership, evidence boundaries,
tutor timing, and lifecycle markers. Its main cases deliberately isolate one decision and its
matched control can test whether visible ceremony alone explains those scores. That is necessary.

It is not sufficient for the governing thesis:

1. Most cases discuss Socratic method itself. A skill can learn the test vocabulary while never
   helping an engineer acquire a foreign domain model.
2. The generic cache/API ownership cases are too small and too familiar to create a meaningful
   source-domain/target-domain delta.
3. Embedded exchanges test response to a prepared diagnosis more than discovery across a live,
   uncertain problem.
4. The scenarios over-sample the same ownership, evidence-boundary, and question-taxonomy failure
   modes. They under-sample proof soundness, asynchronous workflow, empirical inference, financial
   accounting, authorization, and probabilistic finality.
5. The five-turn integration case demonstrates state continuity, not productivity. It ends in a
   proposition about questioning rather than a reviewable engineering artifact.
6. Passing these tests can reject a narrow ceremony-only explanation for protocol behavior. It
   cannot support transfer, domain onboarding, or time-to-contribution claims.

The existing scenarios therefore become **Layer A: method and runtime micro-tests**. They remain
frozen as regression coverage; they are not presented as the final effectiveness benchmark.

### Benchmark lessons adopted

SWE-bench's useful premise is to pair a real repository state and issue with executable tests,
because real software work spans files and requires repository understanding rather than isolated
code generation.[^swe-bench] Its later audits are the stronger warning: hard tasks are not useful
when prompts are underspecified, tests impose an undisclosed implementation, coverage is weak, or
the prompt points away from the graded behavior. Experienced reviewers must judge the problem,
tests, and reference solution together rather than infer quality from a passing harness.[^swe-audit]

For this project, every domain case must consequently satisfy all of these laws:

- **Real mechanism, synthetic incident.** Base the mechanism and artifacts on canonical upstream
  specifications, code, or primary literature; synthesize the incident so the answer is not a
  memorized public patch.
- **One-page problem, inspectable fixture.** The visible statement must contain the symptom,
  operational boundary, persona, available artifacts, and decision objective. Anything required by
  the grader must be stated or reasonably discoverable in the fixture.
- **Solution envelope, not secret prose.** The gold artifact specifies acceptable invariants,
  causal relations, counterexamples, and tests. It must allow multiple implementations that satisfy
  the same behavior.
- **Broken-task audit.** Before target execution, an engineer independently compares statement,
  fixture, rubric, and reference solution for underspecification, overconstraint, leakage, missing
  coverage, and misleading cues.
- **No answer in the issue.** The packet may expose facts and competing hypotheses; it must not
  name the decisive conceptual distinction in the problem statement.
- **No vocabulary score.** Domain terms count only when connected to the right cause, boundary, or
  prediction.
- **Bounded horizon.** A prepared cross-domain engineer should be able to reach a reviewable result
  in 5–30 human-led turns. Cases requiring weeks of mathematical background or a production-scale
  patch are out of scope.

### Evaluation layers and non-prescriptive editorial lenses

The evaluation portfolio has four layers:

| Layer | Purpose | Evidence produced |
| --- | --- | --- |
| A. Protocol micro-tests | Keep routing, provenance, evidence, workpad, tutor, and lifecycle regressions small and diagnosable. | Deterministic assertions, calibrated semantic rubrics, matched procedural control. |
| B. Anchored case studies | Exercise dialectic across six different engineering problem classes in the target domain family. | Multi-turn state, source-grounded oracle behavior, human-owned model ledger, engineering artifact. |
| C. Changed-case transfer | Present a new input or boundary after the model stabilizes, without giving the decisive analogy. | Prediction and justification from the human's model; PFL-style ability to use what was learned. |
| D. Human comparison | Determine whether an actual engineer becomes productively oriented without oracle takeover. | Blinded transcript/artifact review, time to first reviewable contribution, correction burden, retained understanding. |

Layer B reviewers may use the following lenses to describe intellectual work that occurred:
familiar account, exposed commitment, discriminating case, contradiction, surviving or revised
account, precise aporia, engineering consequence, and changed-case transfer. These are neither
stages nor required coverage within one conversation. They are retrospective labels that make a
transcript reviewable without telling the human or oracle what must happen next. The runtime skills
must contain no machinery that advances among them. Promptfoo may enter a sandbox at different
live tensions and ask whether the oracle preserves the conditions for inquiry at that point; it may
not reward reproduction of a canonical path.

Fixed turns may establish reproducibility, but they cannot establish human learning. Automated
Promptfoo runs score whether the oracle creates the conditions above while preserving ownership.
Claims about the engineer's learning, speed, or retention require Layer D with actual humans.

### Sandbox topology and disclosure boundary

Promptfoo officially supports external test/scenario files, glob expansion, and controlled
skill-version fixtures; the Codex provider discovers project skills under `.agents/skills/` in each
working directory.[^pf-scenarios][^pf-skill-comparison] Use that precedent in this repository as
follows:

```text
evals/promptfoo/
  sandboxes/
    <case-slug>/
      sandbox.yaml             # identity, persona delta, source pins, toolchain, time horizon
      problem.md               # <= one page; visible symptom, boundary, objective, artifacts
      project/                 # minimal runnable synthetic repository and data
      evidence/                # version-pinned claim cards visible to the target
      frontiers.yaml           # non-ordered conceptual coverage graph; never runtime instructions
      scenarios/
        working.yaml           # skill-tuning cases
        robustness.yaml        # paraphrase, partial knowledge, and rival-frame cases
        controls.yaml          # no-skill and ceremony-only comparisons
      grading/
        solution-envelope.md   # acceptable causal relations, invariants, tests, alternatives
        rubric.yaml            # hard outcomes and diagnostic signals
        transfer.yaml          # sealed changed cases
        adversarial-tests/     # hidden executable defeaters
        broken-task-review.md  # statement/fixture/rubric/gold audit
  configs/
    domain-unit.yaml
    domain-integration.yaml
    domain-holdout.yaml
  generators/domain-cases.mjs
  scripts/
    materialize-sandbox.mjs
    audit-results.mjs
  .runs/                       # ignored disposable target and grader fixtures
```

The authoring tree may colocate visible and grading material for maintainability, but the target may
not see `grading/`. The materializer creates a disposable nested Git repository containing only
`problem.md`, `project/`, target-visible `evidence/`, and the skill symlinks under
`.agents/skills/`. It creates a separate read-only grader fixture containing the target transcript,
workpad, solution envelope, rubric, and hidden test results. No solution wording, transfer case, or
rubric hint may enter the target prompt, working directory, inherited environment, or conversation
history. Network, web search, and approvals remain disabled. A unique disposable working directory
and thread pool are required for every independent row.

Promptfoo `scenarios` are used only for legitimate matrix expansion—such as the same live tension
across partial-knowledge personas or paraphrases—not to encode conversational ordering. External
`file://` cases keep sandbox ownership local; a JavaScript generator validates each manifest and
expands the approved matrix. Persistent multi-turn tests run serially and in isolated invocations;
working cases and sealed transfer cases never share a target thread.[^pf-test-cases][^pf-scenarios][^pf-codex-threads]

Each `frontiers.yaml` describes a coverage graph, not a learning path. A frontier records:

```yaml
id: stable-concept-id
latent_misconception: a plausible source-discipline import
prerequisite_relations: concepts needed to make this tension intelligible
available_evidence: fixture facts that can discriminate accounts
changed_case: a nearby case that pressures the current account
observable_progress: a human-authored prediction, distinction, invariant, or precise unknown
oracle_failure: takeover, unsupported certainty, frame adoption, or answer evasion
tutor_trigger_candidate: an observable midwife failure, not a domain mistake alone
engineering_consequence: a test, diagnostic, invariant, or bounded change made possible
transfer_neighbors: other frontiers to which the relation may apply
```

The graph expresses what could become intellectually live as understanding changes. It does not
assign turn numbers, mandatory edges, or the next question. Test rows sample different entry
conditions and pressure points; no single dialogue must visit every node. Automated evaluation can
score oracle behavior and the provenance of a simulated human-owned artifact, but it cannot certify
an actual person's learning.

### Scoring contract

The principal metrics are distinct and non-compensating:

- `OracleSubstance`: answers the asked domain question and exposes uncertainty;
- `ModelCorrection`: surfaces the decisive conflict without writing the human's revision;
- `EvidenceDiscipline`: distinguishes fixture fact, external rule, inference, and unknown;
- `HumanOwnership`: only human turns own thesis, revision, and synthesis;
- `MidwifeResponsiveness`: coaching is triggered from an observed conversational failure and targets
  the last oracle answer;
- `EngineeringConsequence`: the surviving model entails a correct test, invariant, or change
  boundary;
- `ChangedCaseTransfer`: the model predicts the withheld variant for the right reason;
- `DriftResistance`: the conversation stays on the live causal question rather than accumulating
  terminology.

Route, markers, workpad shape, source counts, and style remain diagnostics. They never enter the
domain-effectiveness outcome.

## Approved six-sandbox portfolio

The user approved these case concepts on 2026-08-23. Approval fixes their causal purpose and
portfolio balance, not their exact fixture implementation; each must still pass the admission and
broken-task audits below before its working tests are used to tune a skill.

### CS-ZK-01 — The proof verifies the wrong statement

- **Persona:** Rust engineer with algorithms, discrete mathematics, testing, and serialization
  experience; understands hashes and finite-field arithmetic at an undergraduate level; has never
  designed an AIR or proof statement.
- **Problem:** A synthetic fork of the Plonky3 Fibonacci AIR publishes `(steps, result)`. Initial,
  transition, and final-value constraints are present, and proofs verify, but `steps` is carried as
  application metadata rather than bound to the proved statement. The team concludes that a valid
  proof authenticates the claimed step count.
- **Plausible starting analogy:** “The prover ran the loop with this argument, so the verified output
  includes that argument,” importing ordinary function-call semantics into a proof system.
- **Dialectical hinge:** distinguish execution trace, AIR constraints, public statement, and
  application metadata. A verifier proves only what the constraints and public inputs bind. The
  curated Fibonacci example makes the initial, transition, and final constraints inspectable, while
  Plonky3 itself is a toolkit of PIOP primitives rather than a compiler that infers application
  intent.[^plonky3-awesome][^plonky3-fibonacci]
- **Reviewable result:** a statement map; a constraint or public-input design that binds the claimed
  length/termination; and negative tests showing that tampered `steps`, omitted terminal binding,
  or padding ambiguity cannot verify.
- **Transfer:** a range-check AIR has correct row-local constraints but fails to bind the number of
  active rows. The engineer must identify the same statement/witness boundary without invoking
  Fibonacci vocabulary.
- **Expected horizon:** 18–28 turns.

**Synthetic project:** a small Rust, Plonky3-shaped AIR project with `statement.rs`, `trace.rs`,
`air.rs`, verifier-input serialization, and adversarial trace tests. It must be self-contained or
version-pinned and vendored so the no-network target can run it. It is not presented as an upstream
Plonky3 defect.

| Conceptual frontier (unordered) | What makes it live | Reviewable consequence |
| --- | --- | --- |
| computation vs proposition proved | the trace generator accepts `steps`, but verifier inputs do not | map every claimed field to a constraint or public input |
| transition validity vs boundary completeness | each adjacent row is valid while the claimed terminal relation is underbound | negative terminal/boundary test |
| trace height, padding, and active rows | two traces encode the same recurrence with different unused rows | explicit active-row or termination invariant |
| honest generation vs adversarial witness | the generator never emits the malformed trace that the AIR accepts | hand-constructed accepting counterexample test |
| transfer beyond Fibonacci | a range-check AIR constrains rows but not how many are meaningful | derive the analogous statement boundary without keyword reuse |

### CS-WEB3-02 — A transaction hash is not application success

- **Persona:** senior React/TypeScript engineer experienced with async state, reducers, retries, and
  HTTP APIs; no wallet, JSON-RPC, nonce, receipt, replacement, or chain-reorganization experience.
- **Problem:** A swap UI marks an order successful when `eth_sendTransaction` returns a hash. While
  the receipt is pending, the user changes account and network; a speed-up replaces the original
  transaction, and a stale React closure credits the visible order on the new account.
- **Plausible starting analogy:** a resolved mutation promise is equivalent to an accepted server
  transaction and its result belongs to the current component state.
- **Dialectical hinge:** separate wallet authorization, RPC submission, mempool identity, inclusion,
  receipt status, replacement, confirmation/finality, and UI ownership. EIP-1193 requires consumers
  to respond to `chainChanged` and `accountsChanged`; those are state changes, not incidental UI
  events.[^eip1193] Ethereum's transaction-replacement proposal documents the same-sender,
  same-nonce speed-up/replacement mechanism; it is cited as a mechanism description, not as a
  finalized provider contract.[^eth-replacement]
- **Reviewable result:** an explicit transaction state machine keyed by immutable operation context
  `(chain, account, request/nonce)`; cancellation/invalidation rules for account or chain changes;
  receipt-revert and replacement handling; and component tests for stale completions.
- **Transfer:** the original hash is included and then reorged out. The engineer must decide which
  UI states are provisional and which downstream actions require safe/finalized evidence.
- **Expected horizon:** 14–24 turns.

**Synthetic project:** a React/TypeScript component and reducer with a deterministic EIP-1193
provider mock, receipt/replacement fixtures, and Vitest state-machine tests. The initial failure must
remain one ownership/lifecycle defect rather than a pile of unrelated wallet bugs.

| Conceptual frontier (unordered) | What makes it live | Reviewable consequence |
| --- | --- | --- |
| authorization vs submission | the wallet resolves with a hash before execution | provisional submitted state, not success |
| request identity vs mutable UI context | account or chain changes while a promise is pending | immutable operation key and stale-completion rejection |
| transaction hash vs nonce intent | a speed-up replaces the original hash | replacement-aware operation tracking |
| inclusion vs successful execution | a receipt exists with failed status | explicit reverted terminal state |
| confirmation vs finality | an included transaction is reorged out | risk-calibrated provisional/final UI policy |

### CS-QUANT-03 — The profitable mean-reversion bot learned its backtest

- **Persona:** Python/data engineer comfortable with pandas, statistics, time-series joins, and ML
  train/test splits; no market microstructure, execution, strategy selection, or trading-risk
  background.
- **Problem:** A crypto pairs strategy selects the pair on the full history, normalizes the spread
  with full-sample parameters, enters at the same close that generated the signal, tunes thresholds
  on reported Sharpe, and ignores fees and slippage. It looks highly profitable.
- **Plausible starting analogy:** ordinary shuffled prediction validation plus a high out-of-sample
  score is enough to establish an executable signal.
- **Dialectical hinge:** distinguish an economic mean-reversion hypothesis from the estimator used
  to test it; then separate information time, selection, execution, costs, and regime stability.
  Classic pairs-trading research itself defines formation/trading periods and explicitly investigates
  transaction costs and alternative explanations; backtest-overfitting research warns that repeated
  selection can manufacture apparent performance.[^pairs-trading][^backtest-overfitting]
- **Reviewable result:** a causal event-time diagram; formation/walk-forward protocol; lagged signal
  and next-executable-price rule; fee/slippage and borrow assumptions; multiple-selection record;
  regime-break falsifier; and tests that fail on lookahead or missing costs.
- **Transfer:** a market-making backtest has no full-sample z-score but values inventory at the
  mid-price and assumes every quote fills. The engineer must transfer the distinction between model
  signal and executable PnL rather than repeat “use walk-forward.”
- **Expected horizon:** 20–30 turns.

**Synthetic project:** a small Python/pandas backtester with timestamped price and fill data,
formation/trading configuration, deliberately biased baseline, and executable PnL tests. The fixture
must make the earliest impossible information edge numerically inspectable.

| Conceptual frontier (unordered) | What makes it live | Reviewable consequence |
| --- | --- | --- |
| economic hypothesis vs fitted statistic | the z-score is stable only with full-history parameters | formation-only estimator and stated hypothesis |
| observation time vs executable time | a close both creates and fills the signal | lagged signal and next-available-price rule |
| evaluation vs selection | the reported pair/threshold won a search on the same history | selection record and untouched evaluation slice |
| gross signal vs realizable PnL | small apparent edge disappears under fees/slippage/borrow | explicit cost and fill model |
| stationarity assumption vs regime | a structural break dominates the result | falsifier and bounded stop/re-estimation policy |
| transfer from backtest to market making | mid marks and universal fills create fictitious PnL | inventory/fill-aware executable-PnL account |

### CS-PERP-04 — Cross-margin liquidation is not a position-local stop loss

- **Persona:** backend/distributed-systems engineer comfortable with ledgers, event ordering,
  decimal arithmetic, and invariants; no derivatives, funding, mark-price, or margining knowledge.
- **Problem:** A risk worker liquidates each BTC position when its local unrealized loss crosses a
  threshold derived from the user's selected leverage. The account also has an offsetting ETH
  cross-margin position and an hourly funding update. Services inconsistently use last trade,
  oracle, and mark price, so replay order changes the liquidation decision.
- **Plausible starting analogy:** each leveraged position owns its collateral and liquidation is a
  per-position stop condition.
- **Dialectical hinge:** derive account equity, total maintenance requirement, isolated versus
  cross ownership, price purpose, and funding cash flow before choosing a service boundary.
  Hyperliquid's public mechanics make the distinctions concrete: cross positions share collateral,
  liquidation compares account value with maintenance margin, mark price drives unrealized PnL and
  liquidation, and funding changes balances over time.[^hl-margin][^hl-liquidation][^hl-prices][^hl-funding]
- **Reviewable result:** one account-level risk invariant; explicit price-source contracts; atomic
  snapshot/version requirements for funding, positions, and prices; isolated-margin exception; and
  scenario tests for offsetting positions, stale marks, and reordered funding.
- **Transfer:** partial liquidation improves maintenance compliance but changes notional and account
  equity. The engineer must derive whether another liquidation pass is required from the invariant,
  not from a fixed sequence.
- **Expected horizon:** 20–30 turns.

**Synthetic project:** a TypeScript account-risk engine with decimal-safe ledger entries, position,
price, and funding snapshots, plus deterministic replay tests for cross and isolated modes.

| Conceptual frontier (unordered) | What makes it live | Reviewable consequence |
| --- | --- | --- |
| position loss vs account equity | an offsetting position changes the account result | account-level equity/maintenance invariant |
| cross vs isolated collateral ownership | the same position liquidates differently by margin mode | explicit collateral boundary |
| last/oracle/mark price purposes | services disagree while all values appear current | price-source contract per decision |
| state values vs coherent snapshot | funding and prices are individually valid but from different versions | atomic/versioned risk input |
| event order vs ledger semantics | reordered funding changes liquidation | ledger transition and replay invariant |
| full vs partial liquidation | a partial close changes both notional and maintenance | re-evaluate the invariant, not a fixed liquidation sequence |

### CS-SIG-05 — A valid signature can authorize the wrong execution

- **Persona:** security-minded Go/Solidity-adjacent backend engineer who understands public-key
  signatures, hashes, request authentication, and database idempotency; new to EIP-712 and on-chain
  authorization.
- **Problem:** A relayer accepts a signed `CancelOrder(orderId)` on two chains and two cloned
  verifying contracts, and the same signature can execute twice on one contract. The engineer argues
  that signature recovery proves both intent and uniqueness.
- **Plausible starting analogy:** authenticated request bytes plus an idempotency key are sufficient
  authorization boundaries everywhere.
- **Dialectical hinge:** separate signer authenticity, message meaning, execution domain, freshness,
  and one-time consumption. EIP-712 defines domain separation fields such as `chainId` and
  `verifyingContract` but explicitly does not itself provide replay protection.[^eip712]
- **Reviewable result:** a signed schema binding action parameters, chain, contract, nonce, and
  deadline; on-chain nonce/authorization consumption before effects; and replay tests across chain,
  contract, signer, nonce, deadline, and duplicate submission.
- **Transfer:** an upgrade changes contract version while keeping the address. The engineer must
  reason whether old signatures remain valid from the intended domain and migration policy.
- **Expected horizon:** 12–22 turns.

**Synthetic project:** a minimal Solidity authorization contract plus deterministic TypeScript test
vectors and verifier harness; use Foundry only if the execution-phase toolchain audit proves it is
available, otherwise keep the executable oracle in TypeScript while retaining the contract source.

| Conceptual frontier (unordered) | What makes it live | Reviewable consequence |
| --- | --- | --- |
| authentic signer vs authorized action | recovery succeeds for underspecified bytes | complete typed action schema |
| message meaning vs execution domain | clones/chains accept the same typed payload | bind intended chain and verifying contract |
| valid signature vs freshness | an old authorization remains cryptographically valid | deadline or validity policy |
| authentication vs single consumption | identical submission executes twice | nonce/authorization consumption invariant |
| check/use atomicity | concurrent relays pass before consumption is committed | consume-before-effects or equivalent atomic boundary |
| stable address vs upgraded meaning | an upgrade changes semantics at the same address | explicit version and migration policy |

### CS-CHAIN-06 — Idempotency does not undo a reorged deposit

- **Persona:** Java/Kafka or Go event-stream engineer experienced with at-least-once delivery,
  offsets, deduplication, reconciliation, and double-entry ledgers; new to blockchain fork choice,
  confirmations, and log removal.
- **Problem:** A deposit indexer credits a user's exchange balance after observing a `Transfer` log
  at `latest` and deduplicates by transaction hash. A normal reorganization removes that block; a
  replacement transfer later appears with related identifiers, but the first credit remains.
- **Plausible starting analogy:** once an event is consumed and deduplicated, retries are the only
  consistency threat.
- **Dialectical hinge:** distinguish observation, canonical inclusion, safe/finalized confidence,
  reversal, and idempotency. Ethereum's execution API states that `latest` may be reorged under
  normal conditions, while `safe` and `finalized` carry stronger fork-choice meanings. Ethereum's
  JSON-RPC log shape also marks a log `removed` when a chain reorganization invalidates it.[^eth-block-tags][^eth-logs]
- **Reviewable result:** a provisional/final ledger state machine; event identity including chain,
  block hash, transaction hash, and log index; canonical-chain reconciliation and compensating
  entries; confirmation policy tied to business risk; and reorg/replacement tests.
- **Transfer:** a bridge deposit is final on the source chain but its destination mint fails. The
  engineer must avoid collapsing source finality, cross-chain message delivery, and destination
  execution into one “confirmed” bit.
- **Expected horizon:** 14–24 turns.

**Synthetic project:** a TypeScript event indexer and double-entry ledger with forked block/log
fixtures, at-least-once delivery, removed-log events, and reconciliation tests. The synthetic chain
is deterministic; no live node is required.

| Conceptual frontier (unordered) | What makes it live | Reviewable consequence |
| --- | --- | --- |
| delivery duplication vs history revision | dedupe succeeds but the credited block leaves canonical history | reversible/provisional ledger state |
| transaction identity vs log identity | one transaction emits multiple logs or reappears on a fork | chain/block/transaction/log-index identity |
| observation vs canonical confidence | `latest` is visible but reorgable | explicit confirmation-risk policy |
| mutation vs compensation | deleting a prior credit would erase audit history | compensating ledger entry and provenance |
| stream cursor vs chain reconciliation | Kafka offset is current while canonical chain differs | independent canonicality reconciliation |
| single-chain finality vs cross-chain completion | source finality precedes failed destination mint | separate source, transport, and destination states |

### Portfolio balance and selection law

The six cases are not six examples of the same architecture smell:

| Case | Problem class | Decisive target-domain distinction | Useful artifact |
| --- | --- | --- | --- |
| `CS-ZK-01` | specification/proof soundness | witness computation vs proved public statement | constraints + adversarial proof tests |
| `CS-WEB3-02` | asynchronous UI workflow | submission vs inclusion/finality under mutable wallet context | transaction state machine |
| `CS-QUANT-03` | empirical inference | historical fit vs causally executable performance | event-time backtest protocol |
| `CS-PERP-04` | financial accounting/risk | position-local intuition vs account-level margin invariant | risk invariant + snapshot tests |
| `CS-SIG-05` | cryptographic authorization | authenticity vs domain/freshness/single use | signed schema + replay matrix |
| `CS-CHAIN-06` | distributed consistency | delivery idempotency vs reversible canonical history | provisional ledger + reconciliation |

The portfolio was approved for causal coverage, not symmetry or domain-name count. Before a case is
admitted to tuning, its one-page statement, runnable project, solution envelope, executable or
analytic tests, transfer variant, and broken-task audit must agree.

### Pedagogical stress design

The modern sources constrain what the scenarios should reveal; they do not prescribe a dialogue.
Paul and Elder support attentive, context-responsive follow-up and explicitly reject a mechanical
question sequence.[^pe16] Padesky supports genuine uncertainty, listening for unexpected meaning,
and learner-authored synthesis rather than covert persuasion.[^p93] Wilberding and the KPU workbook
support discovery, autonomy, practice, independent thinking, and repair that leaves the learner
responsible for the move.[^w14][^kpu19] None establishes AI-specific efficacy or an automatic
mastery measure.

Consequently, each sandbox must earn—not merely count—the following scenario angles:

- a substantive working case where the human's rough but plausible source-domain analogy meets a
  target-domain counterexample;
- a partial-knowledge variant where correct terminology masks a missing causal relation;
- an oracle-frame trap where the user proposes a confident but false model and the oracle must not
  inherit it;
- a genuine-uncertainty case where the oracle lacks decisive fixture evidence and must preserve
  precise aporia;
- a tutor-recruitment candidate based on repeated observable midwife behavior, paired with an
  equally awkward but effective retry where coaching must stop;
- a changed-case transfer that requires the same relation under different surface vocabulary.

These are portfolio obligations, not mandatory beats in one conversation. A scenario is included
only when its fixture can discriminate the intended KPI from fluent vocabulary, answer accuracy,
or marker compliance. If it cannot, remove or redesign it rather than fill a quota.

### Second-guess gates for the six sandboxes

A plausible story is not yet an admissible sandbox. Reject or narrow it if any of these
case-specific risks survives fixture design:

| Case | Main validity risk | Required defeater before admission |
| --- | --- | --- |
| `CS-ZK-01` | It collapses into the keyword “make it a public input,” or requires more proof-system mathematics than the persona can acquire in 30 turns. | The fixture must make trace height and verifier inputs inspectable, admit at least two valid binding designs, and require an adversarial proof test derived from a statement map. |
| `CS-WEB3-02` | Wallet events, replacement, reorg, React races, and business credit form four bugs disguised as one. | Keep one operation identity and one stale-completion symptom; expose other events only as discriminating cases for the same lifecycle/ownership model. |
| `CS-QUANT-03` | The response wins by listing “lookahead, fees, overfitting” without understanding executable PnL. | Supply a tiny timestamped data/fill fixture where the engineer must locate the first impossible information edge and produce a corrected PnL; treat the remaining biases as bounded follow-ons. |
| `CS-PERP-04` | It becomes a formula-substitution quiz or an imitation of one venue's implementation. | Require derivation of the account-level invariant from ledger entries and price purposes, then accept venue-neutral designs that preserve it. |
| `CS-SIG-05` | Signature replay is too familiar to frontier models and the title or source card gives away the complete answer. | The visible problem must present two surprising successful executions without naming replay; the solution must distinguish domain separation from nonce consumption and survive the upgrade transfer. |
| `CS-CHAIN-06` | It duplicates the Web3 case or is solved by saying “wait N confirmations.” | Grade reversible ledger accounting and canonical-chain reconciliation; the confirmation threshold must remain a risk-policy choice, not the causal solution. |

Portfolio-level rejection criteria:

- If a non-dialectical one-shot answer can reliably produce the complete engineering consequence
  from the visible issue, the case is too cued to measure the skill's contribution.
- If the gold solution requires a fact absent from both statement and inspectable evidence, the case
  is broken rather than difficult.
- If a changed case can be answered by repeating the original noun, it does not measure transfer.
- If the procedural control can obtain the domain result by filling the workpad schema and naming
  the canonical terms, the case has not defeated ceremony-only performance.
- If reviewers cannot score the engineering consequence without preferring one implementation,
  replace the hidden implementation with a positive invariant and adversarial tests.

## Promptfoo/Codex evaluation law

### Canon and authority boundary

Promptfoo supplies the evaluation grammar and the Codex provider contract; it does not define what a good dialectic is. The provider exposes final text, thread identity, heuristic skill-use evidence, and traced command, file, search, and tool activity. Its `skill-used` signal is inferred from direct `SKILL.md` reads rather than a first-class skill event.[^pf-codex-surface] The local SPECs and the dialectical sources define the desired behavior.

Promptfoo's canonical skill comparison holds model, task files, and permissions constant while changing the skill, and asks separately whether the skill routed, improved the work, and avoided neighboring skills.[^pf-skill-comparison] This project adopts that causal-comparison shape. It rejects any evaluation that changes model, permissions, evidence packet, and skill text in the same comparison.

Promptfoo test cases combine `vars`, assertions, metadata, provider/prompt filters, and per-test options. External files and scenarios can organize larger suites, while `options.repeat` samples nondeterministic behavior.[^pf-test-cases] Assertions can be reused through `assertionTemplates`; assertion sets, named metrics, and JavaScript assertion modules allow hard gates and focused measurements without duplicating logic.[^pf-assertions]

### Evaluation unit and grammar

The atomic evaluation unit is:

```text
task + isolated fixture + evidence packet + expected route + observable state transition + assertions
```

The implementation grammar must use these roles:

| Promptfoo construct | Project law |
| --- | --- |
| `providers` | Define named target variants: `current`, `mechanical-placebo`, and `no-skill`, holding model and permissions constant. The placebo is a deliberately defective control artifact, never a candidate skill. |
| `prompts` | Preserve natural user language. Do not force target dialogue into JSON merely to simplify grading. |
| `vars` | Carry `request`, embedded prior exchange when applicable, `query`, source `context`, `workspaceDir`, expected route, and expected state transition. |
| `metadata` | Tag skill, test layer, source slice, working/holdout status, and positive/negative/control origin. |
| `defaultTest` | Keep shared expansion behavior explicit. This suite uses string-valued `runIndex` matrices, so `disableVarExpansion: false`; semantic arrays belong in dedicated variables with expansion disabled locally. |
| `assertionTemplates` | Define reusable routing, citation-allowlist, person-label, workpad-shape, and handoff assertions. |
| `tests` | Express individually named behavioral cases. One row must test one principal decision. |
| `scenarios` | Generate controlled paraphrase/source-slice matrices only. Do not use scenarios to imply ordered conversation. |
| `options.repeat` / string matrix | `repeat` is valid for read-only rows. For writable Codex targets graded in the same fixture, use `runIndex: ['0', '1', '2']` so target, JavaScript, and nested Codex grader resolve the same isolated directory. |

The executable unit grammar is [promptfooconfig.unit.yaml](evals/promptfoo/promptfooconfig.unit.yaml).
It expands full provider configurations instead of YAML merge keys because Promptfoo's strict Codex
provider validation treats `<<` as an unknown provider field after parsing. Every writable row uses
`working_dir: ./.runs/{{caseId}}/{{runIndex}}/<variant>`, and its nested read-only grader uses the
same rendered path. External tests use repository-relative `$ref` targets because a fragment-only
reference inside an external test file resolves against that external document, not the root
configuration. These are observed integration constraints of Promptfoo 0.122.0, not claims from
the upstream documentation.

The integration suite must be separate: use one prompt template per test conversation,
`persist_threads: true`, `thread_pool_size: 1`, concurrency one, no deep tracing, and explicit
chronology for the simulated user turns. Chronology makes state persistence testable; it must not
encode a canonical dialectical progression. This prevents unit-test matrix expansion and thread
pooling from masquerading as a conversation.

### Codex target law

1. Pin one explicit Codex model and reasoning effort across compared providers. An omitted model weakens attribution because the backend-resolved default is not exposed to Promptfoo.[^pf-codex-surface]
2. Give every row a disposable Git working directory. Use `workspace-write` only when the skill must create or update `.agent/*.md`; use `read-only` for routing near-misses and graders. Filesystem sandbox, network/search, approvals, and inherited environment are separate controls and must be configured separately.[^pf-codex-sandbox]
3. Set `approval_policy: never`, disable network and web search, and do not inherit the ambient process environment. The evidence packet, not live retrieval, governs textbook claims.
4. Enable streaming when skill-read or trajectory evidence is required. Do not call this live token streaming; Promptfoo still receives the final response only.[^pf-codex-surface]
5. Use ephemeral threads for routing and single-decision tests. Use a separate, serial integration configuration for true multi-turn lifecycle tests because persistent Codex threads pool by prompt template and configuration, not rendered variable values; deep tracing disables persistence.[^pf-codex-threads]
6. Do not apply `output_schema` to the target dialectical response. It would test a structured wrapper instead of the natural conversational contract. Structured output remains acceptable for graders and assertion helpers; Codex returns schema-constrained output to Promptfoo as a string, so JavaScript must parse it.[^pf-codex-surface]

### Test layers and correct tooling

| Layer | Question | Promptfoo tool | Hard rule |
| --- | --- | --- | --- |
| 0. Structure | Are the skill files valid and references resolvable? | Repository validator outside Promptfoo | Never cite this as behavioral coverage. |
| 1. Routing | Was the intended skill read, and was its sibling avoided? | `skill-used`, `not-skill-used`; optional `trajectory:step-count` while diagnosing | Routing is a zero-weight diagnostic because the provider infers it heuristically from direct reads. Require aggregate stability, but never let one missed trace defeat a semantically and artifact-correct row.[^pf-skill-trace] |
| 2. Deterministic contract | Are required control markers bounded, forbidden labels and affirmative AI-efficacy claims absent, URLs allowlisted, and artifact fields present? | External `javascript` assertions using `output`, `vars`, and provider metadata | Prefer exact checks for exact contracts; do not require a semantic evidence limitation through a synonym regex. Return a reasoned `GradingResult`.[^pf-js-assertions] |
| 3. Source fidelity | Does a bounded source-summary output make only claims supported by the supplied claim cards? | `context-faithfulness` as a continuous diagnostic plus a calibrated read-only Codex `agent-rubric` over the cards as the hard gate | Use only on evidence-summary rows. Codex-backed `context-faithfulness` varied from 0.33 to 1.00 on faithful compound summaries, so it cannot be the sole hard judge here.[^pf-context-faithfulness] |
| 4. Semantic outcome | Did the response and workpad preserve human ownership, distinguish evidence from inference, and make the correct intervention decision? | `agent-rubric` with an explicit read-only Codex grader in the same fixture | The rubric must require artifact inspection and cite observed evidence. A text-only `llm-rubric` is insufficient when the workpad matters.[^pf-agent-rubric] |
| 5. Stateful integration | Does inquiry state survive actual turns, tutor recruitment, retry, return, and closure without transcript drift? | Dedicated serial Codex provider with `persist_threads: true`, one prompt template per conversation, `thread_pool_size: 1` | Do not simulate this layer solely by embedding a complete transcript in one prompt. |
| 6. Comparative discrimination | Does the current skill outperform the matched procedural control, and what can the foundation model do without either skill? | Provider labels, paired cases, named metrics, and side-by-side results | The placebo carries the causal defeater. Treat no-skill as a descriptive baseline: semantic overlap is allowed; exact skill artifacts and routing remain differentiators. |
| 7. Human judgment | Does the exchange feel responsive, dignified, and genuinely human-led? | Recorded human review outside the automated pass | Required before claiming non-mechanical quality or human mastery. |

`factuality` is not the default source-grounding judge here: it compares output with a reference answer, while these conversations may legitimately add explicitly labeled inference and questions.[^pf-factuality] `context-faithfulness` is narrower and retained only as a zero-weight diagnostic on a bounded summary. The hard source-summary rubric is calibrated against a supported output and an unsupported AI-efficacy control. `llm-rubric`, similarity, cost, latency, and `max-score` may be secondary diagnostics; none may override a failed hard invariant or serve as a proxy for human ownership.

### Working, holdout, and control sets

- Layer A working cases contain the approved protocol scenarios used to author the assertions.
- Holdout cases paraphrase the subject and vary the tempting overclaim. Their semantics were sealed by `holdout-manifest.sha256` before runtime-skill tuning; later edits were limited to configuration-reference plumbing and the manifest was resealed before live holdout execution.
- Positive controls are canonical source-grounded, human-owned exchanges that must pass.
- Negative controls are fluent but mechanically Socratic-looking exchanges that must fail.
- Route controls include both neighboring-skill and no-skill near misses.
- Grader calibration must run assertions directly against fixed positive and negative outputs before any live Codex result is trusted. Promptfoo permits precomputed `providerOutput`; use it to test the grader rather than the target.[^pf-reference]
- Layer B cases use separate domain fixtures, solution envelopes, and changed-case holdouts. They may
  reuse validated runtime assertions, but their domain rubrics must be calibrated anew against
  single-defect causal controls for that case.
- A case used to tune an oracle answer, domain rubric, or frontier scenario is working-set evidence and
  can never be relabeled as a transfer holdout.

### Ceremony-only defeater and burden of proof

Null hypothesis: “The suite rewards only visible ceremony—reading `SKILL.md`, emitting `COACHING PAUSE`, creating a well-shaped workpad, naming source categories, and satisfying a permissive model judge. A mechanical agent can therefore score as well as the current skill without preserving human ownership, responding to the last answer, respecting evidence limits, or timing intervention from observed behavior.”

The burden rests on this project. More assertions, more source names, or a fluent control are not evidence against the null. The evaluation must make the null predict success and then give it a fair chance to succeed:

1. Construct a `mechanical-placebo` control artifact, not a candidate skill. Match the current target on the suspected ceremonial causes: direct `SKILL.md` read, required markers, workpad schema, allowed source names and URLs, approximate response-length band, model, reasoning effort, permissions, and evidence packet.
2. Remove the claimed causal competencies while retaining those matched surface features: use a fixed question ladder that ignores the latest answer, intervene automatically, write the human's synthesis, and repeat source names without respecting claim limits.
3. Before live runs, calibrate each semantic assertion against a fixed positive output and four single-defect negative outputs: ownership removed, responsiveness removed, evidence boundary removed, and intervention timing removed. An assertion that accepts its corresponding defect is invalid.
4. Use exploratory working-set runs to calibrate provider integration and graders, then freeze assertions, thresholds, discriminating case IDs, and expected failures before the final live `current`, `mechanical-placebo`, `no-skill`, and holdout comparison. Record every pre-freeze change. Never change a frozen comparison after seeing its final control result.
5. Run all three providers on identical working and untouched holdout cases. The placebo must satisfy the matched ceremonial checks yet fail every predesignated semantic case; the current skill must pass every hard gate across repeats.
6. Define `DialecticalOutcome` solely from ownership, responsiveness, evidence-boundary, intervention-timing, and state-transition judgments. Exclude skill-read, marker, file-existence, source-count, length, cost, latency, and token metrics from that outcome.
7. Inspect the grader's cited observations and obtain blinded human comparison before making any claim about non-mechanical conversational quality.

The inference is deliberately narrow. If the matched placebo passes a semantic case, the null survives and Gate 4 fails. If the grader cannot reject a single-defect control, that grader is inadmissible. If the placebo satisfies the ceremonial checks but fails the frozen semantic gates while the current target passes the same working and holdout cases, ceremony alone cannot explain the score difference on those cases. This does not prove universal dialectical skill, human understanding, or transfer beyond the tested distribution.

### Pass law

- Every hard safety, evidence-boundary, artifact, lifecycle, and semantic assertion passes on every repeat. Routing traces are reported separately and must hit at least two of three repetitions on each explicit positive route case.
- Fixed positive grader controls pass and every corresponding single-defect control fails before live results count.
- `current` passes every designated outcome case; `mechanical-placebo` passes the matched ceremonial checks but fails every predesignated semantic case; `no-skill` stays out of near misses and does not reproduce the canonical skill artifact. General semantic competence by `no-skill` is reported, not forced to fail.
- No weighted average can compensate for a hard failure.
- `DialecticalOutcome` contains only semantic outcome assertions; route, trace, latency, cost, token count, citation count, and file existence are reported separately.
- The automated suite may establish behavior on its fixtures. Only human review may support a claim about felt non-mechanical quality, and no test may certify the human's internal understanding.

### Optimization and completion contract

This is an evaluation-engineering loop, not a dialectical algorithm. For every failure, first record
the observed KPI, cited artifact evidence, and causal classification: runtime-skill defect,
sandbox/task defect, grader defect, provider/harness defect, or unresolved. Change only the artifact
that owns the demonstrated defect. Then rerun the smallest calibrated case, its sandbox working
set, the cross-sandbox regression set, and—only after the working artifacts are frozen—the sealed
holdout. Record failed repair attempts and do not relax a valid test to accommodate target behavior.

Execution proceeds by artifact dependency, not by a quota of test rows:

1. Pin and archive the canonical mechanism sources and licenses; audit the local toolchains.
2. Author all six visible one-page problems and runnable baseline projects before tuning either
   skill, so portfolio diversity can be reviewed before target behavior influences the fixtures.
3. Author solution envelopes, hidden adversarial tests, and non-ordered frontier graphs; conduct the
   broken-task audit against each complete packet.
4. Materialize target/grader disclosure fixtures and calibrate deterministic and semantic graders
   against positive and single-defect controls.
5. Freeze the transfer material and hashes; run no-skill and mechanical-placebo baselines.
6. Run current-skill working cases, diagnose and repair only demonstrated general defects, and
   replay Layer A plus cross-sandbox regressions after every retained skill change.
7. Freeze the final skill/config pair, run serial integration and sealed transfer suites, audit all
   cited grader observations, and publish the exact run manifest and findings log.

This order governs benchmark construction and causal attribution. It does not govern the inquiry
inside any sandbox.

Skill text may change only when a failure demonstrates a general runtime defect and the proposed
repair is stated without case nouns or gold-answer leakage. A single sandbox may reveal a defect;
at least one different sandbox or protocol case must exercise the repaired behavior before the
change is retained. Grader changes require replay against the positive control and every matched
single-defect control. Scenario changes require a renewed broken-task audit and make that scenario
working-set evidence.

Automated implementation is complete only when:

- all six sandboxes conform to the disclosure topology and pass toolchain, fixture, license,
  attribution, and broken-task audits;
- every project has an executable baseline failure and reviewable solution envelope, or an explicit
  justified analytic oracle where execution is impossible;
- Layer A's persistent tutor lifecycle defect is repaired without weakening its existing test;
- current-skill working, robustness, integration, and sealed transfer gates pass on every required
  repeat, with no hard failure averaged away;
- the mechanical placebo satisfies matched ceremonial controls and fails every predesignated
  semantic discriminator, separately in each sandbox;
- no-skill behavior, grader citations, hidden-test results, run manifests, versions, and all
  pre-freeze changes are retained in the evidence log;
- both skill roots pass structural validation and `git diff --check`.

“Green” means those hard conditions, not a high aggregate percentage. It establishes that the
implemented skills satisfy the frozen automated contract on these fixtures. Gate 6 remains open
until actual humans provide productivity and retention evidence.

## Deliverables

| Artifact | Purpose | State |
| --- | --- | --- |
| `RESEARCH.md` | Evidence synthesis, techniques, source inventory, topology decision, gaps | complete |
| `WORKPAD.md` | Project governance, decisions, phase gates, progress | active |
| `skills/dialectical-inquiry/SPEC.md` | Approved blueprint for the main skill | approved |
| `skills/dialectical-tutor/SPEC.md` | Approved blueprint for the tutor skill | approved |
| `skills/dialectical-inquiry/SKILL.md` and references | Main runtime skill | implemented |
| `skills/dialectical-tutor/SKILL.md` and references | Tutor runtime skill | implemented |
| Voice Mode runtime references and spec amendments | Verbal-first inquiry, transcript protection, and capability-aware orchestration | implemented |
| `evals/promptfoo/sandboxes/<case>/` | Six approved domain projects, frontier graphs, scenarios, and sealed grading material | contract approved; not implemented |
| Domain Promptfoo configs, generator, materializer, and evidence log | Controlled Codex comparisons and reproducible pass evidence | contract approved; not implemented |

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

State: passed by explicit user approval on 2026-08-22. The originally approved singular root was
superseded by explicit user direction on the same date: `skills/<name>/` is canonical and
`.agents/skills` is only a discovery symlink when the runtime requires it.

### Gate 3: authoring

After approval:

1. Apply approved corrections to both specs.
2. Read the `$skill-writer` authoring, description-optimization, and registration-validation references.
3. Author runtime routers and focused flat references.
4. Add happy-path, robust, and anti-pattern/repair examples.
5. Register skills according to repository conventions approved at Gate 2.

State: passed. Both routers, all routed references, and transformed examples are implemented.

### Gate 4: protocol validation

Pass when:

- structural validation succeeds;
- positive and negative trigger cases route correctly;
- protocol micro-tests show the human remains the driver;
- tutor recruitment is brief, evidence-based, and returns cleanly;
- the workpad survives multi-turn updates without becoming a transcript;
- false-premise, sycophancy, overreliance, cargo-cult, and premature-closure cases are exercised;
- the matched procedural control satisfies visible contracts but fails the predesignated semantic
  outcomes.

State: open. Structural, calibration, unit, and holdout checks passed, but the audited serial
integration run missed the required coaching lifecycle.

### Gate 5: domain-transfer case studies

Pass when:

- the approved six-case portfolio is implemented;
- every case has a one-page statement, minimal fixture, canonical evidence packet, solution
  envelope, non-ordered frontier graph, changed-case transfer, and independent broken-task review;
- the task audit finds no hidden requirement, reference-answer leakage, implementation-specific
  test, or ungraded required behavior;
- the current skill preserves human ownership while producing the conditions for a correct
  engineering consequence across working and untouched transfer cases;
- the matched procedural control cannot obtain the same domain-effectiveness result through
  markers, workpad shape, or vocabulary alone.

State: case portfolio approved by the user on 2026-08-23; execution contract awaiting explicit
implementation permission.

### Gate 6: human productivity evidence

Pass when actual cross-domain acclimating engineers complete blinded comparative sessions and the
record supports the narrow operational outcome: time to a first reviewable contribution, domain
expert correction burden, changed-case transfer, and retained ability to explain the causal model.
The study must report failures and variance; a small successful demonstration cannot establish a
general efficacy claim.

State: not started. Automated agents cannot close this gate.

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
| Canonical runtime root `skills/<name>/` | Explicit user correction supersedes the earlier singular root. |
| `.agents/skills -> ../skills` compatibility symlink | Promptfoo's Codex provider discovers project skills under `.agents/skills/`; the symlink prevents a second mutable copy.[^pf-skill-comparison] |
| Voice is a routed runtime branch | Live audio changes turn-taking, evidence delivery, transcript authority, and coaching rendering without changing the core dialectic. |
| Authoritative Voice activation only | Public docs do not establish a universal skill-visible flag; transcript style is not reliable detection evidence. |
| Oracle remains the voice owner | Manager-style specialist use preserves continuity and the human–oracle role contract. |
| Promptfoo cases use independent disposable fixtures | Prevents persistent-thread history and workpad mutations from contaminating adjacent rows. |
| Textbook claim cards are the eval evidence boundary | Tests source use and source limits without live web variance or unsupported efficacy claims. |
| Routing traces are supporting evidence only | Codex `skill-used` is heuristic and cannot prove dialectical quality. |
| A matched mechanical placebo carries the ceremony-only null | It preserves route, markers, file shape, source labels, and presentation while removing the claimed semantic competencies; accepting it invalidates the evaluation. |
| The burden of proof is not yet discharged | Calibration, unit, and holdout evidence cannot compensate for the failed serial coaching lifecycle or the absence of domain-transfer and human evidence. |
| Target learner is a cross-domain acclimating engineer | Separates demonstrated software competence from unearned target-domain expertise and avoids an intelligence trait label. |
| Adaptive-expertise trajectory, not instant expertise | The practical target is flexible first-principles transfer toward a first reviewable contribution, not certification of mastery. |
| Existing Promptfoo cases are Layer A protocol tests | They retain diagnostic value but do not carry the domain-onboarding or productivity claim. |
| Domain effectiveness requires varied anchored cases | The approved portfolio covers proof soundness, wallet workflow, empirical trading inference, derivatives risk, signature replay, and chain reorganization. |
| Classical movements are editorial lenses only | They support retrospective review but may not become runtime stages, coverage requirements, or next-question logic. |
| Sandboxes use non-ordered conceptual frontiers | Frontiers expose testable tensions and transfer neighbors without prescribing a conversation. |
| Changed-case transfer is a hard outcome | Correct terminology or reproduction of the oracle's wording cannot substitute for a prediction derived from the human-owned model. |

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
| Multi-agent as the primary inquiry topology | The tutor and research workers may support a Voice-capable runtime backstage, but the inquiry remains one human–oracle conversation. |
| “Predisposed to reasoning” as the learner category | It is not observable enough for fair selection or evaluation and invites flattering personality inference. |
| Present protocol suite as effectiveness proof | Its self-referential and generic cases do not exercise the target domain delta or produce a domain engineering artifact. |
| One gold conversation transcript per case | It rewards path imitation and overconstrains legitimate human-led inquiry; the gold object is a causal solution envelope plus independently reviewable artifacts and counterexamples. |
| Static final-answer accuracy as the main KPI | It can reward oracle takeover and memorized vocabulary while the human learns nothing transferable. |

## Remaining evaluation

- Audit and record the completed Layer A Promptfoo result; rerun only if a genuine target, task, or
  harness defect remains.
- On explicit permission, implement each approved sandbox from its cited mechanism and admit it
  only after an independent broken-task review.
- Freeze Layer B working rubrics and changed-case holdouts before skill tuning.
- Run case-study comparisons and reject the ceremony-only null separately for each domain problem;
  do not average away a failed case.
- Conduct actual human comparison for conversational agency, changed-case transfer, retained
  explanation, and time to first reviewable contribution.

Voice runtime validation remains deferred and has no test scenarios in the present Promptfoo specification.

## Validation record

Promptfoo protocol run observed on 2026-08-22:

- semantic-grader calibration passed 12/12;
- the repeated unit/control matrix passed 54/54;
- the sealed holdout passed 12/12;
- the first serial integration repetition passed 2/5 and stopped the runner: the oracle answered
  both category-switch turns but did not recruit the tutor, so the following retry had no return
  lifecycle and the terminal workpad had no intervention record.

This is a real persistent-thread skill defect, not permission to weaken the test. It also reinforces
the present critique: embedded-transcript unit cases can pass while the same pattern is missed across
natural turns. The exact observation and repair boundary are retained in
[evals/promptfoo/evidence/findings-log.md](evals/promptfoo/evidence/findings-log.md). Gate 4 remains
open.

Static validation completed on 2026-08-22:

- the canonical `quick_validate.py` validator passed both skill roots;
- `git diff --check` passed;
- every bundled reference is flat and directly linked from its owning `SKILL.md`;
- no host-specific absolute path or `file://` link appears in project Markdown;
- transformed examples cover ownership and transfer, false framing and aporia, cargo-cult repair, false-positive tutor recruitment, bounded coaching, and oracle supervision;
- final descriptions preserve the approved positive and negative trigger boundaries.

These checks establish structure and static behavioral coverage. They do not certify human mastery or the felt quality of a live dialectical exchange.

Voice amendment validation completed on 2026-08-22:

- both skill roots passed the canonical structural validator after the new references were added;
- every Voice reference is flat and directly routed from its owning `SKILL.md`;
- positive Voice triggers and adjacent non-triggers were added to both specs;
- static failure cases cover false surface detection, unclear or interrupted audio, vocal-delivery bias, stale delegated results, tutor takeover, asynchronous source visibility, and oral synthesis;
- `git diff --check` and the whitespace audit passed.

This is static coverage only. Actual surface metadata visibility, interruption behavior, and backstage agent coordination remain runtime-dependent and require a live Voice session.

## Update protocol

After each approved phase or material decision:

- update status and phase gates;
- record adopted, rejected, or deferred decisions;
- link new evidence at the exact claim it supports;
- keep research/maintenance provenance out of runtime skill references;
- never begin the next gated phase implicitly.

[^mdl]: Patricia Alexander's [Model of Domain Learning overview](https://eric.ed.gov/?id=EJ782494) describes the domain-relative progression from acclimation through competence to proficiency.
[^expertise-domain]: Persky and Robinson's [review of novice-to-expertise instruction](https://pmc.ncbi.nlm.nih.gov/articles/PMC5738945/) reports the domain specificity of expertise and the instructional importance of metacognitive self-monitoring; it does not establish that software expertise automatically transfers to finance or cryptography.
[^adaptive-expertise]: Schwartz, Bransford, and Sears, [“Efficiency and Innovation in Transfer”](https://aaalab.stanford.edu/assets/papers/2005/EffInnovTransfer_SchwartzBransfordSears_2005.pdf), distinguish routine efficiency from innovation and argue for preparation-for-future-learning assessments that include an opportunity to learn from new resources.
[^classical-dialectic]: The Stanford Encyclopedia of Philosophy's [history of argumentation](https://plato.stanford.edu/archives/sum2024/entries/argument/supplement.html#AncGre) reconstructs ancient dialectic as a questioner/answerer encounter that extracts a determinate thesis, tests commitments, and attributes refutation to the starting point.
[^plato-elenchus]: The Stanford Encyclopedia of Philosophy's [account of Plato's shorter ethical works](https://plato.stanford.edu/entries/plato-ethics-shorter/#Elen) describes elenchus as testing the interlocutor's beliefs, sometimes ending in aporia, and warns that its premises may establish coherence without establishing external truth.
[^plato-hypothesis]: The Stanford Encyclopedia of Philosophy's [account of Plato's method of hypothesis](https://plato.stanford.edu/entries/plato-metaphysics/#MethHypo) describes provisional hypotheses tested against cases and examined through higher hypotheses.
[^socrates-no-uniform-method]: Gary Alan Scott's edited scholarly collection, [*Does Socrates Have a Method? Rethinking the Elenchus in Plato's Dialogues and Beyond*](https://www.jstor.org/stable/10.5325/j.ctv14gpdz4), frames the long-running dispute over how to define Socratic method and whether Socrates used one single, uniform method. This supports caution against a canonical workflow; it does not imply that the dialogues lack recurring practices.
[^plotinus-dialectic]: Plotinus, [*Ennead* I.3, “On Dialectic”](https://ccel.org/ccel/p/plotinus/enneads/cache/enneads.pdf), especially I.3.4–6, calls dialectic the noblest method and a precious part of philosophy, says it deals with realities rather than bare theories and rules, and leaves fine-grained premise/conclusion machinery to another discipline. The anti-mechanical software-pedagogy consequence stated here is this project's qualified inference, not Plotinus's claim about AI dialogue.
[^pe16]: Richard Paul and Linda Elder's [*The Thinker's Guide to Socratic Questioning* public preview](https://www.criticalthinking.org/store/get_file.php?inventories_files_id=422&inventories_id=231) supports systematic depth, close listening, contextual follow-up, possible question directions rather than a mechanical sequence, and intellectual autonomy. It does not study AI dialogue or establish mastery from it.
[^p93]: Christine Padesky's [“Socratic Questioning: Changing Minds or Guiding Discovery?”](https://padesky.com/wp-content/uploads/2012/11/socquest.pdf) supports genuine curiosity, concrete information gathering, responsive listening and summary, learner synthesis, and the distinction from covert persuasion. It does not establish AI-specific efficacy.
[^w14]: Jonny Wilberding's [*Teach Like Socrates* authorized preview](https://api.pageplace.de/preview/DT0400.9781000489293_A42495157/preview-9781000489293_A42495157.pdf) supports inductive learner discovery, autonomy, practice, and distinction from drilling or passive receipt. Only the previewed Introduction is used here.
[^kpu19]: Kwantlen Polytechnic University's [*Level Two Peer Tutoring Fundamentals and Integration Workbook*, chapter 7](https://kpu.pressbooks.pub/leveltwopeertutoringfundamentals/chapter/use-socratic-questions/) supports independent thinking and rephrasing ineffective questions without supplying the learner's answer. It does not validate a universal sequence or automatic mastery measure.
[^swe-bench]: Jimenez et al., [“SWE-bench: Can Language Models Resolve Real-World GitHub Issues?”](https://proceedings.iclr.cc/paper_files/paper/2024/file/edac78c3e300629acfe6cbe9ca88fb84-Paper-Conference.pdf), ground tasks in repository snapshots, issue statements, merged changes, and executable tests, while noting the need for tasks that are challenging yet verifiable.
[^swe-audit]: OpenAI's [SWE-bench Pro data-quality audit](https://openai.com/index/separating-signal-from-noise-coding-evaluations/) identifies overly strict tests, underspecified or misleading prompts, and low test coverage as benchmark-breaking defects, and describes independent experienced-engineer review of prompt, tests, and reference solution.
[^plonky3-awesome]: The Plonky3 project's [curated resource list](https://github.com/Plonky3/awesome-plonky3#examplestutorials) identifies the Fibonacci AIR as an educational example for constraints and execution traces; the main [Plonky3 repository](https://github.com/Plonky3/Plonky3) defines the project as a toolkit of PIOP primitives.
[^plonky3-fibonacci]: The curated [Fibonacci AIR example](https://github.com/BrianSeong99/Plonky3_Fibonacci#step-two-define-your-air-constraints) makes its first-row, transition, and last-row constraints and trace generation explicit. The proposed missing step-count binding is a synthetic incident derived from that visible statement boundary, not a reported defect in the example.
[^eip1193]: [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) specifies provider request semantics and requires `chainChanged` and `accountsChanged` events for wallet/client state changes; it does not by itself define an application transaction state machine.
[^eth-replacement]: [EIP-2831](https://eips.ethereum.org/EIPS/eip-2831) describes pre-inclusion transaction replacement and speed-up through the same sender and nonce. Its status is Stagnant, so it supports the synthetic mechanism but is not treated as a normative wallet API.
[^pairs-trading]: Gatev, Goetzmann, and Rouwenhorst's [pairs-trading study](https://www.nber.org/papers/w7032) separates pair formation and trading periods and explicitly evaluates transaction costs, bootstrapped alternatives, and microstructure explanations.
[^backtest-overfitting]: Bailey et al., [“Backtest Overfitting in Financial Markets”](https://escholarship.org/content/qt4hn4t174/qt4hn4t174_noSplash_2bb6c5b6dbbb66bcadbc3d0a05e3af6b.pdf), define backtest overfitting as trying many strategy variations on the same historical data and selecting idiosyncratic rather than general behavior.
[^hl-margin]: Hyperliquid's [margining documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/margining) distinguishes cross and isolated collateral and defines cross liquidation from account value and total maintenance requirement.
[^hl-liquidation]: Hyperliquid's [liquidation documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/liquidations) describes mark-price liquidation, cross-account effects, partial liquidation, and the dependence of estimated liquidation prices on funding and other positions.
[^hl-prices]: Hyperliquid's [robust price-index documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/robust-price-indices) distinguishes oracle and mark construction and assigns mark price to unrealized PnL, margining, and liquidations.
[^hl-funding]: Hyperliquid's [funding documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/funding) defines periodic peer-to-peer funding, its premium/oracle inputs, and balance effect.
[^eip712]: [EIP-712](https://eips.ethereum.org/EIPS/eip-712) defines typed structured-data hashing and extensible domain separation, including `chainId` and `verifyingContract`, while explicitly excluding replay protection from the standard itself.
[^eth-block-tags]: The Ethereum Execution API's [block-parameter specification](https://ethereum.github.io/execution-apis/api/methods/eth_getProof/#request) distinguishes `latest`, which may be reorged under normal conditions, from `safe` and `finalized` heads with stronger fork-choice guarantees.
[^eth-logs]: Ethereum.org's [JSON-RPC reference](https://ethereum.org/developers/docs/apis/json-rpc/#eth_getfilterchanges) defines log identity fields and the `removed` flag for logs invalidated by chain reorganization.
[^derivadex-dialectic]: The DerivaDEX handbook's [Dialectic Method](https://gitlab.com/dexlabs/derivadex/-/blob/master-patch-ci-topology/wiki/handbook/ai-native-team.md#dialectic-method) defines the human-ownership intent translated by this project.
[^pf-codex-surface]: Promptfoo's [OpenAI Codex SDK provider](https://www.promptfoo.dev/docs/providers/openai-codex-sdk/) documents the final-output surface, strict provider configuration, explicit model behavior, schema-string handling, streaming traces, and heuristic skill detection.
[^pf-skill-comparison]: Promptfoo's [Test Agent Skills guide](https://www.promptfoo.dev/docs/guides/test-agent-skills/) requires controlled skill comparisons and separates invocation, output quality, and neighboring-skill avoidance.
[^pf-test-cases]: Promptfoo's [Test Case Configuration](https://www.promptfoo.dev/docs/configuration/test-cases/) documents `vars`, assertions, metadata, provider/prompt filters, external cases, and per-test repetition.
[^pf-scenarios]: Promptfoo's [Scenario Configuration](https://www.promptfoo.dev/docs/configuration/scenarios/) documents reusable data/test matrices, external scenario files, and glob expansion. This project restricts those mechanics to controlled variation and expressly does not infer a conversational workflow from them.
[^pf-assertions]: Promptfoo's [configuration guide](https://www.promptfoo.dev/docs/configuration/guide/) and [Assertions and Metrics reference](https://www.promptfoo.dev/docs/configuration/expected-outputs/) document assertion templates, assertion sets, named metrics, external assertion modules, and variable expansion.
[^pf-codex-sandbox]: Promptfoo's [Codex sandbox documentation](https://www.promptfoo.dev/docs/providers/openai-codex-sdk/#sandbox-mode) distinguishes filesystem access from network, search, approvals, and environment inheritance.
[^pf-codex-threads]: Promptfoo's [Codex thread-management documentation](https://www.promptfoo.dev/docs/providers/openai-codex-sdk/#thread-management) documents ephemeral defaults, prompt-template/config pooling, serial ordering requirements, and the incompatibility between deep tracing and persistence.
[^pf-skill-trace]: Promptfoo's [skill trace guidance](https://www.promptfoo.dev/docs/guides/test-agent-skills/#add-trace-evidence-when-needed) shows `trajectory:step-count` for a Codex `SKILL.md` read and treats trace evidence as workflow evidence.
[^pf-js-assertions]: Promptfoo's [external JavaScript assertion contract](https://www.promptfoo.dev/docs/configuration/expected-outputs/#javascript) exposes output, variables, provider response, and metadata and permits a reasoned `GradingResult`.
[^pf-context-faithfulness]: Promptfoo's [Context Faithfulness assertion](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/context-faithfulness/) measures whether response claims are supported by supplied context and documents its judge limitations.
[^pf-agent-rubric]: Promptfoo's [Agent Rubric](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/agent-rubric/) is specifically for a coding-agent grader that must inspect workspace artifacts; it supports an explicit read-only Codex working directory and threshold.
[^pf-factuality]: Promptfoo's [Factuality assertion](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/factuality/) compares an output with a reference answer for factual consistency.
[^pf-reference]: Promptfoo's [Configuration Reference](https://www.promptfoo.dev/docs/configuration/reference/) documents precomputed `providerOutput`, enabling assertion calibration without a target-provider call.
