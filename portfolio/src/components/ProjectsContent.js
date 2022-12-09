import React from 'react'
import { Link } from 'react-router-dom';


export default function ProjectsContent({
    img = '',
    title = 'Project Name',
    description = 'lorem lorem lorem lorem lorem',
}) {
    return (
        <div className="container pt-5 text-center">
            <div className="jumbotron">
                <div className="card">
                            <Link to="/projects" className="PC-image">
                                <img src={img} alt="project img" />
                            </Link>
                            <div className="card-body">
                                <div className="">
                                    <div>
                                        <h3 className="">{title}</h3>
                                    </div>
                                    <p className="">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

