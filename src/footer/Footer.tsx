import React from "react";
import s from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Item from "./Item";
import gitHub from "../assets/image/icon-github.png"
import linkedin from "../assets/image/icon-linkedin.png"


function Footer() {
    const iconGitHub = {
        color: 'blue',
        backgroundImage: `url(${gitHub})`,
    };
    const iconLinkedin = {
        color: 'blue',
        backgroundImage: `url(${linkedin})`,
    };
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Sergey Shaplyuk</h2>
                <div className={s.items}>
                    <Item style={iconGitHub}/>
                    <Item style={iconLinkedin}/>
                </div>
            </div>
            <span><b>&copy;{new Date().getFullYear()} All right reserved</b></span>
        </div>
    )
}

export default Footer;