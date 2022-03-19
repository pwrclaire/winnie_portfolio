import React, { useState } from "react";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  console.log("THis one hamburger.js", open);
  return (
    <>
      <div
        className={`${
          open ? "right-0" : "-right-60"
        } top-20 absolute text-2xl text-right transition-all duration-500 pt-1 pl-4 pr-8 pb-2 bg-white`}
      >
        <div className="flex flex-col gap-2">
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
      <nav
        className={`absolute flex items-center justify-end p-6 w-full z-50 top-0 overflow-hidden h-24`}
      >
        <button
          className="text-[#4AB1A1] absolute top-12 right-10 bg-white w-[35px] h-[28px]"
          onClick={() => setOpen(!open)}
        >
          {/* <span className="sr-only">Open main menu</span> */}
          <div className="block w-5 absolute left-0 top-0">
            <span
              aria-hidden="true"
              className={`block absolute h-[3px] w-8 bg-current transform transition duration-500 ease-in-out ${
                open ? "rotate-45 translate-y-2.5" : "-translate-y-0"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-[3px] w-8 bg-current transform transition duration-500 ease-in-out translate-y-2.5 ${
                open && "opacity-0"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-[3px] w-8 bg-current transform  transition duration-500 ease-in-out" ${
                open ? "-rotate-45 translate-y-2.5" : "translate-y-5"
              }`}
            ></span>
          </div>
        </button>
      </nav>
    </>
  );
}
