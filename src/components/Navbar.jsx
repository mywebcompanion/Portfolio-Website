import React from "react";

export default function Navbar() {

  const scrollClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const targetElement = document.querySelector(target);
    targetElement.scrollIntoView({behavior: 'smooth'});
  }

  return (
      <div className={`h-16 ml-auto mr-auto flex left-0 right-0 w-4/5 justify-between items-center px-4 fixed top-0`}>
        <div>
          <button>
            <img src="#" alt="pulkitLogo" className="h-6 w-6"></img>
          </button>
        </div>
        <div>
          <a className="ml-4 tracking-[0.2rem] text-xs font-bold uppercase" onClick={scrollClick} href="#home">Home</a>
          <a className="ml-4 tracking-[0.2rem] text-xs font-bold uppercase" onClick={scrollClick} href="#about">About</a>
          <a className="ml-4 tracking-[0.2rem] text-xs font-bold uppercase" onClick={scrollClick} href="#">Experience</a>
          <a className="ml-4 tracking-[0.2rem] text-xs font-bold uppercase" onClick={scrollClick} href="#">Skills</a>
          <a className="ml-4 tracking-[0.2rem] text-xs font-bold uppercase" onClick={scrollClick} href="#">Academics</a>
          <a className="ml-4 tracking-[0.2rem] text-xs font-bold uppercase" onClick={scrollClick} href="#">Achievements</a>
        </div>
      </div>
  );
}
