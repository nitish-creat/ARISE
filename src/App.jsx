import React, { useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/hero/hero";
import Info from "./components/hero/info";
import Benifits from "./components/hero/benifits";
import Footer from "./components/footer/Footer";
import Form from "./components/footer/form";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import StarsBackground from "./components/StarsBackground";
import Contact from "./components/footer/Contact";
import { FaAngleDoubleDown } from "react-icons/fa";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>

      <Navbar />
      <Hero />
      <Info />
      <Benifits />
      <div className="relative w-full bg-[#020521] overflow-hidden">
        <StarsBackground />
        
        <div className="relative z-10 flex flex-col md:flex-row justify-evenly items-center py-10">
          <Footer />
          <Form />
        </div>
        <div className="relative w-full bg-[#020521] overflow-hidden">
          <StarsBackground />
          <div><Contact /></div>
        </div>

      </div>
    </>
  );
}

export default App;
