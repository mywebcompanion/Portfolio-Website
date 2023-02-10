import React from "react";
import Navbar from "./Navbar";
import HackerImg from "../assets/hacker-image.png";
import squareIcon from "../assets/square.svg";
import { motion } from "framer-motion";

export default function Content() {
  return (
    <div className="w-3/4 mx-auto ">
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)]">
        <div className="w-1/2">
          <div className="ml-8 mt-4">
            <img
              src={squareIcon}
              alt="square"
              className="w-8 h-8 animate-spin-slow"
            />
          </div>
          <div className="ml-8">
            <div className="mt-24 font-semibold">Hello, I am</div>
            <div className="mt-10 text-6xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">
              Pulkit Chauhan
            </div>
            <div className="flex relative">
              <div className="absolute w-[260px]">
                <h1 className="my-8 z-10 text-2xl whitespace-nowrap animate-[typing_8s_steps(18,end)_infinite] overflow-hidden border-blue-500 font-semibold text-transparent bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">
                  Software Developer
                </h1>
              </div>
              <div className="absolute w-[216px]">
                <h1 className="my-8 z-20 w-0 text-2xl whitespace-nowrap animate-[typing_8s_steps(15,end)_2s_infinite] overflow-hidden border-blue-500 font-semibold text-transparent bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">
                  Tech Enthusiast
                </h1>
              </div>
              <div className="absolute w-[100px]">
                <h1 className="my-8 z-30 w-0 text-2xl whitespace-nowrap animate-[typing_8s_steps(7,end)_4s_infinite] overflow-hidden border-blue-500 font-semibold text-transparent bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">
                  Learner
                </h1>
              </div>
              <div className="absolute w-[72px]">
                <h1 className="my-8 z-0 w-0 text-2xl whitespace-nowrap animate-[typing_8s_steps(5,end)_6s_infinite] overflow-hidden border-blue-500 font-semibold text-transparent bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">
                  Gamer
                </h1>
              </div>
            </div>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-32 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                See my Portfolio
              </span>
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="w-3/4 h-[28.125vw] shadow-imageOutline"
          >
            <img
              src={HackerImg}
              alt="HackerImage"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
