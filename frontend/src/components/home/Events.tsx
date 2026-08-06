function Events() {
  const events = [
    {
      date: "15 AUG",
      title: "BLAQ Beauty Expo",
      location: "Johannesburg",
    },
    {
      date: "28 AUG",
      title: "Photography Masterclass",
      location: "Pretoria",
    },
    {
      date: "05 SEP",
      title: "Entrepreneurship Summit",
      location: "Cape Town",
    },
  ];

  return (
    <section id="events" className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center">
          <span className="uppercase tracking-[0.35em] text-[#c19b6c] text-xs">
            06
          </span>

          <h2 className="mt-6 text-5xl font-bold">UPCOMING EVENTS</h2>

          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
            Learn, network and grow with South Africa's leading creatives and
            entrepreneurs.
          </p>
        </div>

        <div className="mt-20 space-y-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="border border-neutral-800 rounded-2xl p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center hover:border-[#c19b6c] transition-all duration-300"
            >
              <div>
                <div className="text-[#c19b6c] uppercase tracking-widest text-sm">
                  {event.date}
                </div>

                <h3 className="text-3xl font-semibold mt-3">{event.title}</h3>

                <p className="mt-2 text-neutral-400">{event.location}</p>
              </div>

              <button className="mt-6 lg:mt-0 border border-[#c19b6c] px-8 py-3 uppercase tracking-[0.2em] hover:bg-[#c19b6c] hover:text-black transition-all">
                Reserve Seat
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
