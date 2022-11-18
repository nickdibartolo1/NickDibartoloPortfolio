import React, { useState } from 'react'
import ProjectsTitle from '../components/ProjectsTitle'
import projectData from '../assets/projectData'

export default function Projects() {
const [data, setData] = useState(projectData);

  return (
    <div>
      <div className="title-padding">
        <div className="container">
          <ProjectsTitle heading="Projects" 
          subheading="Here are some recent projects" >
          </ProjectsTitle>
        </div>
      </div>
    </div>
  )
}
