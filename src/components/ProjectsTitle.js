import React from 'react'

export default function ProjectsTitle({
    subheading = 'subheading',
    heading = 'heading',
}) {
    return (
        <div>
            <p>{subheading}</p>
            <h2>{heading}</h2>
        </div>
    )
}
