import React from "react";

const LocationSection = () => {
  return (
    <section className="h-[60vh] bg-center bg-location bg-cover p-32" id="location">
      <div className="bg-white p-4 w-fit relative">
        <h1 className="absolute text-6xl tracking-wide font-extrabold -top-4 mb-2">LOCATION</h1>
        <p className="text-lg mt-8 font-gill">
          12 Upper St. Martin’s Lane
          <br /> WC2H 9FB, London
        </p>
      </div>
    </section>
  );
};

export default LocationSection;
