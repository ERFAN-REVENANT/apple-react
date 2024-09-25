import React from "react";
import NavBar from "./assets/components/NavBar";
import Highlights from "./assets/components/Highlights";
import Hero from "./assets/components/Hero";
import "../public/tailwind.css";
import Model from "./assets/components/Model";

const App = () => {
  return (
    <main className="bg-black">
      <NavBar></NavBar>
      <Hero></Hero>
      <Highlights></Highlights>
      <Model></Model>
    </main>
  );
};

export default App;
