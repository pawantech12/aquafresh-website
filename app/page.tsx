'use client';

import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import FeaturesSection from '@/components/features-section';
import ProductShowcase from '@/components/product-showcase';
import StatsSection from '@/components/stats-section';
import TestimonialsSection from '@/components/testimonials-section';
import NewsletterSection from '@/components/newsletter-section';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProductShowcase />
      <StatsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <CTASection />
      <Footer />
    </main>
  );
}