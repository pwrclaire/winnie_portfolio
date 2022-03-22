import React from "react";
import Image from "next/image";
import Nav from "../../components/nav";

export default function People() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 p-10 mt-16 md:gap-5 md:p-6 top-28">
        {/* chris */}
        <div className="relative h-[90vh] md:h-[40vh]">
          <a a href="/portrait/chris">
          <div className="opacity-0 hover:opacity-100 bg-black bg-opacity-30  duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl md:text-3xl text-white font-semibold">Chris & Raph</div>
            <Image
              className="shadow-md brightness-100 hover:brightness-50 object-center z-5"
              src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3436_m2ezxi.jpg"
              width={6}
              height={7}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </div>
        {/* jhan */}
        <div className="relative h-[90vh] md:h-[40vh]">
          <a a href="/portrait/jhan">
          <div className="opacity-0 hover:opacity-100 bg-black bg-opacity-30  duration-300 absolute inset-0 z-10 flex justify-center items-center text-center text-6xl md:text-3xl text-white font-semibold">Khushboo & J&nbsp;Han</div>
            <Image
              className="shadow-md brightness-100 hover:brightness-50 object-center z-5 hidden lg:block"
              src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush8_inr3jq.jpg"
              width={6}
              height={7}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </div>
      </div>
    </>
  );
}
