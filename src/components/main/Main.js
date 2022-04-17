import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import avatar from '../../common/image/avatar.jpeg'
import Title from "../../access/title/Title";

const Main = () => {
    return (
        <div className={style.work}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.title}>
                    <Title title="INTRODUCTION"/>
                    <h1>Frontend Developer</h1>
                    <h3>I developer and develop services for
                        customers of all sizes, specializing in creating
                        stylish, modern websites, web services and online
                        stores.</h3>
                </div>
            </div>
        </div>
    );
};

export default Main;