import Image from "next/image";
import type { ReactNode } from "react";

export interface HeroProps {
  simulator: ReactNode;
}

export function Hero({ simulator }: HeroProps) {
  return (
    <section
      className="relative min-w-0 bg-surface lg:min-h-[895px] lg:bg-transparent"
      id="simulador"
    >
      <div className="absolute inset-x-0 top-0 h-[380px] overflow-hidden lg:h-full">
        <Image
          alt=""
          aria-hidden="true"
          className="object-cover lg:hidden"
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 0px"
          src="/images/hero/hero-mobile-approved-01.jpg"
        />
        <Image
          alt=""
          aria-hidden="true"
          className="hidden object-cover lg:block"
          fill
          priority
          sizes="(min-width: 1024px) 100vw, 0px"
          src="/images/hero/hero-desktop-approved-01.png"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,63,43,0.04)_0%,rgba(14,63,43,0.16)_42%,rgba(14,63,43,0.82)_100%)] lg:bg-[linear-gradient(90deg,rgba(14,63,43,0.48)_0%,rgba(14,63,43,0.20)_38%,rgba(14,63,43,0.02)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-[linear-gradient(180deg,transparent_65%,rgba(14,63,43,0.10)_100%)] lg:block"
        />
      </div>

      <div className="relative mx-auto grid w-full min-w-0 lg:min-h-[895px] lg:max-w-[1200px] lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center lg:gap-3xl lg:px-xl xl:px-0">
        <div className="flex h-[380px] min-w-0 items-end px-[20px] pb-lg lg:h-auto lg:px-0 lg:pb-0">
          <div className="flex min-w-0 max-w-[500px] flex-col items-start gap-md text-foreground-inverse lg:gap-lg">
            <p className="text-label-md font-semibold tracking-[2px] text-accent uppercase lg:tracking-[2.5px]">
              San Martín Finanzas
            </p>
            <h1 className="font-display text-display-md font-semibold lg:text-display-lg">
              <span className="block">Un préstamo</span>
              <span className="text-accent">más cerca</span> de ti
            </h1>
            <p className="max-w-[500px] text-body-sm lg:text-body-lg">
              Simula de forma referencial y continúa tu proceso paso a paso.
            </p>
          </div>
        </div>

        <div className="flex min-w-0 justify-center bg-surface px-md py-lg lg:bg-transparent lg:px-0 lg:py-3xl">
          {simulator}
        </div>
      </div>
    </section>
  );
}
