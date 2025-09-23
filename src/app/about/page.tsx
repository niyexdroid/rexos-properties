import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImpactSection from "@/components/ImpactSection";
import ComfortPriority from "@/components/ComfortPriority";
import Testimonials from "@/components/Testimonials";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2019 by industry veterans, Rexos Properties has established itself as a premier real estate development company in Lagos.",
};

const AboutPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Header />
      <main className="pt-24 pb-16 about-background text-white relative">
        <div className="absolute inset-0 bg-[#1A3763] opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs className="mb-4" />
          <div className="max-w-4xl mx-auto">
            <span className="bg-gray-600/50 text-white px-4 py-1 rounded-full text-sm">
              About us
            </span>
            <h1 className="text-5xl font-bold my-6">
              Building Dreams Since 2019
            </h1>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Founded in 2019 by industry veterans with decades of combined
                experience, Rexo&apos;s Properties has quickly established
                itself as a premier real estate development company. We
                don&apos;t just build properties – we craft communities and
                create lasting value for our clients.
              </p>
              <p>
                Our philosophy centers on strategic property selection over
                quantity. Every development in our portfolio is carefully chosen
                for its premium location, growth potential, and ability to
                exceed market standards. We believe that true luxury lies in the
                details, and our commitment to uncompromising quality standards
                sets us apart in the industry.
              </p>
              <p>
                Since our founding, we&apos;ve successfully delivered 5 premium
                properties, maintaining a 100% customer satisfaction rate while
                consistently achieving property values 98% above market average.
                Our dedicated team combines decades of expertise with innovative
                approaches to modern living.
              </p>
            </div>
          </div>
        </div>
      </main>
      <ImpactSection />
      <ComfortPriority />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default AboutPage;
