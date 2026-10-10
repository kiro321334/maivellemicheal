import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Numbers from "@/components/sections/Numbers";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Tools from "@/components/sections/Tools";
import Process from "@/components/sections/Process";
import Reviews from "@/components/sections/Reviews";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Brands from "@/components/sections/Brands";
export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Brands />
        <Numbers />
        <About />
        <Work />
        <Services />
        <Tools />
        <Process />
        <Reviews />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
