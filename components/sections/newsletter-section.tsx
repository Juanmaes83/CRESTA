"use client";

import { useState } from "react";

interface NewsletterSectionProps {
  lang?: "es" | "en";
}

export function NewsletterSection({ lang = "es" }: NewsletterSectionProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(lang === "es" 
        ? `¡Gracias por suscribirte! Te hemos enviado un email de confirmación a ${email}` 
        : `Thanks for subscribing! We've sent a confirmation email to ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="bg-background px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {lang === "es" ? "Únete a la tribu CRESTA" : "Join the CRESTA tribe"}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          {lang === "es" 
            ? "Recibe rutas exclusivas, descuentos en albergues y novedades cada mes" 
            : "Receive exclusive routes, hostel discounts and news every month"}
        </p>
        <p className="mx-auto mt-2 text-sm text-muted-foreground">
          {lang === "es" 
            ? "No compartimos tu email. Puedes darte de baja cuando quieras." 
            : "We don't share your email. You can unsubscribe anytime."}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={lang === "es" ? "Tu email" : "Your email"}
            required
            className="rounded-full border border-border bg-card px-6 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none sm:w-80"
          />
          <button
            type="submit"
            className="rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            {lang === "es" ? "Suscribirme" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
