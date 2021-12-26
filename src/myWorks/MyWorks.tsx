import React from "react";
import s from './MyWorks.module.css'
import styleContainer from "../common/styles/Container.module.css";
import MyWork from "./myWork/MyWork";
import js from '../common/image/js.png'


function MyWorks() {
    return (
        <div className={s.myWorksBlock}>
            <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                <h2 className={s.title}>My Works</h2>
                <div className={s.myWorks}>
                    <MyWork img={js} title={'Kabzda React'} description={'vksdvnlsfnwgergergergerge rgergregvlfsvnln'}
                            href={''}/>
                    <MyWork img={''} title={'Social network'} description={'vksdvnlsfnvrgregergreg lfsvnln'} href={''}/>
                    <MyWork title={'Kabzda Js'}
                            description={'vksdvnlsfnvlfsvn ergregregerger ergergregergergerg ergrgln'} href={''}/>

                </div>
            </div>

        </div>
    )
}

export default MyWorks;