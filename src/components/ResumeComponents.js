import React from 'react'

export default function ResumeComponents() {
    return (
        <div className="container pt-5">
            <div className="jumbotron">
                <div className="card">
                    <h1 className="card-header">Resume</h1>
                    <div className="card-body">
                        <hr />

                        <a
                            className=""
                            href={process.env.PUBLIC_URL + "/emily-mayeski-resume.pdf"}
                            target="_blank" rel="noreferrer"
                        >
                            <span>Download My Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>




    )
}
