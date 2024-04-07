import React from "react";

const HeroSection = ({callback}) => {
  return (
    <section
      className="bg-hero min-h-screen bg-cover bg-center flex flex-col justify-center items-center uppercase text-white w-full font-bold tracking-wider"
      id="about"
    >
      <img
        src="/images/logo.png"
        alt="logo"
        className="absolute top-40 left-96 w-48"
      />
      <h1 className="2xl:text-7xl text-6xl mt-32">the best foodie</h1>
      <h1 className="2xl:text-9xl text-8xl tracking-wide">experience</h1>
      <p className="2xl:text-5xl text-4xl">now in london</p>
    </section>
  );
};

export default HeroSection;
