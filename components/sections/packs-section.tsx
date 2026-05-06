"use client";

import Image from "next/image";
import { Check, Truck, Shield, RotateCcw, Star } from "lucide-react";
import { useState } from "react";

const packs = [
  {
    nameEs: "Starter",
    nameEn: "Starter",
    contentEs: "Botella CRESTA con GPS basico y linterna LED",
    contentEn: "CRESTA bottle with basic GPS and LED flashlight",
    features: ["GPS offline", "LED 200lm", "App CRESTA"],
    price: 99,
    originalPrice: 129,
    image: "/images/pack-starter.jpg",
  },
  {
    nameEs: "Explorer +",
    nameEn: "Explorer +",
    contentEs: "Botella + Analisis de agua + Kit accesorios",
    contentEn: "Bottle + Water analysis + Accessories kit",
    features: ["GPS offline", "LED 350lm", "Analisis H2O", "Accesorios", "App Pro"],
    price: 149,
    originalPrice: 199,
    image: "/images/pack-explorer.jpg",
    featured: true,
  },
  {
    nameEs: "Pro Adventurer",
    nameEn: "Pro Adventurer",
    contentEs: "Kit completo + Calentador + 1 ano rutas premium",
    contentEn: "Complete kit + Heater + 1 year premium routes",
    features: ["GPS offline", "LED 500lm", "Analisis H2O", "Calentador", "Rutas 1 ano", "Soporte VIP"],
    price: 249,
    originalPrice: 349,
    image: "/images/pack-pro.jpg",
  },
];

const guarantees = [
  {
    icon: Truck,
    textEs: "Envio gratis 24-48h",
    textEn: "Free shipping 24-48h",
  },
  {
    icon: Shield,
    textEs: "2 anos de garantia",
    textEn: "2-year warranty",
  },
  {
    icon: RotateCcw,
    textEs: "Devolucion 30 dias",
    textEn: "30-day returns",
  },
];

interface PacksSectionProps {
  lang?: "es" | "en";
}

export function PacksSection({ lang = "es" }: PacksSectionProps) {
  const [selectedPack, setSelectedPack] = useState<typeof packs[0] | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPack = (pack: typeof packs[0]) => {
    setSelectedPack(pack);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const handleCheckout = () => {
    alert(lang === "es" 
      ? `Compra simulada! ${quantity}x ${selectedPack?.nameEs} - Total: ${(selectedPack?.price || 0) * quantity}EUR` 
      : `Simulated purchase! ${quantity}x ${selectedPack?.nameEn} - Total: EUR${(selectedPack?.price || 0) * quantity}`);
    setIsModalOpen(false);
  };

  return (
    <section id="packs" className="bg-background px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1 text-sm font-medium text-green-600 mb-4">
            <Star className="h-4 w-4 fill-green-500" />
            {lang === "es" ? "Oferta de lanzamiento -30%" : "Launch offer -30%"}
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {lang === "es" ? "Elige tu pack CRESTA" : "Choose your CRESTA pack"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {lang === "es" 
              ? "Todos los packs incluyen envio gratis y 2 anos de garantia" 
              : "All packs include free shipping and 2-year warranty"}
          </p>
        </div>

        {/* Packs Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {packs.map((pack, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg ${
                pack.featured 
                  ? "border-foreground/40 ring-2 ring-foreground/20" 
                  : "border-border hover:border-foreground/20"
              }`}
            >
              {pack.featured && (
                <div className="absolute right-4 top-4 z-10 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                  {lang === "es" ? "Mas vendido" : "Best seller"}
                </div>
              )}
              
              {/* Pack Image */}
              <div className="relative h-48 overflow-hidden bg-foreground/5">
                <Image
                  src={pack.image}
                  alt={lang === "es" ? pack.nameEs : pack.nameEn}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-medium text-foreground">
                  {lang === "es" ? pack.nameEs : pack.nameEn}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {lang === "es" ? pack.contentEs : pack.contentEn}
                </p>
                
                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {pack.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Price */}
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-3xl font-medium text-foreground">{pack.price}EUR</span>
                  <span className="text-lg text-muted-foreground line-through">{pack.originalPrice}EUR</span>
                </div>

                <button
                  onClick={() => handleSelectPack(pack)}
                  className={`w-full rounded-full py-3 text-sm font-medium transition-opacity hover:opacity-80 ${
                    pack.featured 
                      ? "bg-foreground text-background" 
                      : "border border-foreground text-foreground"
                  }`}
                >
                  {lang === "es" ? "Comprar ahora" : "Buy now"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-border bg-card/50 p-6">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center gap-3 text-sm text-foreground">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                <guarantee.icon className="h-5 w-5 text-green-500" />
              </div>
              <span className="font-medium">{lang === "es" ? guarantee.textEs : guarantee.textEn}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Purchase Modal */}
      {isModalOpen && selectedPack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-md rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-xl font-medium text-foreground">
              {lang === "es" ? "Finalizar compra" : "Complete purchase"}
            </h3>
            
            <div className="mb-6 rounded-xl overflow-hidden">
              <div className="relative h-32 bg-foreground/5">
                <Image
                  src={selectedPack.image}
                  alt={lang === "es" ? selectedPack.nameEs : selectedPack.nameEn}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-foreground/5">
                <p className="font-medium text-foreground">
                  {lang === "es" ? selectedPack.nameEs : selectedPack.nameEn}
                </p>
                <p className="text-sm text-muted-foreground">
                  {lang === "es" ? selectedPack.contentEs : selectedPack.contentEn}
                </p>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {lang === "es" ? "Cantidad" : "Quantity"}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground hover:bg-foreground/5"
                >
                  -
                </button>
                <span className="w-8 text-center text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground hover:bg-foreground/5"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between border-t border-border pt-4">
              <span className="font-medium text-foreground">Total</span>
              <span className="text-xl font-medium text-foreground">
                {selectedPack.price * quantity}EUR
              </span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 rounded-full border border-border py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                {lang === "es" ? "Cancelar" : "Cancel"}
              </button>
              <button
                onClick={handleCheckout}
                className="flex-1 rounded-full bg-foreground py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
              >
                {lang === "es" ? "Pagar ahora" : "Pay now"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
