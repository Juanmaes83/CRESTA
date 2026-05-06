"use client";

import Image from "next/image";
import { Map, Home, Mountain, BookOpen, Users } from "lucide-react";

const services = [
  {
    icon: Map,
    titleEs: "Rutas GPS",
    titleEn: "GPS Routes",
    descriptionEs: "Descarga tracks oficiales para tus escapadas. Mas de 12,500 rutas verificadas.",
    descriptionEn: "Download official tracks for your trips. Over 12,500 verified routes.",
    ctaEs: "Explorar rutas",
    ctaEn: "Explore routes",
    action: "scroll-routes",
  },
  {
    icon: Home,
    titleEs: "Albergues Partner",
    titleEn: "Partner Hostels",
    descriptionEs: "Red de 85+ albergues con descuentos exclusivos para miembros CRESTA.",
    descriptionEn: "Network of 85+ hostels with exclusive discounts for CRESTA members.",
    ctaEs: "Ver albergues",
    ctaEn: "View hostels",
    action: "alert-booking",
  },
  {
    icon: Mountain,
    titleEs: "Actividades Guiadas",
    titleEn: "Guided Activities",
    descriptionEs: "Escalada, senderismo, BTT, observacion de estrellas con guias certificados.",
    descriptionEn: "Climbing, hiking, MTB, stargazing with certified guides.",
    ctaEs: "Ver actividades",
    ctaEn: "View activities",
    action: "scroll-events",
  },
  {
    icon: BookOpen,
    titleEs: "Biblioteca Digital",
    titleEn: "Digital Library",
    descriptionEs: "Guias descargables de flora, fauna, senaletica y supervivencia.",
    descriptionEn: "Downloadable guides for flora, fauna, signage and survival.",
    ctaEs: "Descargar gratis",
    ctaEn: "Download free",
    action: "modal-email",
  },
];

interface CommunitySectionProps {
  lang?: "es" | "en";
  onOpenEmailModal?: () => void;
}

export function CommunitySection({ lang = "es", onOpenEmailModal }: CommunitySectionProps) {
  const handleAction = (action: string) => {
    switch (action) {
      case "scroll-routes":
        document.getElementById("routes-map")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "alert-booking":
        alert(lang === "es" 
          ? "Sistema de reservas en desarrollo. Proximamente disponible." 
          : "Booking system in development. Coming soon.");
        break;
      case "scroll-events":
        document.getElementById("events-calendar")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "modal-email":
        onOpenEmailModal?.();
        break;
    }
  };

  return (
    <section id="community" className="relative bg-background px-6 py-20 md:px-12 md:py-28 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/community-hikers.jpg"
          alt="CRESTA Community"
          fill
          className="object-cover opacity-5"
        />
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-foreground/10 px-4 py-1 text-sm font-medium text-foreground mb-4">
            <Users className="h-4 w-4" />
            {lang === "es" ? "Mas de 3,000 aventureros activos" : "Over 3,000 active adventurers"}
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {lang === "es" ? "Mas que una botella, una comunidad" : "More than a bottle, a community"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {lang === "es" ? "Descubre rutas, alojate, aprende y conecta con otros aventureros" : "Discover routes, stay, learn and connect with other adventurers"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 transition-all hover:border-foreground/20 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/10">
                <service.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-foreground">
                {lang === "es" ? service.titleEs : service.titleEn}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {lang === "es" ? service.descriptionEs : service.descriptionEn}
              </p>
              <button
                onClick={() => handleAction(service.action)}
                className="inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
              >
                {lang === "es" ? service.ctaEs : service.ctaEn}
                <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
