import React from 'react'

export default function Footer() {
    return (
        <footer className="footer bg-dark">
            <div>
                <p>
                    <h3 className="footer-text text-white">Connect with me!</h3>
                    <hr />
                    <div className="connect-links">
                        <a className="connect-links" href="https://github.com/nickdibartolo1/">
                        <i className="fa fa-github fa-2x"></i>
                        </a>
                        <a className='connect-links'
                            href="https://www.linkedin.com/in/nicholas-dibartolo-a93310245/">
                            <i className="fa fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </p>
            </div>
        </footer>
    )
}
