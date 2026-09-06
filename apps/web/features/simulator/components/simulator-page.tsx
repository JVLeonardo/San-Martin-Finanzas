"use client";

import { useRouter } from "next/navigation";

import { Alert } from "@/components/ui";

import { Simulator } from "./simulator";

export function SimulatorPage() {
  const router = useRouter();

  return (
    <main className="min-w-0 flex-1 bg-background">
      <section className="mx-auto w-full max-w-[1200px] px-lg py-3xl sm:px-xl lg:px-4xl lg:py-4xl">
        <header className="max-w-[570px] lg:mx-auto lg:text-center">
          <p className="text-label-sm font-semibold tracking-[0.08em] text-brand-strong">
            SIMULADOR
          </p>
          <h1 className="mt-sm font-display text-4xl leading-none font-semibold text-foreground sm:text-5xl">
            Explora una simulación referencial
          </h1>
          <p className="mt-md text-body-md text-foreground-muted">
            Ajusta los datos de la simulación y revisa una estimación antes de continuar.
          </p>
        </header>
      </section>

      <section className="bg-surface-muted px-lg py-xl sm:px-xl lg:px-4xl lg:py-4xl">
        <div className="mx-auto w-full max-w-[440px]">
          <Simulator
            onContinue={() => router.push("/simulador/continuar")}
            responsiveWidth
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-[480px] px-lg py-3xl sm:px-xl lg:py-4xl">
        <Alert
          message="La simulación es referencial y no representa una aprobación. Los resultados mostrados sirven como una estimación para continuar el proceso."
          title="Información referencial"
          tone="neutral"
        />
      </section>
    </main>
  );
}
