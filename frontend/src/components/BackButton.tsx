import { Link } from "react-router";

type BackButtonProps = {
  to: string;
  text?: string;
};

function BackButton({
  to,
  text = "Back",
}: BackButtonProps) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-neutral-400 hover:text-[#c19b6c] transition-colors"
    >
      ← {text}
    </Link>
  );
}

export default BackButton;