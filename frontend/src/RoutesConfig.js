import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DescriptionPage from './pages/DescriptionPage';

const RoutesConfig = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/description/:moviename' element={<DescriptionPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default RoutesConfig;
