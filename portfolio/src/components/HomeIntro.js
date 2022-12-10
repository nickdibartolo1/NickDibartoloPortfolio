import React from 'react'
import introIMG from '../img/introIMG.jpg'


export default function HomeIntro() {
    return (
        <div>
            <div className="heading-text">
                <h3>Hi! My name is</h3>
                <h1>Nick DiBartolo</h1>
            </div>
            <div>
                <img className="intro-img" src={introIMG} alt=""></img>
                <p className="main-text">I am an aspiring Web Developer/Software Engineer who graduated from Rutgers University's Full Stack Web Development Bootcamp program.</p>
            </div>
        </div>
    )
}
