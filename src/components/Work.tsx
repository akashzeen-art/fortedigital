"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";

const services: Service[] = [
  {
    id: 1,
    title: "OTT Platform",
    description: "One Platform. Unlimited Stories. Endless Inspiration.",
    subDescription:
      "Experience the perfect blend of global cinema, Bollywood magic, and lifestyle excellence—bringing entertainment, culture, and inspiration together in one destination.",
    heading: "Where Hollywood Meets Bollywood & Lifestyle Entertainment",
    body: "Step into a world of limitless entertainment with our all-in-one OTT platform, featuring the finest collection of Hollywood hits, Bollywood blockbusters, exclusive originals, and premium lifestyle content. Whether you're a movie enthusiast, series binge-watcher, or someone seeking inspiration for modern living, our platform delivers a seamless entertainment experience for every audience.\n\nDiscover the latest Hollywood releases, iconic Bollywood favorites, gripping web series, and engaging lifestyle programming covering travel, fashion, food, wellness, fitness, luxury, and culture. With fresh content added regularly, there's always something new to watch, explore, and enjoy.",
    media: { type: "video", url: "https://www.youtube.com/embed/dA0VGEbbw4g" },
  },
  {
    id: 2,
    title: "Astrology",
    description: "Your Journey. Your Destiny. Written in the Stars.",
    subDescription: "Unlock the Secrets of Your Stars",
    heading: "Discover the Power of the Cosmos",
    body: "Discover the power of astrology and gain deeper insights into your life, relationships, career, health, and future through our comprehensive astrology platform. Combining ancient wisdom with modern technology, we bring personalized astrological guidance directly to your fingertips.\n\nWhether you're seeking daily guidance, exploring your birth chart, checking compatibility, or consulting experienced astrologers, our platform offers trusted insights to help you make informed decisions and navigate life's journey with confidence.\n\nExplore, understand, and embrace the cosmic forces shaping your life with trusted astrological insights and expert guidance.",
    media: { type: "video", url: "https://www.youtube.com/embed/lJIrF4YjHfQ" },
  },
  {
    id: 3,
    title: "SuitX",
    description: "SuitX – All-in-One Digital Utility & Entertainment Suite",
    subDescription:
      "SuitX is a unified digital lifestyle bundle—combining security, connectivity, and entertainment into one powerful subscription.",
    heading: "What SuitX Offers",
    body: "SuitX is a bundled digital subscription service that combines essential utilities and entertainment into a single, seamless platform designed for today's always-connected users.\n\nIt brings together VPN security, Wi-Fi optimization, device protection, premium content, and gaming—eliminating the need for multiple apps and subscriptions.\n\n• Secure VPN Access — Ensures private, encrypted browsing with unrestricted access to global content.\n\n• Wi-Fi Extender / Booster — Enhances internet speed, coverage, and stability for a smoother online experience.\n\n• Advanced Anti-Virus Protection — Safeguards devices against malware, phishing, and cyber threats in real time.\n\n• Video-on-Demand (VOD) — Access to a curated library of movies, shows, and digital content.\n\n• Unlimited HTML5 Gaming — Instant, no-download gaming across multiple genres—accessible anytime, anywhere.\n\nSuitX simplifies the digital lifestyle: one subscription → multiple services, cost efficiency vs standalone apps, seamless access across devices, optimized for telecom bundling & DCB billing.",
    media: { type: "video", url: "https://www.youtube.com/embed/9No-FiEInLA" },
  },
  {
    id: 4,
    title: "mVAS",
    description: "Mobile Digital Value-Added Services (mVAS)",
    subDescription:
      "Our mVAS portfolio delivers scalable, revenue-generating digital services through partnerships with 30+ mobile operators across 17 countries in Asia, the Middle East, Africa, Europe, and Latin America.",
    heading: "Core Service Offerings",
    body: "Using AI personalization, cloud-native platforms, carrier billing, analytics, APIs, and 5G-ready technologies, we help operators increase subscriber engagement, retention, and ARPU.\n\nServices are deployed across India, UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Egypt, South Africa, Kenya, Nigeria, Sri Lanka, Nepal, and Bangladesh.\n\n1. Gaming and eSports Platforms\n\n2. Lifestyle Services\n• News, Infotainment, and Education services\n• Quizzes & Skill Based Contests\n\n3. Direct Carrier Billing (DCB)\n• Subscription management platforms\n• Mobile wallets and payment integrations\n• One-click and recurring billing solutions\n• Fraud prevention and risk management\n\n4. Digital Advertising & Customer Acquisition\n• Performance Marketing\n• Subscriber Acquisition and Retention programs\n• Real-Time Bidding & Programmatic Advertising\n\nThis ecosystem makes us a trusted partner for telecom operators, content providers, enterprises, and digital brands expanding across emerging and developed markets.",
    media: { type: "video", url: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
  },
];

type Service = {
  id: number;
  title: string;
  description: string;
  subDescription?: string;
  heading?: string;
  body?: string;
  media: { type: "image" | "video"; url: string };
};

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".work-title span", {
      y: "100%",
      duration: 0.6,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative z-[400] h-fit p-4">
      <h2 className="text-3xl max-w-[950px] overflow-hidden work-title">
        <span className="block">What We Offer</span>
      </h2>
      <div className="min-h-screen">
        {services.map((service) => (
          <Card key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Work;

const Card: React.FC<Service> = ({
  id,
  title,
  description,
  subDescription,
  heading,
  body,
  media,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop === 0 && e.deltaY < 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0;
      if (!atTop && !atBottom) e.stopPropagation();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="sticky top-16 left-0 bg-background h-[calc(100vh-4rem)] flex flex-col lg:flex-row justify-between my-5 p-2 md:p-4 overflow-hidden">

      {/* Left: number + title */}
      <div className="flex-[0.3] md:flex-[0.4] flex flex-row justify-between items-start p-2 pb-0 md:pb-2">
        <h2 className="text-7xl md:text-9xl font-medium">{id}</h2>
        <h4 className="text-xl">{title}</h4>
      </div>

      {/* Right: text + video */}
      <div className="flex-[0.7] md:flex-[0.55] flex flex-col justify-between items-start gap-3 -mt-4 md:mt-0 lg:gap-3 overflow-hidden">

        {/* Scrollable text */}
        <div
          ref={textRef}
          className="flex flex-col gap-3 overflow-y-auto hide-scrollbar w-full"
          style={{ maxHeight: "calc(100vh - 30rem)" }}
        >
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">{description}</p>
          {subDescription && (
            <p className="text-sm sm:text-base lg:text-lg text-[#5a6a85]">{subDescription}</p>
          )}
          {heading && (
            <h5 className="text-base sm:text-lg lg:text-xl font-medium text-[#333]">{heading}</h5>
          )}
          {body &&
            body.split("\n\n").map((para, i) => (
              <p key={i} className="text-xs sm:text-sm lg:text-base text-[#5a6a85] leading-relaxed">
                {para}
              </p>
            ))}
        </div>

        {/* Video — always visible at bottom */}
        <div className="w-full shrink-0">
          {media.type === "image" ? (
            <Image
              src={media.url}
              alt={title}
              width={300}
              height={200}
              className="h-[140px] w-full lg:h-[200px] lg:w-[300px] object-cover rounded-lg"
            />
          ) : (
            <iframe
              src={`${media.url}?autoplay=1&mute=1&controls=0&loop=1&playlist=${media.url.split("/").pop()}`}
              title={title}
              className="h-[140px] w-full lg:h-[200px] lg:w-[300px] rounded-lg"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

      </div>
    </div>
  );
};
