import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";

export const Signup = () => {
  return (
    <Formik
    initialValues={{
        Fname:'',
        Lname:'',
        Email:'',
        Password:'',
        Confirm_password:'',
    }} 
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
