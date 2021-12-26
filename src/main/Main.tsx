import React from "react";
import s from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import smile from '../common/image/smile.jpg'


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Sergey Shaplyuk</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>
                    <img src={smile}/>
                </div>
            </div>
        </div>
    )
}

export default Main;