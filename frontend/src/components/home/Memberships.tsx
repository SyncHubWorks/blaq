function Memberships() {
  const plans = [
    {
      name: "Explorer",
      price: "Free",
      description: "Perfect for discovering creatives and services.",
      features: [
        "Browse Creatives",
        "Save Favorites",
        "AI Assistant",
        "Basic Bookings",
      ],
      button: "Get Started",
      featured: false,
    },
    {
      name: "Professional",
      price: "R299 / month",
      description: "Everything you need to grow your business.",
      features: [
        "Unlimited Bookings",
        "Priority Support",
        "Workspace Discounts",
        "Exclusive Events",
        "Business Analytics",
      ],
      button: "Join Today",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Designed for companies and large teams.",
      features: [
        "Multiple Users",
        "Corporate Workspaces",
        "Dedicated Support",
        "Custom Solutions",
      ],
      button: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center">
          <span className="uppercase tracking-[0.35em] text-[#c19b6c] text-xs">
            04
          </span>

          <h2 className="mt-6 text-5xl font-bold">MEMBERSHIPS</h2>

          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
            Choose the membership that fits your creative journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-10 transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-[#c19b6c] bg-[#111111]"
                  : "border-neutral-800 bg-neutral-950"
              }`}
            >
              {plan.featured && (
                <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#c19b6c] text-black uppercase tracking-widest text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold">{plan.name}</h3>

              <div className="mt-6 text-4xl font-bold text-[#c19b6c]">
                {plan.price}
              </div>

              <p className="mt-6 text-neutral-400">{plan.description}</p>

              <div className="space-y-4 mt-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span className="text-[#c19b6c]">✓</span>

                    {feature}
                  </div>
                ))}
              </div>

              <button
                className={`w-full mt-12 py-4 rounded-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${
                  plan.featured
                    ? "bg-[#c19b6c] text-black hover:bg-white"
                    : "border border-neutral-700 hover:border-[#c19b6c]"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Memberships;
