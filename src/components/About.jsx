import React from 'react'
import profilePic from '../assets/profile_pic.jpg'

export default function About() {

  const downloadCV = () => {
    const a = document.createElement('a')
    const url = '/pulkit_cv.pdf'
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="mx-auto max-w-5xl w-11/12 pt-20 pb-32 flex page-container" id="about">
      <div className="w-48">
        <img src={profilePic} alt="profile-pic" className="mx-auto h-32 w-32 rounded-full border-4 border-blue-500"></img>
      </div>
      <div className="w-full pl-5 pr-10">
        <h1 className="text-2xl font-bold">About Me</h1>
        <p className="text-[#7A7A7A] leading-8 mb-8">I am a professional game developer with extensive experience and expertise in gameplay optimization, UI, multiplayer, and gameplay mechanics. After developing various hypercasual games for over 3 years in my weekend projects and industrial experiences, I am exploring oppurtunities in game development for AAA titles and Indie games. Academically, I am a fourth year undergraduate student of <a className="text-white hover:text-[#11ABB0] transition-colors" href="https://www.iitkgp.ac.in/department/ME">Physics major</a> at <a className="text-white hover:text-[#11ABB0] transition-colors" href="https://www.iitkgp.ac.in/">IIT Kharagpur</a> , where i enjoy strolling around the campus and participating in various vibrant events whenever I am not developing games or vested in exams.</p>
        <button onClick={downloadCV} className="bg-[#444] px-4 py-3 hover:bg-white hover:text-[#2b2b2b] transition:colors rounded font-bold">
            <i className="fa fa-download pr-4 text-xl"></i>
            <span className="text-base">Download Resume</span>
        </button>
      </div>
    </div>
  )
}
