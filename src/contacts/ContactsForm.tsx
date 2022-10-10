import React from 'react';
import {FormikErrors, useFormik} from "formik";
import axios from "axios";
import s from "./ContactsForm.module.scss"
import {Popups} from "../common/feature/popup/Popup";

type FormValuesType = {
    email?: string
    name?: string
    message?: string
}
const ContactsForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: '',
        },
        validate: (values: FormValuesType) => {
            const errors: FormValuesType = {}
            if (!values.email?.trim()) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address. Enter the correct email';
            }
            if (!values.name?.trim()) {
                errors.name = 'Name required';
            } else if (values.name.length < 2) {
                errors.name = 'Must be name contain more characters';
            }
            if (!values.message?.trim()) {
                errors.message = 'Message required';
            } else if (values.message.length < 7) {
                errors.message = 'The message must contain more characters';
            }
            return errors;
        },
        onSubmit: async (values: FormValuesType) => {
            formik.resetForm()
            await axios.post("https://server-smtp-node-js.herokuapp.com/sendMessage", values
            ).then(res => alert("Thanks. Your message has been send. Have a nice day!"))
                .catch(err => alert("Что-то пошло не так!"))
        }
    })
    return (
        <div className={s.contactsForm}>
            <form onSubmit={formik.handleSubmit}>
                {formik.touched.email && formik.errors.email ?
                    <div><Popups error={formik.errors.email}/></div> : null}
                <input type="email"
                       placeholder={'Your email'}
                       {...formik.getFieldProps("email")}/>


                {formik.touched.name && formik.errors.name ?
                    <div><Popups error={formik.errors.name}/></div> : null}
                <input type="text"
                       placeholder={'Your name'}
                       {...formik.getFieldProps("name")}/>


                {formik.touched.message && formik.errors.message ?
                    <div><Popups error={formik.errors.message}/></div> : null}
                <textarea
                    placeholder={"Your message"}
                    {...formik.getFieldProps("message")}/>

                <button type="submit">
                    Send
                </button>
            </form>

        </div>
    )
}
export default ContactsForm;
