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
      tl.from(".footer-top > div", {
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
          <p className="mt-4 font-medium text-black flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Address
          </p>
          <p>417, 4th Floor, Tower A</p>
          <p>Spaze I Tech Park, Sohna Road</p>
          <p>Gurugram, Haryana - 122018</p>
        </div>

        <div>
          <p className="font-medium text-black">Socials</p>
          <ul className="space-y-2 mt-1">
            <li>
              <a href="https://x.com/Forte_llp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/130913930" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0077B5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61590491500206" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span>Facebook</span>
              </a>
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
