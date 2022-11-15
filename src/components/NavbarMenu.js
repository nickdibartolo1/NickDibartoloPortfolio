import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

export default function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>NickDibartolo</Navbar.Brand>
                    <Nav className="me-3 ">
                        <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/projects">Projects</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/contact">Contact</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/resume">Resume</NavLink></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}


// export default function NavbarMenu() {
//     return (
//         <Navbar bg="dark">
//             <div>
//                 <ul>
//                     <li>
//                         <NavLink to="/">Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/about">About</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/projects">Projects</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/resume">Resume</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/contact">Contact</NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </Navbar>
//     )
// }