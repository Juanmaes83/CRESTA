"use client";

import Image from "next/image";
import { Zap, Waves, FlaskConical, Timer, Award } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const analysisFeatures = [
  {
    icon: Zap,
    titleEs: "Conductividad",
    titleEn: "Conductivity",
    descEs: "Mide sales y minerales disueltos (rango 500-1000 us/cm)",
    descEn: "Measures dissolved salts and minerals (range 500-1000 us/cm)",
  },
  {
    icon: Waves,
    titleEs: "Turbidez",
    titleEn: "Turbidity",
    descEs: "Detecta particulas en suspension (precision 0.1 NTU)",
    descEn: "Detects suspended particles (0.1 NTU accuracy)",
  },
  {
    icon: FlaskConical,
    titleEs: "pH",
    titleEn: "pH",
    descEs: "Equilibrio acido-base (rango 6.5-8.5)",
    descEn: "Acid-base balance (range 6.5-8.5)",
  },
];

export function WaterAnalysisSection() {
  const { t } = useLanguage();

  const scrollToSpecs = () => {
    const specsSection = document.querySelector("#technology");
    if (specsSection) {
      specsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="water-analysis" className="relative bg-background overflow-hidden">
      {/* NEW Badge */}
      <div className="absolute top-6 right-6 z-20 md:top-10 md:right-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
          {t("NUEVO", "NEW")}
        </span>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left Column - Image */}
        <div className="relative h-[50vh] lg:h-auto">
          <Image
            src="/images/water-analysis-river.jpg"
            alt={t(
              "Rio de montana cristalino con agua pura para analisis CRESTA",
              "Crystal clear mountain river with pure water for CRESTA analysis"
            )}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for text readability on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:hidden" />
        </div>

        {/* Right Column - Content */}
        <div className="relative flex items-center px-6 py-16 md:px-12 lg:px-16 lg:py-24">
          <div className="w-full max-w-xl">
            {/* Header */}
            <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t(
                "Sabras si el agua es potable antes de beberla",
                "Know if water is safe before you drink it"
              )}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              {t(
                "Tecnologia de laboratorio en tu botella. Compatible con manantiales, rios y lagos de montana.",
                "Laboratory technology in your bottle. Compatible with springs, rivers and mountain lakes."
              )}
            </p>

            {/* Swiss Certification Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2">
              <Award className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Certified by Swiss Water Technology Institute
              </span>
            </div>

            {/* Features Grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {analysisFeatures.map((feature) => (
                <div
                  key={feature.titleEn}
                  className="rounded-2xl border border-border bg-secondary/30 p-5 text-center transition-all hover:bg-secondary/50"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10">
                    <feature.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="mt-3 text-base font-medium text-foreground">
                    {t(feature.titleEs, feature.titleEn)}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    {t(feature.descEs, feature.descEn)}
                  </p>
                </div>
              ))}
            </div>

            {/* Time Badge */}
            <div className="mt-8 flex">
              <div className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5">
                <Timer className="h-4 w-4 text-background" />
                <span className="text-sm font-medium text-background">
                  {t("Tiempo de analisis < 10 segundos", "Analysis time < 10 seconds")}
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={scrollToSpecs}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("Ver tecnologia certificada", "View certified technology")} &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
