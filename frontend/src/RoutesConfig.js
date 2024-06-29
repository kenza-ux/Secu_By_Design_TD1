import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DescriptionPage from './pages/DescriptionPage';
import Login from './components/Login';
import Movies from './pages/Movies';
import Register from './components/Register'

const RoutesConfig = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/description/:moviename' element={<DescriptionPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="/allMovies" element={<Movies/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default RoutesConfig;
