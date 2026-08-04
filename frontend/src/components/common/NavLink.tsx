type NavLinkProps = {
  to: string;
  label: string;
};

function NavLink({ to, label }: NavLinkProps) {
  return (
    <a
      href={to}
      className="uppercase text-xs tracking-[0.2em] text-white hover:text-[#c19b6c] transition-colors duration-300"
    >
      {label}
    </a>
  );
}

export default NavLink;
