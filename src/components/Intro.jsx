import React from "react";

export default function Intro() {
  return (
    <div>
      <div className="mt-24 font-semibold">Hello, I am</div>
      <div className="font-tilt-prism mt-10 text-6xl font-extrabold text-transparent bg-gradient-to-r from-grPrimary to-grSecondary bg-clip-text">
        Pulkit Chauhan
      </div>
      <div className="flex relative">
        <div className="absolute w-[260px]">
          <h1 className="font-fira-code my-8 z-10 text-2xl whitespace-nowrap animate-[typing_10s_steps(18,end)_infinite,blinkCaret_.75s_linear_infinite] overflow-hidden border-blue-500 font-semibold text-transparent bg-gradient-to-r from-grPrimary to-grSecondary bg-clip-text">
            Software Developer
          </h1>
        </div>
        <div className="absolute w-[216px]">
          <h1 className="font-fira-code my-8 z-20 w-0 text-2xl whitespace-nowrap animate-[typing_10s_steps(15,end)_2.5s_infinite,blinkCaret_.75s_linear_infinite] overflow-hidden border-blue-500 font-semibold text-transparent bg-gradient-to-r from-grPrimary to-grSecondary bg-clip-text">
            Tech Enthusiast
          </h1>
        </div>
        <div className="absolute w-[100px]">
          <h1 className="font-fira-code my-8 z-30 w-0 text-2xl whitespace-nowrap animate-[typing_10s_steps(7,end)_5s_infinite,blinkCaret_.75s_linear_infinite] overflow-hidden border-blue-500 font-semibold text-transparent bg-gradient-to-r from-grPrimary to-grSecondary bg-clip-text">
            Learner
          </h1>
        </div>
        <div className="absolute w-[72px]">
          <h1 className="font-fira-code my-8 z-0 w-0 text-2xl whitespace-nowrap animate-[typing_10s_steps(5,end)_7.5s_infinite,blinkCaret_.75s_linear_infinite] overflow-hidden border-blue-500 font-semibold text-transparent bg-gradient-to-r from-grPrimary to-grSecondary bg-clip-text">
            Gamer
          </h1>
        </div>
      </div>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-32 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-grPrimary to-grSecondary group-hover:from-grPrimary group-hover:to-grSecondary hover:text-white dark:text-white text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="font-fira-code relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          See my Portfolio
        </span>
      </button>
    </div>
  );
}
