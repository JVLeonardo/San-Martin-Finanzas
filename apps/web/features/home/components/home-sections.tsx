import Image from "next/image";
import Link from "next/link";

import {
  FAQItem,
  ProcessStep,
  SectionHeading,
  TrustItem,
} from "@/components/ui";

const sectionContainerClassName =
  "mx-auto w-full max-w-[1200px] px-md sm:px-xl lg:px-xl xl:px-0";

const trustItems = [
  {
    description: "Conoce cada paso antes de continuar.",
    title: "Proceso claro",
  },
  {
    description: "Explora una estimación antes de iniciar tu proceso.",
    title: "Simulación referencial",
  },
  {
    description: "Una interfaz pensada para avanzar sin complicaciones.",
    title: "Experiencia simple",
  },
] as const;

const processSteps = [
  {
    description: "Explora una simulación referencial.",
    title: "Simula",
  },
  {
    description: "Inicia tu proceso desde tu cuenta.",
    title: "Continúa",
  },
  {
    description:
      "Completa la información que corresponda durante el proceso.",
    title: "Sigue los pasos",
  },
] as const;

const faqItems = [
  {
    answer: "No. La simulación es referencial y no representa una aprobación.",
    question: "¿La simulación representa una aprobación?",
  },
  {
    answer: "Necesitas una cuenta para continuar desde tu proceso.",
    question: "¿Necesito una cuenta para continuar?",
  },
  {
    answer: "Sí. Puedes revisar la simulación referencial antes de continuar.",
    question: "¿Puedo revisar la simulación antes de continuar?",
  },
  {
    answer: "Puedes ajustar los datos disponibles y volver a revisar la simulación.",
    question: "¿Cómo puedo volver a simular?",
  },
] as const;

const socialNetworks = ["Facebook", "Instagram", "TikTok"] as const;

function TrustMark() {
  return <span className="size-[18px] rounded-full border-2 border-brand-strong" />;
}

