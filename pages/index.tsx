import React from "react";
// import Image from "next/image";
import Hamburger from '../components/hamburger';

export default function Home() {
  return (
    <div className="bg-black container" id="outer-container">
      <Hamburger />
      <span className="md:leading-[4rem] h-0 z-10 drop-shadow-xl absolute w-full align-center text-white inset-y-[40%] text-center">
        <h2 className="font-sans text-8xl md:text-5xl sm:text-4xl font-bold text-black">WINNIE LOK</h2>
        <h2 className="font-sans text-6xl md:text-4xl sm:text-3xl text-[#4AB1A1]">PHOTOGRAPHY</h2>
        <br />
        <div className="animate-pulser transition-all relative h-20 duration-500 " style={styles.bar}></div>
      </span>
    </div>
  );
}

const styles= {
 bar: {
  height: '15px',
  backgroundColor: '#4AB1A1',
 }
}
