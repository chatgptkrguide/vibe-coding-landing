"use client";

import { useState, useEffect } from "react";

export default function Navigation(): React.ReactElement {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50"
          : "bg-zinc-950/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-black text-highlight">
          VIBE CODING
        </a>

        <div className="hidden sm:flex items-center gap-8">
          <a
            href="#curriculum"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            커리큘럼
          </a>
          <a
            href="#target"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            수강대상
          </a>
          <a
            href="#pricing"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            수강료
          </a>
          <a
            href="#pricing"
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors"
          >
            신청하기
          </a>
        </div>
      </div>
    </nav>
  );
}
