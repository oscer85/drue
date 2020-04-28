
import React from 'react'
import { Link } from 'react-router-dom'


const Nav = (props) => {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/about" ><li className="menu-link">about</li></Link>
                <Link to="/commercial" ><li className="menu-link">commercial</li></Link>
                <Link to="/designe" ><li className="menu-link">druÉ design</li></Link >
                <Link to="/logo-concept" ><li className="menu-link">logo concept</li></Link>
                <Link to="/press" ><li className="menu-link">press</li></Link>
            </ul >
        </nav >
    );
}

export default Nav;
