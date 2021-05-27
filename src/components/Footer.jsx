import React from "react";

function Footer(){
    return(<footer className="footer">
    
    <div className="row">
        <div className="col-1-of-2">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                </ul>
            </div>
        </div>
        <div className="col-1-of-2">
            <div className="footer__copyright">
                Built my <a href="#" className="footer__link">Sarawadee Noktawee </a> for her practics
                <a href="#" className="footer__link"> Advance CSS and Sass</a>. Copyright &copy; by Sarawadee Noktawee
            </div>
        </div>
    </div>
</footer>)

}

export default Footer;