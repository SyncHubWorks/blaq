import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import NavLink from "../common/NavLink";
import MobileMenu from "../home/MobileMenu";
import { navigation } from "../../data/navigation";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">
        {/* Logo */}

        <a href="/" className="flex flex-col select-none">
          <h1 className="text-2xl font-bold tracking-[0.35em] text-white">
            BLAQ
          </h1>

          <span className="text-[9px] uppercase tracking-[0.35em] text-[#c19b6c]">
            Beauty • Lifestyle • Art • Commerce
          </span>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} label={item.label} />
          ))}
        </nav>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/login"
            className="uppercase text-xs tracking-[0.25em] text-white hover:text-[#c19b6c] transition-colors duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="uppercase text-xs tracking-[0.25em] text-[#c19b6c] hover:text-white transition-colors duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Toggle */}

        <button
          className="lg:hidden text-white hover:text-[#c19b6c] transition-colors"
          aria-label="Toggle Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

export default Navbar;
