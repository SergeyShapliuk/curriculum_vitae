import React from "react";
import s from './Skill.module.css'


function Skill(props: any) {


    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}

export default Skill;