import type { TermOption } from "../model/simulation";

/**
 * Labels copied from the approved Figma reference. They are placeholders for
 * visual testing and do not represent approved credit terms.
 */
export const REFERENCE_TERM_OPTIONS: readonly TermOption[] = [
  { label: "Opción A", value: "reference-a" },
  { label: "Opción B", value: "reference-b" },
  { label: "Opción C", value: "reference-c" },
] as const;

export const REFERENCE_SIMULATOR_COPY = {
  amountHelper: "Ingresa el monto que deseas simular.",
  amountInvalid: "Revisa el monto ingresado.",
  description: "Explora una simulación referencial antes de continuar.",
  disclaimer: "Esta simulación es informativa y no representa una aprobación.",
  footer: "Información referencial.",
  title: "Simula tu préstamo",
} as const;
