"use client";

import Image from "next/image";
import { Calendar, Users } from "lucide-react";

const events = [
  {
    titleEs: "Ruta nocturna con linternas LED",
    titleEn: "Night hike with LED flashlights",
    dateEs: "25 de mayo",
    dateEn: "May 25",
    spots: 10,
    image: "/images/events-campfire.jpg",
  },
  {
    titleEs: "Ultra Trail CRESTA 50K",
    titleEn: "CRESTA Ultra Trail 50K",
    dateEs: "2 de junio",
    dateEn: "June 2",
    spots: 150,
    image: "/images/events-trailrun.jpg",
  },
  {
    titleEs: "Retiro de bienestar y naturaleza",
    titleEn: "Wellness and nature retreat",
    dateEs: "15 de junio",
    dateEn: "June 15",
    spots: 8,
    image: "/images/events-retreat.jpg",
  },
];

interface EventsSectionProps {
  lang?: "es" | "en";
}

export function EventsSection({ lang = "es" }: EventsSectionProps) {
  const handleReserve = (eventTitle: string) => {
    alert(lang === "es" 
      ? `Reserva confirmada para "${eventTitle}". Te enviaremos un email con los detalles.` 
      : `Booking confirmed for "${eventTitle}". We'll send you an email with the details.`);
  };

  return (
    <section id="events-calendar" className="bg-background px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {lang === "es" ? "Proximas aventuras colectivas" : "Upcoming group adventures"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {lang === "es" ? "Unete a nuestra comunidad en vivo" : "Join our live community"}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-lg"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={lang === "es" ? event.titleEs : event.titleEn}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-medium text-foreground">
                  {lang === "es" ? event.titleEs : event.titleEn}
                </h3>
                
                <div className="mt-4 mb-6 space-y-2">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{lang === "es" ? event.dateEs : event.dateEn}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>
                      {event.spots} {lang === "es" ? "plazas disponibles" : "spots available"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleReserve(lang === "es" ? event.titleEs : event.titleEn)}
                  className="w-full rounded-full bg-foreground py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
                >
                  {lang === "es" ? "Reservar plaza" : "Reserve spot"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
