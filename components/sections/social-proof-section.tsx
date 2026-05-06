"use client";

import { Users } from "lucide-react";

interface SocialProofSectionProps {
  lang?: "es" | "en";
}

export function SocialProofSection({ lang = "es" }: SocialProofSectionProps) {
  return (
    <section className="bg-background px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-4 rounded-2xl border border-border bg-card px-8 py-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10">
            <Users className="h-6 w-6 text-foreground" />
          </div>
          <p className="text-lg font-medium text-foreground md:text-xl">
            {lang === "es" 
              ? "Más de 3.000 aventureros confían en nosotros" 
              : "More than 3,000 adventurers trust us"}
          </p>
        </div>
      </div>
    </section>
  );
}
