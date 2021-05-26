import React from "react";
import profile from '../img/vdo.mp4'

function Header(){
    return(<div>
        <header>
        <div className="bg-video">
                    <video className="bg-video__content" autoplay muted loop>
                        <source src={profile} type="video/mp4" />
                    </video>
                    
        </div>
        
            <div className="header__logo">
               <h1 className="logo-box">MyProfile</h1>
            </div>
            <div className="header__text">
                <h1 className="heading__primary">
                    <p className="heading__primary--sub"> Hi There &#128075; , I'm </p> 
                    <p className="heading__primary--main">Sarawadee Noktawee</p>
                    <button className="btn btn--white btn--animated">Download CV</button>
               </h1>
            </div>
            
        </header>
        </div>)

}
export default Header;