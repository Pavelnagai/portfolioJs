import React from 'react';
import style from './Work.module.scss'
const Work = (props) => {
    return (
        <div className={style.work}>
            <div  style={props.style} className={style.icon}>
                <a href={props.title === "Social network" ? "https://pavelnagai.github.io/social_network/#/login" : "https://pavelnagai.github.io/todolist/#/login"} className={style.btnProject}>view the project</a>
            </div>
            <h3>{props.title}</h3>
            <span className={style.text}>{props.text}</span>
        </div>
    );
};

export default Work;