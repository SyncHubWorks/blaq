import { useState } from "react";
import {
  Scissors,
  Sparkles,
  HeartHandshake,
  Camera,
  Palette,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

function Step1Category() {
  const [selectedCategory, setSelectedCategory] = useState("");

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
      name: "Wellness",
      icon: HeartHandshake,
    },
    {
      name: "Photography",
      icon: Camera,
    },
    {
      name: "Creative",
      icon: Palette,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Progress */}

        <div className="mb-12">
          <p className="uppercase tracking-[0.3em] text-[#c19b6c] text-sm">
            Step 1 of 7
          </p>

          <div className="w-full bg-neutral-800 rounded-full h-2 mt-4">
            <div className="bg-[#c19b6c] h-2 rounded-full w-[14%]"></div>
          </div>
        </div>

        {/* Heading */}

        <h1 className="text-5xl font-bold">Choose a Category</h1>

        <p className="text-neutral-400 mt-4 text-lg">
          Select the type of experience you're looking for.
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-6 mt-14">
          {categories.map((category) => {
            const Icon = category.icon;

            const active = selectedCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  active
                    ? "border-[#c19b6c] bg-[#c19b6c]/10"
                    : "border-neutral-800 hover:border-[#c19b6c]"
                }`}
              >
                <Icon size={45} className="mx-auto text-[#c19b6c]" />

                <h3 className="mt-6 text-xl font-semibold">{category.name}</h3>
              </button>
            );
          })}
        </div>

        {/* Buttons */}

        <div className="flex justify-between mt-16">
          <button className="flex items-center gap-3 border border-neutral-700 px-8 py-3 rounded-lg hover:border-[#c19b6c]">
            <ArrowLeft />
            Back
          </button>

          <button
            disabled={!selectedCategory}
            className={`flex items-center gap-3 px-8 py-3 rounded-lg font-semibold transition-all ${
              selectedCategory
                ? "bg-[#c19b6c] text-black hover:bg-white"
                : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
            }`}
          >
            Next
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step1Category;
