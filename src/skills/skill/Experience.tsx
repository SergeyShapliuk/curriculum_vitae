import React from "react";
import s from './Experience.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";
import ButtonWithGradient from "../../common/feature/button/ButtonWithGradient";


function Experience() {

    return (
        <div id={"experience"} className={s.educBlock}>
            <div className={`${styleContainer.container} ${s.educContainer}`}>
                <div className={s.text}>
                    <div className={s.icon}>
                        <FontAwesomeIcon icon={faBriefcase}/>
                    </div>
                    <h4>2021-2022</h4>
                    <h2>Part Time</h2>
                    <h3>Frontend Developer - (JS,TypeScript,React)</h3>
                    <p>I`m a freelance creative designer with a love for minimal design,
                        clean typography and well-written code.
                    </p>
                    <span>React development using redux, React-redux, react  router-dom, redux-thunk, redux-toolkit , Axios, Formik, Ant-design libraries.
Using next developer technologies: React/Redux/ReduxThunk/RestAPI/Axios/Formik/
      Material UI
Checking the correctness of the code with Unit Tests, applying Storybook for demonstration of individual modules of the application. Using TypeScript forth best code control during development.
I want to develop further, I would like to learn Angular/Node.j/GraphQL/React Native.</span>
                </div>
                <ButtonWithGradient/>
            </div>

        </div>
    )
}

export default Experience;