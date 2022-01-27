import React from "react";
import s from './Item.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";


function Item(){

    return(
        <div className={s.item}>
            <ul className={s.socialIcons}>
                <li><a href="#" className={s.facebook}><FontAwesomeIcon icon={faAddressBook}/></a></li>
                <li><a href="#" className={s.twitter}><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#" className={s.instagram}><i className="fa fa-instagram"></i></a></li>
                <li><a href="#" className={s.googlePlus}><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#" className={s.youtube}><i className="fa fa-youtube"></i></a></li>
            </ul>
        </div>
    )
}

export default Item;