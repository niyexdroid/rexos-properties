import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  imageUrl: string;
  name: string;
  location: string;
  href?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  name,
  location,
  href,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-primary transition-transform duration-300 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4">
        {href ? (
          <Link href={href} className="block">
            <h3 className="font-bold text-lg text-primary hover:underline">
              {name}
            </h3>
          </Link>
        ) : (
          <h3 className="font-bold text-lg text-primary">{name}</h3>
        )}
        <div className="flex items-center text-primary opacity-80">
          <svg
            className="w-4 h-4 mr-1 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{location}</span>
        </div>
        <div className="mt-2">
          <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded-full">
            New house
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
