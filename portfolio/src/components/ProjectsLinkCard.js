import React from 'react'
import './Projects.css'

export default function ProjectsLinkCard() {
    return (
        <div>
            <div>
                <div className="heading-text">
                    <h1>Projects</h1>
                    <h5>Here are some recent Projects</h5>
                </div>
                <div className='proj-card-style'>
                    <ul className="proj-links__style bg-light">
                        <h3>Links!</h3>
                        <li><a href="https://github.com/nickdibartolo1/NFL-Fan-Base">NFL-Fan-Base</a></li>
                        <li ><a href="https://github.com/nickdibartolo1/challenge-10-assignment">Employee Command-Line</a></li>
                        <li><a href="https://github.com/nickdibartolo1/challenge-3-assignment">Password Generator</a></li>
                        <li><a href="https://github.com/nickdibartolo1/random-quote-generator">Random Quote Generator</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
