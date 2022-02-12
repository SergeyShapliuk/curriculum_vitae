import React from "react";
import s from './MyWorks.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import MyWork from "./myWork/MyWork";
import todolistImage from '../assets/image/todolistImage.jpg'
import socialNetImage from '../assets/image/socialNetworkImage.jpg'
import counterImage from '../assets/image/image-for-min.png'
import Title from "../common/Title/Title";



function MyWorks() {
    const todolist = {
        color: 'blue',
        backgroundImage: `url(${todolistImage})`,
    };
    const socialNetwork = {
        color: 'blue',
        backgroundImage: `url(${socialNetImage})`,
    };
    const counter = {
        color: 'blue',
        backgroundImage: `url(${counterImage})`,
    };

    return (
        <div className={s.myWorksBlock}>
            <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                <Title title={"My Works"}/>
                <div className={s.myWorks}>
                    <MyWork style={socialNetwork} title={'Social Network'}
                            description={'vksdvnlsfnwgergergergerge rgergregvlfsvnln'}
                            href={''} />
                    <MyWork style={todolist} title={'JS Lesson'}
                            description={'vksdvnlsfnvrgregergreg lfsvnlndbfdbfbdfbdfbdfbdfbdfbdfbdfbdfbdfbdfbdfb'}
                            href={''}/>
                    <MyWork style={counter} title={'Counter'}
                            description={'vksdvnlsfnvlfsvn ergregregerger ergergregergergerg ergrgln'}
                            href={''}/>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;