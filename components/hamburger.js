import React, { useState } from "react";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`${
          open ? "top-20" : "-top-60"
          // open ? "right-0" : "-right-60"
        } absolute text-2xl text-right transition-all duration-500 pt-1 pl-4 pr-8 pb-2 bg-white right-0`}
      >
        <div className="flex flex-col gap-2 overflow-hidden w-[100%]">
          <a href="/automotive" className="hover:text-shadow-grey">
            Automotive
          </a>
          <a href="/portrait" className="hover:text-shadow-grey">
            Portrait
          </a>
          <a href="/wedding" className="hover:text-shadow-grey">
            Wedding
          </a>
          <a href="/contact" className="hover:text-shadow-grey">
            Contact
          </a>
        </div>
      </div>

      <button
        className="text-[#4AB1A1] absolute top-10 right-10 md:right-6 bg-white w-[35px] h-[28px] md:w-[25px] md:h-[18px]"
        onClick={() => setOpen(!open)}
      >
        {/* <span className="sr-only">Open main menu</span> */}
        <div className="block w-5 absolute left-0 top-0">
          <span
            aria-hidden="true"
            className={`block absolute h-[3px] md:h-[2px] w-8 md:w-5 bg-current transform transition duration-500 ease-in-out ${
              open
                ? "rotate-45 translate-y-2.5 md:translate-y-1.5"
                : "-translate-y-0"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-[3px] md:h-[2px] w-8 md:w-5 bg-current transform transition duration-500 ease-in-out translate-y-2.5 md:translate-y-1.5 ${
              open && "opacity-0"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-[3px] md:h-[2px] w-8 md:w-5 bg-current transform  transition duration-500 ease-in-out" ${
              open
                ? "-rotate-45 translate-y-2.5 md:translate-y-1.5"
                : "translate-y-5 md:translate-y-3"
            }`}
          ></span>
        </div>
      </button>
    </>
  );
}
