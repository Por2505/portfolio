import React from "react";

function Skill(){
    return(
    
    <section className="section-skill">
        <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        My Skills
                    </h2>
                </div>
         <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-world"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Web Dev</h3>
                            <p className="feature-box__text">
                                HTML , CSS , JavaScript ,React,Node.js, Flask ,PHP (laravel)
                            </p>

                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-laptop"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Machine Learing & Image Processing</h3>
                            <p className="feature-box__text">
                               Python,Tensorflow, Keras, OpenCV
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                             <i className="feature-box__icon icon-basic-server2"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Database & DevOps</h3>
                             <p className="feature-box__text">
                                SQL, MongoDB, Docker, Git
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-heart"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Other</h3>
                            <p className="feature-box__text">
                                Uipath(RPA),<br/> Adobe Photoshop
                            </p>
                        </div>
                    </div>
                </div>

    </section>
    )
}

export default Skill;