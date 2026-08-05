import { useState } from "react";
import ProfessionalCard from "./ProfessionalCard";
import TimeSlotPicker from "./TimeSlotPicker";
import { useBookingStore } from "../../store/useBookingStore";

const professionals = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Senior Hair Stylist",
    rating: 4.9,
    experience: "8 Years Experience",
    bookings: 1258,
    available: "Available Today",
  },
  {
    id: 2,
    name: "David T.",
    role: "Master Barber",
    rating: 4.8,
    experience: "6 Years Experience",
    bookings: 932,
    available: "Available 10:30",
  },
  {
    id: 3,
    name: "Lucy R.",
    role: "Creative Stylist",
    rating: 5.0,
    experience: "11 Years Experience",
    bookings: 1834,
    available: "Available Tomorrow",
  },
];

type Props = {
  appointmentId: string;
  serviceName: string;
  appointment: number;
};

function AppointmentCard({ appointmentId, serviceName, appointment }: Props) {
  const [bookingType, setBookingType] = useState<"match" | "choose">("match");

  const [selectedProfessional, setSelectedProfessional] = useState<
    number | null
  >(null);

  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const updateAppointment = useBookingStore((state) => state.updateAppointment);

  // Appointment Status

  const isReady =
    selectedTime !== null &&
    (bookingType === "match" || selectedProfessional !== null);

  const status = isReady
    ? {
        text: "✓ Ready",
        className: "bg-green-600 text-white",
      }
    : bookingType === "match"
      ? {
          text: "Choose Time",
          className: "bg-yellow-500 text-black",
        }
      : selectedProfessional !== null
        ? {
            text: "Choose Time",
            className: "bg-yellow-500 text-black",
          }
        : {
            text: "Pending",
            className: "bg-[#c19b6c] text-black",
          };

  return (
    <div className="bg-[#111] border border-neutral-800 rounded-3xl p-8">
      {/* Header */}

      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{serviceName}</h2>

          <p className="text-neutral-500 mt-2">Appointment {appointment}</p>
        </div>

        <span
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${status.className}`}
        >
          {status.text}
        </span>
      </div>

      {/* Booking Type */}

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-5">
          How would you like to book?
        </h3>

        <div className="grid md:grid-cols-2 gap-5">
          <button
            onClick={() => {
              setBookingType("match");

              updateAppointment(appointmentId, {
                bookingType: "match",
              });
            }}
            className={`rounded-2xl border p-6 text-left transition-all duration-300 ${
              bookingType === "match"
                ? "border-[#c19b6c] bg-[#c19b6c]/10"
                : "border-neutral-800 hover:border-[#c19b6c]"
            }`}
          >
            <h4 className="text-lg font-bold">✨ Match Me</h4>

            <p className="text-neutral-500 mt-3">
              We'll automatically assign the highest-rated available
              professional.
            </p>
          </button>

          <button
            onClick={() => {
              setBookingType("choose");

              updateAppointment(appointmentId, {
                bookingType: "choose",
              });
            }}
            className={`rounded-2xl border p-6 text-left transition-all duration-300 ${
              bookingType === "choose"
                ? "border-[#c19b6c] bg-[#c19b6c]/10"
                : "border-neutral-800 hover:border-[#c19b6c]"
            }`}
          >
            <h4 className="text-lg font-bold">👤 I'll Choose</h4>

            <p className="text-neutral-500 mt-3">
              Browse professionals and choose your preferred expert.
            </p>
          </button>
        </div>
      </div>

      {/* Professional Section */}

      <div className="mt-8 rounded-2xl bg-[#090909] border border-neutral-800 p-6">
        {bookingType === "match" ? (
          <div>
            <h3 className="text-xl font-semibold">Recommended Professional</h3>

            <div className="mt-6">
              <ProfessionalCard
                name="Sarah M."
                role="Senior Hair Stylist"
                rating={4.9}
                experience="8 Years Experience"
                bookings={1258}
                available="Available Today"
                selected={true}
                onSelect={() => {}}
              />

              <TimeSlotPicker
                selectedTime={selectedTime}
                onSelect={(time, day) => {
                  setSelectedTime(time);

                  updateAppointment(appointmentId, {
                    professionalId: 1,
                    professionalName: "Sarah M.",
                    day: `${day.label} • ${day.date}`,
                    time,
                    status: "ready",
                  });
                }}
              />
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Choose Your Professional
            </h3>

            <div className="space-y-6">
              {professionals.map((professional) => (
                <div key={professional.id}>
                  <ProfessionalCard
                    {...professional}
                    selected={selectedProfessional === professional.id}
                    onSelect={() => {
                      setSelectedProfessional(professional.id);

                      updateAppointment(appointmentId, {
                        professionalId: professional.id,
                        professionalName: professional.name,
                      });
                    }}
                  />

                  {selectedProfessional === professional.id && (
                    <div className="mt-5">
                      <TimeSlotPicker
                        selectedTime={selectedTime}
                        onSelect={(time, day) => {
                          setSelectedTime(time);

                          updateAppointment(appointmentId, {
                            professionalId: professional.id,
                            professionalName: professional.name,
                            day: `${day.label} • ${day.date}`,
                            time,
                            status: "ready",
                          });
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentCard;
