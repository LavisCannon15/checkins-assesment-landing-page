 import React from "react";
 import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__header">Simplify Your Corporate Travel</h1>
        <p className="hero__subheader">
          Discover seamless travel management solutions with TravelEase, your
          trusted partner for business travel excellence.
        </p>
        <a href="#signup" className="btn-primary-hero">
          Get Started
        </a>
      </div>
      <div className="hero__image">
        
      </div>
    </section>
  );
};

export default Hero;