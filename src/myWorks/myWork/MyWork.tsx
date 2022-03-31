import React from "react";
import s from './MyWork.module.scss'


function MyWork({hrefDemo, hrefCode, ...props}: any) {

    return (
        <div className={s.myWork}>
            <div className={s.imageContainer} style={props.style}>
                <a href={hrefDemo} target={"_blank"} title={"Used by Heroku"} className={s.viewButton}>Click to view</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}<a href={hrefCode} target={"_blank"} style={{
                    color: "black",
                    fontWeight: "bold",
                    textDecoration: "underline",

                }}>View code...</a></span>
            </div>
        </div>
    )
}

export default MyWork;