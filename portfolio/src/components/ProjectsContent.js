import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom';


export default function ProjectsContent({
    img = '',
    title = 'Project Name',
    description = '',
}) {
    return (
        <div className="container pt-5 text-center">
            <div className="jumbotron">
                <div className="card">
                    <Link to="/projects">
                        <img src={img} alt="project img" />
                    </Link>
                    <div className="card-body">
                        <div>
                            <div>
                                <h3>{title}</h3>
                            </div>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

