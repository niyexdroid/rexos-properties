"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";

const ScheduleTourPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    chooseEstate: "",
    inspectionDate: "",
    inspectionTime: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs className="mb-6" />
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-6">
              Schedule Tour
            </h1>
            <p className="text-primary opacity-80 text-lg max-w-2xl mx-auto">
              Kindly fill the form and specify your preferred date and time. Our
              sales team will be in contact with you shortly.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Row - Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-primary font-medium mb-2"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-primary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-primary font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Example@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-primary"
                    required
                  />
                </div>
              </div>

              {/* Second Row - Phone Number and Choose Estate */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-primary font-medium mb-2"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+234"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-primary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="chooseEstate"
                    className="block text-primary font-medium mb-2"
                  >
                    Choose Estate
                  </label>
                  <div className="relative">
                    <select
                      id="chooseEstate"
                      name="chooseEstate"
                      value={formData.chooseEstate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-primary bg-white appearance-none"
                      required
                    >
                      <option value="">Select an estate</option>
                      <option value="oral-estate">Oral Estate</option>
                      <option value="white-beach-estate">
                        White Beach Estate
                      </option>
                      <option value="royal-pine-estate">
                        Royal Pine Estate
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Row - Inspection Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="inspectionDate"
                    className="block text-primary font-medium mb-2"
                  >
                    Inspection Date
                  </label>
                  <input
                    type="date"
                    id="inspectionDate"
                    name="inspectionDate"
                    value={formData.inspectionDate}
                    onChange={handleInputChange}
                    placeholder="Enter occupation"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-primary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="inspectionTime"
                    className="block text-primary font-medium mb-2"
                  >
                    Inspection Time
                  </label>
                  <input
                    type="time"
                    id="inspectionTime"
                    name="inspectionTime"
                    value={formData.inspectionTime}
                    onChange={handleInputChange}
                    placeholder="Enter occupation"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-primary"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleTourPage;
