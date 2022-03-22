import React, { useState, useEffect }from "react";
import R from "react-reveal-text";

export default function Reveal() {
  const [toShow, setToShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setToShow(true);
    }, 300);
  }, [])
  return (
    <div>
      <div className="md:text-6xl sm:text-7xl text-8xl text-black font-bold	tracking-wider font-sans">
        <R show={toShow}>WINNIE LOK</R>
      </div>
    <div className="text-6xl md:text-4xl text-[#4AB1A1] font-semibold tracking-wider font-sans">
      <R show={toShow}>PHOTOGRAPHY</R>
    </div>
    </div>
  );
}
