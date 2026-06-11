import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cards = [
  {
    label: "Our Mission",
    title: "To Become a Global Leader",
    text: "Digital Entertainment, Astrology, Lifestyle, Payments, and Digital Innovation.",
    accent: "#5a6a85",
  },
  {
    label: "Our Ecosystem",
    title: "A Connected Digital World",
    text: "We envision a world where entertainment, technology, lifestyle, and personalized digital experiences come together to enrich everyday life. Our goal is to create a connected digital ecosystem that empowers consumers with premium OTT entertainment, trusted astrology services, engaging lifestyle content, seamless digital payments, and innovative value-added services accessible anytime, anywhere.",
    accent: "#7a6a9a",
  },
  {
    label: "Our Technology",
    title: "AI • 5G • Cloud",
    text: "Through the power of Artificial Intelligence (AI), 5G, Cloud Computing, and next-generation telecom technologies, we aim to transform the way people consume content, seek guidance, make transactions, and engage with the digital world.",
    accent: "#4a7a8a",
  },
  {
    label: "Our Partnerships",
    title: "Trusted Global Partner",
    text: "With strategic partnerships across telecom operators, enterprises, content creators, and digital platforms in global markets, we aspire to become the preferred partner for delivering innovative and scalable digital solutions that drive engagement, growth, and customer satisfaction.",
    accent: "#6a8a5a",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-background pt-20">

        {/* Hero Banner */}
        <section className="px-6 md:px-16 lg:px-32 py-20 border-b border-[#d0d0d0]">
          <span className="text-2xl md:text-4xl font-semibold text-[#5a6a85]">About Us</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-[#111] mt-4 max-w-5xl leading-tight">
            To create a world where entertainment, astrology, lifestyle, and digital innovation seamlessly converge.
          </h1>
          <p className="text-[#444444] text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
            Empowering millions of people through meaningful experiences, intelligent technologies, and limitless connectivity.
          </p>
        </section>

        {/* Vision Full-Width Banner */}
        <section className="px-6 md:px-16 lg:px-32 py-16 bg-[#111] text-white">
          <span className="text-lg md:text-2xl uppercase tracking-widest font-bold bg-white text-[#111] px-4 py-1 rounded">Vision</span>
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium mt-4 max-w-4xl leading-snug">
            Empowering Digital Lives&nbsp;•&nbsp;Inspiring Everyday Experiences&nbsp;•&nbsp;Shaping the Future.
          </p>
        </section>

        {/* Cards Scroll */}
        <section className="px-6 md:px-16 lg:px-32 py-16 flex flex-col gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="sticky top-20 flex flex-col gap-4 border border-[#d0d0d0] p-8 rounded-2xl bg-white shadow-md"
              style={{ zIndex: 10 + i }}
            >
              <span
                className="text-xs uppercase tracking-widest font-medium"
                style={{ color: card.accent }}
              >
                {card.label}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-[#111]">{card.title}</h3>
              <p className="text-[#444444] text-sm md:text-base leading-relaxed">{card.text}</p>
            </div>
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
