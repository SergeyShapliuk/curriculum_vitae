import React from "react";
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'

import TypeWrite from "../common/feature/type writer/TypeWrite";



function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h2>-I'm Sergey Shaplyuk.</h2>
                    <TypeWrite/>
                    <p>
                        I'm a belorussian based front‑end developer
                        focused on crafting clean & user‑friendly experiences,
                        I am passionate about building excellent software that improves
                        the lives of those around me.
                    </p>
                </div>
                <div className={s.photo}>
                    {/*<img src={smile} alt=""/>*/}
                </div>
            </div>
        </div>
    )
}

export default Main;