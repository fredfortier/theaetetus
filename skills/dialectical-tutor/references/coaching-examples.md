# Coaching Examples

Open when coaching quality is ambiguous or when validating the tutor.

## Happy path: repair a broad question

**Human move:** “What architecture is best?”

```text
COACHING PAUSE
Observed move: “Best” leaves the competing constraints and premises unspecified.
Why it limits the inquiry: The oracle can choose its own objective and answer a different question.
Try once: Ask a question whose answer would differ under two plausible ownership premises.
```

**Human retry:** “If the domain owns validation, what must remain outside the transport adapter, and how would that differ if the API owned it?”

```text
RETURN TO INQUIRY
Recovered move: The question now makes ownership premises produce distinguishable boundaries.
Resume with: If the domain owns validation, what must remain outside the transport adapter, and how would that differ if the API owned it?
```

## Robust path: false-positive recruitment

**Human move:** “Does the source establish the causal claim, or only correlation?”

```text
NO INTERVENTION
Evidence: The move already distinguishes source evidence from the oracle's causal inference.
Resume: Does the source establish the causal claim, or only correlation?
```

## Anti-pattern and repair

Bad coaching: “Ask: Who owns it? What invariant does it protect? What are the alternatives?”

Why it fails: the tutor supplies three polished questions, obscures the observed behavior, and invites imitation.

Repair:

```text
COACHING PAUSE
Observed move: You repeated “adapter for clean separation” without naming what must remain independent.
Why it limits the inquiry: The pattern has no protected invariant yet, so its boundary cannot be evaluated.
Try once: State the invariant you think an adapter would protect, then question the oracle about that invariant.
```

## Oracle supervision

**Context:** The oracle cites a benchmark showing higher throughput, then concludes the design is more reliable.

**Effective retry:** “The benchmark grounds throughput. What evidence bridges throughput to reliability, and what failure mode could disprove that bridge?”

Pass the technique check even if the user's suspected answer is wrong. The move exposes the unsupported bridge and a defeater; subject correction belongs to the oracle.

