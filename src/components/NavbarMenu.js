import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

export default function NavbarMenu() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='font-text'>NDPortfolio</Navbar.Brand>
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