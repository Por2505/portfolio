import React from "react";
import pj from "../img/project1.png";
import pj1 from "../img/project2.png";
import pj2 from "../img/Picture3.png";
import pj3 from "../img/archi.png";

function Popup(){
    return(
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    
                    <div class="img__popup">

                        <img srcset={pj1} 
                            sizes="(max-width: 56.25em) 20vw, (max-width:600px) 30vw,300px" 
                            alt=""
                            className="composition__popup composition__popup-p1"
                            src={pj1} />

                            <img srcset={pj3} 
                            sizes="(max-width: 56.25em) 20vw, (max-width:600px) 30vw,300px" 
                            alt=""
                            className="composition__popup composition__popup-p2"
                            src={pj3} />
                            <img srcset={pj2} 
                            sizes="(max-width: 56.25em) 20vw, (max-width:600px) 30vw,300px" 
                            alt=""
                            className="composition__popup composition__popup-p3"
                            src={pj2} />
        
                        </div>

                </div>
                <div class="popup__right">
                    <a href="#section-tours" class="popup__close">&times;</a>
                    <h2 class="heading-secondary u-margin-bottom-medium">Class Attandance Using Face Recognition</h2>
        
                    <p class="popup__text">
                    
                            <p class="p-ex">Languages </p>
                            <li className="p-small"> Python</li>
                            <p class="p-ex">Frameworks </p>
                            <li className="p-small"> Flask</li>
                            <p class="p-ex">Model</p>
                            <li className="p-small"> Face Detection : MTCNN</li>
                            <li className="p-small"> Face Recognition: FaceNet</li>
                            <p class="p-ex">Result</p>
                            <li className="p-small">Number of image : 144 </li>
                            <li className="p-small">Accuracy: 96.52%</li>

                            <div className="icon-popup">
                
                            <a href="https://github.com/Por2505/finals" target="_blank"><i className="icon fab fa-github fa-2x"></i></a>
                            
                            </div>
                     
                    </p>
                    
                </div>
            </div>
        </div>

        )
}

export default Popup;