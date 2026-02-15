import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Benefits from "@/components/Benefits";
import Curriculum from "@/components/Curriculum";
import Target from "@/components/Target";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home(): React.ReactElement {
  return (
    <div className="bg-black min-h-screen text-white pb-20">
      <Navigation />
      <Hero />
      <Intro />
      <Benefits />
      <Curriculum />
      <Target />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
