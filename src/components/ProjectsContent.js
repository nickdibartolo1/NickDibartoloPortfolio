import React from 'react'
import { Link } from 'react-router-dom';


export default function ProjectsContent({
    img = '',
    title = 'Project Name',
    description = 'lorem lorem lorem lorem lorem',
  }) {
  return (
    <div className="">
        <Link to="/projects" className="PC-image">
        <img src={img} alt="project img" />
      </Link>
      <div className="">
        <Link to="#">
          <h3 className="">{title}</h3>
        </Link>
        <p className="">{description}</p>
      </div>
    </div>
  )
}
