import { useState } from "react";

function BookingWizard() {
  const [step, setStep] = useState(1);

  const [booking, setBooking] = useState({
    category: "",
    service: "",
    professional: "",
    date: "",
    time: "",
    paymentMethod: "",
  });

  const nextStep = () => {
    if (step < 7) {
      setStep(step + 1);
    }
  };
  const services = {
    Hair: ["Haircut", "Braids", "Hair Colour", "Hair Wash", "Beard Grooming"],

    Beauty: ["Makeup", "Facial", "Eyelashes", "Eyebrows", "Manicure"],

    Massage: [
      "Swedish Massage",
      "Deep Tissue Massage",
      "Hot Stone Massage",
      "Aromatherapy",
    ],

    Photography: [
      "Wedding Shoot",
      "Graduation Shoot",
      "Birthday Shoot",
      "Corporate Shoot",
    ],

    "Creative Spaces": [
      "Studio Rental",
      "Podcast Room",
      "Photography Studio",
      "Meeting Room",
    ],

    Fashion: ["Personal Styling", "Wardrobe Consultation", "Tailoring"],
  };
  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const professionals = {
    Hair: [
      {
        id: 1,
        name: "Sarah Mokoena",
        specialty: "Hair Specialist",
        experience: "6 Years",
        rating: 4.9,
        price: "R250",
        available: true,
      },
      {
        id: 2,
        name: "Michael Dube",
        specialty: "Barber",
        experience: "8 Years",
        rating: 4.8,
        price: "R180",
        available: true,
      },
      {
        id: 3,
        name: "Lebo Sithole",
        specialty: "Hair Stylist",
        experience: "4 Years",
        rating: 4.7,
        price: "R220",
        available: false,
      },
    ],

    Beauty: [
      {
        id: 4,
        name: "Ayanda Khumalo",
        specialty: "Makeup Artist",
        experience: "5 Years",
        rating: 5,
        price: "R450",
        available: true,
      },
    ],

    Massage: [
      {
        id: 5,
        name: "Thabo Maseko",
        specialty: "Massage Therapist",
        experience: "10 Years",
        rating: 4.9,
        price: "R500",
        available: true,
      },
    ],

    Photography: [
      {
        id: 6,
        name: "Neo Studios",
        specialty: "Photographer",
        experience: "9 Years",
        rating: 5,
        price: "R900",
        available: true,
      },
    ],

    "Creative Spaces": [
      {
        id: 7,
        name: "Studio One",
        specialty: "Creative Workspace",
        experience: "Available Daily",
        rating: 4.8,
        price: "R400",
        available: true,
      },
    ],

    Fashion: [
      {
        id: 8,
        name: "BLAQ Fashion",
        specialty: "Fashion Consultant",
        experience: "12 Years",
        rating: 4.9,
        price: "R650",
        available: true,
      },
    ],
  };
  const canProceed = () => {
    switch (step) {
      case 1:
        return booking.category !== "";

      case 2:
        return booking.service !== "";

      case 3:
        return booking.professional !== "";

      case 4:
        return booking.date !== "";

      case 5:
        return booking.time !== "";

      case 6:
        return true;

      case 7:
        return booking.paymentMethod !== "";

      default:
        return false;
    }
  };
  const availableDates = [
    "2026-08-05",
    "2026-08-06",
    "2026-08-07",
    "2026-08-09",
    "2026-08-10",
    "2026-08-11",
    "2026-08-12",
  ];
  const availableTimes = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "13:00",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}

      <div className="max-w-7xl mx-auto px-8 py-10">
        <h1 className="text-4xl font-bold">Book a Service</h1>

        <p className="text-neutral-400 mt-2">Step {step} of 7</p>
      </div>

      {/* Progress Bar */}

      <div className="max-w-7xl mx-auto px-8">
        <div className="w-full h-2 bg-neutral-800 rounded-full">
          <div
            className="h-2 bg-[#c19b6c] rounded-full transition-all duration-500"
            style={{ width: `${(step / 7) * 100}%` }}
          />
        </div>
      </div>

      {/* Booking Summary */}

      {/* Booking Summary */}

      <div className="max-w-7xl mx-auto px-8 mt-10">
        <div className="bg-[#111] border border-neutral-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-6">Current Booking</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-neutral-400">Category</p>
              <p>{booking.category || "—"}</p>
            </div>

            <div>
              <p className="text-neutral-400">Service</p>
              <p>{booking.service || "—"}</p>
            </div>

            <div>
              <p className="text-neutral-400">Professional</p>
              <p>{booking.professional || "—"}</p>
            </div>

            <div>
              <p className="text-neutral-400">Date</p>
              <p>{booking.date || "—"}</p>
            </div>

            <div>
              <p className="text-neutral-400">Time</p>
              <p>{booking.time || "—"}</p>
            </div>

            <div>
              <p className="text-neutral-400">Payment</p>
              <p>{booking.paymentMethod || "—"}</p>
            </div>
          </div>
        </div>
      </div>
      {step === 5 && (
        <div className="bg-[#111] rounded-2xl border border-neutral-800 p-10">
          <h2 className="text-3xl font-bold">Choose a Time</h2>

          <p className="text-neutral-400 mt-3">
            Select an available appointment time.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() =>
                  setBooking({
                    ...booking,
                    time,
                  })
                }
                className={`rounded-xl border p-6 text-center transition-all duration-300 ${
                  booking.time === time
                    ? "border-[#c19b6c] bg-[#c19b6c]/10"
                    : "border-neutral-800 hover:border-[#c19b6c]"
                }`}
              >
                <h3 className="text-2xl font-semibold">{time}</h3>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Current Step */}

      <div className="max-w-7xl mx-auto px-8 mt-16">
        {/* STEP 1 */}

        {step === 1 && (
          <div className="bg-[#111] rounded-2xl border border-neutral-800 p-10">
            <h2 className="text-3xl font-bold">Choose a Category</h2>

            <p className="text-neutral-400 mt-3">
              Select the type of experience you want.
            </p>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
              {[
                "Hair",
                "Beauty",
                "Massage",
                "Photography",
                "Creative Spaces",
                "Fashion",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setBooking({
                      ...booking,
                      category,
                      service: "",
                      professional: "",
                      date: "",
                      time: "",
                    })
                  }
                  className={`rounded-2xl border p-8 text-left transition-all duration-300 ${
                    booking.category === category
                      ? "border-[#c19b6c] bg-[#c19b6c]/10"
                      : "border-neutral-800 hover:border-[#c19b6c]"
                  }`}
                >
                  <h3 className="text-2xl font-semibold">{category}</h3>

                  <p className="text-neutral-400 mt-3">
                    Browse available {category.toLowerCase()} services.
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="bg-[#111] rounded-2xl border border-neutral-800 p-10">
            <h2 className="text-3xl font-bold">Choose Appointment Date</h2>

            <p className="text-neutral-400 mt-3">Available booking dates</p>

            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-5 mt-10">
              {availableDates.map((date) => (
                <button
                  key={date}
                  onClick={() =>
                    setBooking({
                      ...booking,
                      date,
                    })
                  }
                  className={`rounded-xl p-6 border transition-all duration-300 ${
                    booking.date === date
                      ? "border-[#c19b6c] bg-[#c19b6c]/10"
                      : "border-neutral-800 hover:border-[#c19b6c]"
                  }`}
                >
                  <p className="font-semibold">{date}</p>
                </button>
              ))}
            </div>
          </div>
        )}
        {/* STEP 2 */}

        {step === 2 && (
          <div className="bg-[#111] rounded-2xl border border-neutral-800 p-10">
            <h2 className="text-3xl font-bold">Choose a Service</h2>

            <p className="text-neutral-400 mt-3">
              Category:
              <span className="text-[#c19b6c] ml-2">{booking.category}</span>
            </p>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
              {services[booking.category as keyof typeof services]?.map(
                (service) => (
                  <button
                    key={service}
                    onClick={() =>
                      setBooking({
                        ...booking,
                        service,
                      })
                    }
                    className={`rounded-2xl border p-8 text-left transition-all duration-300 ${
                      booking.service === service
                        ? "border-[#c19b6c] bg-[#c19b6c]/10"
                        : "border-neutral-800 hover:border-[#c19b6c]"
                    }`}
                  >
                    <h3 className="text-xl font-semibold">{service}</h3>

                    <p className="text-neutral-400 mt-3">
                      Premium BLAQ Experience
                    </p>
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </div>
      {/* Navigation */}

      {/* Navigation */}

      <div className="max-w-7xl mx-auto px-8 py-10 flex justify-between">
        <button
          onClick={previousStep}
          disabled={step === 1}
          className="px-8 py-3 border border-neutral-700 rounded-lg disabled:opacity-30"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          disabled={!canProceed()}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
            !canProceed()
              ? "bg-neutral-800 text-neutral-500 cursor-not-allowed"
              : "bg-[#c19b6c] text-black hover:bg-white hover:scale-105"
          }`}
        >
          {step === 7 ? "Finish Booking" : "Next"}
        </button>
      </div>
      {step === 3 && (
        <div className="bg-[#111] rounded-2xl border border-neutral-800 p-10">
          <h2 className="text-3xl font-bold">Choose Your Professional</h2>

          <p className="text-neutral-400 mt-3">
            Selected Service:
            <span className="text-[#c19b6c] ml-2">{booking.service}</span>
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-10">
            {professionals[booking.category as keyof typeof professionals]?.map(
              (person) => (
                <button
                  key={person.id}
                  disabled={!person.available}
                  onClick={() =>
                    setBooking({
                      ...booking,
                      professional: person.name,
                    })
                  }
                  className={`rounded-2xl border p-6 text-left transition-all duration-300 ${
                    booking.professional === person.name
                      ? "border-[#c19b6c] bg-[#c19b6c]/10"
                      : "border-neutral-800 hover:border-[#c19b6c]"
                  } ${!person.available && "opacity-40 cursor-not-allowed"}`}
                >
                  <div className="flex gap-5">
                    <div className="w-20 h-20 rounded-full bg-neutral-700 flex items-center justify-center text-2xl">
                      👤
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-2xl font-semibold">
                          {person.name}
                        </h3>

                        <span
                          className={`text-xs px-3 py-1 rounded-full ${
                            person.available ? "bg-green-600" : "bg-red-600"
                          }`}
                        >
                          {person.available ? "Available" : "Busy"}
                        </span>
                      </div>

                      <p className="text-[#c19b6c] mt-2">{person.specialty}</p>

                      <p className="text-neutral-400 mt-2">
                        ⭐ {person.rating}
                      </p>

                      <p className="text-neutral-400">
                        Experience: {person.experience}
                      </p>

                      <p className="mt-3 text-xl font-bold">{person.price}</p>
                    </div>
                  </div>
                </button>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingWizard;
