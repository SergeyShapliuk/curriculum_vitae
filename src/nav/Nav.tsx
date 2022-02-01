import React from "react";
import s from './Nav.module.scss'
import {Link} from "react-router-dom";
import HireMe from "../common/feature/hire me/HireMe";



function Nav() {
    return (
        <div className={s.nav}>
            <nav>
                <h2><Link to={'/'}>Home</Link></h2>
                <h2><Link to={'/about'}>About</Link></h2>
                <h2><Link to={'/contacts'}>Contacts</Link></h2>
            </nav>
        </div>

    )
}

export default Nav;