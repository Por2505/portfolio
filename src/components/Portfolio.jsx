import React from "react";
import img from "../img/Picture3.png";
import img1 from "../img/losepet.JPG";

function Portfolio(){
    return(
    
    <section className="section-portfolio">
            <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        My Portfolio
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--font">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">my Project</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Class Attandance using Face Recognition</li>
                                        <li>Python Flask</li>
                                        <li>Face detection: MTCNN</li>
                                        <li>Model: FaceNet</li>
                                        
        
                                    </ul>
                                </div>

                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">

                                            <img className="card__pic" src={img}/>
                                        </p>
                                        
                                    </div>
                                    <a href="#popup" className="btn btn--white">Details</a>
                                </div>
                            </div>
                        
                        </div>
                    
                    </div>


                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--font">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">Mini Project</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>LosePet Website</li>
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>Firebase</li>
                                        
                                    </ul>
                                </div>

                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">
                                            <img className="card__pic" src={img1}/>
                                        </p>
                                        
                                    </div>
                                    <a href="#popup" className="btn btn--white">Details</a>
                                </div>
                            </div>
                        
                        </div>

                    </div>

                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--font">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">The Snow Adventures</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>React</li>
                                        <li>Up to 30 people</li>
                                        <li>2 tours guide</li>
                                        <li>Sleeping cozy hotel</li>
                                        
                                    </ul>
                                </div>

                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        
                                    </div>
                                    <a href="#popup" className="btn btn--white">Book now</a>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>

    </section>
    
    )
}

export default Portfolio;