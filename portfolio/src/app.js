import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarMenu from './components/NavbarMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Footer from './components/Footer'




export default function App() {
    return (

        <div className="bg">
            <Router>
                <>
                    <NavbarMenu />
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="/about" element={<About />}></Route>
                        <Route exact path="/projects" element={<Projects />}></Route>
                        <Route exact path="/resume" element={<Resume />}></Route>
                    </Routes>
                </>
            </Router>
            <Footer />
        </div>
    )
}



