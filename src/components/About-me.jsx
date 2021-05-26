import React from "react";
import img from "../img/por.jpg";
function AboutMe(){
    return(
        <section className="aboutme">
            <h1>About Me</h1>
            <div className="row">
                <div className="col-1-of-2">
                    Extremely motivated to constantly develop my skills and
                    develop knowledge in work. I am ready to learn new things.
                    I would like to get the opportunity to learn and develop my
                    skills better.
                </div>
                <div className="col-1-of-2">
                    <img src={img}/>
                </div>
            </div>


        </section>

    )
}
export default AboutMe;