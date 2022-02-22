import React from "react";
import s from './Header.module.scss'
import Nav from "../nav/Nav";
import Routers from "../nav/Routers";






function Header() {

    return (
        <div className={s.header}>

                <Nav/>
                <Routers/>

        </div>
    )
}

export default Header;