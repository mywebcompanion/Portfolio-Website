import React from 'react'
import IconButton from './IconButton'
import twitterLogo from '../assets/twitter-logo.svg'
import githubLogo from '../assets/github.svg'
import facebookLogo from '../assets/facebook.svg'
import linkedinLogo from '../assets/linkedin.svg'
import gmailLogo from '../assets/gmail.svg'

export default function Socials() {
  return (
    <div className="flex flex-col-reverse fixed bottom-0 left-0 ml-3">
        <div className="mt-6 w-auto ">
            <div className="h-20 bg-white w-0.5 ml-auto mr-auto"></div>
        </div>
        <IconButton icon={twitterLogo}/>
        <IconButton icon={githubLogo}/>
        <IconButton icon={facebookLogo}/>
        <IconButton icon={linkedinLogo}/>
        <IconButton icon={gmailLogo}/>
    </div>
  )
}
