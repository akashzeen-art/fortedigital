"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate top footer content (emails, socials, etc.)
      tl.from(".footer-top > div, .footer-top a", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
      });

      // Animate big "Let's Grow" per letter
      tl.from(
        ".footer-title span",
        {
          yPercent: 120,
          opacity: 0,
          duration: 0.6,
          ease: "power4.out",
          stagger: 0.05,
        },
        "-=0.3"
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={footerRef}
      className="relative z-[999] h-auto min-h-[60vh] sm:min-h-[50vh] md:h-[70vh] flex flex-col justify-between p-6 pt-10 pb-2 mt-16  bg-background"
    >
      {/* Top footer content */}
      <div className="md:w-7/10 mx-auto footer-top flex flex-col md:flex-row md:justify-between md:mt-10 gap-10 text-sm text-gray-600">
        <div>
          <p className="font-medium text-black">General Questions</p>
          <p>info@fortedigital.com</p>
          <p className="mt-4 font-medium text-black">Business Enquiries</p>
          <p>business@fortedigital.com</p>
          <p className="mt-4 font-medium text-black">Address</p>
          <p>417, 4th Floor, Tower A</p>
          <p>Spaze I Tech Park, Sohna Road</p>
          <p>Gurugram, Haryana - 122018</p>
        </div>

        <div>
          <p className="font-medium text-black">Socials</p>
          <ul className="space-y-1">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>

        <div>
          <p>Ready to scale your digital business?</p>
          <a href="#" className="underline text-black font-semibold">
            Let&apos;s Grow Together
          </a>
          <p className="mt-6 text-xs text-gray-400">
            Copyright &copy; 2026 All rights reserved | FORTE DIGITAL SOLUTIONS LLP
          </p>
        </div>
      </div>

      {/* Giant footer text */}
      <h2 className="footer-title text-[12vw] font-semibold text-center text-black leading-none overflow-hidden whitespace-nowrap">
        {"Let's Grow".split("").map((ch, idx) => (
          <span key={idx} className="inline-block overflow-hidden">
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default Footer;
