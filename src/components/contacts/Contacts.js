import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import SignupForm from "./form/Formik";
import WorkHome from "../workHome/WorkHome";
import Title from "../../access/title/Title";

const Contacts = (props) => {
    return (
        <div className={style.contacts}>
            <WorkHome/>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title title="Contacts"/>

                <SignupForm/>
            </div>
        </div>
    );
};

export default Contacts;