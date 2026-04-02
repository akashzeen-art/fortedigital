import About from "@/components/About";
import Achivements from "@/components/Achivements";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Nav />
      <Loader />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="achievements"><Achivements /></section>
      <section id="services"><Work /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Footer /></section>
    </main>
  );
}
