import type { Metadata } from "next";
import ComfortPriority from "@/components/ComfortPriority";
import ExploreProperties from "@/components/ExploreProperties";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TourSection from "@/components/TourSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Rexos Properties - Experience unparalleled luxury living in Lagos with our premium real estate developments.",
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ExploreProperties />
      <ComfortPriority />
      <TourSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
