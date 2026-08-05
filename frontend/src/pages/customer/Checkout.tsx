import PageHeader from "../../components/common/PageHeader";
import BookingProgress from "../../components/checkout/BookingProgress";
import AppointmentCard from "../../components/checkout/AppointmentCard";
import CheckoutSummary from "../../components/checkout/CheckoutSummary";
import { useBookingStore } from "../../store/useBookingStore";
import JourneyProgress from "../../components/common/JourneyProgress";

function Checkout() {
  const { appointments } = useBookingStore();

  const totalAppointments = appointments.length;

  const readyAppointments = appointments.filter(
    (appointment) => appointment.status === "ready",
  ).length;

  const progress =
    totalAppointments === 0 ? 0 : (readyAppointments / totalAppointments) * 100;

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <PageHeader
        title="Checkout Experience"
        subtitle="Complete each appointment before continuing to review."
        backLabel="Back to Discover"
        backTo="/customer/booking"
      />

      <JourneyProgress current="checkout" />

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Booking Progress */}

        <div className="mb-12">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Booking Progress</h3>

            <span className="text-neutral-400">
              {readyAppointments} of {totalAppointments} Ready
            </span>
          </div>

          <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#c19b6c] transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Appointment Cards */}

          <div className="lg:col-span-2 space-y-8">
            {appointments.length === 0 ? (
              <div className="bg-[#111] border border-neutral-800 rounded-3xl p-16 text-center">
                <div className="text-7xl mb-6">✨</div>

                <h2 className="text-3xl font-bold">No appointments yet</h2>

                <p className="text-neutral-500 mt-4">
                  Return to Discover and build your experience.
                </p>
              </div>
            ) : (
              appointments.map((appointment, index) => (
                <AppointmentCard
                  key={appointment.id}
                  appointmentId={appointment.id}
                  serviceName={appointment.serviceName}
                  appointment={index + 1}
                />
              ))
            )}
          </div>

          {/* Summary */}

          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
