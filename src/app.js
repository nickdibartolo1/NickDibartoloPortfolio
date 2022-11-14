import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarMenu from './components/NavbarMenu';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'




export default function App() {
    return (
        <>
            <Router>
                <NavbarMenu />
                <Routes>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/resume" element={<Resume />}></Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Router>
        </>
    )
}



