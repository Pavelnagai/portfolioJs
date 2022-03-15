import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import {ContactsReduxForm} from "./form/Form";

const Contacts = (props) => {
    const onSubmit = (formData) => {
        console.log(formData.description, formData.email, formData.number)
        console.log(formData)
    }
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3>Contacts</h3>
                <ContactsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

export default Contacts;