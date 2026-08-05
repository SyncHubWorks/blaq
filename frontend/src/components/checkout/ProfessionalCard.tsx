type Props = {
  name: string;
  role: string;
  rating: number;
  experience: string;
  bookings: number;
  available: string;
  selected: boolean;
  onSelect: () => void;
};

function ProfessionalCard({
  name,
  role,
  rating,
  experience,
  bookings,
  available,
  selected,
  onSelect,
}: Props) {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
        selected
          ? "border-[#c19b6c] bg-[#c19b6c]/10"
          : "border-neutral-800 hover:border-[#c19b6c]"
      }`}
    >
      <div className="flex items-center gap-5">
        {/* Avatar */}

        <div className="w-16 h-16 rounded-full bg-[#c19b6c] text-black flex items-center justify-center text-2xl font-bold">
          {name.charAt(0)}
        </div>

        <div>
          <h3 className="text-xl font-bold">{name}</h3>

          <p className="text-neutral-500">{role}</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <p>⭐ {rating}</p>

        <p className="text-neutral-400">{experience}</p>

        <p className="text-neutral-400">🏆 {bookings} Appointments</p>

        <p className="text-green-400">{available}</p>
      </div>

      <button
        className={`w-full mt-6 py-3 rounded-xl font-semibold transition ${
          selected
            ? "bg-[#c19b6c] text-black"
            : "bg-neutral-900 hover:bg-neutral-800"
        }`}
      >
        {selected ? "Selected" : "Select"}
      </button>
    </div>
  );
}

export default ProfessionalCard;
