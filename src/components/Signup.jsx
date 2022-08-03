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
          {console.log(formik)}
          <Form>
            <TextField/>
          </Form>
        </>
      )}
    </Formik>
  );
};
