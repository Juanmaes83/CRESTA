import Link from "next/link";
import { ArrowLeft, Shield, Check, AlertTriangle } from "lucide-react";

export default function WarrantyPage() {
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
              <Shield className="h-8 w-8 text-foreground" />
            </div>
            <h1 className="mt-6 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              2-Year Warranty
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Every CRESTA product is backed by our comprehensive 2-year warranty, 
              because quality adventure gear should last.
            </p>
          </div>

          {/* Coverage */}
          <div className="mt-16 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-xl font-medium text-foreground">What&apos;s Covered</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <span className="font-medium text-foreground">Manufacturing Defects</span>
                  <p className="text-sm text-muted-foreground">
                    Any defects in materials or workmanship under normal use
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <span className="font-medium text-foreground">Electronic Components</span>
                  <p className="text-sm text-muted-foreground">
                    GPS module, LED flashlight, sensors, and heating element
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <span className="font-medium text-foreground">Battery Performance</span>
                  <p className="text-sm text-muted-foreground">
                    Battery maintaining at least 80% capacity under normal use
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <span className="font-medium text-foreground">Water Analysis Sensors</span>
                  <p className="text-sm text-muted-foreground">
                    Conductivity, turbidity, and pH sensors functioning within specifications
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <span className="font-medium text-foreground">Thermal Insulation</span>
                  <p className="text-sm text-muted-foreground">
                    Double-wall vacuum insulation maintaining temperature performance
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Not Covered */}
          <div className="mt-8 rounded-2xl border border-border bg-card p-8">
            <h2 className="flex items-center gap-2 text-xl font-medium text-foreground">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              What&apos;s Not Covered
            </h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li>Damage from drops, impacts, or accidents</li>
              <li>Cosmetic damage (scratches, dents) that doesn&apos;t affect functionality</li>
              <li>Damage from improper use or failure to follow care instructions</li>
              <li>Unauthorized modifications or repairs</li>
              <li>Normal wear and tear</li>
              <li>Damage from exposure to extreme conditions beyond product specifications</li>
            </ul>
          </div>

          {/* How to Claim */}
          <div className="mt-16">
            <h2 className="text-2xl font-medium text-foreground">How to Make a Warranty Claim</h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Document the Issue</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Take photos or videos showing the defect or malfunction.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Contact Support</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Email warranty@cresta.com with your order number, proof of purchase, and documentation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Evaluation</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Our team will review your claim within 2 business days and provide next steps.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Resolution</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Approved claims will receive a repair, replacement, or refund at our discretion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Extended Warranty */}
          <div className="mt-16 rounded-2xl bg-secondary/30 p-8 text-center">
            <h2 className="text-xl font-medium text-foreground">Extended Warranty</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Want extra peace of mind? Extend your warranty to 5 years for just €49. 
              Contact us within 30 days of purchase to add extended coverage.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background hover:opacity-80"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
