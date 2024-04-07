import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { FaHeart, FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion";

const CommunitySection = () => {
  return (
    <section
      className="bg-[#fffffff9] 2xl:px-40 px-32 2xl:py-32 py-24 grid grid-cols-2 gap-4"
      id="community"
    >
      <div className="flex flex-col justify-end items-end uppercase">
        <div className="w-1/2 mb-20">
          <div className="flex flex-col justify-start">
            <h1 className="2xl:text-7xl text-6xl font-semibold">Meet Our</h1>
            <div className="relative">
              <h1 className="2xl:text-7xl text-6xl font-semibold relative z-10">
                Community
              </h1>
              <div className="absolute -left-3 top-1/3 w-72 h-2 bg-[#ffd8c8] z-0"></div>
            </div>
            <div className="bg-[#ffd8c8] px-3 py-1.5 2xl:text-xl text-lg w-fit mt-4">
              Know more
            </div>
          </div>
          <p className="2xl:text-3xl text-2xl mt-8">
            LOREM IPSUM DOLOR SIT <br />
            AMET ERNUT TEMPARTERO <br />
            SERTU PER NABORE EN <br />
            TORNA ENTALTO
          </p>
        </div>
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex gap-8 items-end relative"
      >
        <div className="bg-white shadow-sm h-[20.5rem] w-80 p-5 relative z-10">
          <div className="absolute right-0 top-0 p-4 w-20 h-20 bg-[#ffd8c8] cursor-pointer">
            <SlSocialInstagram className="w-full h-full" />
          </div>
          <img src="/images/1.png" alt="" className="w-72" />
        </div>
        <div className="bg-white shadow-sm h-[20.5rem] px-8 pt-10 pb-4 flex w-80 flex-col justify-between gap-4 text-2xl relative z-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-medium 2xl:text-3xl text-2xl">@buzzfeedfood</h1>
            <p className="2xl:text-lg text-base font-gill">
              It’s taco Tuesday! These tacos from @jesseszewczyk have no added
              sugars and are SO good 🌮 . Find the recipe from the link in our
              bio! 📸 :
              <br />
              @taylormillerphoto
            </p>
          </div>
          <div className="flex justify-end gap-6 items-center 2xl:text-base text-sm">
            <div className="flex items-center gap-2">
              <FaMessage className="2xl:w-5 w-4 2xl:h-5 h-4 -scale-x-100" /> 60
            </div>
            <div className="flex items-center gap-2">
              <FaHeart className="2xl:w-5 w-4 2xl:h-5 h-4" /> 14.7K
            </div>
          </div>
        </div>
        <img
          src="/images/b.png"
          alt=""
          className="absolute -bottom-8 left-1/3 z-0 w-48 h-32"
        />
        <img
          src="/images/c.png"
          alt=""
          className="absolute -bottom-8 -right-4 z-0 h-32"
        />
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex gap-8 justify-end items-end relative"
      >
        <div className="bg-white shadow-sm h-[20.5rem] px-8 pt-10 pb-4 flex w-80 flex-col justify-between gap-4 text-2xl relative z-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-medium 2xl:text-3xl text-2xl">@love_food</h1>
            <p className="2xl:text-lg text-base font-gill">
              Waffle sticks in Copenhagen! 😍 Milk chocolate with sprinkles,
              dark chocolate with coconut and milk chocolate with peanuts! [📷 :
              @foodwithmichel] #lovefood
            </p>
          </div>
          <div className="flex justify-end gap-6 items-center 2xl:text-base text-sm">
            <div className="flex items-center gap-2">
              <FaMessage className="2xl:w-5 w-4 2xl:h-5 h-4 -scale-x-100" /> 789
            </div>
            <div className="flex items-center gap-2">
              <FaHeart className="2xl:w-5 w-4 2xl:h-5 h-4" /> 99.7K
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm h-[20.5rem] w-80 p-5 relative">
          <div className="absolute right-0 top-0 p-4 w-20 h-20 bg-[#ffd8c8] cursor-pointer">
            <SlSocialInstagram className="w-full h-full" />
          </div>
          <img src="/images/2.png" alt="" className="w-72" />
        </div>
        <img
          src="/images/a.png"
          alt=""
          className="absolute -bottom-8 left-20 z-0 w-48 h-60"
        />
      </motion.div>
      <div />
      <div className="flex items-center 2xl:text-base text-sm font-gill">
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit, sed <br />
        do eiusmod tempor incididunt <br />
        ut labore et dolore magna <br />
        aliqua. Duis aute irure.
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex gap-8 items-end"
      >
        <div className="bg-white shadow-sm h-[20.5rem] w-80 p-5 relative">
          <div className="absolute right-0 top-0 p-4 w-20 h-20 bg-[#ffd8c8] cursor-pointer">
            <SlSocialInstagram className="w-full h-full" />
          </div>
          <img src="/images/3.png" alt="" className="w-72" />
        </div>
        <div className="bg-white shadow-sm h-[20.5rem] px-8 pt-10 pb-4 flex w-80 flex-col justify-between gap-4 text-2xl">
          <div className="flex flex-col gap-4">
            <h1 className="font-medium 2xl:text-3xl text-2xl">@buzzfeedfood</h1>
            <p className="2xl:text-lg text-base font-gill">
              Getting into long weekend mode like 🍤 #pancitpalabok (📷
              @jeepneynyc)
            </p>
          </div>
          <div className="flex justify-end gap-6 items-center 2xl:text-base text-sm">
            <div className="flex items-center gap-2">
              <FaMessage className="2xl:w-5 w-4 2xl:h-5 h-4 -scale-x-100" /> 152
            </div>
            <div className="flex items-center gap-2">
              <FaHeart className="2xl:w-5 w-4 2xl:h-5 h-4" /> 18.2K
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CommunitySection;
