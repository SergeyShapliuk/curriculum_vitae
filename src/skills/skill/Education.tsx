import React from "react";
import s from './Education.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons/faRocket";


function Education() {
    return (
        <div id={"educ"} className={s.educBlock}>
            <div className={`${styleContainer.container} ${s.educContainer}`}>
                <div className={s.text}>
                    <div className={s.icon}>
                        <FontAwesomeIcon icon={faRocket}/>
                    </div>
                    <h4>2021-2022</h4>
                    <h2>IT-INCUBATOR</h2>
                    <h3>Frontend Developer - (JS,TypeScript,React)</h3>

                    <span>Online it-school. Belarus. Minsk</span>
                    <p>I studied the following technologies:
                    </p>
                    <ul>
                        <li>REACT</li>
                        <li>TYPESCRIPT</li>
                        <li>JAVASCRIPT</li>
                        <li>HTML & CSS & SASS</li>
                        <li>REDUX & REDUX-TOOLKIT</li>
                        <li>GRAPHQL</li>
                        <li>AXIOS</li>
                        <li>REST API</li>
                        <li>ANT DESIGN</li>
                        <li>MATERIAL-UI</li>
                        <li>UNIT TESTS & JEST</li>
                        <li>STORYBOOK POSTMAN</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education;