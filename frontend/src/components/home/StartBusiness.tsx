function StartBusiness() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background */}

      <img
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80"
        alt="Start Your Business"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">
        <div className="max-w-3xl">
          <span className="uppercase tracking-[0.35em] text-[#c19b6c] text-xs">
            08
          </span>

          <h2 className="mt-8 text-6xl lg:text-7xl font-bold leading-tight text-white">
            START
            <br />
            YOUR
            <br />
            BUSINESS.
          </h2>

          <p className="mt-10 text-xl text-neutral-300 leading-9">
            Whether you're a barber, photographer, makeup artist, nail
            technician, fashion designer or entrepreneur, BLAQ gives you the
            tools, community and opportunities to build something extraordinary.
          </p>

          <div className="flex gap-6 mt-14 flex-wrap">
            <button className="bg-[#c19b6c] hover:bg-white transition-all duration-300 text-black px-10 py-5 uppercase tracking-[0.25em] font-semibold rounded-sm">
              Start Today
            </button>

            <button className="border border-white hover:border-[#c19b6c] hover:text-[#c19b6c] transition-all duration-300 text-white px-10 py-5 uppercase tracking-[0.25em] rounded-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartBusiness;
