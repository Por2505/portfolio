import React from "react";
import pj from "../img/losepet.JPG";
import pj1 from "../img/pjlp.JPG";


function PopupLosePet(){
    return(
        <div className="popup" id="popuplosepet">
            <div className="popup__content">
                <div className="popup__left">
                    
                    <div class="img__popup">

                        <img srcset={pj} 
                            sizes="(max-width: 56.25em) 20vw, (max-width:600px) 30vw,300px" 
                            alt=""
                            className="composition__popup composition__popup-p1"
                            src={pj} />

                            <img srcset={pj1} 
                            sizes="(max-width: 56.25em) 20vw, (max-width:600px) 30vw,300px" 
                            alt=""
                            className="composition__popup composition__popup-p2"
                            src={pj1} />
                            
        
                        </div>

                </div>
                <div class="popup__right">
                    <a href="#section-tours" class="popup__close">&times;</a>
                    <h2 class="heading-secondary u-margin-bottom-medium">LosePet</h2>
        
                    <p class="popup__text">
                    
                            <p class="p-ex">Languages </p>
                            <li className="p-small"> HTML CSS JavaScript</li>
                            <p class="p-ex">Frameworks </p>
                            <li className="p-small"> React + Redux</li>
                            <p class="p-ex">Database</p>
                            <li className="p-small"> Firebase</li>
                            <div className="icon-popup">
                            <a href="https://medium.com/@graceful_lazuli_oyster_364/mini-project-losepet-%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87%E0%B8%AB%E0%B8%B2%E0%B8%A2-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-react-hook-1799c884b221"
                     target="_blank"><i class="icon fab fa-medium fa-2x"></i></a>
                            <a href="https://github.com/Por2505/losepet" target="_blank"><i className="icon fab fa-github fa-2x"></i></a>
                            
                            </div>
                            
                     
                    </p>
                    
                </div>
            </div>
        </div>

        )
}

export default PopupLosePet;