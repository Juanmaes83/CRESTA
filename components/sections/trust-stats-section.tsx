"use client";

import { useEffect, useRef, useState } from "react";
import { Map, Droplets, Users, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const stats = [
  {
    icon: Map,
    valueNum: 12500,
    suffix: "+",
    labelEs: "Rutas guardadas",
    labelEn: "Routes saved",
  },
  {
    icon: Droplets,
    valueNum: 2300000,
    suffix: "+",
    display: "2.3M",
    labelEs: "Litros analizados",
    labelEn: "Liters analyzed",
  },
  {
    icon: Users,
    valueNum: 3247,
    suffix: "",
    labelEs: "Aventureros activos",
    labelEn: "Active adventurers",
  },
  {
    icon: Globe,
    valueNum: 34,
    suffix: "",
    labelEs: "Países",
    labelEn: "Countries",
  },
];

function AnimatedCounter({
  target,
  suffix,
  display,
  isVisible,
}: {
  target: number;
  suffix: string;
  display?: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  if (display && count === target) {
    return (
      <span>
        {display}
        {suffix}
      </span>
    );
  }

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function TrustStatsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-secondary/30 py-24 md:py-32">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t("Una comunidad que crece", "A growing community")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(
              "Miles de aventureros ya confían en CRESTA",
              "Thousands of adventurers already trust CRESTA"
            )}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.labelEn} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10">
                <stat.icon className="h-6 w-6 text-foreground" />
              </div>
              <p className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
                <AnimatedCounter
                  target={stat.valueNum}
                  suffix={stat.suffix}
                  display={stat.display}
                  isVisible={isVisible}
                />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(stat.labelEs, stat.labelEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
