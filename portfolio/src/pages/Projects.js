import React, { useState } from 'react'
// import ProjectsTitle from '../components/ProjectsTitle'
import ProjectsContent from '../components/ProjectsContent'
import projectData from '../assets/projectData'

export default function Projects() {
  const [data, setData] = useState(projectData);

  return (
    <div>
      <div>
        <div>
          <div className="heading-text">
            <h1>Projects</h1>
            <h5>Here are some recent Projects</h5>
          </div>
          <div>
            <ul className="d-flex flex-column card-body no-bull bg-light">
              <h3>Links!</h3>
              <li ><a href="https://github.com/nickdibartolo1/challenge-10-assignment">Employee Command-Line</a></li>
              <li><a href="https://github.com/nickdibartolo1/challenge-3-assignment">Password Generator</a></li>
              <li><a href="https://github.com/nickdibartolo1/random-quote-generator">Random Quote Generator</a></li>
            </ul>
          </div>
          <div className="d-flex flex-column justify-content-center">
            {projectData.map(content => (
              <ProjectsContent
                key={content.id}
                title={content.name}
                description={content.description}
                img={content.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
