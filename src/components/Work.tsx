"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";

const services: Service[] = [
  {
    id: 1,
    title: "For Advertisers",
    description:
      "High-performing MVAS campaigns with global DCB inventory and AI-based engagement products for advanced targeting and optimization.",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/dA0VGEbbw4g",
    },
    services: [
      ["High-performing MVAS campaigns", "Global DCB inventory"],
      ["AI-based engagement products", "Advanced targeting & optimization"],
    ],
  },
  {
    id: 2,
    title: "For Publishers",
    description:
      "Premium in-house offers with competitive payouts, reliable tracking systems, and dedicated support to maximize your inventory.",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/lJIrF4YjHfQ",
    },
    services: [
      ["Premium in-house offers", "Competitive payouts"],
      ["Reliable tracking systems", "Dedicated support"],
    ],
  },
  {
    id: 3,
    title: "For Telecom Operators",
    description:
      "Unlock new revenue streams through DCB integrations, value-added digital services, and scalable compliant frameworks.",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/9No-FiEInLA",
    },
    services: [
      ["Monetization via DCB integrations", "Value-added digital services"],
      ["Scalable & compliant frameworks", "Enhanced user engagement"],
    ],
  },
  {
    id: 4,
    title: "AI Product Ecosystem",
    description:
      "A diverse portfolio of AI-driven platforms designed to enhance user engagement and subscription-based monetization at scale.",
    media: {
      type: "video",
      url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
    services: [
      ["myStori AI", "AI Gamopedia", "Slumberly AI", "HistroVerse AI"],
      ["AI Cosmic Astro", "AI Travel Mind", "Wellness Mind AI"],
    ],
  },
];

const Work = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".title span", {
      y: "100%",
      duration: 0.6,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative z-[400] h-fit p-4">
      {/* heading */}
      <h2 className="text-3xl max-w-[950px] overflow-hidden title">
        <span className="block">What We Offer</span>
      </h2>

      {/* card-container */}
      <div className="min-h-screen ">
        {services.map((service) => (
          <Card key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Work;

type Service = {
  id: number;
  title: string;
  description: string;
  media: {
    type: "image" | "video";
    url: string;
  };
  services: string[][];
};

const Card: React.FC<Service> = ({
  id,
  title,
  description,
  media,
  services: _services,
}) => {
  return (
    <div className="sticky top-16 left-0 bg-background  h-[calc(100vh-4rem)] flex flex-col lg:flex-row justify-between my-5 p-2 md:p-4 overflow-hidden">
      {/* Left Side */}
      <div className="flex-[0.3] md:flex-[0.4] flex flex-row justify-between items-start p-2">
        <h2 className="text-7xl md:text-9xl font-medium">{id}</h2>
        <h4 className="text-xl">{title}</h4>
      </div>

      {/* Right Side */}
      <div className="flex-[0.7] md:flex-[0.4] flex flex-col justify-between items-start gap-7 md:gap-3 mt-6 md:mt-0">
        {/* Description */}
        <p className="text-2xl sm:text-3xl">{description}</p>

        {/* Image or Video */}
        {media.type === "image" ? (
          <Image
            src={media.url}
            alt={title}
            className="h-[200px] w-[300px] object-cover"
          />
        ) : (
          <iframe
            src={`${
              media.url
            }?autoplay=1&mute=1&controls=0&loop=1&playlist=${media.url
              .split("/")
              .pop()}`}
            title={title}
            className="h-[200px] w-[300px] object-cover mt-5"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}


      </div>
    </div>
  );
};
