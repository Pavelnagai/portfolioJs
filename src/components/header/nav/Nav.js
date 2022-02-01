import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Work</a>
            <a href="">Project</a>
            <a href="">Contacts</a>
        </div>
    );
};

export default Nav;