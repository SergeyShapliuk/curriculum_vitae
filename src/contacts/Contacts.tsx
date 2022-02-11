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
                    <form>
                        <input type={"text"} name={"name"} placeholder={' Your name'}/><br/>
                        <input type={"text"} name={"email"} placeholder={' Your email'}/><br/>
                        <textarea name={"message"} placeholder={' Your message'}/><br/>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;