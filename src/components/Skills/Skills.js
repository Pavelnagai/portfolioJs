import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import iconJs from '../../common/image/Main.module.jpg'

const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>Навыки</h2>
                <div className={style.skill}>
                    <Skill title={'JS'} text={'I design and develop services for customers of all sizes, specializing' +
                        ' in creating stylish, modern websites, web services and online stores.'}/>
                    <Skill title={'HTML'}
                           text={'I design and develop services for customers of all sizes, specializing' +
                               ' in creating stylish, modern websites, web services and online stores.'}/>
                    <Skill title={'CSS'}
                           text={'I design and develop services for customers of all sizes, specializing' +
                               ' in creating stylish, modern websites, web services and online stores.'}/>
                </div>
            </div>
        </div>
    );
};


export default Skills;