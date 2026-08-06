import { useState } from "react";
import CategorySidebar from "../../components/marketplace/CategorySidebar";
import ServiceGrid from "../../components/marketplace/ServiceGrid";
import Experience from "../../components/marketplace/Experience";
import { useBookingStore } from "../../store/useBookingStore";
import { useNavigate } from "react-router";
function BookingMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState("Hair");
  const navigate = useNavigate();
  const {
    experience,
    toggleService,
    increaseQuantity,
    decreaseQuantity,
    removeService,
  } = useBookingStore();

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="border-b border-neutral-800 px-10 py-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/customer/dashboard")}
            className="px-4 py-2 text-sm rounded-lg border border-neutral-700 hover:border-[#c19b6c] hover:text-[#c19b6c] transition-all duration-300"
          >
            ← Back
          </button>
          <h1 className="text-4xl font-bold">Discover</h1>
        </div>

        <p className="text-neutral-400 mt-2">
          Find the perfect services for your next experience.
        </p>
      </div>

      <div className="flex h-[calc(100vh-105px)]">
        <CategorySidebar
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <main className="flex-1 overflow-y-auto">
          <ServiceGrid
            category={selectedCategory}
            experience={experience}
            onToggle={toggleService}
          />
        </main>

        <Experience
          services={experience}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeService}
        />
      </div>
    </div>
  );
}

export default BookingMarketplace;
