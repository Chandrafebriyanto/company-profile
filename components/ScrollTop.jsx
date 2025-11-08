'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <Link
      href={"#Home"}
      className={`fixed bottom-10 right-10 bg-slate-800 text-white w-12 h-12 rounded-full hover:bg-slate-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <i className="ri-arrow-up-line ri-2x"></i>
    </Link>
  );
}

export default ScrollTop;
