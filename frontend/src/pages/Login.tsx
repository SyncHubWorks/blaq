import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

function Login() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Back Button */}

      <div className="absolute top-8 left-8 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 text-neutral-400 hover:text-[#c19b6c] transition-colors uppercase tracking-[0.2em] text-xs"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* ================= LEFT SIDE ================= */}
        <div className="hidden lg:flex flex-col items-center justify-center border-r border-neutral-800 px-16">
          <h1 className="text-7xl font-bold tracking-[0.35em]">BLAQ</h1>

          <p className="mt-6 uppercase tracking-[0.5em] text-[#c19b6c] text-xs text-center">
            Beauty • Lifestyle • Art • Commerce
          </p>

          <div className="w-20 h-[1px] bg-[#c19b6c] my-10"></div>

          <p className="text-neutral-400 text-center leading-8 max-w-md">
            Welcome to the premier creative platform where customers discover
            exceptional creatives, book services, and reserve premium
            workspaces.
          </p>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center justify-center px-8">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold mb-3">Welcome Back</h2>

            <p className="text-neutral-400 mb-10">
              Sign in to continue to your account.
            </p>

            <form className="space-y-7">
              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-neutral-700 py-3 outline-none focus:border-[#c19b6c] transition-colors"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs text-[#c19b6c] hover:text-white transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-transparent border-b border-neutral-700 py-3 outline-none focus:border-[#c19b6c] transition-colors"
                />
              </div>

              {/* Login Button */}

              {/* Remember Me */}

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[#c19b6c]" />

                  <span className="text-neutral-400">Remember me</span>
                </label>
              </div>

              {/* Login Button */}

              <button
                type="submit"
                className="w-full bg-white text-black py-4 uppercase tracking-[0.25em] font-semibold hover:bg-[#c19b6c] transition-all duration-300"
              >
                Sign In
              </button>

              {/* Register */}

              <div className="text-center pt-6">
                <p className="text-neutral-500">Don't have an account?</p>

                <Link
                  to="/register"
                  className="mt-2 inline-block text-[#c19b6c] hover:text-white transition-colors uppercase tracking-[0.25em] text-sm"
                >
                  Create Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
