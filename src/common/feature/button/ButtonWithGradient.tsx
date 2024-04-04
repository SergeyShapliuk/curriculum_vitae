import React from "react";
import s from "./ButtonWithGradient.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";


function ButtonWithGradient() {
    return (
        <div className={s.button}>
            <a id={"CV"} href={require("../../../assets/cv/sergey shaplyuk.pdf")} download={"Sergey Shapliuk CV"}
               target={"_blank"} rel="noreferrer">
                <div><FontAwesomeIcon icon={faDownload} className={s.iconDownload}/></div>
                Download
                CV</a>
        </div>
    );
}

export default ButtonWithGradient;
