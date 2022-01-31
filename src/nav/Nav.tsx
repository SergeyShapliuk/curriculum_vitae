import React from "react";
import s from './Nav.module.css'





function Nav(){
    return(
        <ul className={s.four}>

            <li><a href={"/home"} >Main</a></li>
            <li><a href={"/skills"}>Skills</a></li>
            <li><a href={""}>Pet Projects</a></li>
            <li><a href={""}>Contacts</a></li>


        </ul>
    )
}

export default Nav;