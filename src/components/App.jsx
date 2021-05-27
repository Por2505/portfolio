import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import AbouMe from "./About-me";
import Skill from "./Skill";
import Experient from "./Experient";
function App(){
    return(<div>
        <Navbar />
        <Header/>
        <AbouMe />
        <Skill />
        <Experient />
        </div>
    )
}
export default App;