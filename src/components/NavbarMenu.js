import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';

export default function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>NickDibartolo</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/resume">Resume</NavLink>
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