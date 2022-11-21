import React, { useState } from 'react'
// import {valid} from "../utils/helpers"

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitForm = () => {

    }
    return (
        <div className="container pt-5 centered-contact text-center form-margin">
            <div className="jumbotron">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={submitForm}>
                            <div className="">
                                <label>
                                    Your Name
                                    <input
                                        className="form-control"
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
                                        className="form-control"
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
                                        className="form-control"
                                        type="text"
                                        id="message"
                                        message="message"
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                    />
                                </label>
                            </div>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

