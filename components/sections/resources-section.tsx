"use client";

import Image from "next/image";
import { FileText, Leaf, PawPrint, Compass, Download } from "lucide-react";

const resources = [
  {
    icon: FileText,
    titleEs: "Guia de senaletica de senderos",
    titleEn: "Trail signage guide",
    descEs: "Aprende a interpretar todas las marcas del camino",
    descEn: "Learn to interpret all trail markers",
    format: "PDF - 2.5MB",
  },
  {
    icon: Leaf,
    titleEs: "Catalogo de flora autoctona",
    titleEn: "Native flora catalog",
    descEs: "150+ especies con fotos de alta resolucion",
    descEn: "150+ species with high-resolution photos",
    format: "PDF - 8.2MB",
  },
  {
    icon: PawPrint,
    titleEs: "Cuaderno de fauna para ninos",
    titleEn: "Wildlife notebook for kids",
    descEs: "Actividades y juegos educativos",
    descEn: "Educational activities and games",
    format: "PDF - 4.1MB",
  },
  {
    icon: Compass,
    titleEs: "Tutorial de uso del GPS CRESTA",
    titleEn: "CRESTA GPS usage tutorial",
    descEs: "Domina todas las funciones de tu botella",
    descEn: "Master all your bottle features",
    format: "PDF - 3.8MB",
  },
];

interface ResourcesSectionProps {
  lang?: "es" | "en";
  onOpenEmailModal?: () => void;
}

export function ResourcesSection({ lang = "es", onOpenEmailModal }: ResourcesSectionProps) {
  return (
    <section className="relative bg-background px-6 py-20 md:px-12 md:py-28 lg:px-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/resources-guide.jpg"
          alt="Planning resources"
          fill
          className="object-cover opacity-10"
        />
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-foreground/10 px-4 py-1 text-xs font-medium text-foreground mb-4">
            {lang === "es" ? "GRATIS" : "FREE"}
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {lang === "es" ? "Recursos gratuitos para tu aventura" : "Free resources for your adventure"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {lang === "es" 
              ? "Descarga guias profesionales sin coste. Solo te pedimos tu email." 
              : "Download professional guides for free. We only ask for your email."}
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 transition-all hover:border-foreground/20 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/10">
                <resource.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="mb-2 text-base font-medium text-foreground">
                {lang === "es" ? resource.titleEs : resource.titleEn}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                {lang === "es" ? resource.descEs : resource.descEn}
              </p>
              <p className="mb-6 text-xs text-muted-foreground/70">{resource.format}</p>
              <button
                onClick={onOpenEmailModal}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
              >
                <Download className="h-4 w-4" />
                {lang === "es" ? "Descargar gratis" : "Download free"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
