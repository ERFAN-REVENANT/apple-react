import React from "react";
import NavBar from "./assets/components/NavBar";
import Highlights from "./assets/components/Highlights";
import Hero from "./assets/components/Hero";
import "../public/tailwind.css";
import Model from "./assets/components/Model";
import Features from "./assets/components/Features";

const App = () => {
  return (
    <main className="bg-black">
      <NavBar></NavBar>
      <Hero></Hero>
      <Highlights></Highlights>
      <Model></Model>
      <Features></Features>
    </main>
  );
};

export default App;
