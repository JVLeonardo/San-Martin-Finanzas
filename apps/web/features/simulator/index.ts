export {
  AmountInput,
  AmountSlider,
  BreakdownRow,
  SimulationSummary,
  Simulator,
  TermSelector,
  type AmountInputProps,
  type AmountSliderProps,
  type BreakdownRowProps,
  type SimulationSummaryProps,
  type SimulatorProps,
  type TermSelectorProps,
} from "./components";
export {
  formatReferenceAmount,
  isAmountRangeValid,
  isAmountWithinRange,
  normalizeAmountInput,
  projectReferenceSimulation,
  type AmountRange,
  type ReferenceSimulationInput,
  type ReferenceSimulationSummary,
  type TermOption,
} from "./model/simulation";
export { REFERENCE_TERM_OPTIONS } from "./mocks/reference-simulator-content";
