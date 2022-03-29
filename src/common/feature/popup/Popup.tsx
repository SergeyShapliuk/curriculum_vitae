import React from "react";
import s from "./Popup.module.scss";
import infoImage from "../../../assets/image/Info.png"


function Popup(props: any) {

    return (
        <>
            <span className={s.customInfo}>
            <img src={infoImage} alt={"Information"} height={"48"} width={"48"}/><b><em>Information: </em></b>
                        {props.error}</span>
        </>
    )
}

export default Popup;