import React from 'react';
import style from './Title.module.scss';

const Title = (props) => {
    return (
        <div>
            <h3 className={style.title}>{props.title}</h3>
        </div>
    );
};

export default Title;