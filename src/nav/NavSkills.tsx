import React from "react";
import s from './NavSkills.module.scss'
import {NavLink} from "react-router-dom";



function NavSkills() {

    return (
<div className={s.skillsBlock}>
        <div className={s.navSkillsBlock}>
            <div className={s.textExperience}>
                <NavLink to={'/about/experience'} className={(navData) => navData.isActive ? s.active : "" } >Experience</NavLink>
            </div>
                <div className={s.textEducation}>
                    <NavLink  to={'/about/educ'} className={(navData) => navData.isActive ? s.active : "" }  >Education</NavLink>
                </div>

                <div className={s.textSkills}>
                    <NavLink to={'/about/lines'} className={(navData) => navData.isActive ? s.active : "" }>Skills </NavLink>
            </div>
        </div>

</div>

    )
}

export default NavSkills;