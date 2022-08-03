import React from "react";
import { useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input className="form-control shadow-none" {...field} {...props} autoComplete="off" />
    </div>
  );
};

export default TextField;
