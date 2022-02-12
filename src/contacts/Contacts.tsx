import React from "react";
import s from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/Title/Title";



function Contacts() {


    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={'Contacts'}/>
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