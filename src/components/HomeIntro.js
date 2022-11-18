import React from 'react'
import introIMG from '../img/introIMG.jpg'


export default function HomeIntro() {
    return (
        <div>
            <div className="intro-text main-text">
                <h3>Hi! My name is</h3>
                <h1>Nick DiBartolo</h1>
            </div>
            <div>
                <img className="intro-img" src={introIMG} alt=""></img>
                <p className="intro-text">I am an aspiring developer currently enrolled in Rutgers University's Full Stack Web Development Bootcamp.</p>
            </div>
        </div>
    )
}
