import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Js from '../../common/image/Main.module.jpg'
import HTML from '../../common/image/images.jpg'
import CSS from '../../common/image/images.png'
import TS from '../../common/image/Callums-post-on-Typescript.png'

const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>Skills</h2>
                <div className={style.skill}>
                    <Skill title={'JS'} text={'I design and develop services for customers of all sizes, specializing' +
                        ' in creating stylish, modern websites, web services and online stores.'} src={Js} alt={'icon JavaScript'}/>
                    <Skill title={'HTML'}
                           text={'I design and develop services for customers of all sizes, specializing' +
                               ' in creating stylish, modern websites, web services and online stores.'} src={HTML} alt={'icon HTML'}/>
                    <Skill title={'CSS'}
                           text={'I design and develop services for customers of all sizes, specializing' +
                               ' in creating stylish, modern websites, web services and online stores.'} src={CSS} alt={'icon CSS'}/>
                    <Skill title={'TS'}
                           text={'I design and develop services for customers of all sizes, specializing' +
                               ' in creating stylish, modern websites, web services and online stores.'} src={TS} alt={'icon TypeScript'}/>

                </div>
            </div>
        </div>
    );
};


export default Skills;