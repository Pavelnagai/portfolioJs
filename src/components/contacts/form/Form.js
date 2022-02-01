import React from 'react';
import style from './Form.module.css'

const Form = () => {
    return (
        <div className={style.form}>
            <div className={style.container}>
                <div className={style.inputContainer}>
                    <input className={style.input} type="text" style={{margin:'10px'}}/>
                    <input className={style.input} type="text" style={{margin:'10px'}}/>
                </div>
                    <textarea className={style.textarea} name="" id=""> </textarea>
            </div>

        </div>
    );
};

export default Form;