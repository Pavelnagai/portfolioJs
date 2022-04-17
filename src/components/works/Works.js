import React from 'react';
import style from './Works.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import Work from "./work/Work";
import social from "../../common/image/social.png";
import todos from "../../common/image/todolist.jpg"
import Title from "../../access/title/Title";

const Works = () => {
    const socialNetwork = {
        backgroundImage: `url(${social})`,
    };
    const todolist = {
        backgroundImage: `url(${todos})`,
    };
    return (<div className={style.works}>
        <div className={`${styleContainer.container} ${style.container}`}>
            <Title title='Project'/>
            <div className={style.work}>
                <Work style={socialNetwork} title={'Social network'}
                      text={'I from belarus. I live live in city Pinsk. My love work,' + ' frontend developer. Good live!!!'}/>
                <Work style={todolist} title={'Todolist'}
                      text={'I from belarus. I live live in city Pinsk. My love work,' + ' frontend developer. Good live!!!'}/>
            </div>
        </div>

    </div>);
};

export default Works;