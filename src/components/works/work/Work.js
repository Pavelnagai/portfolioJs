import React from 'react';
import style from './Work.module.css'
const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.text}>{props.text}</span>
        </div>
    );
};

export default Work;