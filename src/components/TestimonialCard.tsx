import Image from "next/image";

interface TestimonialCardProps {
  imageUrl: string;
  name: string;
  title: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageUrl,
  name,
  title,
  text,
}) => {
  return (
    <div className="p-8">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-4">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <span className="font-semibold text-white">{name}</span>
      </div>
      <h4 className="font-bold text-lg text-white mb-2">{title}</h4>
      <p className="text-gray-400">{text}</p>
    </div>
  );
};

export default TestimonialCard;
