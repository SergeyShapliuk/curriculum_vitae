import React, {CSSProperties} from "react";
import s from "./Nav.module.scss";
import {motion} from "framer-motion";
import {MenuItem} from "./MenuItem";
import {Images} from "../assets/Images";

type NavPropsType = {
    style?: CSSProperties
}

function Nav({style}: NavPropsType) {
    const variants = {
        open: {
            transition: {staggerChildren: 0.07, delayChildren: 0.2}
        },
        closed: {
            transition: {staggerChildren: 0.05, staggerDirection: -1}
        }
    };
    const itemIds = [
        {id: 1, icon: Images.home_icon, title: "Home", link: "home"},
        {id: 2, icon: Images.about_icon, title: "About", link: "about"},
        {id: 3, icon: Images.portfolio_icon, title: "Portfolio", link: "my_works"},
        {
            id: 4,
            icon: Images.contacts_icon,
            title: "Contacts",
            link: "contacts"
        }] as { id: number, icon: string, title: string, link: string }[];
    return (
        // <div className={s.navBlock}>
        //     <div className={s.container}>
        <motion.ul className={s.nav} variants={variants} style={style}>
            {itemIds.map(i => (
                <MenuItem item={i} key={i.id}/>
            ))}
            {/*<div className={s.text}>*/}

            {/*    <Link activeClass={s.active}*/}
            {/*          to="home"*/}
            {/*          spy={true}*/}
            {/*          smooth={true}*/}
            {/*          offset={-200}*/}
            {/*          spyThrottle={500}*/}
            {/*          duration={1000}>Home</Link>*/}
            {/*/!*</div>*!/*/}
            {/*/!*<div className={s.text}>*!/*/}
            {/*    <Link activeClass={s.active}*/}
            {/*          to="about"*/}
            {/*          spy={true}*/}
            {/*          smooth={true}*/}
            {/*          offset={-30}*/}
            {/*          spyThrottle={500}*/}
            {/*          duration={1000}>About</Link>*/}
            {/*/!*</div>*!/*/}
            {/*/!*<div className={s.text}>*!/*/}
            {/*    <Link activeClass={s.active}*/}
            {/*          to="my_works"*/}
            {/*          spy={true}*/}
            {/*          smooth={true}*/}
            {/*          offset={-30}*/}
            {/*          spyThrottle={500}*/}
            {/*          duration={1000}>Portfolio</Link>*/}
            {/*/!*</div>*!/*/}
            {/*/!*<div className={s.text}>*!/*/}
            {/*    <Link activeClass={s.active}*/}
            {/*          to="contacts"*/}
            {/*          spy={true}*/}
            {/*          smooth={true}*/}
            {/*          offset={-30}*/}
            {/*          spyThrottle={500}*/}
            {/*          duration={1000}>contacts</Link>*/}

            {/*</div>*/}
        </motion.ul>
        //     {/*</div>*/}
        // // </div>

    )
        ;
}

export default Nav;
