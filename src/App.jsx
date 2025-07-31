import React, { useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import Hero from './components/hero/hero'
import Info from './components/hero/info';
import Benifits from './components/hero/benifits';
import Footer from './components/Footer/footer';
import AOS  from 'aos';
import 'aos/dist/aos.css';
import './App.css'; 

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },[])
  return (
    <>
    
    <div className="w-full min-h-screen overflow-x-hidden">
    <Navbar/>
    <Hero/>
    <Info/>
    <Benifits/>
    <Footer/>
    </div>
    
    </>
  );
}

export default App;