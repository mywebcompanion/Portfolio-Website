import React from "react";
import cppLogo from "../assets/logos/cpp-logo.png";
import pythonLogo from "../assets/logos/python-logo.svg";
import goLogo from "../assets/logos/go-logo.svg";
import jsLogo from "../assets/logos/js-logo.png";
import htmlLogo from "../assets/logos/html-logo.png";
import reactLogo from "../assets/logos/react-logo.svg";
import angularLogo from "../assets/logos/angular-logo.png";
import nodeLogo from "../assets/logos/node-logo.svg";
import githubLogo from "../assets/logos/github-logo.png";
import mongoLogo from "../assets/logos/mongodb-logo.png";

export default function Resume() {
  const Divider = () => {
    return <div className="bg-gray-300 w-full h-[1px] mb-12 mt-4"></div>;
  };

  const ResumeContent = ({ title, subtitle, duration, children }) => {
    return (
      <div>
        <div className="font-open-sans text-[#313131] text-[25px] font-bold mb-2">
          {title}
        </div>
        <div className="font-libre-baskerville text-[#6E7881] text-lg mb-6">
          {subtitle} •{" "}
          <span className="font-open-sans text-base">{duration}</span>
        </div>
        <p className="text-[#838C95] leading-8 font-open-sans text-base mb-10">
          {children}
        </p>
      </div>
    );
  };

  const ResumeField = ({ title, children }) => {
    return (
      <div id="education" className="flex w-full">
        <div className="w-1/4 pl-4">
          <div className="uppercase text-[#313131] font-bold font-open-sans leading-9 tracking-wide underline underline-offset-8 decoration-[3px] decoration-[#11ABB0]">
            {title}
          </div>
        </div>
        <div className="w-3/4 px-4">{children}</div>
      </div>
    );
  };

  const SkillIcon = ({ name, icon }) => {
    return (
      <div className="w-full">
        <div className="w-full aspect-square p-6">
            <img className="w-full" src={icon}></img>
        </div>
        <div className="w-full leading-6 font-[600] uppercase tracking-wide text-sm text-center">{name}</div>
      </div>
    );
  };

  const skillList = [
    { name: "C++", icon: cppLogo },
    { name: "Python", icon: pythonLogo },
    { name: "Go", icon: goLogo },
    { name: "JavaScript", icon: jsLogo },
    { name: "HTML", icon: htmlLogo },
    { name: "React", icon: reactLogo },
    { name: "Angular", icon: angularLogo },
    { name: "Node.js", icon: nodeLogo },
    { name: "GitHub", icon: githubLogo },
    { name: "MongoDB", icon: mongoLogo },
  ];

  return (
    <div className="bg-white w-full page-container" id="projects">
      <div
        className="mx-auto max-w-5xl w-11/12 py-32 page-container"
        id="resume"
      >
        <ResumeField title="Education">
          <ResumeContent
            title="Indian Institute Of Technology Kharagpur, India"
            subtitle="Dual Degree Mechanical Engg."
            duration="July 2019 - Current, Fourth Year"
          >
            As a Game Developer Intern at Tower Conquest: Metaverse, I brought
            my expertise in implementing gameplay features using Finite State
            Machines and resolved bugs related to synchronization and
            parameters. I integrated with back-end server APIs and designed UI
            screens for PvE and PvP game modes. This internship taught me the
            ins and outs of game development while working on a cutting-edge
            Web3-based game.
          </ResumeContent>
        </ResumeField>
        <Divider />
        <ResumeField title="Internships">
          <ResumeContent
            title="Indian Institute Of Technology Kharagpur, India"
            subtitle="Dual Degree Mechanical Engg."
            duration="July 2019 - Current, Fourth Year"
          >
            As a Game Developer Intern at Tower Conquest: Metaverse, I brought
            my expertise in implementing gameplay features using Finite State
            Machines and resolved bugs related to synchronization and
            parameters. I integrated with back-end server APIs and designed UI
            screens for PvE and PvP game modes. This internship taught me the
            ins and outs of game development while working on a cutting-edge
            Web3-based game.
          </ResumeContent>
          <ResumeContent
            title="Indian Institute Of Technology Kharagpur, India"
            subtitle="Dual Degree Mechanical Engg."
            duration="July 2019 - Current, Fourth Year"
          >
            As a Game Developer Intern at Tower Conquest: Metaverse, I brought
            my expertise in implementing gameplay features using Finite State
            Machines and resolved bugs related to synchronization and
            parameters. I integrated with back-end server APIs and designed UI
            screens for PvE and PvP game modes. This internship taught me the
            ins and outs of game development while working on a cutting-edge
            Web3-based game.
          </ResumeContent>
        </ResumeField>
        <Divider />
        <ResumeField title="Skills">
          <div className="grid grid-cols-5 gap-4 text-black">
            {skillList.map((skill) => {
              return <SkillIcon name={skill.name} icon={skill.icon} />;
            })}
          </div>
        </ResumeField>
      </div>
    </div>
  );
}
