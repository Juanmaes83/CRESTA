import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
      <article className="px-6 py-20 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 2026</p>

          <div className="mt-12 space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-medium text-foreground">1. Agreement to Terms</h2>
              <p className="mt-4">
                By accessing or using CRESTA products and services, you agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">2. Product Use</h2>
              <p className="mt-4">
                CRESTA smart bottles are designed for outdoor adventure use. While our water analysis 
                technology provides valuable information, it should not be the sole factor in determining 
                water safety. Always use common sense and, when in doubt, purify water before consumption.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">3. GPS and Navigation</h2>
              <p className="mt-4">
                The GPS functionality in CRESTA products is intended as a supplementary navigation aid. 
                Always carry appropriate maps, compass, and backup navigation tools when venturing into 
                remote areas. CRESTA is not responsible for navigation errors or their consequences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">4. Warranty</h2>
              <p className="mt-4">
                All CRESTA products come with a 2-year limited warranty covering manufacturing defects 
                and component failures under normal use. This warranty does not cover damage from misuse, 
                accidents, or unauthorized modifications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">5. Limitation of Liability</h2>
              <p className="mt-4">
                CRESTA shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages arising from your use of our products or services. Our total liability 
                shall not exceed the purchase price of the product.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">6. Intellectual Property</h2>
              <p className="mt-4">
                All content, trademarks, and technology associated with CRESTA are protected by 
                intellectual property laws. UV-C LED technology is patented (US 11,345,678 B2). 
                Unauthorized use is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">7. Governing Law</h2>
              <p className="mt-4">
                These terms shall be governed by the laws of Spain. Any disputes shall be resolved 
                in the courts of Barcelona, Spain.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
