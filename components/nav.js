import React, { useState } from "react";
import { elastic as Menu } from "react-burger-menu";
import Hamburger from "../components/hamburger";

export default function Nav() {
  return (
    <nav
      className={`absolute flex items-center justify-end w-screen z-50 top-0 h-24`}
    >
      {/* LEFT - brand */}
      <h2 className="w-full p-10 md:pl-6 text-left text-black text-2xl md:text-lg">
        <a href="/">
          <strong className="text-3xl md:text-xl sm:text-sm">WINNIE LOK</strong>{" "}
          <span className="text-3xl md:text-xl sm:text-sm">PHOTOGRAPHY</span>
        </a>
      </h2>
  
      {/* RIGHT - HAMBURGER MENU */}
      <div className="md:flex md:justify-end hidden w-full flex-grow">
        <Hamburger />
      </div>
      
      {/* LIST MENU */}
      <div
        className="w-full flex-grow flex lg:items-center md:w-auto md:pt-0 md:hidden p-10"
        id="nav-content"
      >
        <ul className="list-reset flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-black no-underline"
              href="/"
            >
              Home
            </a>
          </li>
          <div className="group inline-block relative">
            <button className="text-black px-4 rounded inline-flex items-center">
              <span className="mr-1">Portfolio</span>
              <svg
                color="#4AB1A1"
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul
              className={`absolute hidden text-black
              group-hover:block
              group-hover:animate-nav-reveal
              group-hover:transition-all`}
            >
              <li className="bg-white">
                <a
                  className="
                    rounded-t hover:text-shadow-grey py-2 px-4 block whitespace-no-wrap"
                  href="/automotive"
                >
                  Automotive
                </a>
              </li>
              <li className="bg-white">
                <a
                  className=" hover:text-shadow-grey py-2 px-4 block whitespace-no-wrap"
                  href="/portrait"
                >
                  Portrait
                </a>
              </li>
              <li className="bg-white">
                <a
                  className="rounded-b hover:text-shadow py-2 px-4 block whitespace-no-wrap"
                  href="/wedding"
                >
                  Wedding
                </a>
              </li>
            </ul>
          </div>
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-black no-underline"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#4AB1A1",
    height: "4px",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    top: "15px",
    right: "15px",
    height: "40px",
    width: "40px",
  },
  bmCross: {
    background: "#4AB1A1",
    width: "5px",
    height: "35px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "-5px",
  },
  bmMenu: {
    background: "black",
    // background: "rgb(229 231 235)",
    padding: "2.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "black",
  },
  bmItemList: {
    color: "#4AB1A1",
    padding: "1.8em",
  },
  bmItem: {
    display: "inline-block",
    fontSize: "2rem",
    padding: "10px",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
