"use client";

import { ShoppingBag } from "lucide-react";

interface FloatingBuyButtonProps {
  lang?: "es" | "en";
}

export function FloatingBuyButton({ lang = "es" }: FloatingBuyButtonProps) {
  const handleClick = () => {
    document.getElementById("packs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-lg transition-all hover:scale-105 hover:shadow-xl"
    >
      <ShoppingBag className="h-4 w-4" />
      {lang === "es" ? "Comprar botella" : "Buy bottle"}
    </button>
  );
}
