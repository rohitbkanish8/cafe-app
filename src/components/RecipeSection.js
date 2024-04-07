import React from "react";

const RecipeSection = () => {
  return (
    <section
      className="flx flex-col gap-12 bg-white 2xl:px-40 px-32 2xl:py-32 py-24"
      id="recipes"
    >
      <div className="flex justify-between items-end gap-8 uppercase">
        <div className="flex flex-col justify-start">
          <h1 className="2xl:text-5xl text-4xl font-semibold">Popular</h1>
          <div className="relative">
            <h1 className="2xl:text-7xl text-[62px] font-semibold relative z-10">
              Recipes
            </h1>
            <div className="absolute -left-3 top-1/3 2xl:w-52 w-48 h-2 bg-[#ffd8c8] z-0"></div>
          </div>
          <div className="bg-[#ffd8c8] px-3 py-1.5 2xl:text-xl text-lg w-fit mt-4">
            See All
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <h1 className="2xl:text-5xl text-4xl font-semibold">
            DO YOU WANT TO SHAREYOUR OWN RECIPE?
          </h1>
          <div className="bg-[#ffd8c8] px-3 py-1.5 2xl:text-xl text-lg w-fit mt-4">
            See it now
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;
