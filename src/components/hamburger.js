import React from 'react';


const Hamburger = (props) => {
    function HamburgerClick() {

        const navLinks = document.querySelector("nav");
        const hamburgerMenu = document.querySelector(".hamburger");
        navLinks.classList.toggle("nav-active");
        hamburgerMenu.classList.toggle("toggle-menu");
    }


    return (
        <div className="hamburger" onClick={HamburgerClick}>
            <div className="hamburger-line hamburger-line-1"></div>
            <div className="hamburger-line hamburger-line-2"></div>
            <div className="hamburger-line hamburger-line-3"></div>
        </div>
    );
}

export default Hamburger