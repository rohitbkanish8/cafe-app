import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#333333] 2xl:px-40 px-32 pt-16 pb-11 text-white grid grid-cols-5 gap-8 2xl:text-lg text-sm font-gill">
      <div className="col-span-3 grid grid-cols-5 gap-4 text-white/30">
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-[#ffd8c8] font-din">Section 1</h1>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-[#ffd8c8] font-din">Section 2</h1>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-[#ffd8c8] font-din">Section 3</h1>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-[#ffd8c8] font-din">Section 4</h1>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-[#ffd8c8] font-din">Section 5</h1>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
          <p className="2xl:text-base text-[13px]">Subsection</p>
        </div>
      </div>
      <div className="col-span-2 text-right uppercase font-din font-bold flex flex-col gap-6">
        <h2 className="text-[35px]">This is the</h2>
        <h2 className="text-[62px]">logo</h2>
      </div>
      <div className="col-span-3 text-white/30 2xl:text-base text-[13px]">
        2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor .
      </div>
      <div className="col-span-2 flex gap-12 items-center justify-end">
        <FaFacebookF className="w-6 h-5" />
        <FaTwitter className="w-6 h-5" />
        <RiInstagramFill className="w-6 h-5" />
        <FaLinkedinIn className="w-6 h-5" />
        <PiDribbbleLogoFill className="w-6 h-5" />
      </div>
    </div>
  );
};

export default Footer;
