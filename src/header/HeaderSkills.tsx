import React from "react";
import s from './HeaderSkills.module.scss'
import NavSkills from "../nav/NavSkills";
import RoutersSkills from "../nav/RoutersSkills";
import {HashRouter} from "react-router-dom";


function HeaderSkills() {

    return (
        <div className={s.header}>
            <div>
                <HashRouter>
                    <NavSkills/>
                    <RoutersSkills/>
                </HashRouter>


            </div>

        </div>
    )
}

export default HeaderSkills;