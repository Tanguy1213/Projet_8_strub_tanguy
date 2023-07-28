import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />    
                <Route path="/About" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router