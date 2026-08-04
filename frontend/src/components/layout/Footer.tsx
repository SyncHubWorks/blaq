import { Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#050505] text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold tracking-[0.3em]">BLAQ</h2>

            <p className="mt-4 text-[#c19b6c] uppercase tracking-[0.25em] text-xs">
              Beauty • Lifestyle • Art • Commerce
            </p>

            <p className="mt-8 text-neutral-400 leading-8">
              Connecting creatives, entrepreneurs, businesses and customers
              through one premium platform.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm mb-8">
              Quick Links
            </h3>

            <ul className="space-y-4 text-neutral-400">
              <li className="hover:text-[#c19b6c] cursor-pointer transition-colors">
                Home
              </li>

              <li className="hover:text-[#c19b6c] cursor-pointer transition-colors">
                Services
              </li>

              <li className="hover:text-[#c19b6c] cursor-pointer transition-colors">
                Creative Spaces
              </li>

              <li className="hover:text-[#c19b6c] cursor-pointer transition-colors">
                Memberships
              </li>

              <li className="hover:text-[#c19b6c] cursor-pointer transition-colors">
                Products
              </li>

              <li className="hover:text-[#c19b6c] cursor-pointer transition-colors">
                Events
              </li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm mb-8">
              Company
            </h3>

            <ul className="space-y-4 text-neutral-400">
              <li className="hover:text-[#c19b6c] cursor-pointer transition-colors">
                About Us
              </li>

              <li className="hover:text-[#c19b6c] cursor-pointer transition-colors">
                Contact
              </li>

              <li className="hover:text-[#c19b6c] cursor-pointer transition-colors">
                Privacy Policy
              </li>

              <li className="hover:text-[#c19b6c] cursor-pointer transition-colors">
                Terms of Service
              </li>
            </ul>
          </div>

          {/* Newsletter */}

          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm mb-8">
              Stay Updated
            </h3>

            <p className="text-neutral-400 mb-6">
              Subscribe to receive updates, promotions and upcoming events.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-neutral-950 border border-neutral-800 p-4 outline-none focus:border-[#c19b6c]"
              />

              <button className="bg-[#c19b6c] hover:bg-white transition-all duration-300 px-5">
                <Mail size={20} className="text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-neutral-800 mt-20 pt-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-neutral-500 text-sm tracking-wide">
            © 2026 BLAQ. All Rights Reserved. Designed to empower creators,
            entrepreneurs and businesses.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:border-[#c19b6c] hover:text-[#c19b6c] transition-all duration-300"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:border-[#c19b6c] hover:text-[#c19b6c] transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:border-[#c19b6c] hover:text-[#c19b6c] transition-all duration-300"
            >
              <FaLinkedinIn size={16} />
            </a>

            <a
              href="#"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:border-[#c19b6c] hover:text-[#c19b6c] transition-all duration-300"
            >
              <FaTiktok size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
