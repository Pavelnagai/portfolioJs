import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import Form from "./form/Form";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3>Contacts</h3>
                <Form/>
                <button className={style.button}>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;