import React from "react";
import s from './Nav.module.scss'
import {Link} from "react-router-dom";



function Nav() {
    return (
            <nav className={s.nav}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contacts'}>Contacts</Link>
            </nav>

    )
}
export default Nav;