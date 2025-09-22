interface StatCardProps {
  value: string;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-primary">
      <p className="text-4xl font-bold text-primary mb-2">{value}</p>
      <p className="font-semibold text-primary">{title}</p>
      <p className="text-primary opacity-70 text-sm mt-1">{description}</p>
    </div>
  );
};

const stats = [
  {
    value: "3",
    title: "Premium Properties",
    description: "Handpicked for quality and potential",
  },
  {
    value: "100%",
    title: "Customer Satisfaction",
    description: "Every client becomes our advocate",
  },
  {
    value: "$2.5M",
    title: "Portfolio Value",
    description: "Strategic investments in prime locations",
  },
  {
    value: "24/7",
    title: "Personal Support",
    description: "Always here when you need us",
  },
  {
    value: "2019",
    title: "Founded",
    description: "Built by real estate veterans",
  },
  {
    value: "95%",
    title: "Above Market Value",
    description: "Consistently exceeding expectations",
  },
  {
    value: "30+",
    title: "Years Experience",
    description: "Combined team expertise",
  },
];

const ImpactSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Our Impact by the Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
