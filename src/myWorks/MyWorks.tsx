import React from "react";
import s from './MyWorks.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import MyWork from "./myWork/MyWork";
import todolistImage from '../assets/image/todolistImage.jpg'
import socialNetImage from '../assets/image/socialNetworkImage.jpg'
import counterImage from '../assets/image/image-for-min.png'
import Title from "../common/Title/Title";
import {Zoom} from "react-awesome-reveal";


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
        <div id={"my_works"} className={s.myWorksBlock}>
            <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                <Title title={"My Projects"} titleBg={'portfolio'}/>
                <div className={s.myWorks}>
                    <Zoom cascade={true} damping={.01} className={s.zoomMyWorks}>
                        <MyWork style={socialNetwork} title={'Social Network'}
                                description={'Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, Redux-form, Axios, Reselect, SCSS. '}
                                hrefDemo={'https://social-network-incubator.herokuapp.com'} hrefCode={'https://github.com/SergeyShapliuk/social_network'}/>
                        <MyWork style={todolist} title={'Todo-List'}
                                description={'Technologies: JavaScript, TypeScript, React, Redux, Material UI, SCSS. '}
                                hrefDemo={'https://todolist-pet-project.herokuapp.com'} hrefCode={'https://github.com/SergeyShapliuk/todolist'}/>
                        <MyWork style={counter} title={'Counter'}
                                description={'Technologies: JavaScript, TypeScript, React, Redux. '}
                                hrefDemo={' https://counter-pet-project.herokuapp.com'} hrefCode={'https://github.com/SergeyShapliuk/counter'}/>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;