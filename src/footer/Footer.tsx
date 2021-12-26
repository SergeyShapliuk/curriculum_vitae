import React from "react";
import s from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Item from "./Item";


function Footer() {

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Sergey Shaplyuk</h2>
                <div className={s.items}>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
            <span><b>&copy;{new Date().getFullYear()} All right reserved</b></span>
        </div>
    )
}

export default Footer;