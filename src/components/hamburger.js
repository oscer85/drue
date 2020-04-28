import React, { useRef, useState } from 'react';


const Hamburger = (props) => {

    const hamburgerRef = useRef(null);

    const [isOpen, setOpen] = useState(false)

    function HamburgerClick() {

        setOpen(true)



        //const navLinks = document.querySelector("nav");
        //const hamburgerMenu = document.querySelector(".hamburger");
        //navLinks.classList.toggle("nav-active");
        //hamburgerMenu.classList.toggle("toggle-menu");
    }


    return (
        <div className={isOpen ? "toggle-menu" : "hamburger"} ref={hamburgerRef} onClick={HamburgerClick}>
            <div className="hamburger-line hamburger-line-1"></div>
            <div className="hamburger-line hamburger-line-2"></div>
            <div className="hamburger-line hamburger-line-3"></div>
        </div>
    );
}

export default Hamburger