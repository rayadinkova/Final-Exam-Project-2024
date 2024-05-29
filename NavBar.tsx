
import React from 'react';
import { FaCarAlt, FaUserAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css'; 

const NavBar: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <FaCarAlt size={24} />
                <span>OPARKO</span>
            </div>
            <div className="navbar-links">
                <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
                <Link to="/finance" className={location.pathname === '/finance' ? 'active' : ''}>Finance</Link>
                <Link to="/permits" className={location.pathname === '/permits' ? 'active' : ''}>Permits</Link>
                <Link to="/fines" className={location.pathname === '/fines' ? 'active' : ''}>Fines</Link>
            </div>
            <div className="navbar-profile">
                <FaUserAlt size={24} />
            </div>
        </nav>
    );
};

export default NavBar;
