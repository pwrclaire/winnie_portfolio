import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen grid grid-cols-1">
        <Image
          priority
          className="object-cover brightness-75 shadow-md object-center"
          src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/bmw/BMW340i_9_hh9jcw.jpg"
          width={1}
          height={1}
          layout="responsive"
        />
        <span className="md:leading-[4rem] drop-shadow-xl h-0 z-10 drop-shadow-2xl absolute w-full align-center text-white inset-y-[45%] text-7xl md:text-5xl sm:text-4xl text-center">
          <h2 className="font-sans text-shadow-lg">Winnie Lok Photography</h2>
        </span>
      </div>
    </>
  );
}

{
  /* <div className='flex flex-col absolute w-screen items-center text-white text-4xl lg:text-3xl md:text-2xl text-center gap-6 md:gap-4 inset-y-1/2'>
  <a href='/automotive' className='border-solid border-4 w-60 leading-relaxed hover:bg-zinc-300 text-shadow'>
    Automotive
  </a>
  <a href='/portrait' className='border-solid border-4 w-60 leading-relaxed hover:bg-zinc-300 text-shadow'>
    Portrait
  </a>
  <a href='/wedding' className='border-solid border-4 w-60 leading-relaxed hover:bg-zinc-300 text-shadow'>
    Wedding
  </a>
</div> */
}
