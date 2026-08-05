type Step = "discover" | "checkout" | "review" | "payment";

type Props = {
  current: Step;
};

const steps = [
  {
    id: "discover",
    label: "Discover",
  },
  {
    id: "checkout",
    label: "Checkout",
  },
  {
    id: "review",
    label: "Review",
  },
  {
    id: "payment",
    label: "Payment",
  },
];

function JourneyProgress({ current }: Props) {
  const currentIndex = steps.findIndex((step) => step.id === current);

  return (
    <div className="border-b border-neutral-800 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => {
            const active = index === currentIndex;

            const completed = index < currentIndex;

            return (
              <div key={step.id} className="flex items-center">
                {/* Circle */}

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    active
                      ? "bg-[#c19b6c] text-black"
                      : completed
                        ? "bg-green-600 text-white"
                        : "bg-neutral-800 text-neutral-500"
                  }`}
                >
                  {completed ? "✓" : index + 1}
                </div>

                {/* Label */}

                <div className="ml-3 mr-6">
                  <p
                    className={`font-semibold ${
                      active
                        ? "text-[#c19b6c]"
                        : completed
                          ? "text-white"
                          : "text-neutral-500"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>

                {/* Line */}

                {index !== steps.length - 1 && (
                  <div
                    className={`w-20 h-[2px] mr-6 ${
                      completed ? "bg-green-600" : "bg-neutral-700"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default JourneyProgress;
