import React from "react";
import s from './MyWorks.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import MyWork from "./myWork/MyWork";
import todolistImage from '../assets/image/todolistImage.jpg'
import socialNetImage from '../assets/image/socialNetworkImage.jpg'
import counterImage from '../assets/image/image-for-min.png'
import cardsImage from '../assets/image/cardsImage.jpg'
import shopImage from '../assets/image/collageImage.png'
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
    const cards = {
        color: 'blue',
        backgroundImage: `url(${cardsImage})`,
    };
    const shop = {
        color: 'blue',
        backgroundImage: `url(${shopImage})`,
    };

    return (
        <div id={"my_works"} className={s.myWorksBlock}>
            <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                <Title title={"My Projects"} titleBg={'portfolio'}/>
                <div className={s.myWorks}>
                    <Zoom cascade={true} damping={.01} className={s.zoomMyWorks}>
                        <MyWork style={socialNetwork} title={'Social Network'}
                                description={'Used technologies:  JavaScript, TypeScript, React, Redux, Redux-thunk, Redux-form, Axios, Reselect.'}
                                hrefDemo={' https://sergeyshapliuk.github.io/social_network/'}
                                hrefCode={'https://github.com/SergeyShapliuk/social_network'}/>
                        <MyWork style={todolist} title={'Todo-List'}
                                description={'Used technologies:  JavaScript, TypeScript, React, Redux, Material UI, SCSS. '}
                                hrefDemo={'https://sergeyshapliuk.github.io/it-incubator-todolist-ts-start/'}
                                hrefCode={'https://github.com/SergeyShapliuk/it-incubator-todolist-ts'}/>
                        <MyWork style={counter} title={'Counter'}
                                description={'Used technologies: JavaScript, TypeScript, React, Redux. '}
                                hrefDemo={' https://counter-pet-project.herokuapp.com'}
                                hrefCode={'https://github.com/SergeyShapliuk/counter'}/>
                        <MyWork style={cards} title={'Cards app'}
                                description={'Technologies: React, Redux, React-router domV6, Redux-thunk, Axios, Formik, Material UI. Creating learning app in team with using git, work with axios(CRUD). '}
                                hrefDemo={' https://sergeyshapliuk.github.io/team-project/'}
                                hrefCode={'https://github.com/SergeyShapliuk/team-project'}/>
                        <MyWork style={shop} title={'Shops'}
                                description={'Technologies: React, Redux, React-router domV6, Redux-thunk, GraphQL,SCSS. The task was performed as a test.Using GraphQL(apollo client). Not mobile version. '}
                                hrefDemo={'https://sergeyshapliuk.github.io/shop-test/'}
                                hrefCode={'https://github.com/SergeyShapliuk/shop-test'}/>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;