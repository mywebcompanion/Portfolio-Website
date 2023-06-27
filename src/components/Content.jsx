import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import HackerImg from "../assets/hacker-image.png";
import squareIcon from "../assets/square.svg";
import downArrow from "../assets/arrow.svg";
import { motion } from "framer-motion";

export default function Content() {
  const scrollClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector("#about");
    targetElement.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div>
      <Navbar />
      <div className="w-full mx-auto scroll-smooth ">
        <div id="home" className="w-full h-screen pt-32 bg-content-background">
          <div className="flex mx-48 h-full relative">
            <div className="w-1/2">
              <div className="ml-8 mt-4">
                <img
                  src={squareIcon}
                  alt="square"
                  className="w-8 h-8 animate-spin-slow"
                />
              </div>
              <div className="ml-8">
                <Intro />
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              {/* <motion.div
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
              </motion.div> */}
            </div>
            <div className="absolute bottom-3 mx-auto w-full flex justify-center">
              <button className="h-10 w-10 rounded-full bg-white" onClick={scrollClick}>
                <img src={downArrow} ></img>
              </button>
            </div>
          </div>
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  );
}
