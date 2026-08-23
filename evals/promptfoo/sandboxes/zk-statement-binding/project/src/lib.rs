#[derive(Debug, Clone)]
pub struct Claim {
    pub claimed_steps: usize,
    pub claimed_result: u64,
    pub trace: Vec<(u64, u64)>,
}

/// Synthetic buggy verifier: `claimed_steps` is metadata, not part of the checked relation.
pub fn verify_claim(claim: &Claim) -> bool {
    if claim.trace.is_empty() || claim.trace[0] != (0, 1) {
        return false;
    }
    if !claim
        .trace
        .windows(2)
        .all(|rows| rows[1] == (rows[0].1, rows[0].0 + rows[0].1))
    {
        return false;
    }
    claim.trace.last().is_some_and(|row| row.1 == claim.claimed_result)
}

/// One acceptable repair when every row is active and `steps` means transition count.
pub fn verify_unpadded_claim(claim: &Claim) -> bool {
    verify_claim(claim) && claim.claimed_steps + 1 == claim.trace.len()
}

#[cfg(test)]
mod tests {
    use super::*;

    fn four_rows() -> Vec<(u64, u64)> {
        vec![(0, 1), (1, 1), (1, 2), (2, 3)]
    }

    #[test]
    fn baseline_exposes_unbound_step_metadata() {
        let claim = Claim { claimed_steps: 7, claimed_result: 3, trace: four_rows() };
        assert!(verify_claim(&claim), "the baseline should demonstrate the accepted bad claim");
    }

    #[test]
    fn reference_relation_rejects_mismatched_steps() {
        let claim = Claim { claimed_steps: 7, claimed_result: 3, trace: four_rows() };
        assert!(!verify_unpadded_claim(&claim));
    }

    #[test]
    fn reference_relation_accepts_defined_transition_count() {
        let claim = Claim { claimed_steps: 3, claimed_result: 3, trace: four_rows() };
        assert!(verify_unpadded_claim(&claim));
    }
}
