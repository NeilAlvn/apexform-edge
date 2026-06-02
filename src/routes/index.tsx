import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ImageStrip } from "@/components/site/ImageStrip";
import { Services } from "@/components/site/Services";
import { WhyApexform } from "@/components/site/WhyApexform";
import { HowItWorks } from "@/components/site/HowItWorks";
import { SocialProof } from "@/components/site/SocialProof";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { BookingModal } from "@/components/site/BookingModal";
import { ChatBot } from "@/components/site/ChatBot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "APEXFORM — Precision Longevity Medicine" },
      { name: "description", content: "Precision longevity protocols — bloodwork, hormones, peptides, and IV therapy — engineered for people who refuse to plateau." },
      { property: "og:title", content: "APEXFORM — Precision Longevity Medicine" },
      { property: "og:description", content: "Precision longevity protocols engineered for people who refuse to plateau." },
    ],
  }),
  component: Index,
});

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-background text-foreground">
      <Nav onBookCall={() => setIsModalOpen(true)} />
      <Hero onBookCall={() => setIsModalOpen(true)} />
      <ImageStrip />
      <Services />
      <WhyApexform />
      <HowItWorks />
      <SocialProof />
      <FinalCTA onBookCall={() => setIsModalOpen(true)} />
      <Footer />

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <ChatBot onBookCall={() => setIsModalOpen(true)} />
    </main>
  );
}
