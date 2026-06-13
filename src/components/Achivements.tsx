"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Achievements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !numberRef.current) return;

    const ctx = gsap.context(() => {
      // Animate heading + paragraph text
      gsap.from(".achievements-text  ", {
        y: "100%",
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate company logos
      gsap.from(".logo", {
        opacity: 0,
        scale: 0.6,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Counter + Slide-in combined timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      const obj = { val: 0 };

      tl.from(numberRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }).to(obj, {
        val: 12,
        duration: 2,
        ease: "power1.out",
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.innerText = Math.floor(obj.val).toString();
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-fit lg:min-h-screen p-4 lg:p-10 overflow-hidden "
    >
      <div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
          <h2 className="text-4xl md:text-5xl font-bold overflow-hidden shrink-0">
            <span className="block achievements-text text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-gray-400 w-fit">Global Partners</span>
          </h2>
          <p className="text-lg md:text-xl achievements-text md:max-w-[55%] leading-relaxed">
            {`We work with leading telecom operators, global brands, and digital platforms across MEA and beyond. Our performance-driven ecosystem connects advertisers, publishers, and operators to deliver measurable results at scale.`}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {["Zain Group", "Digicel Group", "Ooredoo Group", "Amazon Web Services", "Hostinger", "Etisalat", "Hutch", "PayU", "NextGen", "2000 Charge", "One Click", "HDFC", "ICICI", "Traffic Company", "Propellor Ads", "Golden Goose", "Google India", "Meta Business", "TeleCMI", "Zoho Business", "Epic Company", "Duns and Bradstreet ", "IFX", "IAMAI"].map((partner, idx) => (
            <span key={idx} className="achievements-text text-sm font-medium border border-gray-300 rounded-full px-4 py-2 text-center">
              {partner}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-12 md:mt-20 gap-8 md:gap-16">
        <div className="flex flex-col shrink-0">
          <h5 className="text-base font-medium text-gray-500 overflow-hidden">
            <span className="achievements-text">Years of expertise</span>
          </h5>
          <h2
            ref={numberRef}
            className="text-8xl md:text-[9rem] font-bold tracking-tight overflow-hidden"
            style={{ minWidth: "4ch" }}
          >
            0
          </h2>
        </div>
        <div className="flex-1 flex items-center">
          <p className="achievements-text text-lg md:text-2xl leading-relaxed text-justify w-full">
            {`We are driven by agility, innovation, and accountability—constantly adapting to evolving digital ecosystems while delivering scalable and profitable solutions. At our core, we are not just service providers; we are growth partners—building sustainable digital businesses and unlocking new revenue streams across markets.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
