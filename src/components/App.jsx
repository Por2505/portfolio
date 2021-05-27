import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import AbouMe from "./About-me";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import Experients from "./Experient";
import Footer from "./Footer";
import Popup from "./Popup";
import PopupLosePet from "./Popup-losepet";
function App(){
    return(<div>
        <Navbar/>
        <Header/>
        <AbouMe />
        <Skill />
        <Portfolio />
        <Experients />
        <Footer/>
        <Popup />
        <PopupLosePet />
        </div>
    )
}
export default App;