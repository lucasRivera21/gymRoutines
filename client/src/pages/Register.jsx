import React from 'react'
import { Formik, useFormik } from 'formik'

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

function Register() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            wight: '',
            gender: '',
        },
        validate,
        onSubmit: values => {
            console.log(values)
        },
    })

    return (
        <div>
            <h1 className="">Crea una Cuenta</h1>
            <Formik>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                    <button type='submit'>Registrarse</button>
                </form>
            </Formik>


            <div className="">
                <p className="">¿Ya tienes una cuenta?</p><a href="" className="">Inicia Sesión</a>
            </div>
        </div>
    )
}

export default Register