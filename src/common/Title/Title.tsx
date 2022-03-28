import React from "react";
import s from './Title.module.scss'





function Title(props:any){
    return (
        <div className={s.titleBlock}>
            <div className={s.title}>
                <h2>{props.title}</h2>
                <span>{props.titleBg}</span>
            </div>

        </div>

    )
}
export default Title;