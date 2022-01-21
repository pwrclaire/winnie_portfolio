import React from 'react';

export default function Nav() {
  const openHamburger = () => {
    console.log('Opening hambuger')
  }
  return (
      <nav className={`absolute flex items-center justify-between p-6 w-full z-50 top-0`}>
        {/* hamburger menu */}
        <div className="md:block hidden">
          <button
            onClick={openHamburger}
            id="nav-toggle"
            className="justify-end flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>

        <div className="w-full flex-grow flex md:hidden lg:items-center md:w-auto md:block pt-6 md:pt-0" id="nav-content">
          <ul className="list-reset flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-white no-underline" href="/">Home</a>
            </li>
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-white no-underline" href="/contact">Contact</a>
            </li>
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-white no-underline" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}