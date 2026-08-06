import { Link } from "react-router";
import { navigation } from "../../data/navigation";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-20 left-0 w-full bg-[#050505] border-b border-[#222] py-6 flex flex-col items-center space-y-6 text-sm tracking-widest animate-in slide-in-from-top-4 duration-300">
      {navigation.map((item) => (
        <a
          key={item.to}
          href={item.to}
          onClick={onClose}
          className="text-white hover:text-[#C19B6C] transition-colors duration-300"
        >
          {item.label.toUpperCase()}
        </a>
      ))}
      <div className="w-12 h-px bg-[#333] my-2" />

      <Link
        to="/login"
        onClick={onClose}
        className="text-white hover:text-[#C19B6C] transition-colors duration-300"
      >
        LOGIN
      </Link>

      <Link
        to="/register"
        onClick={onClose}
        className="text-[#C19B6C] hover:text-white transition-colors duration-300"
      >
        SIGN UP
      </Link>
    </div>
  );
}

export default MobileMenu;
