import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Title from "../../access/title/Title";
import Skill from "./skill/Skill";
import js from "./../../common/image/js-brands.svg"
import css from "./../../common/image/css3-brands.svg"
import react from "./../../common/image/react-brands.svg"
import html from "./../../common/image/html5-brands.svg"

const Skills = () => {
    const skills = [
        {
            title: "React",
            text: "I design and develop services for customers of all sizes, specializing' +\n" +
                "                        ' in creating stylish, modern websites, web services and online stores.",
            src: react,
        },
        {
            title: "JS",
            text: "I design and develop services for customers of all sizes, specializing' +\n" +
                "                        ' in creating stylish, modern websites, web services and online stores.",
            src: js,
        },
        {
            title: "CSS",
            text: "I design and develop services for customers of all sizes, specializing' +\n" +
                "                        ' in creating stylish, modern websites, web services and online stores.",
            src: css,
        },
        {
            title: "HTML",
            text: "I design and develop services for customers of all sizes, specializing' +\n" +
                "                        ' in creating stylish, modern websites, web services and online stores.",
            src: html,
        }]
    return (
        <div className={style.skills}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title title="Skills"/>
                <div className={style.skill}>
                    {skills.map(el => <Skill title={el.title} text={el.text} src={el.src}/>)}
                </div>
            </div>
        </div>
    );
};


export default Skills;