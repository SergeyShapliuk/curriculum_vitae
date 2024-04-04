import React from "react";
import s from "./Main.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import ReactTypingEffectDemo from "../common/feature/type writer/typedLibrary/ReactTypingEffectDemo";
import photo from "../assets/image/photo_.jpg";
import {Element} from "react-scroll";

function Main() {
    let bg: any = document.querySelectorAll("#photo");
    for (let i = 0; i < bg.length; i++) {
        window.addEventListener("mousemove", function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            bg[i].style.transform = "translate(+" + x * 20 + "px, -" + y * 20 + "px)";
        });
    }
    return (
        <Element name={"home"}>
            <section className={s.mainBlock}>
                <div className={`${styleContainer.container} ${s.mainContainer}`}>
                    <div className={s.text}>
                        <span>Hi There</span>
                        <h2>-I'm Sergey Shapliuk.</h2>
                        <ReactTypingEffectDemo/>
                        <p>
                            I'm a based front‑end developer
                            focused on crafting clean & user‑friendly
                            Single-page application (SPA), PWA and mobile apps with React / React-native / TypeScript.
                            I am passionate about building excellent software that improves
                            the lives of those around me.
                        </p>
                    </div>
                    <div id={"photo"} className={s.photo}>
                        <img src={photo} id={"photo"} alt=""/>
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default Main;
