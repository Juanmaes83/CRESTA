import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 2026</p>

          <div className="mt-12 space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-medium text-foreground">1. Information We Collect</h2>
              <p className="mt-4">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, subscribe to our newsletter, or contact us for support. This may include 
                your name, email address, shipping address, payment information, and phone number.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">2. How We Use Your Information</h2>
              <p className="mt-4">
                We use the information we collect to process transactions, send you order confirmations, 
                respond to your comments and questions, send you marketing communications (with your consent), 
                and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">3. Data from CRESTA Devices</h2>
              <p className="mt-4">
                CRESTA smart bottles collect data including GPS coordinates, water quality measurements, 
                hydration tracking, and usage patterns. This data is stored locally on your device and 
                synced to your account when you connect to the CRESTA app. You have full control over 
                this data and can delete it at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">4. Data Sharing</h2>
              <p className="mt-4">
                We do not sell your personal information. We may share your information with service 
                providers who assist us in operating our website, conducting our business, or servicing 
                you. We may also share information when required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">5. Data Security</h2>
              <p className="mt-4">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">6. Your Rights</h2>
              <p className="mt-4">
                You have the right to access, correct, or delete your personal information. You can also 
                opt out of marketing communications at any time. To exercise these rights, please contact 
                us at privacy@cresta.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">7. Contact Us</h2>
              <p className="mt-4">
                If you have any questions about this Privacy Policy, please contact us at privacy@cresta.com 
                or write to us at CRESTA, Barcelona, Spain.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
