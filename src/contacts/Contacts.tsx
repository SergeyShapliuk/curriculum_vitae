import React from "react";
import s from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";





function Contacts(){


    return(
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
            <h2 className={s.title}>Contacts</h2>
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