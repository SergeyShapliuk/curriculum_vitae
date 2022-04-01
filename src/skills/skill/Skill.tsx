import React from "react";
import s from './Skill.module.scss'


function Skill(props: any) {

    return (
        <div id={"lines"} className={s.skill}>
            <div className={s.icon} style={props.style}>
            </div>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}

export default Skill;