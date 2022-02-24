import React from "react";
import s from './Experience.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";


function Experience() {
    return (
        <div className={s.educBlock}>
            <div className={`${styleContainer.container} ${s.educContainer}`}>
                <div className={s.text}>
                    <div className={s.icon}>
                        <FontAwesomeIcon  icon={faBriefcase}   />
                    </div>
                        <h4>2021-2022</h4>
                        <h2>Freelance</h2>
                        <h3>Frontend Developer - (JS,TypeScript,React)</h3>

                        <span>---------------</span>


                        <p>I`m a freelance creative designer with a love for minimal design,
                            clean typography and well-written code.
                        </p>


                </div>
            </div>
        </div>
    )
}

export default Experience;