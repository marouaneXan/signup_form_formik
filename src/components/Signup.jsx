import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from 'yup'

export const Signup = () => {
    const validate=Yup.object({
        Fname:Yup.string().max(8,'Must be 8 caractere or less').required('first name is required'),
        Lname:Yup.string().max(8,'Must be 8 caractere or less').required('last name is required'),
        Email:Yup.string().email('Email is invalid').required('Email is required'),
        Password:Yup.string().min(6,'Password must be at leat 6 caracters').required('password is required'),
        Confirm_password:Yup.string().oneOf([Yup.ref('Password'),null],'confirm password must match').required('confirm password is required')
    })
  return (
    <Formik
    initialValues={{
        Fname:'',
        Lname:'',
        Email:'',
        Password:'',
        Confirm_password:'',
    }} 
    validationSchema={validate}
    >
      {formik => (
        <>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          {console.log(formik.values)}
          <Form>
            <TextField label="First Name" name="Fname" type="text"/>
            <TextField label="Last Name" name="Lname" type="text"/>
            <TextField label="Email" name="Email" type="email"/>
            <TextField label="Password" name="Password" type="password"/>
            <TextField label="Confirm Password" name="Confirm_password" type="password"/>
            <button className="btn btn-dark mt-3 me-2 shadow-none" type="submit">Register</button>
            <button className="btn btn-danger mt-3 shadow-none" type="reset">Reset</button>
          </Form>
        </>
      )}
    </Formik>
  );
};
