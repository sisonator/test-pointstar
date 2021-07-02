import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/vaccine-animation.mp4" autoPlay loop muted />
      <h1>GET VACCINATED, NOW.</h1>
      <p>
        "Only 20% of Indonesian citizens have been vaccinated. Let's end this
        pandemic together, to make our world recover."
      </p>
      <div className="hero-btns">
        <Link to="/">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            buttonColor="orange"
          >
            Apply Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
