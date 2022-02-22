import React from "react";
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";

function Nav() {
    return (

        <div className={s.navBlock}>
            <div className={s.container}>
                <div className={s.text}>
                    <NavLink to={'/'} className={(navData) => navData.isActive ? s.active : "" }>Home</NavLink>
                </div>
                <div className={s.text}>
                    <NavLink to={'/about'} className={(navData) => navData.isActive ? s.active : "" }>About</NavLink>
                </div>
                <div className={s.text}>
                    <NavLink to={'/portfolio'} className={(navData) => navData.isActive ? s.active : "" }>Portfolio</NavLink>
                </div>
                <div className={s.text}>
                    <NavLink to={'/contacts'} className={(navData) => navData.isActive ? s.active : "" }>contacts</NavLink>
                </div>
            </div>
        </div>

    )
}

export default Nav;