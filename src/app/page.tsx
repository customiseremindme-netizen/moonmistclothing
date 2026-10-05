import Navigation from "@/components/navigation/Navigation";
import Preloader from "@/components/motion/Preloader";
import MotionProvider from "@/components/motion/MotionProvider";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Products from "@/components/sections/Products";
import GarmentStory from "@/components/sections/GarmentStory";
import Process from "@/components/sections/Process";
import FactoryStory from "@/components/sections/FactoryStory";
import Quality from "@/components/sections/Quality";
import Audiences from "@/components/sections/Audiences";
import WhyMoonMist from "@/components/sections/WhyMoonMist";
import Gallery from "@/components/sections/Gallery";
import BigCta from "@/components/sections/BigCta";
import EnquiryForm from "@/components/sections/EnquiryForm";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import StructuredData from "@/components/StructuredData";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[200] rounded-full bg-ink px-5 py-3 text-sm text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Preloader />
      <Navigation />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Capabilities />
        <Products />
        <GarmentStory />
        <Process />
        <FactoryStory />
        <Quality />
        <Audiences />
        <WhyMoonMist />
        <Gallery />
        <BigCta />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <MotionProvider />
      <StructuredData />
    </>
  );
}
