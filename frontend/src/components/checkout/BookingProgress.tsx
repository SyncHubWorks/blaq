function BookingProgress() {
  const steps = ["Discover", "Checkout", "Payment", "Complete"];

  const currentStep = 1;

  return (
    <div className="border-b border-neutral-800 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  index === currentStep
                    ? "bg-[#c19b6c] text-black"
                    : "bg-neutral-900 text-neutral-500"
                }`}
              >
                {step}
              </div>

              {index < steps.length - 1 && (
                <div className="w-14 h-[2px] bg-neutral-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookingProgress;
