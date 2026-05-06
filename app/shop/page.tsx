"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";

const products = [
  {
    id: "explorer",
    name: "CRESTA Explorer",
    price: "€149",
    description: "Perfect for day hikes and weekend adventures",
    image: "/images/bottle-mountain.png",
    features: ["GPS Tracking", "LED Flashlight", "500ml Capacity"],
  },
  {
    id: "pro",
    name: "CRESTA Pro",
    price: "€249",
    originalPrice: "€299",
    badge: "Best Seller",
    description: "Full-featured smart bottle for serious adventurers",
    image: "/images/bottle-lake.png",
    features: ["GPS Tracking", "LED Flashlight", "Water Analysis", "Self-Heating", "750ml Capacity"],
  },
  {
    id: "ultra",
    name: "CRESTA Ultra",
    price: "€349",
    description: "Maximum performance for extreme expeditions",
    image: "/images/bottle-snow.png",
    features: ["GPS Tracking", "LED Flashlight", "Water Analysis", "Self-Heating", "1L Capacity", "Solar Charging"],
  },
];

const accessories = [
  { name: "Wireless Charging Stand", price: "€89", image: "/images/accessory-charger.png" },
  { name: "Protective Sleeve", price: "€45", image: "/images/accessory-sleeve.png" },
  { name: "Bike Mount", price: "€129", image: "/images/accessory-bike-mount.png" },
  { name: "Carry Strap", price: "€39", image: "/images/accessory-strap.png" },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border px-6 py-4 md:px-12 lg:px-20">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Shop CRESTA
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Choose the perfect smart bottle for your adventures. All products include 
            free shipping and a 2-year warranty.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-medium text-foreground">Smart Bottles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card"
              >
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                    {product.badge}
                  </div>
                )}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-foreground">{product.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                  
                  <ul className="mt-4 space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-semibold text-foreground">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-80">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="bg-secondary/30 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-medium text-foreground">Accessories</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {accessories.map((acc) => (
              <div key={acc.name} className="group">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-background">
                  <Image
                    src={acc.image}
                    alt={acc.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-sm font-medium text-foreground">{acc.name}</h3>
                <p className="text-sm text-muted-foreground">{acc.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="h-5 w-5 text-green-500" />
            Free Shipping 24-48h
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="h-5 w-5 text-green-500" />
            2-Year Warranty
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="h-5 w-5 text-green-500" />
            30-Day Returns
          </div>
        </div>
      </section>
    </main>
  );
}
