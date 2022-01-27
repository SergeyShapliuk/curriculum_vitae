import React from "react";
import s from './MyWorks.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import MyWork from "./myWork/MyWork";
import js from '../assets/image/js.png'
import Title from "../common/Title/Title";


function MyWorks() {
    const socialNetwork = {
        color: 'blue',
        backgroundImage: `url(${js})`,
    };
    return (
        <div className={s.myWorksBlock}>
            <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                <Title title={"My Works"}/>
                <div className={s.myWorks}>
                    <MyWork style={socialNetwork} title={'Kabzda React'}
                            description={'vksdvnlsfnwgergergergerge rgergregvlfsvnln'}
                            href={''}/>
                    <MyWork title={'Social network'}
                            description={'vksdvnlsfnvrgregergreg lfsvnlndbfdbfbdfbdfbdfbdfbdfbdfbdfbdfbdfbdfbdfb'}
                            href={''}/>
                    <MyWork title={'Kabzda Js'}
                            description={'vksdvnlsfnvlfsvn ergregregerger ergergregergergerg ergrgln'}
                            href={''}/>

                </div>
            </div>

        </div>
    )
}

export default MyWorks;