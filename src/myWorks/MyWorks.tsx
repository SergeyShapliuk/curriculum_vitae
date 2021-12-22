import React from "react";
import s from './MyWorks.module.css'
import styleContainer from "../common/styles/Container.module.css";
import MyWork from "./myWork/MyWork";


function MyWorks(props: any) {
    return (
        <div className={s.myWorksBlock}>
            <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                <h2 className={s.title}>My Works</h2>
                <div className={s.myWorks}>
<MyWork title={'Kabzda React'} description={'vksdvnlsfnvlfsvnln'}/>
<MyWork title={'Social network'} description={'vksdvnlsfnvlfsvnln'}/>
<MyWork title={'Kabzda Js'} description={'vksdvnlsfnvlfsvnln'}/>

                </div>
            </div>

        </div>
    )
}

export default MyWorks;