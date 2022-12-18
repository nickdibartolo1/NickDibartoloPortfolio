import React from 'react'
import './AboutComponent.css'
import about from '../img/about.jpg'

export default function AboutComponent() {
  return (
    <div className="">
      <h1 className="about-component__header">About Me!</h1>
      <div className="container">
      <hr />
      <div className="row d-flex align-items-center">
        <div className="col-6">
        <p className="about-left about-component__main-text">
       I was born and raised in Northern New Jersey where I grew up in Wayne, but now reside in Totowa. I love music as I play guitar and I also enjoy working out at the gym.
       I love to travel and am fairly spontaneous when it comes to it. 
       I took a road trip across the country when I was 20 years old driving from New jersey to California! When it comes to coding I was not too familiar until college as many of my friends went into engineering fields.

      </p>
      <p className="about-left about-component__main-text">
        Before coding, I was a student at Montclair State University studying Education to become a teacher. After the Pandemic, I decided to switch careers. Since I found coding fascinating and impressive, I decided to go all in and persue it! So far I have certainly enjoyed the creativity and challenges it
        demonstrates. I am excited to see where my path takes me!
      </p>
        </div>
        <div className="col-6">
        <img className="about-img" src={about} alt=""></img>
        </div>
      </div>
      </div>
    </div>
  )
}
