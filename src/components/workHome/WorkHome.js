import React from 'react';
import style from './WorkHome.module.css'
import styleContainer from "../../common/styles/Container.module.css";

const WorkHome = () => {
    return (
        <div className={style.workHome}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3>HomeWork in home!!!</h3>
                <button className={style.button}>Work</button>
            </div>
        </div>
    );
};

export default WorkHome;