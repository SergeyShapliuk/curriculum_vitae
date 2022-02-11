import React from "react";
import s from './Nav.module.scss'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";


function Nav() {
    return (
        <div className={s.nav}>
            <Link to={'/'}><FontAwesomeIcon icon={faHouse}/>Home</Link>
            <Link to={'/about'}><FontAwesomeIcon icon={faUser}/>About</Link>
            <Link to={'/portfolio'}><FontAwesomeIcon icon={faBriefcase}/>Portfolio</Link>
            <Link to={'/contacts'}><FontAwesomeIcon icon={faEnvelope}/>Contacts</Link>
        </div>

    )
}

export default Nav;