"use client";

import { useId, useState } from "react";

import { Button } from "@/components/ui";

import {
  isAmountRangeValid,
  isAmountWithinRange,
  projectReferenceSimulation,
  type AmountRange,
  type ReferenceSimulationInput,
  type TermOption,
} from "../model/simulation";
import {
  REFERENCE_SIMULATOR_COPY,
  REFERENCE_TERM_OPTIONS,
} from "../mocks/reference-simulator-content";
import { AmountInput } from "./amount-input";
import { AmountSlider } from "./amount-slider";
import { SimulationSummary } from "./simulation-summary";
import { TermSelector } from "./term-selector";

export interface SimulatorProps {
  amountRange: AmountRange;
  className?: string;
  initialAmount?: number | null;
  initialTerm?: string;
  onContinue?: (input: ReferenceSimulationInput) => void;
  termOptions?: readonly TermOption[];
}

export function Simulator({
  amountRange,
  className,
  initialAmount = null,
  initialTerm,
  onContinue,
  termOptions = REFERENCE_TERM_OPTIONS,
}: SimulatorProps) {
  const amountInputId = useId();
  const termName = useId();
  const [amount, setAmount] = useState<number | null>(initialAmount);
  const [term, setTerm] = useState(initialTerm ?? termOptions[0]?.value ?? "");
  const [showValidation, setShowValidation] = useState(false);

  if (!isAmountRangeValid(amountRange)) {
    throw new Error("Simulator requires a valid, explicitly provided amount range.");
  }

  const amountIsValid = isAmountWithinRange(amount, amountRange);
  const selectionIsValid = termOptions.some((option) => option.value === term);
  const isReady = amountIsValid && selectionIsValid;
  const projectedInput: ReferenceSimulationInput = {
    amount: amountIsValid ? amount : null,
    term,
  };
  const summary = projectReferenceSimulation(projectedInput);
  const errorMessage = showValidation && !amountIsValid
    ? REFERENCE_SIMULATOR_COPY.amountInvalid
    : undefined;

  function updateAmount(nextAmount: number | null) {
    setAmount(nextAmount);
    setShowValidation(nextAmount !== null && !isAmountWithinRange(nextAmount, amountRange));
  }

  return (
    <section
      aria-labelledby={`${amountInputId}-title`}
      className={`w-full min-w-0 max-w-[440px] overflow-hidden rounded-lg border border-outline bg-surface p-md min-[360px]:p-xl ${className ?? ""}`}
    >
      <header className="min-w-0">
        <h2
          className="font-display text-[26px] leading-8 font-semibold text-foreground"
          id={`${amountInputId}-title`}
        >
          {REFERENCE_SIMULATOR_COPY.title}
        </h2>
        <p className="mt-xs text-[15px] leading-[22px] text-foreground-muted">
          {REFERENCE_SIMULATOR_COPY.description}
        </p>
      </header>

      <div className="mt-lg flex min-w-0 flex-col gap-sm">
        <AmountInput
          errorMessage={errorMessage}
          helperText={REFERENCE_SIMULATOR_COPY.amountHelper}
          id={amountInputId}
          onAmountChange={updateAmount}
          value={amount}
        />
        <AmountSlider
          onAmountChange={updateAmount}
          range={amountRange}
          value={amount !== null && amountIsValid ? amount : amountRange.min}
        />
      </div>

      <div className="mt-lg">
        <TermSelector
          name={termName}
          onValueChange={setTerm}
          options={termOptions}
          value={term}
        />
      </div>

      <div className="mt-lg">
        <SimulationSummary summary={summary} />
      </div>

      <Button
        className="mt-lg w-full"
        onClick={() => {
          setShowValidation(true);
          if (isReady) onContinue?.(projectedInput);
        }}
        size="L"
      >
        Continuar
      </Button>
      <p className="mt-sm text-center text-caption text-foreground-muted">
        {REFERENCE_SIMULATOR_COPY.footer}
      </p>
    </section>
  );
}
