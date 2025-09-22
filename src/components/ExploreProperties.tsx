import PropertyCard from "./PropertyCard";
import Link from "next/link";
import { getAllProperties } from "@/data/properties";

const ExploreProperties = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Explore Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {getAllProperties()
            .slice(0, 3)
            .map((p) => (
              <PropertyCard
                key={p.slug}
                imageUrl={p.heroImage}
                name={p.name}
                location={p.location}
                href={`/properties/${p.slug}`}
              />
            ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/properties"
            className="bg-transparent border border-primary text-primary py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-300 inline-block"
          >
            Explore all our properties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreProperties;
