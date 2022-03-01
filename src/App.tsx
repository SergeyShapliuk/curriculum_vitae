import React from 'react';
import'./App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./myWorks/MyWorks";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import HeaderSkills from "./header/HeaderSkills";
import {Fade} from "react-awesome-reveal";


function App() {
    return (
        <div className="app">
<Fade>

    <Header/>
    <Main/>
    <Skills/>
    <HeaderSkills/>
    <MyWorks/>
    <Contacts/>
    <Footer/>

</Fade>
        </div>
    );
}

export default App;
