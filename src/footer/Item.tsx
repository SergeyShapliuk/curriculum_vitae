import React from "react";
import s from "./Item.module.scss"


function Item(props: any) {

    return (
        <div className={s.itemsBlock}>
            <div className={s.icon} style={props.style}>
            </div>
        </div>
    )
}

export default Item;