import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const services = [
  {
    id: 1,
    title: "OTT Platform",
    description: "One Platform. Unlimited Stories. Endless Inspiration.",
    body: "Experience the perfect blend of global cinema, Bollywood magic, and lifestyle excellence—bringing entertainment, culture, and inspiration together in one destination. Step into a world of limitless entertainment with our all-in-one OTT platform, featuring Hollywood hits, Bollywood blockbusters, exclusive originals, and premium lifestyle content.",
    tags: ["Hollywood & Bollywood", "Exclusive Originals", "Live Entertainment", "Lifestyle Content"],
  },
  {
    id: 2,
    title: "Astrology",
    description: "Your Journey. Your Destiny. Written in the Stars.",
    body: "Discover the power of astrology and gain deeper insights into your life, relationships, career, health, and future. Combining ancient wisdom with modern technology, we bring personalized astrological guidance directly to your fingertips.",
    tags: ["Daily Horoscopes", "Birth Chart", "Compatibility", "Expert Consultations"],
  },
  {
    id: 3,
    title: "SuitX",
    description: "All-in-One Digital Utility & Entertainment Suite",
    body: "SuitX is a unified digital lifestyle bundle—combining security, connectivity, and entertainment into one powerful subscription. It brings together VPN security, Wi-Fi optimization, device protection, premium content, and gaming.",
    tags: ["VPN Security", "Wi-Fi Booster", "Anti-Virus", "VOD & Gaming"],
  },
  {
    id: 4,
    title: "mVAS",
    description: "Mobile Digital Value-Added Services",
    body: "Our mVAS portfolio delivers scalable, revenue-generating digital services through partnerships with 30+ mobile operators across 17 countries in Asia, the Middle East, Africa, Europe, and Latin America.",
    tags: ["Direct Carrier Billing", "Gaming & eSports", "Performance Marketing", "Telecom Integration"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-background pt-20">

        {/* Hero */}
        <section className="px-6 md:px-16 lg:px-32 py-20 border-b border-[#d0d0d0]">
          <span className="text-2xl md:text-4xl font-semibold text-[#5a6a85]">Our Services</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-[#111] mt-4 max-w-5xl leading-tight">
            Powering Digital Growth Across Content, Technology & Monetization.
          </h1>
          <p className="text-[#444444] text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
            From OTT entertainment to telecom monetization, we deliver end-to-end digital solutions that scale.
          </p>
        </section>

        {/* Services Grid */}
        <section className="px-6 md:px-16 lg:px-32 py-16 flex flex-col gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="sticky top-20 flex flex-col md:flex-row gap-8 border border-[#d0d0d0] p-8 rounded-2xl bg-white shadow-md"
              style={{ zIndex: 10 + i }}
            >
              <div className="md:w-1/2">
                <span className="text-5xl font-bold text-[#eeeeee]">{String(service.id).padStart(2, "0")}</span>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#111] mt-2">{service.title}</h3>
                <p className="text-[#5a6a85] text-lg mt-2 font-medium">{service.description}</p>
                <p className="text-[#444444] text-sm md:text-base leading-relaxed mt-4">{service.body}</p>
              </div>
              <div className="md:w-1/2 flex flex-wrap gap-3 content-start mt-4 md:mt-8">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="text-sm font-medium border border-gray-300 rounded-full px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
