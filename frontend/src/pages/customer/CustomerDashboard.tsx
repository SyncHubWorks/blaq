import { Menu, Bell, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import { useAuthStore } from "../../store/useAuthStore";

function CustomerDashboard() {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    // TODO: add confirmation modal before logging out
    logout();
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* ================= Sidebar ================= */}

      <aside className="w-72 bg-black border-r border-neutral-800 flex flex-col">
        {/* Profile */}

        <div className="p-8 border-b border-neutral-800">
          <div className="w-24 h-24 rounded-full bg-neutral-700 mx-auto"></div>

          <h2 className="text-center mt-6 text-lg font-semibold">
            Good Morning ☀️
          </h2>

          <p className="text-center text-2xl mt-2">Takalani</p>

          <div className="flex justify-center mt-5">
            <span className="bg-[#c19b6c] text-black text-xs px-4 py-2 rounded-full font-semibold">
              Explorer Member
            </span>
          </div>
        </div>

        {/* Navigation */}

        <nav className="flex-1 p-6 space-y-3">
          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#c19b6c]/10 hover:text-[#c19b6c] transition">
            🏠 Dashboard
          </button>

          <Link
            to="/customer/booking"
            className="w-full block text-left px-4 py-3 rounded-lg hover:bg-[#c19b6c]/10 hover:text-[#c19b6c] transition"
          >
            📅 Bookings
          </Link>

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#c19b6c]/10 hover:text-[#c19b6c] transition">
            ❤️ Favorites
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#c19b6c]/10 hover:text-[#c19b6c] transition">
            💎 Membership
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#c19b6c]/10 hover:text-[#c19b6c] transition">
            💳 Payment History
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#c19b6c]/10 hover:text-[#c19b6c] transition">
            ⭐ Ratings
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#c19b6c]/10 hover:text-[#c19b6c] transition">
            🚩 Report Issues
          </button>
        </nav>

        {/* Logout */}

        <div className="p-6 border-t border-neutral-800">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 transition rounded-lg py-3"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* ================= Main Content ================= */}

      <div className="flex-1 flex flex-col">
        {/* Header */}

        <header className="h-20 border-b border-neutral-800 px-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Good Morning, Takalani ☀️</h1>

            <p className="text-neutral-400 mt-1">
              Tuesday, 4 August 2026 • 08:45 AM
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button className="hover:text-[#c19b6c] transition-colors">
              <Bell />
            </button>

            <button className="hover:text-[#c19b6c] transition-colors">
              <MessageCircle />
            </button>
          </div>
        </header>

        {/* Content */}

        <main className="flex-1 p-8 bg-[#0b0b0b]">
          {/* Welcome Banner */}

          <div className="bg-gradient-to-r from-[#c19b6c] to-[#9d7a50] rounded-2xl p-8 text-black">
            <h2 className="text-4xl font-bold">Welcome Back 👋</h2>

            <p className="mt-3 text-lg">
              Ready to book your next beauty or creative experience?
            </p>

            <Link
              to="/customer/booking"
              className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-lg hover:bg-neutral-900 transition"
            >
              Book a Service
            </Link>
          </div>

          {/* Quick Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
            <div className="bg-[#111] rounded-2xl p-6 border border-neutral-800">
              <h3 className="text-neutral-400">Upcoming Booking</h3>

              <p className="text-2xl font-bold mt-3">None</p>
            </div>

            <div className="bg-[#111] rounded-2xl p-6 border border-neutral-800">
              <h3 className="text-neutral-400">Membership</h3>

              <p className="text-2xl font-bold mt-3 text-[#c19b6c]">Explorer</p>
            </div>

            <div className="bg-[#111] rounded-2xl p-6 border border-neutral-800">
              <h3 className="text-neutral-400">Favorites</h3>

              <p className="text-2xl font-bold mt-3">0</p>
            </div>

            <div className="bg-[#111] rounded-2xl p-6 border border-neutral-800">
              <h3 className="text-neutral-400">Reward Points</h3>

              <p className="text-2xl font-bold mt-3">0</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CustomerDashboard;
