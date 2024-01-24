
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Info from "./components/Info";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
    <div className="w-4/5 mx-auto max-sm:w-11/12 ">
      <NavBar />
      <Hero />
      <Info />
      <HowItWorks />
      <AboutUs />
      <Features />
      <Testimonials />

    </div>
    <Footer />
    </>
  );
}
