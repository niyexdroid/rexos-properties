import TestimonialCard from "./TestimonialCard";

// Nigeria-focused testimonial images & localized sample clients (Unsplash images with face crop)
// Images chosen to reflect diverse Nigerian professionals; alt text provided via name prop.
const testimonials = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format",
    name: "Adaeze Okafor",
    title: "Seamless purchase process from start to finish.",
    text: "Rexos guided me through every step, making my first property investment in Lekki completely stress‑free.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face&auto=format",
    name: "Tunde Balogun",
    title: "Transparent team I can trust.",
    text: "Their clarity on documents and timelines gave me confidence. I recommend them to any serious buyer.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face&auto=format",
    name: "Kemi Adebayo",
    title: "Professional, prompt and reliable.",
    text: "Customer service was responsive and polite. The viewing and closing experience exceeded expectations.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1544717305-996b815c338c?w=150&h=150&fit=crop&crop=face&auto=format",
    name: "Chinedu Mbanefo",
    title: "Great portfolio of quality listings.",
    text: "I explored multiple developments through Rexos and each met the promised standards. Strongly recommended.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 testimonial-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What Our Clients Say&apos;s
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-400">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-b border-r border-gray-400">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
