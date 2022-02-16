import React from "react";
import s from './Header.module.scss'
import Nav from "../nav/Nav";
import NavSkills from "../nav/NavSkills";





function Header() {

    return (
        <div className={s.header}>
            <Nav/>
            <NavSkills/>
        </div>
    )
}

export default Header;