function AboutUs() {
  const stats = [
    {
      number: "120+",
      label: "Creative Professionals",
    },
    {
      number: "25+",
      label: "Creative Spaces",
    },
    {
      number: "350+",
      label: "Bookings",
    },
    {
      number: "15+",
      label: "Business Partners",
    },
  ];

  return (
    <section className="bg-[#050505] text-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center">
          <span className="uppercase tracking-[0.35em] text-[#c19b6c] text-xs">
            ABOUT BLAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold">WHY WE EXIST</h2>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <p className="text-2xl leading-10 text-neutral-300">
            We believe talent deserves opportunity.
            <br />
            <br />
            We believe creativity deserves a home.
            <br />
            <br />
            We believe entrepreneurs deserve a platform.
            <br />
            <br />
            <span className="text-[#c19b6c] font-semibold">
              That platform is BLAQ.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border border-neutral-800 rounded-2xl p-10 text-center hover:border-[#c19b6c] transition-all duration-300"
            >
              <div className="text-5xl font-bold text-[#c19b6c]">
                {item.number}
              </div>

              <p className="mt-6 uppercase tracking-[0.2em] text-sm text-neutral-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
