import React from "react";
import s from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Item from "./Item";


function Footer() {

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Sergey Shaplyuk</h2>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    )
}

export default Footer;