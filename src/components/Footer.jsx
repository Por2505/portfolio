import React from "react";

function Footer(){
    return(<footer className="footer">
    
    <div className="row">
        <div className="col-1-of-2">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item"><a href="#" className="footer__link">AboutMe</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">My Skills</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">My Experient</a></li>
                    <li className="footer__item"><a href="#" className="footer__link"> My Portfolio</a></li>
                    
                </ul>
            </div>
        </div>
        <div className="col-1-of-2">
            <div className="footer__copyright">
                Built my <a href="#" className="footer__link">Sarawadee Noktawee </a> 
                . <br/>Copyright &copy; by Sarawadee Noktawee
            </div>
        </div>
    </div>
</footer>)

}

export default Footer;