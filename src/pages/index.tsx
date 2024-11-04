import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurClient from "@/components/OurClient";
import OurPhilosphy from "@/components/OurPhilosphy";
import OurService from "@/components/OurService";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurService />
      <OurClient />
      <OurPhilosphy />
      <Footer />
    </>
  );
}
