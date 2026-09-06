import { Badge } from "@/components/ui";

import { formatReferenceAmount, type ReferenceSimulationSummary } from "../model/simulation";
import { REFERENCE_SIMULATOR_COPY } from "../mocks/reference-simulator-content";
import { BreakdownRow } from "./breakdown-row";

export interface SimulationSummaryProps {
  summary: ReferenceSimulationSummary;
}

export function SimulationSummary({ summary }: SimulationSummaryProps) {
  return (
    <section
      aria-label="Resumen de la simulación"
      className="w-full min-w-0 rounded-md border border-outline bg-surface p-[20px]"
    >
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-xs">
        <h3 className="text-body-md font-semibold text-foreground">
          Resumen de la simulación
        </h3>
        <Badge size="S">Referencial</Badge>
      </div>
      <div className="mt-md">
        <BreakdownRow
          label="Monto solicitado"
          value={formatReferenceAmount(summary.requestedAmount)}
        />
        <BreakdownRow
          label="Interés referencial"
          value={formatReferenceAmount(summary.interest)}
        />
        <BreakdownRow
          emphasis="strong"
          label="Total referencial"
          value={formatReferenceAmount(summary.total)}
        />
      </div>
      <p className="mt-sm text-label-sm text-foreground-muted">
        {REFERENCE_SIMULATOR_COPY.disclaimer}
      </p>
    </section>
  );
}
