import { useState } from "react";
import CategorySidebar from "../../components/marketplace/CategorySidebar";
import ServiceGrid from "../../components/marketplace/ServiceGrid";
import Experience from "../../components/marketplace/Experience";
import { useBookingStore } from "../../store/useBookingStore";

function BookingMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState("Hair");

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
        <h1 className="text-4xl font-bold">Discover</h1>

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
