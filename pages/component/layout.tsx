import React from 'react'
import Navbar from './navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='layout'>
            <div className='layout__navbar-wrapper'>
                <Navbar />
            </div>
            <div className='layout__content-wrapper'>
                {children}
            </div>
        </div>
    )
}

export default Layout;
