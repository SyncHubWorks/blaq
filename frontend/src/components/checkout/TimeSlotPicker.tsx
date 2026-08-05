import { useMemo, useState } from "react";

type Day = {
  label: string;
  date: string;
};

type Props = {
  selectedTime: string | null;
  onSelect: (time: string, day: Day) => void;
};

function TimeSlotPicker({ selectedTime, onSelect }: Props) {
  const days = useMemo(() => {
    const today = new Date();

    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(today);

      date.setDate(today.getDate() + index);

      const label =
        index === 0
          ? "Today"
          : index === 1
            ? "Tomorrow"
            : date.toLocaleDateString("en-US", {
                weekday: "short",
              });

      return {
        label,
        date: date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        }),
      };
    });
  }, []);

  const [selectedDay, setSelectedDay] = useState(0);

  const slots = [
    { time: "09:00", booked: false },
    { time: "09:30", booked: true },
    { time: "10:00", booked: false },
    { time: "10:30", booked: false },
    { time: "11:00", booked: true },
    { time: "11:30", booked: false },
    { time: "12:00", booked: false },
    { time: "13:00", booked: true },
    { time: "14:00", booked: false },
    { time: "15:00", booked: false },
  ];

  return (
    <div className="mt-8">
      {/* Days */}

      <h4 className="text-lg font-semibold mb-5">Choose a Day</h4>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => setSelectedDay(index)}
            className={`min-w-[95px] rounded-2xl px-4 py-3 transition-all duration-300 ${
              selectedDay === index
                ? "bg-[#c19b6c] text-black"
                : "bg-neutral-900 border border-neutral-800 hover:border-[#c19b6c]"
            }`}
          >
            <p className="font-semibold">{day.label}</p>

            <p className="text-sm opacity-80">{day.date}</p>
          </button>
        ))}
      </div>

      {/* Time Slots */}

      <h4 className="text-lg font-semibold mt-8 mb-5">Available Times</h4>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {slots.map((slot) => (
          <button
            key={slot.time}
            disabled={slot.booked}
            onClick={() => onSelect(slot.time, days[selectedDay])}
            className={`rounded-xl border py-3 px-2 transition-all duration-300 ${
              slot.booked
                ? "bg-neutral-800 border-neutral-800 text-neutral-500 cursor-not-allowed opacity-60"
                : selectedTime === slot.time
                  ? "bg-[#c19b6c] border-[#c19b6c] text-black font-bold scale-105"
                  : "bg-neutral-900 border-neutral-800 hover:border-[#c19b6c] hover:-translate-y-1"
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="font-semibold">{slot.time}</span>

              {slot.booked ? (
                <span className="text-[10px] uppercase tracking-wider mt-1">
                  Booked
                </span>
              ) : (
                <span className="text-[10px] text-green-400 uppercase tracking-wider mt-1">
                  Available
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TimeSlotPicker;
