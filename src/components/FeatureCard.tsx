interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 text-primary">
      <div className="flex items-center mb-4">
        <div className="bg-[#1A3763] p-3 rounded-md mr-4">{icon}</div>
      </div>
      <h3 className="font-bold text-lg text-primary mb-2">{title}</h3>
      <p className="text-primary opacity-80">{description}</p>
    </div>
  );
};

export default FeatureCard;
