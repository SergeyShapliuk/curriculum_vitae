import React from "react";
import s from './MyWork.module.css'




function MyWork(props:any){

    return(
        <div className={s.myWork}>
            <div  className={s.imageContainer}>
                <img src={props.img} alt={'картинка'}/>
                <a  href={props.href} className={s.href}>Watch</a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>

        </div>
    )
}

export default MyWork;