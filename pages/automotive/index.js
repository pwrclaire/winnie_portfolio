import React from "react";
import Image from "next/image";
import Nav from "../../components/nav";

export default function Cars() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-2 md:grid-cols-1 gap-6 p-10 mt-16">
        {/* jaguar */}
        <div className="relative h-[90vh]">
          <a a href="/automotive/jaguar">
          <div class="opacity-0 hover:opacity-100 bg-black bg-opacity-30 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">Jaguar F-Type</div>
            <Image
              className="shadow-md brightness-100 hover:brightness-50 object-right z-5"
              src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Headlight_uplu4q.jpg"
              width={6}
              height={7}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </div>
        {/* bmw */}
        <div className="relative h-[90vh]">
          <a a href="/automotive/bmw">
          <div class="opacity-0 hover:opacity-100 bg-black bg-opacity-30  duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">BMW340i</div>
            <Image
              className="shadow-md brightness-100 hover:brightness-50 object-right z-5"
              src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/bmw/BMW340i_9_hh9jcw.jpg"
              width={6}
              height={7}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </div>
        {/* honda */}
        <div className="relative h-[90vh]">
          <a a href="/automotive/honda">
          <div class="opacity-0 hover:opacity-100 bg-black bg-opacity-30  duration-300 absolute inset-0 z-10 flex justify-center items-center text-center text-6xl text-white font-semibold">Honda Civic Hatchback Sport</div>
            <Image
               className="shadow-md brightness-100 hover:brightness-50 object-right z-5"
              src="https://res.cloudinary.com/wrp/image/upload/v1642576911/winnie/civic/DSC_1924_lnrjjf.jpg"
              width={6}
              height={7}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </div>
        {/* <div class="w-64 h-64 bg-red-100 relative">
          <div class="opacity-0 hover:opacity-100 bg-black bg-opacity-30  duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">Dwayne</div>
        </div> */}
      </div>
    </>
  );
}
