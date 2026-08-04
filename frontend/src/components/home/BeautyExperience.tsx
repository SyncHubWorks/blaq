function BeautyExperience() {
  const services = [
    "Hair",
    "Nails",
    "Barber",
    "Makeup",
    "Massage",
    "Photography",
    "Fashion",
    "Content Creation",
  ];

  return (
    <section className="bg-[#050505] text-white py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950">
          <div className="grid lg:grid-cols-2">
            {/* LEFT */}

            <div className="p-14">
              <span className="text-[#c19b6c] uppercase tracking-[0.35em] text-xs">
                01
              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight">
                BOOK A
                <br />
                BEAUTY
                <br />
                EXPERIENCE
              </h2>

              <p className="mt-8 text-neutral-400 leading-8">
                Discover South Africa's finest beauty professionals, wellness
                experts and creative talent, all in one place.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-12">
                {services.map((service) => (
                  <div
                    key={service}
                    className="border border-neutral-800 rounded-xl px-5 py-4 hover:border-[#c19b6c] hover:bg-[#c19b6c]/10 transition-all duration-300 cursor-pointer"
                  >
                    {service}
                  </div>
                ))}
              </div>

              <button className="mt-12 bg-[#c19b6c] hover:bg-white transition-all duration-300 text-black px-8 py-4 uppercase tracking-[0.2em] font-semibold rounded-sm">
                Explore Services
              </button>
            </div>

            {/* RIGHT */}

            <div className="min-h-[650px]">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
                alt="Beauty Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeautyExperience;
