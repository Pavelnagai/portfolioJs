import React from 'react';
import style from './Skill.module.css'

const Skill = (props) => {
    return (
        <div className={style.skill}>
                <div className={style.icon}><img src={props.src} alt={props.alt}/> </div>
                <h3 >{props.title}</h3>
                <span className={style.text}>{props.text}</span>
        </div>
    );
};

export default Skill;