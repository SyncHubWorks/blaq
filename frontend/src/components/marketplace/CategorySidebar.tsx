import {
  Scissors,
  Sparkles,
  Hand,
  Camera,
  Building2,
  Shirt,
  Gift,
  BadgePercent,
} from "lucide-react";

type Props = {
  selected: string;
  onSelect: (category: string) => void;
};

const categories = [
  {
    name: "Hair",
    icon: Scissors,
  },
  {
    name: "Beauty",
    icon: Sparkles,
  },
  {
    name: "Massage",
    icon: Hand,
  },
  {
    name: "Photography",
    icon: Camera,
  },
  {
    name: "Creative Spaces",
    icon: Building2,
  },
  {
    name: "Fashion",
    icon: Shirt,
  },
];

function CategorySidebar({ selected, onSelect }: Props) {
  return (
    <aside className="w-72 bg-[#090909] border-r border-neutral-800 flex flex-col">
      {/* Header */}

      <div className="p-6 border-b border-neutral-800">
        <h2 className="text-xl font-bold text-white">Categories</h2>

        <p className="text-sm text-neutral-400 mt-1">Browse by category</p>
      </div>

      {/* Categories */}

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                onClick={() => onSelect(category.name)}
                className={`w-full flex items-center gap-4 rounded-xl p-4 transition-all duration-300 ${
                  selected === category.name
                    ? "bg-[#c19b6c] text-black shadow-lg"
                    : "text-white hover:bg-neutral-900"
                }`}
              >
                <Icon size={24} />

                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* BLAQ Exclusives */}

        <div className="mt-10 border-t border-neutral-800 pt-6">
          <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-5">
            BLAQ Exclusives
          </h3>

          <div className="space-y-3">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 opacity-70 cursor-not-allowed">
              <div className="flex items-center gap-3">
                <Gift size={22} className="text-[#c19b6c]" />

                <div>
                  <h4 className="font-semibold text-white">Packages</h4>

                  <p className="text-xs text-neutral-500 mt-1">
                    Curated experiences launching soon
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 opacity-70 cursor-not-allowed">
              <div className="flex items-center gap-3">
                <BadgePercent size={22} className="text-[#c19b6c]" />

                <div>
                  <h4 className="font-semibold text-white">Promotions</h4>

                  <p className="text-xs text-neutral-500 mt-1">
                    Exclusive deals coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default CategorySidebar;
