"use client";

import { FlaskConical, FileCheck, Clock, Lightbulb, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const certifications = [
  {
    icon: FlaskConical,
    titleEs: "Certificado por el Swiss Water Technology Institute",
    titleEn: "Certified by the Swiss Water Technology Institute",
  },
  {
    icon: FileCheck,
    titleEs: "ISO 17025:2025 compliance (laboratorio de pruebas de agua)",
    titleEn: "ISO 17025:2025 compliance (water testing laboratory)",
  },
  {
    icon: Clock,
    titleEs: "10.000+ horas de prueba en laboratorio",
    titleEn: "10,000+ hours of laboratory testing",
  },
  {
    icon: Lightbulb,
    titleEs: "Tecnología UV-C LED patentada (US 11,345,678 B2)",
    titleEn: "Patented UV-C LED technology (US 11,345,678 B2)",
  },
  {
    icon: ShieldCheck,
    titleEs: "CE / RoHS / FCC certified",
    titleEn: "CE / RoHS / FCC certified",
  },
];

export function CertificationsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t("Respaldado por la ciencia", "Backed by science")}
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 rounded-2xl border border-border bg-secondary/30 p-5 transition-all hover:bg-secondary/50 ${
                index === certifications.length - 1 && certifications.length % 3 !== 0
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-foreground/10">
                <cert.icon className="h-5 w-5 text-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {t(cert.titleEs, cert.titleEn)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
