import React from "react";
import s from './Nav.module.scss'
import {Link} from "react-router-dom";

function Nav() {
    return (

        <div className={s.navBlock}>
            <div className={s.container}>
                <div className={s.text}>
                    <Link to={'/'}>Home</Link>
                </div>
                <div className={s.text}>
                    <Link to={'/about'}>About</Link>
                </div>
                <div className={s.text}>
                    <Link to={'/portfolio'}>Portfolio</Link>
                </div>
                <div className={s.text}>
                    <Link to={'/contacts'}>contact</Link>
                </div>
            </div>
        </div>

    )
}

export default Nav;