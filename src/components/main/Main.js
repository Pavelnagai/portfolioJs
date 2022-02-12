import React from 'react';
import style from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import avatar from '../../common/image/avatar.jpeg'
const Main = () => {
    return (<div className={style.work}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.title}>
                    <h3>HELLO! MY NAME IS</h3>
                    <h1>PAVEL NAGAI</h1>
                    <h3>I frontend developer</h3>
                </div>
                <div className={style.photo}><img src={avatar} alt="avatar"/></div>
            </div>
        </div>);
};

export default Main;