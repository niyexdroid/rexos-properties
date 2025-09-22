import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { getAllProperties } from "@/data/properties";
import Breadcrumbs from "@/components/Breadcrumbs";

const PropertiesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs className="mb-4" />
            {/* Desktop Layout */}
            <div className="hidden md:block">
              {/* Top Row - Location and Filters */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-primary">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Lekki, Lagos
                  </div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-2 text-primary border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                      </svg>
                      <span>Filter</span>
                      <span className="bg-primary text-white text-xs px-1.5 py-0.5 rounded-full">
                        3
                      </span>
                    </button>
                    <button className="flex items-center space-x-2 text-primary border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
                      <span>Sorted</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Full Width Search Bar */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search Rexos properties"
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-primary placeholder-gray-400"
                />
                <button
                  title="Search properties"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              {/* Mobile Search Bar with Location */}
              <div className="bg-white rounded-lg shadow-sm p-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center text-primary bg-gray-100 px-3 py-2 rounded-md">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">Lekki, Lagos</span>
                    <button className="ml-2" title="Remove location filter">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Search Rexo..."
                      className="w-full pl-3 pr-10 py-2 text-gray-600 placeholder-gray-400 focus:outline-none"
                    />
                    <button
                      title="Search properties"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Type Pills - Both Desktop and Mobile */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                All
              </button>
              <button className="border border-gray-300 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50">
                Buy
              </button>
              <button className="border border-gray-300 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50">
                Rent
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First Row */}
            {getAllProperties().map((p) => (
              <div
                key={p.slug}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <PropertyCard
                  imageUrl={p.heroImage}
                  name={p.name}
                  location={p.location}
                  href={`/properties/${p.slug}`}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertiesPage;
