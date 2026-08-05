import { useNavigate } from "react-router";
import { useBookingStore } from "../../store/useBookingStore";

type Service = {
  id: number;
  name: string;
  duration: string;
  price: number;
  quantity: number;
};

type Props = {
  services: Service[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
};

function Experience({ services, onIncrease, onDecrease, onRemove }: Props) {
  const navigate = useNavigate();

  const generateAppointments = useBookingStore(
    (state) => state.generateAppointments,
  );

  const total = services.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <aside className="w-96 border-l border-neutral-800 bg-[#090909] flex flex-col">
      {/* Header */}

      <div className="p-6 border-b border-neutral-800">
        <h2 className="text-2xl font-bold">My Experience</h2>

        <p className="text-neutral-400 mt-2">
          {services.length}
          {services.length === 1 ? " Service Selected" : " Services Selected"}
        </p>
      </div>

      {/* Services */}

      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {services.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-6">✨</div>

            <h3 className="text-2xl font-bold">Your experience starts here</h3>

            <p className="text-neutral-500 mt-4 max-w-xs leading-7">
              Browse our premium services and begin creating your perfect BLAQ
              experience.
            </p>
          </div>
        ) : (
          services.map((service) => (
            <div
              key={service.id}
              className="bg-[#111] border border-neutral-800 rounded-2xl p-5 hover:border-[#c19b6c] transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">{service.name}</h3>

                  <p className="text-neutral-500 mt-1">{service.duration}</p>
                </div>

                <button
                  onClick={() => onRemove(service.id)}
                  className="text-red-400 hover:text-red-300 text-sm transition"
                >
                  Remove
                </button>
              </div>

              <div className="mt-5">
                <p className="text-sm text-neutral-500">
                  Price per Appointment
                </p>

                <p className="text-[#c19b6c] text-2xl font-bold mt-1">
                  R{service.price}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm text-neutral-500 mb-3">Appointments</p>

                <div className="flex items-center justify-between bg-neutral-900 rounded-xl p-2">
                  <button
                    onClick={() => onDecrease(service.id)}
                    className="w-11 h-11 rounded-full bg-neutral-800 hover:bg-neutral-700 transition text-xl"
                  >
                    −
                  </button>

                  <span className="bg-[#c19b6c] text-black font-bold text-lg px-6 py-2 rounded-full">
                    {service.quantity}
                  </span>

                  <button
                    onClick={() => onIncrease(service.id)}
                    className="w-11 h-11 rounded-full bg-[#c19b6c] hover:bg-white text-black transition text-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-neutral-800">
                <span className="text-neutral-400">Subtotal</span>

                <span className="font-bold text-[#c19b6c] text-lg">
                  R{service.price * service.quantity}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}

      <div className="border-t border-neutral-800 p-6">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">Total</span>

          <span className="text-2xl font-bold text-[#c19b6c]">R{total}</span>
        </div>

        <button
          onClick={() => {
            generateAppointments();
            navigate("/customer/checkout");
          }}
          disabled={services.length === 0}
          className={`w-full mt-6 py-4 rounded-xl font-bold transition-all duration-300 active:scale-95 ${
            services.length === 0
              ? "bg-neutral-800 text-neutral-500 cursor-not-allowed"
              : "bg-[#c19b6c] hover:bg-white text-black"
          }`}
        >
          {services.length === 0
            ? "Start Building Your Experience"
            : "Checkout Experience →"}
        </button>
      </div>
    </aside>
  );
}

export default Experience;
