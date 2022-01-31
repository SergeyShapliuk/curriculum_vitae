import React from "react";
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import smile from '../assets/image/smile.jpg'



function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1 className={s.name}>I'm Sergey Shaplyuk</h1>
                    <p>
                        <span className={s.typeWriter}><h3>Frontend Developer</h3></span>
                        </p>
                </div>
                <div className={s.photo}>
                    <img src={smile}/>
                </div>
            </div>
        </div>
    )
}

export default Main;