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
import Learn from "./components/Learn/Learn";
import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Login from "./components/pages/login";
import Combine from "./components/footer/combine";
import Dashboard from "./components/Dashboard/Dashboard";
import AddTodo from "./components/Dashboard/addtodo";
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Info />
              <Benifits />
              <Combine />
            </>
          }
        ></Route>
        <Route path="/Arise/learn" element={<Learn />}></Route>
        <Route path="/Arise/login" element={<Login />}></Route>
        <Route path="/Arise/combine" element={<Combine />}></Route>
        <Route path="/Arise/Dashboard" element={<Dashboard />}></Route>
        <Route path="/add" element={<AddTodo />}></Route>
      </Routes>
    </>
  );
}

export default App;
