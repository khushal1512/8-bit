import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HowItHelps from "./components/HowItHelps/Latest";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden ">
      <Navbar />
      <Hero />
      <HowItHelps />
      <Footer />
    </main>
  );
};

export default App;
