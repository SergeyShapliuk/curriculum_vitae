import React from "react";
import s from './Item.module.scss'





function Item(){

    return(
        <div className={s.item}>
            <ul className="socialIcons">
                <li><a href="#" className="facebook"><i className="fa fa-facebook "></i></a></li>
                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#" className="googlePlus"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#" className="youtube"><i className="fa fa-youtube"></i></a></li>
            </ul>
        </div>
    )
}

export default Item;