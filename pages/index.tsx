import React from "react";
import Hamburger from "../components/hamburger";
import Reveal from "../components/reveal";

export default function Home() {
  return (
    <div>
      <Hamburger />
      <span className="md:leading-[4rem] h-0 z-10 drop-shadow-xl absolute w-full align-center text-white inset-y-[40%] text-center">
        <Reveal />
      </span>
    </div>
  );
}

const styles = {
  bar: {
    backgroundColor: "#4AB1A1",
  },
};
