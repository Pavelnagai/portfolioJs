import React from 'react';
import style from './Works.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import Work from "./work/Work";

const Works = () => {
    return (
        <div className={style.works}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3>Мои проекты</h3>
                <div className={style.work}>
                    <Work title={'Hi'} text={'I from belarus. I live live in city Pinsk. My love work,' +
                        ' frontend developer. Good live!!!'}/>
                    <Work title={'Byi'}  text={'I from belarus. I live live in city Pinsk. My love work,' +
                        ' frontend developer. Good live!!!'}/>
                </div>
            </div>

        </div>
    );
};

export default Works;