import React from "react";
import "./Register.css";
import { Register } from "../../service/Register";
import { useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

const RegisterIt = () => {
  const [isRegistered, setIsregistered] = useState(false);

  const initialValues = {
    name: "",
    username: "",
    password: "",
    email: "",
    address: "",
    pan: "",
    contactnumber: "",
    country: "",
    accounttype: "",
    dob: "",
  };

  const signUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required").min(8, "Password is too short - should be 8 chars minimum"),
    email: Yup.string().email('invalid email address').required("Email is required"),
    address: Yup.string().required("Address is required"),
    pan: Yup.string().required("Pan is required"),
    aadhar: Yup.string().required("Aadhar number is required").min(12, "Aadhar number should be 12 digits only"),
    contactnumber: Yup.number().required("Contactnumber is required").min(10, "Contact Number should be 10 chars"),
    country: Yup.string().required("country is required"),
    accounttype: Yup.string().required("accounttype is required"),
    dob: Yup.string().required("dob is required"),
    });

  async function RegisterSubmit(values) {
    try {
      const RegisterResponse = await Register.registerUser(values);
      console.log(RegisterResponse);
      setIsregistered(true);
    } catch (error) {
      console.log("err", error);
    }
  }

  async function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required Email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid Email address, check entered email adddress correctly';
    }
    return error;
  }

  async function validatePAN(value) {
    let error;
    if( !value) {
      error = 'Required PAN number'
    } else if(!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i.test(value)) {
      error = 'Invalid PAN number, check entered PAN details';
    }
    return error;
  }

  async function validateAadhar(value) {
    let error;
    if( !value) {
      error = 'Required Aadhar number'
    } else if(!/^[0-9]{12}$/i.test(value)) {
      error = 'Invalid Aadhar number, check entered Aadhar number';
    }
    return error;
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="Register-container">
        <h1 style={{ color: "white" }}>Register</h1>
        <br></br>

        <Formik
          initialValues={initialValues}
          validationSchema={signUpSchema}
          onSubmit={(values) => {
            console.log(values);
            RegisterSubmit(values);
          }}
        >
          {(props) => {
            // const { errors, touched, isValid, dirty } = props;
            return (
              <Form>
                <div className={`form-group mb-3`}>
                  <label style={{ backgroundColor: "white" }}>Name of the applicant</label>
                  <div className="input">
                    <Field className={`form-control`}
                      type="text"
                      name="name"
                      placeholder="Please enter full Name"
                      id="name"
                    />
                  </div>
                  <ErrorMessage style={{ color: "red" }} name="name" component="span" className="error" />
                </div>

                <div className={`form-group mb-3`}>
                  <label style={{ backgroundColor: "white" }}>Username</label>
                  <div className="input">
                    <Field
                      className={`form-control`}
                      type="text"
                      name="username"
                      placeholder="Username for your login"
                      id="username"
                    />
                  </div>
                  <ErrorMessage style={{ color: "red" }} name="username" component="span" className="error" />
                </div>

                <div className={`form-group mb-3`}>
                  <label style={{ backgroundColor: "white" }}>Password</label>
                  <div className="input">
                    <Field
                      className={`form-control`}
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="password"
                    />
                  </div>
                  <ErrorMessage style={{ color: "red" }} name="password" component="span" className="error" />
                </div>

                <div className={`form-group mb-3`}>
                  <label style={{ backgroundColor: "white" }}>Email</label>
                  <div className="input">
                    <Field className={`form-control`}
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email ID"
                      validate={validateEmail}
                    />
                  </div>
                  <ErrorMessage style={{ color: "red" }} name="email" component="span" className="error" />
                </div>

                <div className={`form-group mb-3`}>
                  <label style={{ backgroundColor: "white" }}>Address</label>
                  <div className="input">
                    <Field
                      className={`form-control`}
                      type="text"
                      name="address"
                      placeholder="Give Full Address"
                      id="address"
                    />
                  </div>
                  <ErrorMessage style={{ color: "red" }} name="address" component="span" className="error"/>
                </div>

                <div className={`form-group mb-3`}>
                  <label style={{ backgroundColor: "white" }}>Pan</label>
                  <div className="input">
                    <Field
                      className={`form-control`}
                      type="text"
                      name="pan"
                      placeholder="Pan Number"
                      id="pan"
                      validate={validatePAN}
                    />
                  </div>
                  <ErrorMessage style={{ color: "red" }} name="pan" component="span" className="error" />
                </div>

                <div className={`form-group mb-3`}>
                  <label style={{ backgroundColor: "white" }}>Aadhar</label>
                  <div className="input">
                    <Field
                      className={`form-control`}
                      type="text"
                      name="aadhar"
                      placeholder="Aadhar Number"
                      id="aadhar"
                      validate={validateAadhar}
                    />
                  </div>
                  <ErrorMessage style={{ color: "red" }} name="aadhar" component="span" className="error"/>
                </div>

                <div className={`form-group mb-3`}>
                  <label style={{ backgroundColor: "white" }}>Contact Number</label>
                  <div className="input">
                    <Field
                      className={`form-control`}
                      type="text"
                      name="contactnumber"
                      placeholder="Contact Number for communication"
                      id="contactnumber"
                    />
                  </div>
                  <ErrorMessage
                    style={{ color: "red" }}
                    name="contactnumber"
                    component="span"
                    className="error"
                  />
                </div>

                <div className={`form-group mb-3`}>
                  <label style={{ backgroundColor: "white" }}>Country</label>
                  <div className="input">
                    <Field
                      className={`form-control`}
                      type="text"
                      name="country"
                      placeholder="Country or Nationality"
                      id="country"
                    />
                  </div>
                  <ErrorMessage style={{ color: "red" }} name="country" component="span" className="error" />
                </div>

                <div className={`form-group mb-3`}>
                  <label style={{ backgroundColor: "white" }}>Account Type</label>
                  <div className="input">
                    <Field
                      className={`form-control`}
                      type="text"
                      name="accounttype"
                      placeholder="Type of Account you want"
                      id="accounttype"
                    />
                  </div>
                  <ErrorMessage style={{ color: "red" }} name="accounttype" component="span" className="error" />
                </div>

                <div className={`form-group mb-3`}>
                  <label style={{ backgroundColor: "white" }}>Date Of Birth</label>
                  <div className="input">
                    <Field
                      className={`form-control`}
                      type="date"
                      name="dob"
                      placeholder="Date of birth"
                      id="dob"
                    />
                  </div>
                  <ErrorMessage style={{ color: "red" }} name="dob" component="span" className="error" />
                </div>

                <button className="btn btn-primary" type="submit">Register</button>
              </Form>
            );
          }}
        </Formik>
        {isRegistered ? (
          <div className="alert alert-success">Registered Successfully! Please Login</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RegisterIt;

//  private int userId;
// 	private String name;
// 	private String username;
// 	private String password;
// 	private String address;
// 	private String pan;
// 	private Long contactNumber;
// 	private String country;
// 	private String email;
// 	private String accounttype;
// 	private Date dob;

