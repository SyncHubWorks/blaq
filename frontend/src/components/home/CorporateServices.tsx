function CorporateServices() {
  const services = [
    "Corporate Wellness Days",
    "Employee Grooming Packages",
    "Professional Headshots",
    "Conference & Meeting Spaces",
    "Brand Activations",
    "Team Building Experiences",
  ];

  return (
    <section className="bg-[#050505] text-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <div>
            <span className="uppercase tracking-[0.35em] text-[#c19b6c] text-xs">
              07
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              CORPORATE
              <br />
              SERVICES
            </h2>

            <p className="mt-8 text-neutral-400 leading-8">
              We partner with businesses to deliver premium beauty, wellness,
              creative and professional services tailored for modern
              organizations.
            </p>

            <div className="space-y-5 mt-12">
              {services.map((service) => (
                <div
                  key={service}
                  className="border-l-4 border-[#c19b6c] pl-6 py-2 text-lg"
                >
                  {service}
                </div>
              ))}
            </div>

            <button className="mt-12 bg-[#c19b6c] hover:bg-white transition-all duration-300 text-black px-8 py-4 uppercase tracking-[0.2em] font-semibold rounded-sm">
              Partner With Us
            </button>
          </div>

          {/* RIGHT */}

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Corporate"
              className="rounded-3xl w-full h-[650px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CorporateServices;
