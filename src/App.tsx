import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./myWorks/MyWorks";
import Variants from "./variants/Variants";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";




function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Variants/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
