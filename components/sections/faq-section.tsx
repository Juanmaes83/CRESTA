"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    questionEs: "¿Cómo analiza la pureza del agua?",
    questionEn: "How does it analyze water purity?",
    answerEs: "Mediante sensores de conductividad, turbidez y pH. Resultados en menos de 10 segundos con precisión de laboratorio.",
    answerEn: "Using conductivity, turbidity and pH sensors. Results in less than 10 seconds with laboratory precision.",
  },
  {
    questionEs: "¿Funciona sin conexión a internet?",
    questionEn: "Does it work without an internet connection?",
    answerEs: "Sí, el GPS es offline y guarda todos los datos hasta que recuperes cobertura.",
    answerEn: "Yes, the GPS is offline and saves all data until you regain coverage.",
  },
  {
    questionEs: "¿Es resistente a golpes y agua?",
    questionEn: "Is it resistant to impacts and water?",
    answerEs: "IP67, acero inoxidable 18/8 con doble pared. Sumergible hasta 1 metro durante 30 minutos.",
    answerEn: "IP67, 18/8 stainless steel with double wall. Submersible up to 1 meter for 30 minutes.",
  },
  {
    questionEs: "¿Cuánto dura la batería?",
    questionEn: "How long does the battery last?",
    answerEs: "2 semanas de uso normal, 4 días en modo análisis continuo de agua.",
    answerEn: "2 weeks of normal use, 4 days in continuous water analysis mode.",
  },
  {
    questionEs: "¿Se puede conectar a mi smartwatch?",
    questionEn: "Can I connect it to my smartwatch?",
    answerEs: "Sí, compatible con Apple Watch, Garmin, Fitbit y Wear OS.",
    answerEn: "Yes, compatible with Apple Watch, Garmin, Fitbit and Wear OS.",
  },
  {
    questionEs: "¿Qué incluye la garantía de 2 años?",
    questionEn: "What does the 2-year warranty include?",
    answerEs: "Cubre defectos de fabricación, problemas con sensores y batería. No cubre daños por mal uso o caídas extremas.",
    answerEn: "Covers manufacturing defects, sensor and battery issues. Does not cover damage from misuse or extreme drops.",
  },
  {
    questionEs: "¿Cómo funciona el sistema de calentamiento?",
    questionEn: "How does the heating system work?",
    answerEs: "Tecnología de calentamiento PTC integrada que calienta el agua hasta 70°C en menos de 5 minutos. Consumo eficiente para preservar batería.",
    answerEn: "Integrated PTC heating technology that heats water up to 70°C in less than 5 minutes. Efficient consumption to preserve battery.",
  },
  {
    questionEs: "¿Puedo usar la linterna LED de forma independiente?",
    questionEn: "Can I use the LED flashlight independently?",
    answerEs: "Sí, la linterna tiene 3 modos (alto, bajo, SOS) y funciona de forma independiente con hasta 50 horas de autonomía.",
    answerEn: "Yes, the flashlight has 3 modes (high, low, SOS) and works independently with up to 50 hours of battery life.",
  },
];

interface FaqSectionProps {
  lang?: "es" | "en";
}

export function FaqSection({ lang = "es" }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-background px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {lang === "es" ? "Preguntas frecuentes" : "Frequently Asked Questions"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {lang === "es" 
              ? "Todo lo que necesitas saber sobre CRESTA" 
              : "Everything you need to know about CRESTA"}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="pr-4 font-medium text-foreground">
                  {lang === "es" ? faq.questionEs : faq.questionEn}
                </span>
                <ChevronDown 
                  className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-border px-6 pb-6 pt-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {lang === "es" ? faq.answerEs : faq.answerEn}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
