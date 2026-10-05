import Navigation from "@/components/navigation/Navigation";
import Preloader from "@/components/motion/Preloader";
import MotionProvider from "@/components/motion/MotionProvider";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Materials from "@/components/sections/Materials";
import Products from "@/components/sections/Products";
import Process from "@/components/sections/Process";
import BulkProduction from "@/components/sections/BulkProduction";
import Quality from "@/components/sections/Quality";
import WhyMoonMist from "@/components/sections/WhyMoonMist";
import Gallery from "@/components/sections/Gallery";
import BigCta from "@/components/sections/BigCta";
import EnquiryForm from "@/components/sections/EnquiryForm";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import StructuredData from "@/components/StructuredData";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[200] rounded-full bg-fg px-5 py-3 text-sm text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
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
        <Materials />
        <Products />
        <Process />
        <BulkProduction />
        <Quality />
        <WhyMoonMist />
        <Gallery />
        <BigCta />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MotionProvider />
      <StructuredData />
    </>
  );
}
