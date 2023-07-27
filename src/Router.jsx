import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Pages
import Home from './pages/Home'

//Components


//Style
import './main.css'


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />    
            </Routes>
        </BrowserRouter>
    );
};

export default Router