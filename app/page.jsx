import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portafolio from "@/components/Portafolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <Portafolio/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}
