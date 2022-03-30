import React from "react";
import s from "./ButtonWithGradient.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";
import cv from "../../../assets/cv/sergey shaplyuk.png";





function ButtonWithGradient(){
    return(
        <div className={s.button}>
            <div><FontAwesomeIcon icon={faDownload} className={s.iconDownload}/></div>
            <a href={cv} download target={"_blank"}>Download CV</a>
        </div>
    )
}
export default ButtonWithGradient;