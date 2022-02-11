import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Routers from "./nav/Routers";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./myWorks/MyWorks";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";




function App() {
    return (
        <div className="app">

                <Header/>
                <Main/>
                <Skills/>
                <MyWorks/>
                <Contacts/>
                <Footer/>

        </div>
    );
}

export default App;
