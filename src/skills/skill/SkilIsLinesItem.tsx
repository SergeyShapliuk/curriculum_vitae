import React from "react";
import s from './SkillsLinesItem.module.scss'
import Skill from "./Skill";

function SkillItem() {

    return (

        <div className={s.skillItems}>

            <li>
               <h3>TypeScript - 60%</h3><span className={s.bar}><span className={s.typescript}></span></span>
            </li>
            <li>
                <h3>Java Script - 70%</h3><span className={s.bar}><span className={s.javaScript}></span></span>
            </li>
            <li>
                <h3>React - 70%</h3><span className={s.bar}><span className={s.react}></span></span>
            </li>
            <li>
                <h3>HTML5 - 50%</h3><span className={s.bar}><span className={s.html}></span></span>
            </li>
            <li>
                <h3>CSS - 50%</h3><span className={s.bar}><span className={s.css}></span></span>
            </li>

        </div>

    )
}

export default SkillItem;