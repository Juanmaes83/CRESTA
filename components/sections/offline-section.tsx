"use client";

import Image from "next/image";
import { MapPin, Watch, BatteryFull, Smartphone } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const offlineFeatures = [
  {
    icon: MapPin,
    textEs: "GPS offline con mapas precargados",
    textEn: "Offline GPS with preloaded maps",
  },
  {
    icon: Watch,
    textEs: "Sincronizacion con smartwatch (Apple Watch, Garmin, Fitbit)",
    textEn: "Smartwatch sync (Apple Watch, Garmin, Fitbit)",
  },
  {
    icon: BatteryFull,
    textEs: "Bateria de 2 semanas de duracion",
    textEn: "2-week battery life",
  },
  {
    icon: Smartphone,
    textEs: "Apple Find My integrado",
    textEn: "Built-in Apple Find My",
  },
];

export function OfflineSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-foreground overflow-hidden">
      {/* NEW Badge */}
      <div className="absolute top-6 right-6 z-20 md:top-10 md:right-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
          {t("NUEVO", "NEW")}
        </span>
      </div>

      {/* Two Column Layout - Reversed */}
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left Column - Content */}
        <div className="relative flex items-center px-6 py-16 md:px-12 lg:px-16 lg:py-24 order-2 lg:order-1">
          <div className="w-full max-w-xl">
            {/* Header */}
            <h2 className="text-3xl font-medium tracking-tight text-background md:text-4xl lg:text-5xl">
              {t(
                "Funciona donde otros dispositivos fallan",
                "Works where other devices fail"
              )}
            </h2>
            <p className="mt-6 text-lg text-background/70">
              {t(
                "Sin WiFi, sin datos moviles. Solo tu y la montana.",
                "No WiFi, no mobile data. Just you and the mountain."
              )}
            </p>

            {/* Features Grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {offlineFeatures.map((feature) => (
                <div
                  key={feature.textEn}
                  className="flex items-center gap-4 rounded-2xl border border-background/20 bg-background/10 p-4 backdrop-blur-sm"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-background/20">
                    <feature.icon className="h-5 w-5 text-background" />
                  </div>
                  <span className="text-sm font-medium text-background leading-tight">
                    {t(feature.textEs, feature.textEn)}
                  </span>
                </div>
              ))}
            </div>

            {/* Patent Badge */}
            <div className="mt-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-4 py-2">
                <span className="text-sm text-background/80">
                  {t("Tecnologia con patente pendiente", "Patent-pending technology")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2">
          <Image
            src="/images/offline-gps-mountain.jpg"
            alt={t(
              "Aventurero en cima de montana usando GPS offline CRESTA",
              "Adventurer on mountain peak using CRESTA offline GPS"
            )}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for text readability on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground via-transparent to-transparent lg:hidden" />
        </div>
      </div>
    </section>
  );
}
