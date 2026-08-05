import { useNavigate } from "react-router";
import { useBookingStore } from "../../store/useBookingStore";

function CheckoutSummary() {
  const navigate = useNavigate();

  const { experience, appointments } = useBookingStore();

  const totalAppointments = appointments.length;

  const readyAppointments = appointments.filter(
    (appointment) => appointment.status === "ready",
  ).length;

  const total = experience.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const allReady =
    totalAppointments > 0 && readyAppointments === totalAppointments;

  return (
    <aside className="bg-[#111] border border-neutral-800 rounded-3xl p-8 h-fit sticky top-8">
      <h2 className="text-2xl font-bold">Booking Summary</h2>

      <p className="text-neutral-500 mt-2">
        {readyAppointments} of {totalAppointments} appointments ready
      </p>

      {/* Appointment List */}

      <div className="mt-8 space-y-4 max-h-80 overflow-y-auto">
        {appointments.map((appointment, index) => (
          <div
            key={appointment.id}
            className="bg-[#090909] border border-neutral-800 rounded-2xl p-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{appointment.serviceName}</h3>

                <p className="text-xs text-neutral-500 mt-1">
                  Appointment {index + 1}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full font-semibold ${
                  appointment.status === "ready"
                    ? "bg-green-600 text-white"
                    : "bg-yellow-500 text-black"
                }`}
              >
                {appointment.status === "ready" ? "Ready" : "Pending"}
              </span>
            </div>

            <div className="mt-3 text-sm space-y-1">
              <p className="text-neutral-400">
                👤{" "}
                {appointment.professionalId
                  ? `Professional #${appointment.professionalId}`
                  : "Match Me"}
              </p>

              <p className="text-neutral-400">📅 {appointment.day || "--"}</p>

              <p className="text-neutral-400">🕒 {appointment.time || "--"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}

      <div className="border-t border-neutral-800 mt-8 pt-6">
        <div className="flex justify-between mb-3">
          <span className="text-neutral-400">Services</span>

          <span>{experience.length}</span>
        </div>

        <div className="flex justify-between mb-5">
          <span className="text-neutral-400">Appointments</span>

          <span>{totalAppointments}</span>
        </div>

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>

          <span className="text-[#c19b6c]">R{total}</span>
        </div>
      </div>

      {/* Continue Button */}

      <button
        onClick={() => navigate("/customer/review")}
        disabled={!allReady}
        className={`w-full mt-8 py-4 rounded-xl font-bold transition-all duration-300 ${
          allReady
            ? "bg-[#c19b6c] hover:bg-white text-black"
            : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
        }`}
      >
        {allReady
          ? "Review Experience →"
          : `Complete ${totalAppointments - readyAppointments} Appointment${
              totalAppointments - readyAppointments === 1 ? "" : "s"
            }`}
      </button>
    </aside>
  );
}

export default CheckoutSummary;
