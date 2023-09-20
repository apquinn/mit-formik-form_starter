import React from "react";
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()

  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    onSubmit: (values) => {
      console.log("form:", values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.emailField) errors.emailField = "Required";
      if (!values.pswField) errors.pswField = "Required";
      return errors;
    },
  });
  return (
    <div>
      <div>Email</div>
      <input
        type="text"
        id="emailField"
        name="emailField"
        onChange={formik.handleChange}
        value={formik.values.emailField}
      />
      {formik.errors.emailField ? (
        <div style={{ color: "red" }}>{formik.errors.emailField}</div>
      ) : null}

      <div>Password</div>
      <input
        type="text"
        id="pswField"
        name="pswField"
        onChange={formik.handleChange}
        value={formik.values.pswField}
      />
      {formik.errors.pswField ? (
        <div style={{ color: "red" }}>{formik.errors.pswField}</div>
      ) : null}
      <button id="submitBtn" type="submit">
        submit
      </button>
    </div>
  );
}

export default App;
