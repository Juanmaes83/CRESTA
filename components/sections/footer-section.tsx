"use client";

import Link from "next/link";
import { Truck, Shield, RotateCcw, Award, FileCheck, ShieldCheck } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "Products", href: "/#products" },
    { label: "Technology", href: "/#technology" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Accessories", href: "/#accessories" },
    { label: "Shop", href: "/shop" },
  ],
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  service: [
    { label: "FAQ", href: "/#faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Warranty", href: "/warranty" },
  ],
};

const guarantees = [
  { icon: Truck, text: "Free Shipping 24-48h" },
  { icon: Shield, text: "2-Year Warranty" },
  { icon: RotateCcw, text: "30-Day Returns" },
];

const certifications = [
  { icon: Award, text: "Swiss Water Tech Certified" },
  { icon: FileCheck, text: "ISO 17025:2025" },
  { icon: ShieldCheck, text: "CE / RoHS / FCC" },
];

export function FooterSection() {
  return (
    <footer className="bg-background">
      {/* Guarantees Bar */}
      <div className="border-t border-border bg-secondary/30 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {guarantees.map((guarantee) => (
            <div key={guarantee.text} className="flex items-center gap-2 text-sm text-foreground">
              <guarantee.icon className="h-5 w-5" />
              <span>{guarantee.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="text-lg font-medium text-foreground">
              CRESTA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium smart bottles engineered for adventure. GPS tracking, LED flashlight, water analysis, and self-heating technology.
            </p>
            
            {/* Certifications */}
            <div className="mt-6 flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <div 
                  key={cert.text} 
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5"
                >
                  <cert.icon className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{cert.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Service</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 CRESTA. All rights reserved. | IDEA BY RUBIK SOTA 629554870
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Twitter
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
