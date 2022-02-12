import React from "react";
import s from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import FloatText from "../common/feature/button hire me/FloatText";




function Footer() {

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <div className={s.title}>
                    <FloatText/>
                </div>
                <div className={s.items}>

                    <FontAwesomeIcon icon={faLinkedin} className={s.linkedin}/>
                    <FontAwesomeIcon icon={faGithubSquare}/>

                </div>
                <span><b>Copyright &copy; {new Date().getFullYear()}. All right reserved.</b></span>
            </div>
        </div>
    )
}

export default Footer;