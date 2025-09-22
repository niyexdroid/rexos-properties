import FeatureCard from "./FeatureCard";

// Comfort and Space Icon (Home/Building)
const ComfortIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 9.3V4h-3v2.6L12 3l-9 8h2v9h6v-6h2v6h6v-9h2l-2-1.7zM17 18h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
  </svg>
);

// Verified Platform Icon (Shield with checkmark)
const VerifiedIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
  </svg>
);

// Customer Support Icon (Headset)
const SupportIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12,1C7,1 3,5 3,10V17A3,3 0 0,0 6,20H9V12H5V10A7,7 0 0,1 12,3A7,7 0 0,1 19,10V12H15V20H18A3,3 0 0,0 21,17V10C21,5 17,1 12,1Z" />
  </svg>
);

// Best Platform Icon (Computer/Monitor)
const PlatformIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
  </svg>
);

// Guaranteed Service Icon (Award/Badge)
const GuaranteedIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5,16L3,5L8.5,12L12,4L15.5,12L21,5L19,16H5M19,19A1,1 0 0,1 18,20H6A1,1 0 0,1 5,19V18H19V19Z" />
  </svg>
);

// Best Market Price Icon (Dollar/Price tag)
const PriceIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17C9.24,17 7,14.76 7,12S9.24,7 12,7S17,9.24 17,12S14.76,17 12,17M12,8.5A3.5,3.5 0 0,0 8.5,12A3.5,3.5 0 0,0 12,15.5A3.5,3.5 0 0,0 15.5,12A3.5,3.5 0 0,0 12,8.5M12,13.5L10.5,12L12,10.5L13.5,12L12,13.5Z" />
  </svg>
);

const features = [
  {
    icon: <ComfortIcon />,
    title: "Comfort and Space",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    icon: <VerifiedIcon />,
    title: "Verified Platform",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    icon: <SupportIcon />,
    title: "Customer Support",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    icon: <PlatformIcon />,
    title: "Best Platform",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    icon: <GuaranteedIcon />,
    title: "Guaranteed Service",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    icon: <PriceIcon />,
    title: "Best Market Price",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
];

const ComfortPriority = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Your Comfort is Our Priority
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {features.map((feature, index) => (
            <div key={index} className="border-b border-r border-gray-200">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComfortPriority;
