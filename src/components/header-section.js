import React from 'react';
import Drue from '../img/drue.png'
import Arrow from '../img/arrow.png'

const HeaderSection = (props) => {

    function ArrowClick() {
        const header = document.querySelector("header");
        const headerHeight = header.offsetHeight;

        window.scroll({
            top: headerHeight,
            left: 0,
            behavior: "smooth"
        });


        let options = {
            root: null,
            rootMargin: "-89% 0px 0px 0px",
            trashold: 0.1
        };
        const observer = new IntersectionObserver(entries => {
            const logo = document.querySelector(".logo");
            const entry = entries[0];
            console.log(entry.intersectionRatio);

            if (!entry.isIntersecting) {
                logo.classList.add("logo-fixed");
            } else {
                logo.classList.remove("logo-fixed");
            }
        }, options);

        observer.observe(header);

    }
    return (<div >
        <section className="header" >
            <header >
                <div className="logo-wrapper" >
                    <img src={Drue} alt="Drue" className="logo" />
                </div>
                <div className="arrow" onClick={ArrowClick} >
                    <img src={Arrow} alt="arrow" />
                </div>
            </header>
        </section>
    </div>

    );
}

export default HeaderSection;