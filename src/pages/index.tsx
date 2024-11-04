import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurBusinessNature from "@/components/OurBusinessNature";
import OurClient from "@/components/OurClient";
import OurGoal from "@/components/OurGoal";
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
      <OurGoal />
      <OurBusinessNature />
      <Footer />
    </>
  );
}
