export interface AmountRange {
  max: number;
  min: number;
  step: number;
}

export interface TermOption {
  label: string;
  value: string;
}

export interface ReferenceSimulationInput {
  amount: number | null;
  term: string;
}

export interface ReferenceSimulationSummary {
  interest: number | null;
  requestedAmount: number | null;
  total: number | null;
}

const PEN_NUMBER_FORMATTER = new Intl.NumberFormat("es-PE", {
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export function formatReferenceAmount(value: number | null) {
  return value === null ? "S/ —" : `S/ ${PEN_NUMBER_FORMATTER.format(value)}`;
}

export function normalizeAmountInput(value: string) {
  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return null;
  }

  const parsedValue = Number(digits);
  return Number.isSafeInteger(parsedValue) ? parsedValue : null;
}

export function isAmountRangeValid(range: AmountRange) {
  return (
    Number.isFinite(range.min) &&
    Number.isFinite(range.max) &&
    Number.isFinite(range.step) &&
    range.min >= 0 &&
    range.max > range.min &&
    range.step > 0
  );
}

export function isAmountWithinRange(amount: number | null, range: AmountRange) {
  return amount !== null && amount >= range.min && amount <= range.max;
}

/**
 * Produces the visual-only summary approved for the MVP demo.
 *
 * No financial formula is applied here: interest and total remain unavailable
 * until an approved backend contract supplies authoritative results.
 */
export function projectReferenceSimulation(
  input: ReferenceSimulationInput,
): ReferenceSimulationSummary {
  return {
    interest: null,
    requestedAmount: input.amount,
    total: null,
  };
}
