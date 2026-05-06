"use client";

import Image from "next/image";
import { MapPin, Mountain, Clock, Star } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const featuredRoutes = [
  {
    nameEs: "Ruta de los Ibones",
    nameEn: "Ibones Trail",
    locationEs: "Pirineos, Huesca",
    locationEn: "Pyrenees, Huesca",
    difficulty: "Moderate",
    duration: "6h",
    distance: "14km",
    rating: 4.8,
  },
  {
    nameEs: "Camino del Alba",
    nameEn: "Alba Trail",
    locationEs: "Picos de Europa",
    locationEn: "Picos de Europa",
    difficulty: "Easy",
    duration: "3h",
    distance: "8km",
    rating: 4.9,
  },
  {
    nameEs: "Crestas del Pedraforca",
    nameEn: "Pedraforca Ridges",
    locationEs: "Bergueda, Catalunya",
    locationEn: "Bergueda, Catalonia",
    difficulty: "Hard",
    duration: "8h",
    distance: "12km",
    rating: 4.7,
  },
];

interface RoutesMapSectionProps {
  lang?: "es" | "en";
}

export function RoutesMapSection({ lang = "es" }: RoutesMapSectionProps) {
  const { t } = useLanguage();

  const handleViewAllRoutes = () => {
    window.open("https://www.wikiloc.com", "_blank");
  };

  return (
    <section id="routes-map" className="bg-background">
      {/* Full-width Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/images/routes-map-aerial.jpg"
          alt={t(
            "Vista aerea de senderos de montana para rutas CRESTA",
            "Aerial view of mountain trails for CRESTA routes"
          )}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 pb-16 md:px-12 lg:px-20">
            <div className="mx-auto max-w-6xl">
              <p className="text-sm font-medium uppercase tracking-widest text-foreground/70">
                {t("Explorar", "Explore")}
              </p>
              <h2 className="mt-2 text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl">
                {t("Inspirate con las mejores rutas", "Get inspired by the best routes")}
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                {t(
                  "Mas de 50 rutas seleccionadas por nuestra comunidad de exploradores",
                  "Over 50 routes selected by our explorer community"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Routes */}
      <div className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {featuredRoutes.map((route, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      {lang === "es" ? route.nameEs : route.nameEn}
                    </h3>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{lang === "es" ? route.locationEs : route.locationEn}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-foreground/5 px-2 py-1">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium text-foreground">{route.rating}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{route.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Mountain className="h-4 w-4" />
                    <span>{route.distance}</span>
                  </div>
                  <span className={`ml-auto rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    route.difficulty === "Easy" 
                      ? "bg-green-500/10 text-green-600"
                      : route.difficulty === "Moderate"
                      ? "bg-yellow-500/10 text-yellow-600"
                      : "bg-red-500/10 text-red-600"
                  }`}>
                    {route.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button
              onClick={handleViewAllRoutes}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              {t("Ver todas las rutas en Wikiloc", "View all routes on Wikiloc")}
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
