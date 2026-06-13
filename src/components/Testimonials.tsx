"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "I subscribed primarily for the OTT package and was pleasantly surprised by the variety of content available. The streaming quality is excellent, and having movies, web series, and live entertainment in one place has made it my family's preferred entertainment platform.",
    name: "Rahul S.",
    role: "Mumbai",
  },
  {
    quote: "As someone who travels frequently, a reliable VPN is essential. The service has been fast, secure, and incredibly easy to use. I can access my work and favorite content safely wherever I am.",
    name: "Arjun M.",
    role: "Bengaluru",
  },
  {
    quote: "I was initially skeptical about online astrology, but the personalized consultations were insightful and practical. The guidance helped me make important career decisions with greater confidence.",
    name: "Akash S.",
    role: "Delhi",
  },
  {
    quote: "The astrology sessions are detailed, professional, and easy to understand. I particularly appreciate the daily insights and personalized recommendations, which have become a part of my routine.",
    name: "Priya R.",
    role: "Pune",
  },
  {
    quote: "What I love most is the convenience of having multiple digital services under a single subscription. From streaming my favorite shows to browsing securely with the VPN, everything works seamlessly.",
    name: "Neha G.",
    role: "Hyderabad",
  },
  {
    quote: "The platform delivers excellent value for money. Instead of managing multiple subscriptions, I get entertainment, privacy, and lifestyle services in one place. The customer support team has also been responsive whenever needed.",
    name: "Anonymous",
    role: "Subscription Bundle",
  },
  {
    quote: "The astrologers are knowledgeable and approachable. The sessions feel personalized rather than generic, and the insights have helped me plan important personal and professional milestones.",
    name: "Pooja J.",
    role: "Astrology Service",
  },
  {
    quote: "The VPN performance has been consistently reliable, especially when I'm traveling internationally. Combined with premium entertainment access, it's a service I use every day.",
    name: "Abhishek P.",
    role: "VPN + OTT",
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

    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

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
        <p className="flex-1 text-base md:text-xl leading-relaxed text-gray-600">
          {"Our partners and clients across MEA trust Forte Digital to deliver scalable, compliant, and high-converting digital solutions every time."}
        </p>
      </div>

      {/* horizontal track */}
      <div className="overflow-hidden">
        <div ref={sliderRef} className="flex md:h-[60vh]">
          {testimonials.map((review, idx) => (
            <div
              key={idx}
              className="testimonial shrink-0 w-[90vw] md:w-[60vw] flex flex-col justify-start pt-0 p-6 pr-10 md:p-12 border-r border-gray-200"
            >
              <p className="text-base sm:text-lg md:text-2xl font-medium leading-relaxed mb-4">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-2">
                <p className="text-base font-semibold text-black">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
