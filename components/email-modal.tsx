"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: "es" | "en";
}

export function EmailModal({ isOpen, onClose, lang = "es" }: EmailModalProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(lang === "es" 
        ? `¡Gracias! Te hemos enviado el recurso a ${email}` 
        : `Thanks! We've sent the resource to ${email}`);
      setEmail("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-md rounded-2xl border border-border bg-card p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="mb-2 text-xl font-medium text-foreground">
          {lang === "es" ? "Descarga tu recurso" : "Download your resource"}
        </h3>
        <p className="mb-6 text-sm text-muted-foreground">
          {lang === "es" 
            ? "Introduce tu email para recibir el enlace de descarga" 
            : "Enter your email to receive the download link"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={lang === "es" ? "Tu email" : "Your email"}
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-foreground py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            {lang === "es" ? "Enviar" : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
