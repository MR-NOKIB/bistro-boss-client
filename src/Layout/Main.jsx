import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import NavBar from '../pages/shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    console.log(location);
    if(location.pathname.includes('login') || location.pathname.includes('signup')){
        return <Outlet></Outlet>
    }
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;