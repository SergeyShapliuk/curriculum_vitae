import React from 'react';
import {useFormik} from "formik";
import axios from "axios";
import s from "./ContactsForm.module.scss"

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
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = 'Name required';
            } else if (values.name.length < 2) {
                errors.name = 'Must be name contain more characters';
            }
            if (!values.message) {
                errors.message = 'Message required';
            } else if (values.message.length < 7) {
                errors.message = 'The message must contain more characters';
            }
            return errors;
        },
        onSubmit: async (values: FormValuesType) => {
            formik.resetForm()
debugger
           await axios.post("https://server-smtp-node-js.herokuapp.com/sendMessage", values
            ).then(res=>alert("Your message has been send"))
               .catch(err=>alert("Error"))
        }
    })
    return (
        <div className={s.contactsForm}>
            <form onSubmit={formik.handleSubmit}>

                <input type="email"
                       placeholder={'Your email'}
                       {...formik.getFieldProps("email")}/>
                {formik.touched.email && formik.errors.email ?

                    <div style={{color: "orange"}}>{formik.errors.email}</div> : null}


                    <input type="text"
                       placeholder={'Your name'}
                       {...formik.getFieldProps("name")}/>
                {formik.touched.name && formik.errors.name ?
                    <div style={{color: "orange"}}>{formik.errors.name}</div> : null}


                <input type="textarea"
                       placeholder={"Your message"}
                       {...formik.getFieldProps("message")}/>
                {formik.touched.message && formik.errors.message ?
                    <div style={{color: "orange"}}>{formik.errors.message}</div> : null}

                    <button type="submit">
                    Send
                </button>
            </form>

        </div>
    )
}
export default ContactsForm;