import React from 'react';
import style from "./Formik.module.css"
import {useFormik} from "formik";


const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            number: '',
            description: '',
            email: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.number) {
                errors.number = 'Required';
            } else if (values.number.length < 9) {
                errors.number = 'Number length must be atleast 9 characters';
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form className={style.form} onSubmit={formik.handleSubmit}>
            <div className={style.container}>
                <div className={style.form}>
                     {/*<label htmlFor="email">Email Address</label>*/}
                     <input
                        placeholder={"email"}
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className={style.form}>
                    {/*<label htmlFor="number">number</label>*/}
                    <input
                        placeholder={"number"}
                        id="number"
                        name="number"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.number}
                    />
                </div>
                <div className={style.form}>
                    {/*<label htmlFor="lastName">Last Name</label>*/}
                    <textarea
                        id="lastName"
                        name="description"
                        placeholder={"description"}
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                </div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};
export default SignupForm