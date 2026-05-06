import Link from "next/link";
import { ArrowLeft, RotateCcw, Check, X } from "lucide-react";

export default function ReturnsPage() {
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

      {/* Content */}
      <section className="px-6 py-20 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <RotateCcw className="h-8 w-8 text-foreground" />
            </div>
            <h1 className="mt-6 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              Returns & Refunds
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              We want you to be completely satisfied with your CRESTA purchase. 
              If you&apos;re not, we&apos;re here to help.
            </p>
          </div>

          {/* 30 Day Promise */}
          <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
            <h2 className="text-2xl font-medium text-foreground">30-Day Money-Back Guarantee</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Try CRESTA risk-free for 30 days. If you&apos;re not completely satisfied, 
              return it for a full refund. No questions asked.
            </p>
          </div>

          {/* What we accept */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 font-medium text-foreground">
                <Check className="h-5 w-5 text-green-500" />
                We Accept Returns For
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  Products in original condition with packaging
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  Items returned within 30 days of delivery
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  Defective or damaged products (within warranty)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  Wrong items received
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 font-medium text-foreground">
                <X className="h-5 w-5 text-red-500" />
                We Cannot Accept Returns For
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                  Products without original packaging
                </li>
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                  Items returned after 30 days
                </li>
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                  Products with signs of misuse or abuse
                </li>
                <li className="flex items-start gap-2">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                  Personalized or custom items
                </li>
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="mt-16">
            <h2 className="text-2xl font-medium text-foreground">How to Return</h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Contact Us</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Email returns@cresta.com with your order number and reason for return.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Receive Return Label</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We&apos;ll send you a prepaid return shipping label within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Ship Your Return</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pack the item securely in its original packaging and drop it off at any carrier location.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Get Your Refund</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Refunds are processed within 5 business days of receiving your return.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Questions about returns?{" "}
              <Link href="/contact" className="text-foreground underline hover:no-underline">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
