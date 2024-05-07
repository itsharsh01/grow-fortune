import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const LandingPage = lazy(() => import('../../components/landingpage/landingPage'));
const HomePage = lazy(() => import('../../components/homePage/homePage'));
const DetailPage = lazy(() => import('../../components/detailPage/detailPage'));

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/detail' element={<DetailPage />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Allroutes
