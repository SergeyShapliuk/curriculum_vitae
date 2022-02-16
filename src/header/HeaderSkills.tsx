import React from "react";
import s from './HeaderSkills.module.scss'
import NavSkills from "../nav/NavSkills";
import RoutersSkills from "../nav/RoutersSkills";



function HeaderSkills() {

    return (
        <div className={s.header}>
            <div >
                <NavSkills/>
                <RoutersSkills/>
            </div>

        </div>
    )
}

export default HeaderSkills;