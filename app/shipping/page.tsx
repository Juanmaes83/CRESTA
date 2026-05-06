import Link from "next/link";
import { ArrowLeft, Truck, Globe, Clock, Package } from "lucide-react";

const shippingOptions = [
  {
    icon: Truck,
    title: "Standard Shipping",
    description: "Free on all orders",
    time: "3-5 business days",
  },
  {
    icon: Clock,
    title: "Express Shipping",
    description: "€9.99",
    time: "1-2 business days",
  },
  {
    icon: Globe,
    title: "International",
    description: "€14.99",
    time: "5-10 business days",
  },
];

export default function ShippingPage() {
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
            <h1 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              Shipping Information
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              We ship worldwide with fast and reliable delivery options.
            </p>
          </div>

          {/* Shipping Options */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {shippingOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <option.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-4 font-medium text-foreground">{option.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{option.description}</p>
                <p className="mt-2 text-sm font-medium text-foreground">{option.time}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20 space-y-8">
            <h2 className="text-2xl font-medium text-foreground">Shipping FAQ</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-foreground">Where do you ship?</h3>
                <p className="mt-2 text-muted-foreground">
                  We ship to over 50 countries worldwide including all EU countries, USA, Canada, 
                  UK, Australia, Japan, and many more. Check at checkout for availability in your country.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground">How can I track my order?</h3>
                <p className="mt-2 text-muted-foreground">
                  Once your order ships, you will receive an email with a tracking number. You can use 
                  this to track your package on our website or the carrier&apos;s website.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground">Are there any customs fees?</h3>
                <p className="mt-2 text-muted-foreground">
                  For orders outside the EU, you may be subject to import duties and taxes. These are 
                  determined by your local customs authority and are the responsibility of the customer.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground">What if my package is lost or damaged?</h3>
                <p className="mt-2 text-muted-foreground">
                  All shipments are insured. If your package is lost or arrives damaged, please contact 
                  us within 48 hours and we will arrange a replacement or refund.
                </p>
              </div>
            </div>
          </div>

          {/* Packaging */}
          <div className="mt-20 rounded-2xl bg-secondary/30 p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-background">
                <Package className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Eco-Friendly Packaging</h3>
                <p className="mt-2 text-muted-foreground">
                  All CRESTA products are shipped in 100% recyclable packaging. We use minimal packaging 
                  materials and avoid single-use plastics. Our shipping boxes are made from recycled cardboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
