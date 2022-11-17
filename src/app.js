import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarMenu from './components/NavbarMenu';
import Home from './mainComponents/Home'
import About from './mainComponents/About'
import Projects from './mainComponents/Projects'
import Resume from './mainComponents/Resume'
import Contact from './mainComponents/Contact'




export default function App() {
    return (
        <>
        <div className="bg">
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
            </div>
        </>
    )
}



