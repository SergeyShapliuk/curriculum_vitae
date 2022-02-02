import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Routers from "./nav/Routers";




function App() {
    return (
        <div className="app">

                <Header/>
                <Routers/>

        </div>
    );
}

export default App;
