import React from "react";
import s from './Variants.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/Title/Title";


function Variants() {

    return (
        <div className={s.variantsBlock}>
            <div className={`${styleContainer.container} ${s.variantsContainer}`}>
                <Title title={"Considering options for remote work"}/>
                    <button className={s.button}>Hire Me</button>
            </div>
        </div>
    )
}

export default Variants;