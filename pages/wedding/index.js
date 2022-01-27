import React from "react";
import Image from "next/image";

export default function People() {
  return (
    <div className="grid grid-cols-1 w-full h-screen">
      <a a href="/wedding/wendy_kevin">
        <p className="absolute z-10 w-full align-center text-white text-center text-5xl inset-y-1/2 pointer-events-none">
          Wendy & Kevin
        </p>
        <Image
          className="object-cover object-center relative shadow-md brightness-50"
          src="https://res.cloudinary.com/wrp/image/upload/v1642146253/winnie/wendy_kevin/KW-219_iv7opk.jpg"
          width={9}
          height={5}
          layout="fill"
        />
      </a>
    </div>
  );
}
