import React from 'react';
import style from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'
const Main = () => {
    return (<div className={style.work}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.title}>
                    <h3>Привет! Меня зовут</h3>
                    <h1>Павел Нагай</h1>
                    <h3>Я frontend разработчик</h3>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>);
};

export default Main;