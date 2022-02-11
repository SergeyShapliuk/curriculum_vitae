import React from "react";
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/Title/Title";
import iconJs from "../assets/image/iconJs.png";
import iconCss from "../assets/image/iconCss.png";
import iconReact from "../assets/image/iconReact.png";
import iconTypescript from "../assets/image/iconTS.png";
import SkillItem from "./skill/SkilIsLinesItem";



function Skills() {
    const js = {
        color: 'blue',
        backgroundImage: `url(${iconJs})`,
    };
    const css = {
        color: 'blue',
        backgroundImage: `url(${iconCss})`,
    };
    const react = {
        color: 'blue',
        backgroundImage: `url(${iconReact})`,
    };
    const typescript = {
        color: 'blue',
        backgroundImage: `url(${iconTypescript})`,
    };
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'My Skills'}/>
                <div className={s.skills}>
                    <Skill style={js} title={'Js'}
                           description={'Lrarwegergesdvdvdvsdvsdvsdvsdvsdvsdvdsvdsrg erg erg ergregergerg weewtrwetwet wetwetwet wetwetwetwe ewtwetwetewt wetwet'}/>
                    <Skill style={typescript} title={'Type Script'}
                           description={'lkswflskdnflkn wefefwefwefe ewfwefwefwefwef e wef wesdl'}/>
                    <Skill style={css} title={'Css'} description={'lkswflskdnflknsdl'}/>
                    <Skill style={react} title={'React'} description={'lkswflskdnflknsdl'}/>
                    <SkillItem/>
                </div>

            </div>

        </div>
    )
}

export default Skills;