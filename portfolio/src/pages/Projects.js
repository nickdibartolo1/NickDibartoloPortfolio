import React, { useState } from 'react'
import ProjectsContent from '../components/ProjectsContent'
import projectData from '../assets/projectData'
import ProjectsLinkCard from '../components/ProjectsLinkCard';

export default function Projects() {
  const [data, setData] = useState(projectData);

  return (
    <div>
      <div>
        <div>
          <ProjectsLinkCard/>
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
