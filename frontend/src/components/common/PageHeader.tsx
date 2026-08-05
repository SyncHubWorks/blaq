import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

type Props = {
  title: string;
  subtitle: string;
  backLabel: string;
  backTo: string;
};

function PageHeader({ title, subtitle, backLabel, backTo }: Props) {
  const navigate = useNavigate();

  return (
    <div className="border-b border-neutral-800 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <button
          onClick={() => navigate(backTo)}
          className="flex items-center gap-2 text-neutral-400 hover:text-[#c19b6c] transition-all duration-300"
        >
          <ArrowLeft size={18} />

          {backLabel}
        </button>

        <h1 className="text-5xl font-bold mt-8">{title}</h1>

        <p className="text-neutral-400 mt-3">{subtitle}</p>
      </div>
    </div>
  );
}

export default PageHeader;
