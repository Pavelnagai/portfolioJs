import React from 'react';
import style from './Portfolio.module.scss'
import ava from "../../common/image/avatar.jpeg";
import todos from "../../common/image/todolist.jpg";

const Portfolio = (props) => {
    const avatar = {
        backgroundImage: `url(${ava})`,
    };
    return (
        <div className={style.photo} style={{overflow: "hidden", outline: "none", height: "427px"}}>
            <div className={style.right_top}>
                <div className={style.border1}/>
                <div className={style.border2}/>
                <div className={style.img_holder}>
                    <img src={ava} alt={"ava"}/>
                    <div style={avatar} className={style.abs_img}>  </div>
                </div>
                <div className={style.title_holder}>
                    <h5>Hi There! I am</h5>
                    <h3>bsbjfvb</h3>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;