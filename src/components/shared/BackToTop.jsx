import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrolled > 50);

      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = height > 0 ? (scrolled / height) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Force visible for testing if you want, but let's try with pageYOffset
  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-8 right-6 z-[999999] flex flex-col items-center group active:scale-95 transition-transform"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ cursor: 'pointer', pointerEvents: 'auto' }}
    >
      {/* Progress Pill */}
      <div className="relative flex flex-col items-center">
         {/* Percentage */}
         <div className="mb-2 bg-black/80 text-white text-[8px] font-bold px-1.5 py-0.5 rounded tabular-nums">
            {Math.round(scrollProgress)}%
         </div>

         {/* The Pill */}
         <div className="w-1.5 h-16 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden relative border border-black/5 shadow-sm">
            <div 
               className="absolute top-0 left-0 w-full bg-[#0048FF] transition-all duration-200"
               style={{ height: `${scrollProgress}%` }}
            />
         </div>

         {/* The Circle with Arrow */}
         <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0048FF] text-white flex items-center justify-center shadow-lg border border-white/20">
            <ChevronUp className="w-5 h-5" />
         </div>
      </div>
    </div>
  );
}
