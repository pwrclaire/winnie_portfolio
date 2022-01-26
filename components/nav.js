import React, { useState } from "react";
import { slide as Menu } from 'react-burger-menu'

export default function Nav() {
  return (
    <nav
      className={`absolute flex items-center justify-end p-6 w-full z-50 top-0`}
    >
      {/* hamburger menu */}
      <div className="md:flex md:justify-end hidden">
        <Menu right width={ 280 } styles={styles}>
        <ul>
          <li className="pb-5"><a href="/">Home</a></li>
          <li className="pb-5"><a href="/contact">Contact</a></li>
        </ul>
      </Menu>

      </div>

      <div
        className="w-full flex-grow flex md:hidden lg:items-center md:w-auto md:block pt-6 md:pt-0"
        id="nav-content"
      >
        <ul className="list-reset flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-white no-underline"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-white no-underline"
              href="/contact"
            >
              Contact
            </a>
          </li>
          {/* <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-white no-underline"
              href="#"
            >
              About
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: 'white',
    height: '4px',
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    top: '15px',
    right: '15px',
    height: '40px',
    width: '40px'
  },
  bmCross: {
    background: 'white',
    width: '5px',
    height: '35px'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '-5px'
  },
  bmMenu: {
    background: 'rgb(107 114 128)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: 'white',
    padding: '1.8em'
  },
  bmItem: {
    display: 'inline-block',
    fontSize: '2rem',
    padding: '10px'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
