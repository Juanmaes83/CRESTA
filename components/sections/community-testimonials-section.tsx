"use client";

import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Maria Garcia",
    avatar: "/images/avatar-maria.jpg",
    testimonialEs: "La comunidad CRESTA me ha llevado a descubrir rutas que jamas habria encontrado sola. El analisis de agua me da total tranquilidad en cada ruta.",
    testimonialEn: "The CRESTA community has led me to discover routes I would never have found alone. The water analysis gives me total peace of mind on every route.",
  },
  {
    name: "Carlos Mendoza",
    avatar: "/images/avatar-carlos.jpg",
    testimonialEs: "Llevo 15 anos haciendo montana y CRESTA ha cambiado mi forma de explorar. El GPS offline funciona donde mi movil no tiene senal.",
    testimonialEn: "I've been mountaineering for 15 years and CRESTA has changed the way I explore. The offline GPS works where my phone has no signal.",
  },
  {
    name: "Laura Martinez",
    avatar: "/images/avatar-laura.jpg",
    testimonialEs: "El sistema de calentamiento es genial para las rutas de manana temprano. El cafe siempre caliente a 3.000 metros de altitud.",
    testimonialEn: "The heating system is great for early morning routes. Coffee always hot at 3,000 meters altitude.",
  },
];

interface CommunityTestimonialsSectionProps {
  lang?: "es" | "en";
}

export function CommunityTestimonialsSection({ lang = "es" }: CommunityTestimonialsSectionProps) {
  return (
    <section className="bg-background px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {lang === "es" ? "Lo que dicen nuestros exploradores" : "What our explorers say"}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6"
            >
              {/* Avatar and Name */}
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{lang === "es" ? testimonial.testimonialEs : testimonial.testimonialEn}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
