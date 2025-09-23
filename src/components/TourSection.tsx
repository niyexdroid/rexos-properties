import Image from "next/image";
import Link from "next/link";

const TourSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Let&apos;s Tour And See Our House
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Column 1 */}
          <div className="text-primary">
            <div className="relative overflow-hidden rounded-lg mb-6 tour-image-container">
              <Image
                src="/assets/houseimg-7.jpg"
                alt="House view 1"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="font-bold text-xl text-primary mb-3">
              Fill Out the Form
            </h3>
            <p className="text-primary opacity-80">
              At the beginning, we will ask you for some basic information. With
              these, we will check that our requirements for project
              implementation are met.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-primary md:mt-16">
            <div className="relative overflow-hidden rounded-lg mb-6 tour-image-container">
              <Image
                src="/assets/houseimg-8.jpg"
                alt="House view 2"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="font-bold text-xl text-primary mb-3">
              Let&apos;s Meet Together
            </h3>
            <p className="text-primary opacity-80">
              Meet us and see what you will receive in 99 days. During the
              meeting we will sign the contract and finalise the transaction.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-transparent border border-primary text-primary py-2 px-6 rounded-md hover:bg-primary hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourSection;
