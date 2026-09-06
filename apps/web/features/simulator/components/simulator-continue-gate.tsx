import Image from "next/image";
import Link from "next/link";

import { TextLink } from "@/components/ui";

export function SimulatorContinueGate() {
  return (
    <main className="flex min-h-[496px] flex-1 items-center justify-center bg-background px-lg py-3xl sm:px-xl lg:min-h-[496px] lg:px-4xl lg:py-4xl">
      <section
        aria-labelledby="continue-gate-title"
        className="flex w-full max-w-[520px] flex-col items-center rounded-lg border border-outline bg-surface-raised px-xl py-4xl text-center max-[359px]:px-lg sm:px-4xl sm:py-5xl"
      >
        <Image
          alt="San Martín Finanzas"
          className="h-auto w-[120px] sm:w-[140px]"
          height={47}
          priority
          src="/brand/logos/logo-horizontal-positive.png"
          width={140}
        />

        <div className="mt-3xl max-w-[390px]">
          <h1
            className="font-display text-4xl leading-none font-semibold text-foreground sm:text-5xl"
            id="continue-gate-title"
          >
            Continúa con tu cuenta
          </h1>
          <p className="mt-sm text-body-md text-foreground-muted">
            Ingresa o crea una cuenta para continuar con el proceso.
          </p>
        </div>

        <div className="mt-3xl flex w-full flex-col items-center gap-md">
          <Link
            className="inline-flex w-full items-center justify-center rounded-sm bg-action-primary px-lg py-sm text-button font-semibold text-foreground-inverse transition-colors hover:bg-action-primary-hover focus-visible:outline-none focus-visible:shadow-focus"
            href="/registro"
          >
            Comenzar
          </Link>
          <p className="flex flex-wrap items-center justify-center gap-2xs text-body-sm text-foreground-muted">
            <span>¿Ya tienes una cuenta?</span>
            <TextLink href="/ingresar" size="S">
              Ingresar
            </TextLink>
          </p>
          <TextLink emphasis="secondary" href="/simulador" size="S">
            Volver al simulador
          </TextLink>
        </div>
      </section>
    </main>
  );
}
