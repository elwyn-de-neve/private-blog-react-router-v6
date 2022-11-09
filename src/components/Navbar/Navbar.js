import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ( { isAuth, toggleAuth } ) => {

    return (
        <nav className="navbar">
            <div className="navbar__wrapper container">
                <ul className="navbar__left">
                    <li><NavLink to="/" className={ ( { isActive } ) => isActive ? "isActive" : "isNot" }>Home</NavLink></li>
                    { isAuth && <li><NavLink to="/articles" className={ ( { isActive } ) => isActive ? "isActive" : "" }>Articles</NavLink></li> }
                </ul>
                <ul className="navbar__right">
                    { !isAuth &&
                        <li><NavLink to="/login" className={ ( { isActive } ) => isActive ? "isActive" : "" }>Login</NavLink></li> }
                    { isAuth && <li><Link onClick={ () => toggleAuth( false ) } to="/">Logout</Link></li> }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;