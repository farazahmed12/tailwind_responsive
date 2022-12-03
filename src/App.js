import React from "react";
import Analytics from "./components/Analytics";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Cards from "./components/Cards.js";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
    </div>
  );
}

export default App;
