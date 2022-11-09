import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__wrapper container">
                <ul className="navbar__left">
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul className="navbar__right">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;