import { useEffect, useState } from "react";

type SplashScreenProps = {
  onFinish: () => void;
};

function SplashScreen({ onFinish }: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);

  useEffect(() => {
    // Hold splash for 2.8 seconds
    const timer1 = setTimeout(() => {
      setFadeSplash(true);
    }, 2800);

    // Fade out completely after 1.5 seconds
    const timer2 = setTimeout(() => {
      setShowSplash(false);
      onFinish();
    }, 4300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  if (!showSplash) return null;

  return (
    <>
      {/* Animation */}
      <style>{`
        @keyframes cinematic-blur-fade {
          0% {
            opacity: 0;
            filter: blur(12px);
            transform: scale(0.95);
            letter-spacing: 0.2em;
          }

          100% {
            opacity: 1;
            filter: blur(0px);
            transform: scale(1);
            letter-spacing: 0.4em;
          }
        }

        .animate-cinematic {
          animation: cinematic-blur-fade 2.5s cubic-bezier(0.2, 0.8, 0.2, 1)
            forwards;
        }
      `}</style>

      <div
        className={`fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-between transition-opacity duration-[1500ms] ease-in-out ${
          fadeSplash ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex-1 flex items-center justify-center w-full">
          <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-serif uppercase ml-[0.4em] animate-cinematic">
            BLAQ
          </h1>
        </div>

        <div className="pb-10 text-center animate-in fade-in duration-1000 delay-[1500ms] fill-mode-both">
          <p className="text-gray-500 text-[9px] md:text-[10px] tracking-widest uppercase">
            Copyright © 2026 BLAQ Platform. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default SplashScreen;
