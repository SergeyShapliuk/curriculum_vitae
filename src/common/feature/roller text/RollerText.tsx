import React from "react";
import s from './RollerText.module.scss'
import ButtonHireMe from "../button hire me/ButtonHireMe";
import {Link} from "react-router-dom";


function RollerText() {
    return (
        <div className={s.rollerTextBlock}>
            <h3><Link to={'/contacts'}><ButtonHireMe/></Link>
                <div className={s.roller}>
                    <span className={s.rollText}>
                        HTML<br/>
                        CSS<br/>
                        Java Script<br/>
                    React<br/>
                    Typescript<br/>
                    <span className={s.spareTime}>What else do you need to know?<br/></span>
                </span></div>
            </h3>
        </div>

    )
}
export default RollerText;