function ValueSection() {
  return (
    <section className="relative overflow-hidden bg-background py-4xl lg:py-5xl">
      <div className={`${sectionContainerClassName} relative`}>
        <div className="flex flex-col gap-3xl lg:gap-4xl">
          <SectionHeading
            alignment="center"
            description="Encuentra la información principal y avanza paso a paso desde un solo lugar."
            eyebrow="Nuestro enfoque"
            title="Una experiencia simple y clara"
          />
          <div className="grid gap-xl md:grid-cols-3 md:gap-4xl">
            {trustItems.map((item) => (
              <TrustItem
                description={item.description}
                icon={<TrustMark />}
                key={item.title}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-auto w-[244px] -translate-x-1/2 rotate-180 lg:block"
        height={79}
        src="/brand/graphics/route-primary-forest.png"
        width={244}
      />
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-surface py-4xl lg:py-5xl" id="como-funciona">
      <div className={sectionContainerClassName}>
        <div className="flex flex-col gap-3xl lg:gap-4xl">
          <SectionHeading
            description="Un proceso claro y comprensible en cada etapa."
            eyebrow="Paso a paso"
            title="Cómo funciona"
          />
          <ol className="grid gap-xl md:grid-cols-3 md:gap-2xl">
            {processSteps.map((step) => (
              <li key={step.title}>
                <ProcessStep
                  description={step.description}
                  stepNumber="1"
                  title={step.title}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function RegionalSection() {
  return (
    <section className="relative min-h-[480px] overflow-hidden bg-surface-inverse py-4xl text-foreground-inverse lg:py-5xl">
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none hidden object-cover opacity-35 lg:block"
        fill
        sizes="(min-width: 1024px) 100vw, 0px"
        src="/brand/graphics/horizon-desktop.png"
      />
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none object-cover opacity-30 lg:hidden"
        fill
        sizes="(max-width: 1023px) 100vw, 0px"
        src="/brand/graphics/horizon-mobile.png"
      />
      <div className={`${sectionContainerClassName} relative grid min-h-[384px] items-start gap-2xl lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] lg:items-center lg:gap-4xl`}>
        <div className="flex max-w-[600px] flex-col gap-lg">
          <p className="text-label-md font-semibold tracking-[2px] text-accent uppercase">
            Identidad regional
          </p>
          <h2 className="font-display text-heading-2 font-semibold text-balance text-foreground-inverse">
            <span className="block">De San Martín,</span>
            <span className="block">para San Martín</span>
          </h2>
          <p className="max-w-[520px] text-body-md text-pretty text-foreground-inverse lg:text-body-lg">
            Una experiencia financiera pensada con claridad, cercanía y
            perspectiva regional. Diseñada para que cada paso sea comprensible y
            accesible.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="h-[180px] rounded-md border border-white/15 bg-background/8 sm:h-[220px] lg:h-[280px]"
        />
      </div>
    </section>
  );
}

function AlliesSection() {
  return (
    <section className="bg-surface py-4xl lg:py-5xl">
      <div className={`${sectionContainerClassName} flex flex-col gap-3xl lg:gap-4xl`}>
        <SectionHeading
          alignment="center"
          description="Instituciones que acompañan este esfuerzo regional."
          eyebrow="Red de confianza"
          size="M"
          title="Nuestros Aliados"
        />
        <div aria-label="Espacios reservados para aliados" className="grid grid-cols-2 gap-md sm:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              aria-label={`Espacio para aliado ${index + 1}`}
              className={`flex h-[44px] items-center justify-center rounded-sm border border-dashed border-outline text-label-sm font-semibold text-foreground-muted lg:h-[48px] ${index === 4 ? "hidden lg:flex" : ""}`}
              key={index}
            >
              Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-background py-4xl lg:py-5xl" id="preguntas-frecuentes">
      <div className="mx-auto flex w-full max-w-[800px] flex-col gap-xl px-md sm:px-xl lg:px-0">
        <SectionHeading
          alignment="center"
          description="Respuestas a las consultas más comunes."
          eyebrow="Consultas"
          size="M"
          title="Preguntas frecuentes"
        />
        <div className="pt-md lg:pt-xl">
          {faqItems.map((item, index) => (
            <FAQItem
              answer={item.answer}
              key={item.question}
              open={index === 0}
              question={item.question}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand-soft py-5xl text-center text-foreground-inverse lg:py-6xl">
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none object-cover opacity-30"
        fill
        sizes="100vw"
        src="/brand/graphics/topography-dark.png"
      />
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none object-cover opacity-[0.08]"
        fill
        sizes="100vw"
        src="/brand/graphics/route-white.png"
      />
      <div className="relative mx-auto flex max-w-[600px] flex-col items-center gap-lg px-md sm:px-xl">
        <h2 className="font-display text-heading-2 font-semibold text-foreground-inverse">
          Da el siguiente paso
        </h2>
        <p className="text-body-md text-foreground-inverse lg:text-body-lg">
          Explora una simulación referencial y continúa cuando estés listo.
        </p>
        <Link
          className="inline-flex items-center justify-center rounded-sm bg-accent px-lg py-sm text-button font-semibold text-foreground-inverse transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:shadow-focus"
          href="/simulador"
        >
          Simular ahora
        </Link>
      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-background py-4xl text-center lg:min-h-[580px] lg:py-5xl">
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none object-cover opacity-[0.08]"
        fill
        sizes="100vw"
        src="/brand/graphics/topography-light.png"
      />
      <div className="relative flex max-w-[600px] flex-col items-center gap-lg px-md sm:px-xl">
        <h2 className="font-display text-heading-2 font-semibold">
          Síguenos y conoce más
        </h2>
        <p className="max-w-[300px] text-body-sm text-foreground-muted lg:max-w-none lg:text-body-md">
          Encuentra novedades, consejos y contenido de San Martín Finanzas en
          nuestras redes.
        </p>
        <ul className="flex flex-wrap justify-center gap-md lg:gap-xl">
          {socialNetworks.map((network) => (
            <li
              className="flex items-center gap-sm rounded-sm border border-outline px-sm py-xs text-label-md font-semibold"
              key={network}
            >
              <span aria-hidden="true" className="size-lg rounded-full bg-brand-strong" />
              {network}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeSections() {
  return (
    <>
      <ValueSection />
      <ProcessSection />
      <RegionalSection />
      <AlliesSection />
      <FaqSection />
      <CtaSection />
      <SocialSection />
    </>
  );
}
