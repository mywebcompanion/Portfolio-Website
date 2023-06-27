import React from "react";

export default function Navbar() {

  const scrollClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const targetElement = document.querySelector(target);
    // targetElement.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    // targetElement.scrollTo({
    //   top: 48,
    //   left: 0,
    //   behavior: "smooth",
    // })
    window.scrollTo(window.scrollX, window.scrollY - 100 )
  }

  return (
      <div className={`h-12 flex left-0 right-0 justify-between items-center fixed top-0`}>
        {/* <div>
          <button>
            <img src="#" alt="pulkitLogo" className="h-6 w-6"></img>
     -     </button>
        </div> */}
        <div className="ml-auto mr-auto">
          <a className="ml-4 tracking-[0.2rem] text-xs font-bold uppercase" href="#home">Home</a>
          <a className="ml-4 tracking-[0.2rem] text-xs font-bold uppercase" href="#about">About</a>
          <a className="ml-4 tracking-[0.2rem] text-xs font-bold uppercase" href="#projects">Projects</a>
          <a className="ml-4 tracking-[0.2rem] text-xs font-bold uppercase" href="#">Skills</a>
          <a className="ml-4 tracking-[0.2rem] text-xs font-bold uppercase" href="#">Academics</a>
          <a className="ml-4 tracking-[0.2rem] text-xs font-bold uppercase" href="#">Achievements</a>
        </div>
      </div>
  );
}
