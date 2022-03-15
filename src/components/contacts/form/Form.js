import React from 'react';
import style from './Form.module.css'
import {Field, reduxForm} from "redux-form";


export const ReduxForm = (props) => {
return(
    <form onSubmit={props.handleSubmit}>
        <div className={style.inputContainer}>
            <Field name={'email'} placeholder={'email'} component={'input'} />
            <Field name={'number'} placeholder={'number'} component={'input'} style={{margin: '10px'}}/>
            <Field name={'description'} placeholder='description' component='textarea'/>
            <button>Send</button>
        </div>
    </form>
)
}
export const ContactsReduxForm = reduxForm({
    form: 'Contacts'
})(ReduxForm)