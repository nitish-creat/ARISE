import React from 'react';
import StarsBackground from '../StarsBackground';
import Footer from './Footer';
import Form from './form';
import Contact from './Contact';
function Combine() {
  return (
   <div className="relative w-full bg-[#020521] overflow-hidden">
                  <StarsBackground />
                  <div className="relative z-10 flex flex-col md:flex-row justify-evenly items-center py-10">
                    <Footer />
                    <Form />
                  </div>
                  <div className="relative w-full bg-[#020521] overflow-hidden">
                    <StarsBackground />
                     <div><Contact/></div>
                  </div>
                </div>
  );
}

export default Combine;