import React from "react";
import s from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";



function Contacts() {


    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <div className={s.discuss}>
                    <h2>Let's Discuss Your project</h2>
                    <li><FontAwesomeIcon icon={faPhone}/><span>+375293692937</span></li>
                    <li><FontAwesomeIcon icon={faEnvelope}/><span> sergeshapluk.gmail.com</span></li>
                    <li><FontAwesomeIcon icon={faLocationDot}/><span> Belarus,Minsk</span></li>

                </div>
                <div className={s.contactForm}>
                        <input type={"text"} name={"name"} placeholder={' Your name'}/>
                        <input type={"text"} name={"email"} placeholder={' Your email'}/><br/>
                        <textarea name={"message"} placeholder={' Your message'}/><br/>
                        <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contacts;