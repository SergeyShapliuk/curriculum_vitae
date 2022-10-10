import React from "react";
import s from "./Popup.module.scss";
import infoImage from "../../../assets/image/Info.png"


function Popup(props: any) {

    return (

        <div className={s.customInfo}>
            <img src={infoImage} alt={"Information"} height={"48"} width={"48"}/><b><em>Information: </em></b>
            {props.error}</div>
    )
}

export const Popups = React.memo(Popup);
