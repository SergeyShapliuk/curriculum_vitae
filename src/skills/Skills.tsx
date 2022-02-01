import React from "react";
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/Title/Title";
import MyWorks from "../myWorks/MyWorks";
import Contacts from "../contacts/Contacts";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                    <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'Js'} description={'Lrarwegergesdvdvdvsdvsdvsdvsdvsdvsdvdsvdsrg erg erg ergregergerg weewtrwetwet wetwetwet wetwetwetwe ewtwetwetewt wetwet'}/>
                    <Skill title={'Css'} description={'lkswflskdnflkn wefefwefwefe ewfwefwefwefwef e wef wesdl'}/>
                    <Skill title={'React'} description={'lkswflskdnflknsdl'}/>
                    <Skill title={'Type Script'} description={'lkswflskdnflknsdl'}/>
                </div>
            </div>
            <MyWorks/>
        </div>
    )
}

export default Skills;