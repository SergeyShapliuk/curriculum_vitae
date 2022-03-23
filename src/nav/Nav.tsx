import React from "react";
import s from './Nav.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";

function Nav() {
    return (
        <div className={s.navBlock}>
            <div className={s.container}>
                <div className={s.text}>
                    <Link className={s.active}
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={-200}
                          duration={500}>Home</Link>
                </div>
                <div className={s.text}>
                    <Link className={s.active}
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={-30}
                          duration={500}>About</Link>
                </div>
                <div className={s.text}>
                    <Link className={s.active}
                          to="my_works"
                          spy={true}
                          smooth={true}
                          offset={-30}
                          duration={500}>Portfolio</Link>
                </div>
                <div className={s.text}>
                    <Link className={s.active}
                          to="contacts"
                          spy={true}
                          smooth={true}
                          offset={-30}
                          duration={500}>contacts</Link>

                </div>
            </div>
        </div>

    )
}

export default Nav;