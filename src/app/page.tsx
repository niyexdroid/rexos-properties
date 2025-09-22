import ComfortPriority from "@/components/ComfortPriority";
import ExploreProperties from "@/components/ExploreProperties";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TourSection from "@/components/TourSection";

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
