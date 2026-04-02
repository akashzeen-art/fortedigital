"use client";
import React, { useState } from "react";
import Image from "next/image";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    // Use Lenis if available, otherwise fallback
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -64, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-black text-white px-6 md:px-12 h-16 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center cursor-pointer h-full py-2" onClick={() => scrollTo("home")}>
        <Image src="/forte-logo.png" alt="Forte Digital" width={160} height={48} className="object-contain h-24 w-auto" />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
        <li><button onClick={() => scrollTo("home")} className="hover:opacity-70 transition-opacity">Home</button></li>
        <li><button onClick={() => scrollTo("about")} className="hover:opacity-70 transition-opacity">About</button></li>
        <li><button onClick={() => scrollTo("services")} className="hover:opacity-70 transition-opacity">Services</button></li>
        <li>
          <button onClick={() => scrollTo("contact")} className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Contact
          </button>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-start gap-4 px-6 py-6 text-sm font-medium md:hidden">
          <li><button onClick={() => scrollTo("home")}>Home</button></li>
          <li><button onClick={() => scrollTo("about")}>About</button></li>
          <li><button onClick={() => scrollTo("services")}>Services</button></li>
          <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
