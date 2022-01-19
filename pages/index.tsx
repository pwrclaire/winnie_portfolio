import React from 'react';
import Image from 'next/image'
import Nav from '../components/nav';

export default function Home() {
  return (
    <>
      <Nav />
      <div className="w-full h-screen grid grid-cols-1 gap-2">
        <Image className="object-cover brightness-75 shadow-md object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Backshot_gbahkb.jpg" width={1} height={1} layout='responsive' />
        <div className="drop-shadow-xl absolute w-full align-center text-white inset-y-48 text-4xl md:text-5xl lg:text-6xl text-center font-sans">Winnie Lok Photography</div>
      </div>

      {/* Categroy section */}
      <div className='absolute place-content-evenly w-full align-center text-white inset-y-1/2 text-4xl md:text-5xl lg:text-6xl text-center flex font-mono'>
          <a href='/automotive'>Automotive</a>
          <a href='/portrait'>People</a>
          <a href='/wedding'>Wedding</a>
      </div>
    </>
  )
}