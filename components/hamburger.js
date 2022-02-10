import React, { useState } from "react";
import { elastic as Menu } from "react-burger-menu";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  return (
    // <nav
    //   className={`absolute flex items-center justify-end p-6 w-full z-50 top-0`}
    // >
    //   <button
    //     class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white"
    //     onClick={() => setOpen(!open)}
    //   >
    //     <span class="sr-only">Open main menu</span>
    //     <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
    //       <span
    //         aria-hidden="true"
    //         className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
    //           open ? "rotate-45" : "-translate-y-1.5"
    //         }`}
    //       ></span>
    //       <span
    //         aria-hidden="true"
    //         className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
    //           open && "opacity-0"
    //         }`}
    //       ></span>
    //       <span
    //         aria-hidden="true"
    //         className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" ${
    //           open ? "-rotate-45" : "translate-y-1.5"
    //         }`}
    //       ></span>
    //     </div>
    //   </button>
    // </nav>
      <nav
        className={`absolute flex items-center justify-end p-6 w-full z-50 top-0`}
      >
        <div className="flex md:justify-end">
          <Menu right width={280} styles={styles} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <main >
            <a href="/">
              <p className="text-shadow-grey-light hover:text-shadow-white">
                Home
              </p>
            </a>
            <ul>
              <span>Portfolio</span>
              <a href="/automotive">
                <li className="pl-3 text-shadow-grey-light hover:text-shadow-white">
                  Automotive
                </li>
              </a>
              <a href="/portrait">
                <li className="pl-3 text-shadow-grey-light hover:text-shadow-white">
                  Portrait
                </li>
              </a>
              <a href="/wedding">
                <li className="pl-3 text-shadow-grey-light hover:text-shadow-white">
                  Wedding
                </li>
              </a>
            </ul>
            <a href="/contact">
              <p className="text-shadow-grey-light hover:text-shadow-white">
                Contact
              </p>
            </a>
            </main>
          </Menu>
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
