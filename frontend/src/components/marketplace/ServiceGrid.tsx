import ServiceCard from "./ServiceCard";

type Service = {
  id: number;
  name: string;
  image: string;
  duration: string;
  price: number;
  rating: number;
};

type Props = {
  category: string;
  experience: Service[];
  onToggle: (service: Service) => void;
};

const services = {
  Hair: [
    {
      id: 1,
      name: "Haircut",
      image: "/images/services/haircut.jpg",
      duration: "30 mins",
      price: 250,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Braids",
      image: "/images/services/braids.jpg",
      duration: "2 Hours",
      price: 650,
      rating: 5.0,
    },
    {
      id: 3,
      name: "Hair Colour",
      image: "/images/services/colour.jpg",
      duration: "90 mins",
      price: 480,
      rating: 4.8,
    },
  ],

  Beauty: [
    {
      id: 4,
      name: "Makeup",
      image: "/images/services/makeup.jpg",
      duration: "60 mins",
      price: 450,
      rating: 4.9,
    },
  ],

  Massage: [],
  Photography: [],
  "Creative Spaces": [],
  Fashion: [],
};

function ServiceGrid({ category, experience, onToggle }: Props) {
  const currentServices = services[category as keyof typeof services] ?? [];

  if (currentServices.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-neutral-500 text-xl">
        Services coming soon...
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 p-8">
      {currentServices.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          added={experience.some((item) => item.id === service.id)}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default ServiceGrid;
