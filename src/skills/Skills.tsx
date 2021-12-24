import React from "react";
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'Js'} description={'Lrarwegergesdvdvdvsdvsdvsdvsdvsdvsdvdsvdsrg erg erg ergregergerg weewtrwetwet wetwetwet wetwetwetwe ewtwetwetewt wetwet'}/>
                    <Skill title={'Css'} description={'lkswflskdnflkn wefefwefwefe ewfwefwefwefwef e wef wesdl'}/>
                    <Skill title={'React'} description={'lkswflskdnflknsdl'}/>
                    <Skill title={'Type Script'} description={'lkswflskdnflknsdl'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;