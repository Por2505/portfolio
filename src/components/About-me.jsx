import React from "react";
import img from "../img/por2.jpg";
import img1 from "../img/por3.jpg";
function AboutMe(){
    return(
        <section className="aboutme">
            <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        About Me
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                    <p className="paragraph">Extremely motivated to constantly develop my skills and
                    develop knowledge in work. I am ready to learn new things.
                    I would like to get the opportunity to learn and develop my
                    skills better.
                    </p>
                    <div>
                    <a href="https://github.com/Por2505" target="_blank"><i class="icon fab fa-github fa-3x"></i></a>
                    <a href="https://web.facebook.com/por2505/" target="_blank"><i class="icon fab fa-facebook fa-3x"></i></a>
                    <a href="https://medium.com/@graceful_lazuli_oyster_364/mini-project-losepet-%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87%E0%B8%AB%E0%B8%B2%E0%B8%A2-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-react-hook-1799c884b221"
                     target="_blank"><i class="icon fab fa-medium fa-3x"></i></a>
                    <a href="https://studio.youtube.com/channel/UCIscdOAmXaBlASxPRPrrzsg/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D" 
                    target="_blank"><i class="icon fab fa-youtube fa-3x"></i></a>
                    
                    
                    </div>

                    </div>
                    <div className="col-1-of-2">
                    <div class="composition">

                        <img srcset={img} 
                            sizes="(max-width: 56.25em) 20vw, (max-width:600px) 30vw,300px" 
                            alt=""
                            className="composition__photo composition__photo--p1" 
                            src={img} />

                            <img srcset={img1} 
                            sizes="(max-width: 56.25em) 20vw, (max-width:600px) 30vw,300px" 
                            alt=""
                            className="composition__photo composition__photo--p2" 
                            src={img1} />
        
                        </div>
                    </div>
                </div>

        </section>

    )
}
export default AboutMe;