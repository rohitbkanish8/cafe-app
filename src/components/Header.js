import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-end gap-16 uppercase 2xl:text-xl text-lg z-50">
      <div className="flex items-end gap-16 font-medium">
        <p className="2xl:text-4xl text-3xl">LOGO</p>
        <a href="#about">about</a>
        <a href="#community">community</a>
        <a href="#location">location</a>
        <a href="#menu">our menu</a>
        <a href="#recipes">recipes</a>
      </div>
      <div className="flex items-end gap-16">
        <a href="#contact">contact</a>
        <a href="#">login</a>
      </div>
    </div>
  );
};

export default Header;
