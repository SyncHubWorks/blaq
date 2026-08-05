import { create } from "zustand";

export type Service = {
  id: number;
  name: string;
  image: string;
  duration: string;
  price: number;
  rating: number;
  quantity: number;
};

export type Appointment = {
  id: string;
  serviceId: number;
  serviceName: string;

  professionalId: number | null;
  professionalName: string;

  bookingType: "match" | "choose";

  day: string;
  time: string;

  status: "pending" | "ready";
};

type BookingStore = {
  experience: Service[];

  appointments: Appointment[];

  toggleService: (service: Omit<Service, "quantity">) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  removeService: (id: number) => void;

  clearExperience: () => void;

  generateAppointments: () => void;

  updateAppointment: (id: string, updates: Partial<Appointment>) => void;
};

export const useBookingStore = create<BookingStore>((set) => ({
  experience: [],

  appointments: [],

  toggleService: (service) =>
    set((state) => {
      const exists = state.experience.find((item) => item.id === service.id);

      if (exists) {
        return {
          experience: state.experience.filter((item) => item.id !== service.id),
        };
      }

      return {
        experience: [
          ...state.experience,
          {
            ...service,
            quantity: 1,
          },
        ],
      };
    }),

  increaseQuantity: (id) =>
    set((state) => ({
      experience: state.experience.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      experience: state.experience.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      ),
    })),

  removeService: (id) =>
    set((state) => ({
      experience: state.experience.filter((item) => item.id !== id),
    })),

  clearExperience: () =>
    set({
      experience: [],
      appointments: [],
    }),

  generateAppointments: () =>
    set((state) => {
      const appointments: Appointment[] = [];

      state.experience.forEach((service) => {
        for (let i = 1; i <= service.quantity; i++) {
          appointments.push({
            id: `${service.id}-${i}`,
            serviceId: service.id,
            serviceName: service.name,

            professionalId: null,
            professionalName: "",

            bookingType: "match",

            day: "",
            time: "",

            status: "pending",
          });
        }
      });

      return {
        appointments,
      };
    }),

  updateAppointment: (id, updates) =>
    set((state) => ({
      appointments: state.appointments.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              ...updates,
            }
          : appointment,
      ),
    })),
}));
