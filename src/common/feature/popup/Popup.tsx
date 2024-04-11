import React from "react";
import s from "./Popup.module.scss";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Popup(props: any) {

    return (

        <div className={s.customInfo}>
            {/*<img src={infoImage} alt={"Information"} height={"48"} width={"48"}/><b><em>Information: </em></b>*/}
            <FontAwesomeIcon icon={faCircleExclamation} color={'white'}
                             style={{paddingRight:10}}/><b><em>Information: </em></b>
            {props.error}</div>
    )
}

export const Popups = React.memo(Popup);
