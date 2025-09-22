import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImpactSection from "@/components/ImpactSection";
import ComfortPriority from "@/components/ComfortPriority";
import Testimonials from "@/components/Testimonials";
import Breadcrumbs from "@/components/Breadcrumbs";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Header />
      <main className="pt-24 pb-16 about-background text-white">
        <div className="absolute inset-0 bg-black opacity-60"></div>
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
      {/* Oral Estate About Section */}
      <section className="bg-white text-primary py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">About Oral Estate</h2>
          <div className="space-y-5 leading-7">
            <p>
              Step into modern luxury with this stunning 2-bedroom flat where
              every detail has been crafted for your ultimate comfort. Both
              spacious bedrooms are thoughtfully designed with contemporary
              finishes and excellent ventilation, creating the perfect retreat
              for rest and relaxation.
            </p>
            <p>
              Expertly designed with open-plan living areas, this home maximizes
              space and functionality, offering you the ideal setting to
              entertain guests or simply unwind after a busy day. Picture
              yourself enjoying peaceful evenings in your beautifully appointed
              living space or hosting intimate gatherings with friends and
              family.
            </p>
            <p>
              Strategically positioned at the prestigious Chevron Toll-Gate area
              of Lekki, you&apos;re at the gateway to Lagos&apos; most coveted
              residential corridor. Enjoy unparalleled connectivity with direct
              access to major expressways, proximity to multinational corporate
              offices, world-class shopping destinations, premium healthcare
              facilities, and top-tier educational institutions. Your daily
              commute becomes effortless whether you&apos;re heading to Victoria
              Island, Ikoyi, or the Lagos mainland.
            </p>
          </div>
        </div>
      </section>
      <ImpactSection />
      <ComfortPriority />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default AboutPage;
