import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { BeforeAfterShowcase } from "@/components/sections/BeforeAfterShowcase";
import { WhyChooseFaure } from "@/components/sections/WhyChooseFaure";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <FeaturedProjects />
        <BeforeAfterShowcase />
        <WhyChooseFaure />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
