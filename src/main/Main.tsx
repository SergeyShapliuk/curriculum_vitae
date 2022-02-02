import React from "react";
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import smile from '../assets/image/smile.jpg'
import RollerText from "../common/feature/roller text/RollerText";
import TypeWrite from "../common/feature/type writer/TypeWrite";


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1 className={s.name}>I'm Sergey Shaplyuk</h1>
                    <TypeWrite/>
                </div>
                <div className={s.photo}>
                    <img src={smile}/>
                </div>
            </div>
            <RollerText/>
        </div>
    )
}

export default Main;