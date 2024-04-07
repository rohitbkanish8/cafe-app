import React from "react";
import { motion } from "framer-motion";

const MenuSection = () => {
  return (
    <section className="bg-[#fffffff4] min-h-screen 2xl:px-40 px-32 grid grid-cols-4 relative" id="menu">
      <div className="absolute flex flex-col justify-center items-center w-full top-16 uppercase">
        <div className="relative">
          <h1 className="2xl:text-7xl text-6xl font-semibold relative z-10">our menu</h1>
          <div className="absolute -left-3 top-1/3 w-64 h-2 bg-[#ffd8c8] z-0"></div>
        </div>
        <div className="bg-[#ffd8c8] px-3 py-1.5 2xl:text-xl text-lg w-fit mt-4">
          Know more
        </div>
      </div>
      <motion.div
        initial={{ y: 400, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="border-r border-[#333]/40 "
      >
        <div className="mt-64 relative">
          <h1 className="absolute top-0 -left-2 uppercase 2xl:text-7xl text-6xl">
            Starters
          </h1>
          <div className="flex flex-col gap-12 px-10 py-32">
            <div className="flex flex-col gap-4 2xl:text-base text-sm">
              <h1 className="font-sembold">QUINOA CROQUETTAS</h1>
              <p className="font-gill text-[#333]/70">
                Quinoa and cheddar croquettas with aji rocotto & pineapple salsa
                (v)
              </p>
              <button className="border-2 w-fit border-[#ffd8c8] px-3 py-1">
                £4.95
              </button>
            </div>
            <div className="flex flex-col gap-4 2xl:text-base text-sm">
              <h1 className="font-sembold">CHIFA CHICHARRONES</h1>
              <p className="font-gill text-[#333]/70">
                Slow cooked, crispy pork belly with sweet soy sauce
              </p>
              <button className="border-2 w-fit border-[#ffd8c8] px-3 py-1">
                £6.95
              </button>
            </div>
            <div className="flex flex-col gap-4 2xl:text-base text-sm">
              <h1 className="font-sembold">CALAMARES</h1>
              <p className="font-gill text-[#333]/70">
                Crispy baby squid with pickled jalapeño miso salsa
              </p>
              <button className="border-2 w-fit border-[#ffd8c8] px-3 py-1">
                £6.95
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -400, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="border-r border-[#333]/40 overflow-hidden"
      >
        <div className="mt-96 relative">
          <h1 className="absolute top-0 -left-2 uppercase 2xl:text-7xl text-6xl">
            Main <br />
            Courses
          </h1>
          <div className="flex flex-col gap-12 px-10 py-48">
            <div className="flex flex-col gap-4 2xl:text-base text-sm">
              <h1 className="font-sembold">EL CLASICO</h1>
              <p className="font-gill text-[#333]/70">
                Sea bass ceviche with aji limo tiger’s milk, sweet potato purée,
                choclo corn,red onion, coriander & plantain (gf)
              </p>
              <button className="border-2 w-fit border-[#ffd8c8] px-3 py-1">
                £8.95
              </button>
            </div>
            <div className="flex flex-col gap-4 2xl:text-base text-sm">
              <h1 className="font-sembold">TIRADITO CALLAO</h1>
              <p className="font-gill text-[#333]/70">
                Cobia tiradito with coriander tiger’s milk, black tobika, crème
                fraiche & sweet potato crunchies
              </p>
              <button className="border-2 w-fit border-[#ffd8c8] px-3 py-1">
                £8.95
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 400, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="border-r border-[#333]/40 overflow-hidden"
      >
        <div className="mt-80 relative">
          <h1 className="absolute top-0 -left-2 uppercase 2xl:text-7xl text-6xl">Sides</h1>
          <div className="flex flex-col gap-12 px-10 py-32">
            <div className="flex flex-col gap-4 2xl:text-base text-sm">
              <h1 className="font-sembold">SUPER POLLO</h1>
              <p className="font-gill text-[#333]/70">
                Marinated corn fed chicken pieces with rocotto salsa
              </p>
              <button className="border-2 w-fit border-[#ffd8c8] px-3 py-1">
                £4.95
              </button>
            </div>
            <div className="flex flex-col gap-4 2xl:text-base text-sm">
              <h1 className="font-sembold">PATATAS FRITAS</h1>
              <p className="font-gill text-[#333]/70">
                Sweet potato fries with aji rocotto mayonnaise (v)
              </p>
              <button className="border-2 w-fit border-[#ffd8c8] px-3 py-1">
                £3.95
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -400, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="overflow-hidden"
      >
        <div className="mt-72 relative">
          <h1 className="absolute top-0 -left-2 uppercase 2xl:text-7xl text-6xl">
            Desserts
          </h1>
          <div className="flex flex-col gap-12 px-10 py-32">
            <div className="flex flex-col gap-4 2xl:text-base text-sm">
              <h1 className="font-sembold">ICECREAM</h1>
              <p className="font-gill text-[#333]/70">
                Lorem ipsum dolor sit amet salerma petrum sea
              </p>
              <button className="border-2 w-fit border-[#ffd8c8] px-3 py-1">
                £3.95
              </button>
            </div>
            <div className="flex flex-col gap-4 2xl:text-base text-sm">
              <h1 className="font-sembold">TIRAMISU</h1>
              <p className="font-gill text-[#333]/70">
                Lorem ipsum dolor sit amet salerma petrum sea
              </p>
              <button className="border-2 w-fit border-[#ffd8c8] px-3 py-1">
                £3.95
              </button>
            </div>
            <div className="flex flex-col gap-4 2xl:text-base text-sm">
              <h1 className="font-sembold">CHOCOLATE BROWNIE</h1>
              <p className="font-gill text-[#333]/70">
                Lorem ipsum dolor sit amet salerma petrum sea
              </p>
              <button className="border-2 w-fit border-[#ffd8c8] px-3 py-1">
                £3.95
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MenuSection;
