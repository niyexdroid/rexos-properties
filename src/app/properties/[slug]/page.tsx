import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getAllProperties, getPropertyBySlug } from "@/data/properties";
import Breadcrumbs from "@/components/Breadcrumbs";
import PropertyGallery from "@/components/PropertyGallery";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllProperties().map((p) => ({ slug: p.slug }));
}

export default function PropertyDetailPage({ params }: Props) {
  const property = getPropertyBySlug(params.slug);
  if (!property) {
    return (
      <div className="min-h-screen bg-white text-primary">
        <Header />
        <main className="container mx-auto px-4 pt-28 pb-16">
          <h1 className="text-2xl font-bold">Property not found</h1>
          <p className="mt-2">
            The property you are looking for does not exist.
          </p>
          <Link className="underline mt-4 inline-block" href="/properties">
            Back to properties
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-primary">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs className="mb-4" />
        </div>
        {/* Hero */}
        <section className="relative h-[320px] md:h-[420px] bg-gray-200">
          <Image
            src={property.heroImage}
            alt={property.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto h-full px-4 flex items-end pb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                {property.name}
              </h1>
              <div className="mt-2 flex items-center text-white/90">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{property.location}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Gallery + Description */}
            <div className="lg:col-span-8">
              {/* Gallery with modal */}
              <PropertyGallery name={property.name} images={property.images} />

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-3">
                  About this property
                </h2>
                <p className="leading-7 text-[15px] text-primary/90">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {property.amenities.map((a) => (
                    <li key={a} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.836a1 1 0 111.414-1.414l3.222 3.222 6.657-6.657a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              {property.mapQuery && (
                <div className="mt-10">
                  <h3 className="text-lg font-semibold mb-3">Location</h3>
                  <div className="rounded-lg overflow-hidden border">
                    <iframe
                      title={`Map of ${property.name}`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        property.mapQuery
                      )}&output=embed`}
                      className="w-full h-[360px] border-0"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right: Actions / Contact */}
            <aside className="lg:col-span-4">
              <div className="border rounded-lg p-5 shadow-sm">
                <h4 className="font-semibold mb-2">
                  Interested in this property?
                </h4>
                <p className="text-sm text-primary/80 mb-4">
                  Schedule a tour or contact us for more information.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/schedule-tour"
                    className="block text-center bg-primary text-white py-2 rounded-md hover:opacity-90"
                  >
                    Schedule a Tour
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-center border border-primary text-primary py-2 rounded-md hover:bg-primary hover:text-white"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
