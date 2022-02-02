import React from "react";
import s from './MyWork.module.scss'


function MyWork(props: any) {

    return (
        <div className={s.myWork}>
            <div className={s.imageContainer} style={props.style}>
                <a href={props.href} className={s.viewButton}>Watch</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default MyWork;