import React from "react";

export default function Navbar({ isVisible, isBgVisible }) {

  return (
      <div className={`${isVisible ? "opacity-0 z-0" : "opacity-100 z-10"} ${isBgVisible ? "bg-[#333]" : "bg-[transparent]"} transition-opacity duration-200 h-12 flex left-0 right-0 justify-between items-center fixed top-0`}>
        <div className="ml-auto mr-auto">
          <a className="mx-3 tracking-[0.15rem] text-xs font-bold uppercase" href="#home">Home</a>
          <a className="mx-3 tracking-[0.15rem] text-xs font-bold uppercase" href="#about">About</a>
          <a className="mx-3 tracking-[0.15rem] text-xs font-bold uppercase" href="#projects">Projects</a>
          <a className="mx-3 tracking-[0.15rem] text-xs font-bold uppercase" href="#resume">Resume</a>
          <a className="mx-3 tracking-[0.15rem] text-xs font-bold uppercase" href="#">Academics</a>
          <a className="mx-3 tracking-[0.15rem] text-xs font-bold uppercase" href="#">Achievements</a>
        </div>
      </div>
  );
}
