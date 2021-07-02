import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Thumbnail from "../Thumbnail";

function Home() {
  return (
    <>
      <HeroSection />
      <Thumbnail />
      <Cards />
    </>
  );
}

export default Home;
