import React from "react";
import s from './RollerText.module.scss'
import ButtonHireMe from "../button/button hire me/FloatText";
import {Link} from "react-router-dom";


function RollerText() {
    return (
        <div className={s.rollerTextBlock}>

            <nav className={s.nav}>
                <input type="checkbox" className={s.nav__cb} id="menuCb"/>
                <div className={s.nav__content}>
                    <ul className={s.nav__items}>
                        <li className={s.nav__item}>
            <span>
              Home
            </span>
                        </li>
                        <li className={s.nav__item}>
            <span>
              Works
            </span>
                        </li>
                        <li className={s.nav__item}>
            <span>
              About
            </span>
                        </li>
                        <li className={s.nav__item}>
            <span>
              Contact
            </span>
                        </li>
                    </ul>
                </div>
                <label className={s.nav__btn} htmlFor="menuCb"></label>
            </nav>
        </div>

    )
}

export default RollerText;