import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />    
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router