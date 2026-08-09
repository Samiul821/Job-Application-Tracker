import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='className={`min-h-[calc(100vh-150px)] '>
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;