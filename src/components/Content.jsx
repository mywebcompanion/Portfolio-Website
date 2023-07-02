import React from "react";
import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import squareIcon from "../assets/square.svg";
import downArrow from "../assets/arrow.svg";
import Projects from "./Projects";
import Resume from "./Resume";

export default function Content() {
  const [isVisible, setVisible] = useState(false);
  const [isBgVisible, setBgVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const visibleObserver = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.7 }
    );

    const bgObserver = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        setBgVisible(!entry.isIntersecting);
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    visibleObserver.observe(ref.current);
    bgObserver.observe(ref.current);
    return () => {
      visibleObserver.disconnect();
      bgObserver.disconnect();
    };
  }, []);

  const scrollClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector("#about");
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div id="container" className="w-full mx-auto scroll-smooth ">
        <div
          ref={ref}
          id="home"
          className="w-full h-screen pt-32 bg-content-background page-container"
        >
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
            <div className="w-1/2 flex justify-center items-center"></div>
            <div className="absolute bottom-3 mx-auto w-full flex justify-center">
              <button
                className="h-10 w-10 rounded-full bg-white"
                onClick={scrollClick}
              >
                <img src={downArrow}></img>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-12"></div>
        <About />
        <Projects />
        <Resume />
      </div>
      <Navbar isVisible={isVisible} isBgVisible={isBgVisible} />
    </div>
  );
}
