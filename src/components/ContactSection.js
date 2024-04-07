import React from "react";
import { useFormik } from "formik";

const ContactSection = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      phone: "",
      email: "",
      experience: "",
      platform: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <section className="bg-[#ffd8c8] 2xl:px-40 px-32 2xl:py-32 py-24 relative z-10 grid grid-cols-2 gap-4 items-end" id="contact">
      <img
        src="/images/b.png"
        alt=""
        className="absolute top-0 right-1/3 z-0 2xl:w-48 w-36 2xl:h-32 h-24"
      />
      <div className="flex flex-col justify-start uppercase">
        <h1 className="2xl:text-5xl text-4xl font-semibold">Collaborate</h1>
        <div className="relative">
          <h1 className="2xl:text-7xl text-[62px] font-semibold relative z-10">With us</h1>
          <div className="absolute -left-3 top-1/3 2xl:w-56 w-48 h-3 bg-white z-0"></div>
        </div>
        <div className="text-[#333333]/70 mt-8 flex flex-col gap-8 w-2/3 2xl:text-lg text-sm font-gill normal-case">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>
        </div>
      </div>
      <div className="">
        <form onSubmit={formik.handleSubmit} className="2xl:text-base text-sm">
          <div className="grid grid-cols-2 2xl:gap-8 gap-6 items-center">
            <div className="flex flex-col gap-4">
              <label className="uppercase" htmlFor="name">
                Name
              </label>
              <input
                className="bg-transparent border-b-2 border-[#333333] placeholder:text-[#333]/30 outline-none font-gill"
                placeholder="Name"
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="uppercase" htmlFor="surname">
                Surname
              </label>
              <input
                className="bg-transparent border-b-2 border-[#333333] placeholder:text-[#333]/30 outline-none font-gill"
                placeholder="Surname"
                id="surname"
                name="surname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.surname}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="uppercase" htmlFor="phone">
                Phone
              </label>
              <input
                className="bg-transparent border-b-2 border-[#333333] placeholder:text-[#333]/30 outline-none font-gill"
                placeholder="Phone"
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="uppercase" htmlFor="email">
                Email Address
              </label>
              <input
                className="bg-transparent border-b-2 border-[#333333] placeholder:text-[#333]/30 outline-none font-gill"
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="uppercase" htmlFor="experience">
                Experience
              </label>
              <select
                className="bg-transparent border-b-2 border-[#333333] placeholder:text-[#333]/30 outline-none font-gill"
                id="experience"
                name="experience"
                value={formik.values.experience}
                onChange={formik.handleChange}
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="flex flex-col gap-4">
              <label className="uppercase" htmlFor="platform">
                WHERE DID YOU HEAR ABOUT US?
              </label>
              <select
                className="bg-transparent border-b-2 border-[#333333] placeholder:text-[#333]/30 outline-none font-gill"
                id="platform"
                name="platform"
                value={formik.values.platform}
                onChange={formik.handleChange}
              >
                <option value="">Select</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Naukri">Naukri</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end 2xl:mt-8 mt-6">
            <button
              className="bg-[#333] text-[#ffd8c8] px-6 py-1.5 2xl:text-xl text-lg uppercase"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
