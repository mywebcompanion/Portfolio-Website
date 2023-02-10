import React from "react";

export default function Navbar() {
  return (
    <div className="h-16 flex justify-between items-center px-4">
      <div>
        <button>
        <img src="#" alt="pulkitLogo" className="h-6 w-6"></img>
        </button>
      </div>
      <div>
        <button className="ml-4">Contact</button>
        <button className="ml-4">Projects</button>
        <button className="ml-4">Experience</button>
        <button className="ml-4">Skills</button>
        <button className="ml-4">Academics</button>
        <button className="ml-4">Achievements</button>
      </div>
    </div>
  );
}
