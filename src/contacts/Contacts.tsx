import React from "react";
import s from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/Title/Title";





function Contacts(){


    return(
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
            <Title title={'Contacts'}/>
            <div className={s.contacts}>
                <form method={"post"}>
                    Your name<br/>
                    <input type={"text"} name={"name"}/><br/>
                    Your email<br/>
                    <input type={"text"} name={"email"}/><br/>
                    Message<br/>
                    <textarea name={"message"} /><br/>
                    <button>Send</button>
                </form>

            </div>
            </div>
        </div>
    )
}
export default Contacts;