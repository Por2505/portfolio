import React from "react";
import img from "../img/ex.jpg";

function Experients(){
    return(
        <section className="section-experient" id="experient">
            <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        My Experient
                    </h2>
                </div>
                <div className="row">
                    <div className="story">
                    <figure className="story__shape">
                        <img src={img} className="story__img"/>
                        <figcaption className="story__caption">Internship</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            <br/>
                            Octagon Interactive
                        </h3>
                        
                        <p className="p-ex">Jan-May 2021</p>
                        <p className="p-ex">Position: Software Developer</p>
                        <p className="p-ex">Integrated HikVision for Smart Living System </p>
                        <p className="p-ex">Integrated HDL for Home Automation System </p>
                        <p className="p-ex">Update Website Octagon Interactive </p>
                        
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Experients;