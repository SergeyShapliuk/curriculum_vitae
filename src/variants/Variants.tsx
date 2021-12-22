import React from "react";
import s from './Variants.module.css'
import styleContainer from "../common/styles/Container.module.css";


function Variants() {

    return (
        <div className={s.variantsBlock}>
            <div className={`${styleContainer.container} ${s.variantsContainer}`}>
                <h2 className={s.title}>Considering options for remote work</h2>
                <button className={s.button}>Hire Me</button>
            </div>
        </div>
    )
}

export default Variants;