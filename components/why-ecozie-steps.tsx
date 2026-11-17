"use client";

import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Pilah Sampahmu",
    description:
      "Pisahkan sampah berdasarkan jenisnya. Pastikan sampah dalam kondisi bersih dan kering agar siap disetorkan.",
    colors: {
      ring: "bg-cyan-50",
      circle: "bg-cyan-500",
      panel: "bg-cyan-50",
    },
  },
  {
    number: 2,
    title: "Setorkan Sampahmu",
    description:
      "Atur penyetoran dengan mudah melalui WhatsApp, lalu serahkan sampah yang sudah dipilah kepada tim Ecozie.",
    colors: {
      ring: "bg-emerald-50",
      circle: "bg-brand-primary",
      panel: "bg-emerald-50",
    },
  },
  {
    number: 3,
    title: "Nikmati Manfaatnya",
    description:
      "Sampahmu dikelola agar memiliki nilai dan menjadi bagian dari gerakan menjaga lingkungan bersama.",
    colors: {
      ring: "bg-lime-50",
      circle: "bg-accent-lime",
      panel: "bg-lime-50",
    },
  },
];

export default function WhyEcozieSteps() {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  return (
    <section className="mb-20 sm:mb-32">
      <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
        <div className="mb-3 flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent-lime" />
          <p className="text-xs sm:text-sm">WHY ECOZIE</p>
        </div>
        <h2 className="max-w-xl font-unbounded text-3xl font-bold leading-tight sm:text-4xl">
          Tiga Langkah <br />Menuju Bumi Lebih Baik
        </h2>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`flex min-w-0 items-center rounded-full transition-colors ${
              step.number === activeStep
                ? `w-full gap-3 p-3 sm:gap-5 sm:p-4 md:flex-2 ${step.colors.panel} ${
                    step.number === 3 ? "md:flex-row-reverse" : ""
                  }`
                : "h-24 w-full justify-center md:flex-1"
            }`}
          >
            <StepButton
              step={step}
              active={step.number === activeStep}
              onSelect={() =>
                setActiveStep(activeStep === step.number ? null : step.number)
              }
            />
            {step.number === activeStep && (
              <div
                id={`why-ecozie-step-detail-${step.number}`}
                className="min-w-0 flex-1 py-2"
                aria-live="polite"
              >
                <h3 className="text-base font-semibold sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed sm:text-sm">
                  {step.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

type Step = (typeof steps)[number];

function StepButton({
  step,
  active = false,
  onSelect,
}: {
  step: Step;
  active?: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={`Langkah ${step.number}: ${step.title}`}
      aria-pressed={active}
      aria-expanded={active}
      aria-controls={
        active ? `why-ecozie-step-detail-${step.number}` : undefined
      }
      onClick={onSelect}
      className={`shrink-0 rounded-full p-2 transition-shadow cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-strong sm:p-2.5 ${step.colors.ring} ${active ? "shadow-md" : ""}`}
    >
      <span
        className={`flex h-20 w-20 flex-col items-center justify-center rounded-full text-white sm:h-32 sm:w-32 ${step.colors.circle}`}
      >
        <span className="text-[8px] font-semibold tracking-[0.3em] sm:text-[10px]">
          STEP
        </span>
        <span className="text-3xl font-bold leading-none sm:text-5xl">
          {step.number}
        </span>
      </span>
    </button>
  );
}
