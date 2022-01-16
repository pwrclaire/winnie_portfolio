import React from 'react';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6 fixed w-full z-10 top-0 ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
            <span className="text-2xl pl-2"><i className="em em-grinning"></i></span>
          </a>
        </div>

        <div className="block lg:hidden">
          <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-white no-underline" href="#">Home</a>
            </li>
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-white no-underline" href="#">Contact</a>
            </li>
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-white no-underline" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="w-full h-screen grid grid-cols-1 gap-2">
        <Image className="object-cover brightness-75 shadow-md object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Backshot_gbahkb.jpg" width={1} height={1} layout='responsive' />
        <div className="drop-shadow-xl absolute w-full align-center text-white inset-y-48 text-4xl md:text-5xl lg:text-6xl text-center font-sans">Winnie Lok Photography</div>
      </div>

      {/* Categroy section */}
      <div className='absolute place-content-evenly w-full align-center text-white inset-y-1/2 text-4xl md:text-5xl lg:text-6xl text-center flex font-mono'>
          <a href='/automotive'>Automotive</a>
          <a href='/portrait'>People</a>
          <a href='/portrait/jhan'>Wedding</a>
      </div>
    </>
  )
}