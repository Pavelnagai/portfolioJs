import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a to="/">Home</a>
            <a to="skills">Skills</a>
            <a to="projects">Projects</a>
            <a to="contacts" >Contacts</a>
        </div>
    );
};

export default Nav;