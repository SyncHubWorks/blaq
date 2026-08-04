function CreativeSpaces() {
  const spaces = [
    "Hair Stations",
    "Nail Stations",
    "Photography Studio",
    "Podcast Studio",
    "Beauty Rooms",
    "Boardrooms",
  ];

  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950">
          <div className="grid lg:grid-cols-2">
            {/* LEFT IMAGE */}

            <div className="min-h-[650px]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                alt="Creative Spaces"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT */}

            <div className="p-14">
              <span className="text-[#c19b6c] uppercase tracking-[0.35em] text-xs">
                02
              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight">
                CREATIVE
                <br />
                SPACES
              </h2>

              <p className="mt-8 text-neutral-400 leading-8">
                Rent beautifully designed workspaces that empower creators,
                entrepreneurs and professionals to grow their businesses.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-12">
                {spaces.map((space) => (
                  <div
                    key={space}
                    className="border border-neutral-800 rounded-xl px-5 py-4 hover:border-[#c19b6c] hover:bg-[#c19b6c]/10 transition-all duration-300 cursor-pointer"
                  >
                    {space}
                  </div>
                ))}
              </div>

              <button className="mt-12 bg-[#c19b6c] hover:bg-white transition-all duration-300 text-black px-8 py-4 uppercase tracking-[0.2em] font-semibold rounded-sm">
                Explore Spaces
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreativeSpaces;
