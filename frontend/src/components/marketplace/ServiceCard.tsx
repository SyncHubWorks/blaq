import toast from "react-hot-toast";
import { Check, Plus } from "lucide-react";

type Service = {
  id: number;
  name: string;
  image: string;
  duration: string;
  price: number;
  rating: number;
};

type Props = {
  service: Service;
  added: boolean;
  onToggle: (service: Service) => void;
};

function ServiceCard({ service, added, onToggle }: Props) {
  const handleClick = () => {
    onToggle(service);

    if (added) {
      toast(`🗑 ${service.name} removed from your experience.`);
    } else {
      toast.success(`✨ ${service.name} added to your experience.`);
    }
  };

  return (
    <div className="group bg-[#111] border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#c19b6c] hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[#c19b6c]/20">
      {/* Image */}

      <div className="h-56 overflow-hidden bg-neutral-900">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}

      <div className="p-6">
        <h3 className="text-2xl font-bold">{service.name}</h3>

        <div className="flex justify-between items-center mt-4">
          <span className="text-yellow-400 font-medium">
            ⭐ {service.rating}
          </span>

          <span className="text-neutral-400">{service.duration}</span>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-sm text-neutral-500">From</p>

            <h2 className="text-2xl font-bold text-[#c19b6c]">
              R{service.price}
            </h2>
          </div>

          <button
            onClick={handleClick}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all duration-300 ${
              added
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-[#c19b6c] hover:bg-white text-black"
            }`}
          >
            {added ? (
              <>
                <Check size={18} />
                Added
              </>
            ) : (
              <>
                <Plus size={18} />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
