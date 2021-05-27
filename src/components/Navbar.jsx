import React from "react";

function Navbar(){
    return ( 
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon"/>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>about me</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>my skills</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>my portfolio</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"> <span>04</span>my experient</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Book now</a></li>
                </ul>
            </nav>
        </div>
             
)
}
export default Navbar;