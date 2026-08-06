function BecomeOperator() {
  const opportunities = [
    "Rent a Salon",
    "Open a Barber Shop",
    "Launch a Beauty Brand",
    "Manage Creative Spaces",
  ];

  return (
    <section id="operator" className="bg-[#050505] text-white py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950">
          <div className="grid lg:grid-cols-2">
            {/* LEFT */}

            <div className="p-14">
              <span className="text-[#c19b6c] uppercase tracking-[0.35em] text-xs">
                03
              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight">
                BECOME A
                <br />
                BLAQ
                <br />
                OPERATOR
              </h2>

              <p className="mt-8 text-neutral-400 leading-8">
                Start your own beauty business, manage creative spaces, and grow
                your brand through the BLAQ ecosystem.
              </p>

              <div className="space-y-4 mt-12">
                {opportunities.map((item) => (
                  <div
                    key={item}
                    className="border border-neutral-800 rounded-xl px-6 py-5 hover:border-[#c19b6c] hover:bg-[#c19b6c]/10 transition-all"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <button className="mt-12 bg-[#c19b6c] hover:bg-white transition-all duration-300 text-black px-8 py-4 uppercase tracking-[0.2em] font-semibold rounded-sm">
                Become an Operator
              </button>
            </div>

            {/* RIGHT */}

            <div className="min-h-[650px]">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Become an Operator"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BecomeOperator;
