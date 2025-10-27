
import Header from "./components/Header";
import Hero from "./components/Hero";
import FloatingCard from "./components/floatingCard";
import Intro from "./components/Intro";
import Partners from "./components/Partners";
import Restaurants from "./components/Restaurants";
import Drivers from "./components/Drivers";
import Customers from "./components/Customers";
import WhyUs from "./components/WhyUs";
import CTAChat from "./components/CTAChat";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FloatingCard/>
      <Intro />
      <Partners />
      <Restaurants />
      <Drivers />
      <Customers />
      <WhyUs />
      <CTAChat />
      <Footer />
    </>
  );
}

