import React from 'react'
import introIMG from '../img/introIMG.jpg'
import './HomeComponent.css'


export default function HomeIntro() {
    return (
        <div>
            <div className="home-component__header">
                <h3>Hi! My name is</h3>
                <h1>Nick DiBartolo</h1>
            </div>
            <div>
                <img className="home-component__img" src={introIMG} alt=""></img>
                <p className="home-component__main-text">I am an aspiring Web Developer/Software Engineer who graduated from Rutgers University's Full Stack Web Development Bootcamp program.</p>
            </div>
        </div>
    )
}
