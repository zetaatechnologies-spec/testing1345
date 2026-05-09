import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { Hero } from "@/components/site/Hero";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Packages } from "@/components/site/Packages";
import { PricingStrip } from "@/components/site/PricingStrip";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Reviews } from "@/components/site/Reviews";
import { TechnicianBand } from "@/components/site/TechnicianBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zetaa Technologies — Book Trusted Security Experts Near You" },
      {
        name: "description",
        content:
          "Book CCTV, intercom, biometric and smart-lock services with verified technicians. Same-day visits, 6-month warranty, transparent pricing from ₹499.",
      },
      { property: "og:title", content: "Zetaa Technologies — Book Trusted Security Experts Near You" },
      {
        property: "og:description",
        content: "Verified technicians. Same-day service. Transparent pricing from ₹499.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">
        <Hero />
        <CategoryGrid />
        <HowItWorks />
        <Packages />
        <TechnicianBand />
        <WhyChooseUs />
        <PricingStrip />
        <Reviews />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
