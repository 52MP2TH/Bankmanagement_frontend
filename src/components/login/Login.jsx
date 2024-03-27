import React from "react";
import "./Login.css";
import { Auth } from "../../service/Auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCustomerAction } from "../../store/customer/customer-slice";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    password: "",
  };

  const signInSchema = Yup.object().shape({
    username: Yup.string().required("Username is required to login"),
    password: Yup.string()
      .required("Password is required to login")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });

  async function loginSubmit(values) {

    try {
      const authResponse = await Auth.login(values);
      localStorage.setItem("jwt", authResponse.data.jwttoken);
      var customer = authResponse.data.customer;
      delete customer["password"];
      dispatch(addCustomerAction(customer));

      navigate("/");
    } catch (error) {
      console.log("err", error);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="Login-container">
        <h1 style={{ color: "white" }}>Login</h1>
        <br></br>
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={(values) => {
            console.log(values);
            loginSubmit(values);
          }}
        >
          {(props) => {
            // const { errors, touched, isValid, dirty } = props;

            return (
              <Form>
                <div className={`form-group mb-3`}>                
                  <label style={{ backgroundColor: "white" }}>
                    Username
                  </label>                                         
                  <div className="input">                 
                    <Field className={`form-control`}        
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                    />
                  </div>
                    <ErrorMessage style={{ color: "red" }}
                      name="username"
                      component="span"
                      className="error"
                    />
                </div>

                <div className={`form-group mb-3`}>
                  <label style={{ backgroundColor: "white" }}>
                    Password
                  </label>
                  <div className="input">
                    <Field className={`form-control`}
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                    />
                  </div>
                    <ErrorMessage style={{ color: "red" }}
                      name="password"
                      component="span"
                      className="error"
                    />
                </div>

                <button className="btn btn-primary" type="submit">
                  Login
                </button>                                
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

