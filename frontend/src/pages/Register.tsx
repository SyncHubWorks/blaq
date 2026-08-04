import { useState } from "react";
import { Link } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = useAuthStore((state) => state.signup);
  const isRegistering = useAuthStore((state) => state.isSigningUp);

  async function handleRegisterUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmPassword !== password) {
      toast.error("Passwords does not match");
      return;
    }

    await registerUser({ fullName, email, password: confirmPassword });
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Back Button */}

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* ================= LEFT SIDE ================= */}
        <div className="hidden lg:flex flex-col items-center justify-center border-r border-neutral-800 px-16">
          <h1 className="text-7xl font-bold tracking-[0.35em]">BLAQ</h1>

          <p className="mt-6 uppercase tracking-[0.5em] text-[#c19b6c] text-xs text-center">
            Beauty • Lifestyle • Art • Commerce
          </p>

          <div className="w-20 h-[px] bg-[#c19b6c] my-10"></div>

          <p className="text-neutral-400 text-center leading-8 max-w-md">
            Create your account and discover South Africa's premier creative
            platform.
          </p>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center justify-center px-8">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold mb-3">Create Account</h2>

            <p className="text-neutral-400 mb-10">
              Join BLAQ and start booking creatives today.
            </p>

            <form onSubmit={handleRegisterUser} className="space-y-7">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-transparent border-b border-neutral-700 py-3 outline-none focus:border-[#c19b6c] transition-colors"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-neutral-700 py-3 outline-none focus:border-[#c19b6c] transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full bg-transparent border-b border-neutral-700 py-3 outline-none focus:border-[#c19b6c] transition-colors"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full bg-transparent border-b border-neutral-700 py-3 outline-none focus:border-[#c19b6c] transition-colors"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {/* Terms */}

              <label className="flex items-center gap-3 text-sm text-neutral-400 cursor-pointer">
                <input type="checkbox" className="accent-[#c19b6c]" />I agree to
                the Terms of Service and Privacy Policy
              </label>

              {/* Register Button */}

              <button
                type="submit"
                className="w-full bg-white text-black py-4 uppercase tracking-[0.25em] font-semibold hover:bg-[#c19b6c] transition-all duration-300"
              >
                {isRegistering ? "Registering..." : "Create Account"}
              </button>

              {/* Login */}

              <div className="text-center pt-6">
                <p className="text-neutral-500">Already have an account?</p>

                <Link
                  to="/Login"
                  className="mt-2 inline-block text-[#c19b6c] hover:text-white transition-colors uppercase tracking-[0.25em] text-sm"
                >
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
