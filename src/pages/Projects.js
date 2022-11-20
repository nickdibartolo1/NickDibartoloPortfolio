import React, { useState } from 'react'
// import ProjectsTitle from '../components/ProjectsTitle'
import ProjectsContent from '../components/ProjectsContent'
import projectData from '../assets/projectData'

export default function Projects() {
const [data, setData] = useState(projectData);

  return (
    <div>
      <div className="">
        <div className="">
         <h1>Projects</h1>
         <h5>Here are some recent Projects</h5>
          <div className="">
            {projectData.map( content => (
            <ProjectsContent
            key={content.id}
            title={content.name}
            description={content.description}
            img={content.img}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
