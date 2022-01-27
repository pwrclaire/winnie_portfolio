import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

export default function Nav() {
  return (
    <nav
      className={`absolute flex items-center justify-end p-6 w-full z-50 top-0`}
    >
      {/* hamburger menu */}
      <div className="md:flex md:justify-end hidden">
        <Menu right width={280} styles={styles}>
          <a href="/">
            <p className="text-shadow-grey-light hover:text-shadow-grey">
              Home
            </p>
          </a>
          <ul>
            <span>Portfolio</span>
            <a href="/automotive">
              <li className="pl-3 text-shadow-grey-light hover:text-shadow-grey">
                Automotive
              </li>
            </a>
            <a href="/portrait">
              <li className="pl-3 text-shadow-grey-light hover:text-shadow-grey">
                Portrait
              </li>
            </a>
            <a href="/wedding">
              <li className="pl-3 text-shadow-grey-light hover:text-shadow-grey">
                Wedding
              </li>
            </a>
          </ul>
          <a href="/contact">
            <p className="text-shadow-grey-light hover:text-shadow-grey">
              Contact
            </p>
          </a>
        </Menu>
      </div>

      <div
        className="w-full flex-grow flex md:hidden lg:items-center md:w-auto md:block pt-6 md:pt-0"
        id="nav-content"
      >
        {/* <div className="p-20">
          
        </div> */}
        <ul className="list-reset flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-white no-underline"
              href="/"
            >
              Home
            </a>
          </li>
          <div className="group inline-block relative">
            <button className="text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <span className="mr-1">Portfolio</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
              <li className="">
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="/automotive"
                >
                  Automotive
                </a>
              </li>
              <li className="">
                <a
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="/portrait"
                >
                  Portrait
                </a>
              </li>
              <li className="">
                <a
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="/wedding"
                >
                  Wedding
                </a>
              </li>
            </ul>
          </div>
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-white no-underline"
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
    background: "white",
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
    background: "rgb(75 85 99)",
    width: "5px",
    height: "35px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "-5px",
  },
  bmMenu: {
    background: "rgb(229 231 235)",
    padding: "1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "rgb(75 85 99)",
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
