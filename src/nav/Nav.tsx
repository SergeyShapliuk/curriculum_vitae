import React from "react";
import s from './Nav.module.css'





function Nav(){
    return(
        <div className={s.nav}>

           <a href={""} >Main</a>
           <a href={""}>Skills</a>
           <a href={""}>Pet Projects</a>
           <a href={""}>Contacts</a>


        </div>
    )
}

export default Nav;