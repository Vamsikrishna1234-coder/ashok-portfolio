import React from "react";
import Navbar from "../components/header";
import Hero from "../components/herosection";
import AboutSection from "../components/About";
import PortfolioWorks from "../components/Works";
import ContactSection from "../components/Contact";

export default function Home() {
  return (
    <>

      <Navbar />
       <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="works">
        <PortfolioWorks />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    
    </>
  );
}
