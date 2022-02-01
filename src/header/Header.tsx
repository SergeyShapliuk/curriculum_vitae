import React from "react";
import s from './Header.module.scss'
import Nav from "../nav/Nav";
import HireMe from "../common/feature/hire me/HireMe";



function Header() {

    return (
        <div className={s.header}>
            <Nav/>
            <HireMe/>
        </div>
    )
}

export default Header;