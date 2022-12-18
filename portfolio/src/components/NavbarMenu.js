import React from 'react';
import './NavbarMenu.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function NavbarMenu() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='font-text'><span className='ND__span'>ND</span>Portfolio</Navbar.Brand>
                    <Nav className="me-3 ">
                        <Nav.Link><NavLink className="navLink" to="/">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="navLink" to="/about">About</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="navLink" to="/projects">Projects</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="navLink" to="/resume">Resume</NavLink></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}