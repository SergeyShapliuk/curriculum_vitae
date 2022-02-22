import React from "react";
import s from './Title.module.scss'





function Title(props:any){
    return (
        <div className={s.title}>
            <div>
                <h2>{props.title}</h2>
            </div>

        </div>

    )
}
export default Title;