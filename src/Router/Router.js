import React from 'react';
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"

const Router = () => {
    return (
        <BrowserRouter>
         <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    );
};

export default Router;