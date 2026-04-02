"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    company: "/company/ibm.svg",
    quote:
      "Forte Digital transformed our telecom monetization strategy. Their DCB integration was seamless, and the AI-powered engagement products delivered results we had not seen before. A truly performance-driven partner.",
    name: "Sophia Martinez",
    role: "Global Brand Director, IBM",
  },
  {
    company: "/company/delta.svg",
    quote:
      "Working with Forte Digital gave us access to premium MVAS inventory across MEA markets. Their compliance-first approach and real-time tracking gave us full confidence in every campaign we ran together.",
    name: "James Carter",
    role: "VP of Customer Experience, Delta",
  },
  {
    company: "/company/unileaver.svg",
    quote:
      "Forte Digital is not just a vendor — they are a strategic growth partner. Their deep telecom expertise and AI product ecosystem helped us unlock new revenue streams and engage users in ways we never imagined.",
    name: "Mandlina Covachiu",
    role: "Global Brand Manager, Unilever",
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading
    gsap.from(".Testimonials span", {
      y: "100%",
      duration: 0.6,
      stagger: 0.05,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
      },
    });

    // Horizontal scroll
    const slider = sliderRef.current;
    const sections = slider.querySelectorAll(
      ".testimonial"
    ) as NodeListOf<HTMLElement>;

    let totalWidth = 0;
    sections.forEach((section) => {
      totalWidth += section.offsetWidth;
    });
    totalWidth -= containerRef.current.offsetWidth;

    gsap.to(slider, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + totalWidth,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={containerRef} className="relative p-6">
      {/* heading */}
      <div className=" flex flex-col md:flex-row gap-5 md:gap-20 mb-10 p-2">
        <h2 className="text-3xl max-w-[950px] overflow-hidden Testimonials">
          <span className="block">Testimonials</span>
        </h2>
        <p className="max-w-[280px] md:max-w-sm text-sm leading-[1] text-gray-600">
          {"Our partners and clients across MEA trust Forte Digital to deliver scalable, compliant, and high-converting digital solutions every time."
            .split(" ")
            .map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-1">
                <span className="block">{word}</span>
              </span>
            ))}
        </p>
      </div>

      {/* horizontal track */}
      <div className="overflow-hidden">
        <div ref={sliderRef} className="flex h-[80vh]">
          {testimonials.map((review, idx) => (
            <div
              key={idx}
              className="testimonial shrink-0 w-screen md:w-[60vw] flex flex-col justify-center p-2 md:p-8"
            >

              <p className="text-lg sm:text-xl md:text-3xl font-medium leading-snug mb-6  pr-4 sm:pr-16">
                &ldquo;{review.quote}&rdquo;
              </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
