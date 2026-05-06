"use client";

import { useState } from "react";
import { LanguageProvider, useLanguage } from "@/lib/language-context";
import { Header } from "@/components/header";
import { HeroVideoSection } from "@/components/sections/hero-video-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
// New Feature Sections
import { WaterAnalysisSection } from "@/components/sections/water-analysis-section";
import { OfflineSection } from "@/components/sections/offline-section";
import { ConnectivitySection } from "@/components/sections/connectivity-section";
import { TrustStatsSection } from "@/components/sections/trust-stats-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
// Community Sections
import { CommunitySection } from "@/components/sections/community-section";
import { RoutesMapSection } from "@/components/sections/routes-map-section";
import { EventsSection } from "@/components/sections/events-section";
import { CommunityTestimonialsSection } from "@/components/sections/community-testimonials-section";
import { ResourcesSection } from "@/components/sections/resources-section";
import { PacksSection } from "@/components/sections/packs-section";
import { FaqSection } from "@/components/sections/faq-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { FooterSection } from "@/components/sections/footer-section";
import { FloatingBuyButton } from "@/components/floating-buy-button";
import { EmailModal } from "@/components/email-modal";

function HomeContent() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Video Section - Full screen video intro */}
      <HeroVideoSection />
      
      {/* Original Sections */}
      <HeroSection />
      <PhilosophySection />
      <FeaturedProductsSection />
      <TechnologySection />
      <GallerySection />
      <CollectionSection />
      <EditorialSection />
      <TestimonialsSection />
      
      {/* NEW FEATURE SECTIONS - After specifications, before community */}
      <WaterAnalysisSection />
      <OfflineSection />
      <ConnectivitySection />
      <TrustStatsSection />
      <CertificationsSection />
      
      {/* Community Sections */}
      <CommunitySection lang={lang} onOpenEmailModal={() => setIsEmailModalOpen(true)} />
      <RoutesMapSection lang={lang} />
      <EventsSection lang={lang} />
      <CommunityTestimonialsSection lang={lang} />
      <ResourcesSection lang={lang} onOpenEmailModal={() => setIsEmailModalOpen(true)} />
      <PacksSection lang={lang} />
      <FaqSection lang={lang} />
      <NewsletterSection lang={lang} />
      <SocialProofSection lang={lang} />
      
      <FooterSection />
      
      {/* Floating Elements */}
      <FloatingBuyButton lang={lang} />
      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
        lang={lang} 
      />
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
