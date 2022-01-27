import React from "react";
import Image from "next/image";

export default function Cars() {
  return (
    <div className="flex flex-wrap sm:flex-col mx-0">
      {/* bmw */}
      <div className="w-1/2 md:w-full relative md:mb-3">
        <a a href="/automotive/bmw">
          <p className="absolute z-10 inset-0 top-[45%] align-center  text-white text-center allSize:text-6xl md:text-4xl  text-5xl  md:inset-y-1/2 pointer-events-none">
            BMW 340i
          </p>
          <Image
            className="relative shadow-md brightness-50 hover:brightness-100 object-right"
            src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/bmw/BMW340i_9_hh9jcw.jpg"
            width={6}
            height={7}
            layout="responsive"
            objectFit="cover"
          />
        </a>
      </div>
      {/* jaguar */}
      <div className="w-1/2 md:w-full relative md:mb-3">
        <a a href="/automotive/jaguar">
          <p className="absolute align-center inset-0 top-[45%] text-center z-10 text-white allSize:text-6xl md:text-4xl text-5xl sm:text-4xl pointer-events-none">
            Jaguar F-Type
          </p>
          <Image
            className="brightness-50 hover:brightness-100 relative shadow-md object-right"
            src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Headlight_uplu4q.jpg"
            width={6}
            height={7}
            layout="responsive"
            objectFit="cover"
          />
        </a>
      </div>
      {/* honda */}
      <div className="w-full relative md:hidden">
        <a a href="/automotive/honda">
          <p className="absolute z-10 inset-0 top-[45%] align-center justify-center text-white text-center allSize:text-6xl text-5xl md:text-4xl sm:text-xs pointer-events-none">
            Honda Civic Hatchback Sport
          </p>
          <Image
            className="brightness-50 hover:brightness-100 relative shadow-md object-right h-full"
            src="https://res.cloudinary.com/wrp/image/upload/v1642576911/winnie/civic/DSC_1924_lnrjjf.jpg"
            width={9}
            height={6}
            layout="responsive"
            objectFit="fill"
          />
        </a>
      </div>
      <div className="w-full relative hidden md:block">
        <a a href="/automotive/honda">
          <p className="absolute z-10 inset-0 top-[45%] align-center justify-center text-white text-center allSize:text-6xl text-5xl md:text-4xl sm:text-xs pointer-events-none">
            Honda Civic Hatchback Sport
          </p>
          <Image
            className="brightness-50 hover:brightness-100 relative shadow-md object-right h-full"
            src="https://res.cloudinary.com/wrp/image/upload/v1642576912/winnie/civic/MG_2676_a26mlw.jpg"
            width={6}
            height={7}
            layout="responsive"
            objectFit="cover"
          />
        </a>
      </div>
    </div>
  );
}
