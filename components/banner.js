import React from "react";
import { useWindowTop } from "./hooks";

export const Banner = ({ title }) => {
  const showBanner = useWindowTop();

  const name = () => {
    <p>{title}</p>
  }
  
  return (
    <div
      className={`absolute w-full h-screen opacity-75 z-10 ${
        !showBanner ? "bg-none" : "bg-black"
      } transition-all duration-500`}
    >
      <div
        className={`z-20 text-7xl md:text-4xl text-white relative text-center text-wrap inset-y-1/2 md:inset-y-1/3 ${
          !showBanner && "hidden"
        }`}
      >
        <span className="break-normal">{title}</span>
      </div>
    </div>
  );
};
