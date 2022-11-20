import React, { useState } from 'react'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitForm = () => {

    }
    return (
        <div className="container pt-5">
            <div className="jumbotron">
                <div className="card">
                    <h1 className="card-header">Contact Form</h1>
                    <div className="card-body">
                        <form onSubmit={submitForm}>
                            <div className="">
                                <label>
                                    Your Name
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="">
                                <label>
                                    Your Email
                                    <input
                                        type="text"
                                        id="email"
                                        email="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="">
                                <label>
                                    Message
                                    <textarea
                                        type="text"
                                        id="message"
                                        message="message"
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                    />
                                </label>
                            </div>
                            <button className="" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

