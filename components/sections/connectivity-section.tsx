"use client";

import Image from "next/image";
import { Apple, Smartphone, WifiOff, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const connectivityFeatures = [
  {
    icon: Apple,
    titleEs: "Apple Health",
    titleEn: "Apple Health",
    textEs: "Sincroniza tu hidratacion automaticamente",
    textEn: "Sync your hydration automatically",
  },
  {
    icon: Smartphone,
    titleEs: "App CRESTA",
    titleEn: "CRESTA App",
    textEs: "Historial de rutas, calidad de agua, consumo",
    textEn: "Route history, water quality, consumption",
  },
  {
    icon: WifiOff,
    titleEs: "Modo Offline",
    titleEn: "Offline Mode",
    textEs: "Guarda datos hasta reconectar",
    textEn: "Saves data until reconnection",
  },
];

export function ConnectivitySection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-background overflow-hidden">
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
            src="/images/connectivity-app.jpg"
            alt={t(
              "Smartphone mostrando app CRESTA junto a botella inteligente",
              "Smartphone showing CRESTA app next to smart bottle"
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
                "Conecta con tu ecosistema digital",
                "Connect with your digital ecosystem"
              )}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              {t(
                "Tu aventura sincronizada con tus dispositivos favoritos.",
                "Your adventure synced with your favorite devices."
              )}
            </p>

            {/* Features Grid */}
            <div className="mt-10 grid gap-4">
              {connectivityFeatures.map((feature) => (
                <div
                  key={feature.titleEn}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/30 p-5 transition-all hover:bg-secondary/50"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-foreground/10">
                    <feature.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-foreground">
                      {t(feature.titleEs, feature.titleEn)}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t(feature.textEs, feature.textEn)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Compatibility Badge */}
            <div className="mt-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">
                  {t("Compatible con iOS y Android", "Compatible with iOS and Android")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
