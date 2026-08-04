function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=2000&q=80"
          alt="BLAQ"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.4em] text-[#c19b6c] text-sm mb-6">
            Beauty • Lifestyle • Art • Commerce
          </p>

          <h1 className="text-6xl lg:text-8xl font-bold leading-tight text-white">
            Your Space.
            <br />
            Your Business.
            <br />
            Your Future.
          </h1>

          <p className="mt-8 text-neutral-300 text-xl max-w-xl">
            Discover talented creatives, premium spaces and endless
            opportunities.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">
            <button className="bg-[#c19b6c] hover:bg-white transition-all duration-300 text-black px-8 py-4 uppercase tracking-[0.2em] font-semibold">
              Explore Services
            </button>

            <button className="border border-white hover:border-[#c19b6c] hover:text-[#c19b6c] transition-all duration-300 text-white px-8 py-4 uppercase tracking-[0.2em]">
              Join BLAQ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
