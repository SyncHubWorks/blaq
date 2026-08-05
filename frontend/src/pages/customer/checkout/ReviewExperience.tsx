import { useNavigate } from "react-router";
import PageHeader from "../../../components/common/PageHeader";
import { useBookingStore } from "../../../store/useBookingStore";
import JourneyProgress from "../../../components/common/JourneyProgress";

function ReviewExperience() {
  const navigate = useNavigate();

  const { appointments, experience } = useBookingStore();

  const total = experience.reduce(
    (sum, service) => sum + service.price * service.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <PageHeader
        title="Review Your Experience"
        subtitle="Take a moment to review every appointment before continuing to payment."
        backLabel="Back to Checkout"
        backTo="/customer/checkout"
      />
      <JourneyProgress current="review" />
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="space-y-6">
          {appointments.map((appointment, index) => (
            <div
              key={appointment.id}
              className="bg-[#111] border border-neutral-800 rounded-3xl p-8 hover:border-[#c19b6c] transition-all duration-300"
            >
              {/* Header */}

              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">
                    {appointment.serviceName}
                  </h2>

                  <p className="text-neutral-500 mt-2">
                    Appointment {index + 1}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full font-semibold ${
                    appointment.status === "ready"
                      ? "bg-green-600 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {appointment.status === "ready" ? "✓ Ready" : "Pending"}
                </span>
              </div>

              {/* Details */}

              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <p className="text-neutral-500">Professional</p>

                  <p className="mt-2 font-medium">
                    {appointment.professionalName || "Match Me"}
                  </p>
                </div>

                <div>
                  <p className="text-neutral-500">Day</p>

                  <p className="mt-2 font-medium">{appointment.day || "-"}</p>
                </div>

                <div>
                  <p className="text-neutral-500">Time</p>

                  <p className="mt-2 font-medium">{appointment.time || "-"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}

        <div className="bg-[#111] border border-neutral-800 rounded-3xl mt-10 p-8">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold">Total Experience</span>

            <span className="text-4xl font-bold text-[#c19b6c]">R{total}</span>
          </div>

          <div className="flex justify-between mt-10">
            <button
              onClick={() => navigate("/customer/payment")}
              className="bg-[#c19b6c] hover:bg-white text-black px-10 py-4 rounded-xl font-bold transition-all duration-300"
            >
              Continue to Payment →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewExperience;
