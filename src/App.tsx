import React from 'react';
import './App.scss';
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./myWorks/MyWorks";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import HeaderSkills from "./header/HeaderSkills";
import {Fade} from "react-awesome-reveal";
import Nav from "./nav/Nav";
import Header from "./header/Header";


function App() {
    return (
        <div className="app">
            <Header/>
            <Fade>
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
