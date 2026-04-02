"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

const companies = [
  "/company/ibm.svg",
  "/company/delta.svg",
  "/company/mc-donlad.svg",
  "/company/clear-street.svg",
  "/company/calme.svg",
  "/company/double-circle.svg",
  "/company/unileaver.svg",
  "/company/nanigator.svg",
];

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
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex-1">
          <h2 className=" text-3xl overflow-hidden">
            <span className="block achievements-text">Global Partners</span>
          </h2>
        </div>
        <div className="flex-1 flex flex-col mt-5">
          <div className="text-sm overflow-hidden ">
            {`We work with leading telecom operators, global brands, and digital platforms across MEA and beyond. Our performance-driven ecosystem connects advertisers, publishers, and operators to deliver measurable results at scale.`
              .split(" ")
              .map((ch, idx) => (
                <p
                  key={idx}
                  className="inline-block mr-2  overflow-hidden leading-[0.9] "
                >
                  <span className="block achievements-text ">{ch}</span>
                </p>
              ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 mt-10 gap-3 md:gap-6">
            {["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Nigeria", "Kenya", "South Africa", "Ghana", "Egypt", "Iraq"].map((market, idx) => (
              <span key={idx} className="achievements-text text-sm font-medium border border-gray-300 rounded-full px-4 py-2 text-center">
                {market}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-12 md:mt-20 overflow-hidden ">
        <div className="flex flex-col overflow-hidden ">
          <h5 className="text-lg -mb-3 ml-2 overflow-hidden">
            <span className="achievements-text">Years of expertise</span>
          </h5>
          <h2
            ref={numberRef}
            className="text-8xl md:text-[9rem] font-bold tracking-tight overflow-hidden "
            style={{ minWidth: "6ch" }}
          >
            0
          </h2>
        </div>
        <h4 className=" text-sm mt-5 max-w-xs md:max-w-md ml-auto overflow-hidden">
          <span className="achievements-text">
            {`Over 12 years of telecom and MVAS expertise. Strong global presence across MEA. Performance-driven affiliate ecosystem with compliance-focused operations and scalable, innovative solutions.`
              .split(" ")
              .map((ch, idx) => (
                <p
                  key={idx}
                  className="inline-block mr-2  overflow-hidden leading-[0.9]"
                >
                  <span className="block achievements-text  ">{ch}</span>
                </p>
              ))}
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Achievements;
