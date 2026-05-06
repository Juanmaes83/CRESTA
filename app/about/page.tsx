"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mountain, Users, Award, Globe } from "lucide-react";

const stats = [
  { icon: Mountain, value: "12,500+", label: "Routes Mapped" },
  { icon: Users, value: "3,247", label: "Active Adventurers" },
  { icon: Award, value: "5", label: "Design Awards" },
  { icon: Globe, value: "34", label: "Countries" },
];

const team = [
  { name: "Marco Torres", role: "Founder & CEO", image: "/images/bottle-mountain.png" },
  { name: "Elena Vega", role: "Head of Design", image: "/images/bottle-lake.png" },
  { name: "David Chen", role: "Lead Engineer", image: "/images/bottle-snow.png" },
];

export default function AboutPage() {
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
      <section className="px-6 py-20 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            CRESTA was born from a simple idea: adventure gear should be as smart as it is rugged. 
            We combine Swiss engineering precision with cutting-edge technology to create 
            the world&apos;s most advanced outdoor bottle.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-secondary/30 px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-medium text-foreground">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                We believe every adventurer deserves access to clean water, reliable navigation, 
                and the peace of mind that comes with intelligent gear. CRESTA is more than a bottle 
                — it&apos;s a trusted companion for those who push beyond boundaries.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our team of engineers, designers, and outdoor enthusiasts work tirelessly to 
                innovate and improve. Every feature is tested in real conditions, from alpine peaks 
                to desert trails.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/product-forest.png"
                alt="CRESTA product"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto h-8 w-8 text-foreground" />
                <p className="mt-4 text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/30 px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-medium text-foreground">Our Team</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto aspect-square w-32 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-medium text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-foreground">Join the Adventure</h2>
          <p className="mt-4 text-muted-foreground">
            Ready to experience the future of outdoor gear?
          </p>
          <Link
            href="/#packs"
            className="mt-8 inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background hover:opacity-80"
          >
            Shop CRESTA
          </Link>
        </div>
      </section>
    </main>
  );
}
