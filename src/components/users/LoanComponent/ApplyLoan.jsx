import React from "react";
import { Loan } from "../../../service/Loan";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./ApplyLoan.css";

function ApplyLoan() {
  const [isUpdated, setIsupdated] = useState(false);

  const customer = useSelector((store) => store.CUSTOMER.customer);

  const initialValues = {
    loanType: "",
    loanAmount: "",
    date: "",
    rateOfInterest: "",
    durationOfLoan: "",
    userId: customer.userId,
    annualIncome: "",
    companyName: "",
    designation: "",
    totalExperience: "",
    currentCompanyExperience: "",
    courseFee: "",
    course: "",
    fatherName: "",
    fatherOccupation: "",
  };

  const UpdateSchema = Yup.object().shape({
    loanType: Yup.string().required("loanType is required"),
    loanAmount: Yup.number().required("loanAmount is required"),
    date: Yup.string().required("date is required"),
    rateOfInterest: Yup.number().required("rateOfInterest is required"),
    durationOfLoan: Yup.number().required("durationOfLoan is required"),
    annualIncome: Yup.number().required("Annual Income is required"),
    companyName: Yup.string().when("loanType", {
      is: (loanType) => loanType === "Personal Loan",
      then: () => Yup.string().required("Company Name is required"),
    }),
    designation: Yup.string().when("loanType", {
      is: (loanType) => loanType === "Personal Loan",
      then: () => Yup.string().required("Designation is required"),
    }),
    totalExperience: Yup.number().when("loanType", {
      is: (loanType) => loanType === "Personal Loan",
      then: () => Yup.number().required("Total Experience is required"),
    }),
    currentCompanyExperience: Yup.number().when("loanType", {
      is: (loanType) => loanType === "Personal Loan",
      then: () =>
        Yup.number().required("current Company Experience is required"),
    }),
    courseFee: Yup.number().when("loanType", {
      is: (loanType) => loanType === "Education Loan",
      then: () => Yup.number().required("Course Fee is required"),
    }),
    course: Yup.string().when("loanType", {
      is: (loanType) => loanType === "Education Loan",
      then: () => Yup.string().required("Course is required"),
    }),
    fatherName: Yup.string().when("loanType", {
      is: (loanType) => loanType === "Education Loan",
      then: () => Yup.string().required("Father Name is required"),
    }),
    fatherOccupation: Yup.string().when("loanType", {
      is: (loanType) => loanType === "Education Loan",
      then: () => Yup.string().required("Father Occupation is required"),
    }),
  });

  async function updateSubmit(values) {
    try {
      console.log(values);
      console.log("cuss", customer);
      await Loan.applyLoan(values);
      setIsupdated(true);
    } catch (error) {
      console.log("err", error);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="Loan-container">
        <h1 style={{ color: "white" }}>Apply Loan</h1>
        <br></br>
        
        <Formik
          initialValues={initialValues}
          validationSchema={UpdateSchema}
          onSubmit={(values) => {
            console.log(values);
            updateSubmit(values);
          }}
        >
          {(props) => {
            // const { errors, touched, isValid, dirty } = props;
            const{values}=props;
            return (
              <Form>
                
                  <div className={`form-group mb-3`}>
                      <label style={{ backgroundColor: "white" }}>LoanType</label>
                      <br></br> <br></br>
                      <Field as = "select" name="loanType" className={`form-control`}>
                      <option value="">select loan type</option>
                      <option value="personalLoan">Personal Loan</option>
                      <option value="educationLoan">Education Loan</option>
                      </Field>
                  <ErrorMessage
                    style={{ color: "red" }}
                    name="loanType"
                    component="span"
                    className="error"
                  />
                  </div>

                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>LoanAmount</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="number"
                        name="loanAmount"
                        placeholder="loanAmount"
                        id="loanAmount"
                      />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="loanAmount"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>Date</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="date"
                        name="date" //value="2019-12-07"
                        placeholder="date"
                        id="date"
                      />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="date"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>RateOfInterest</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="number"
                        name="rateOfInterest"
                        placeholder="rateOfInterest"
                        id="rateOfInterest"
                      />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="rateOfInterest"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>DurationOfLoan</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="number"
                        name="durationOfLoan"
                        placeholder="durationOfLoan"
                        id="durationOfLoan"
                      />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="durationOfLoan"
                      component="span"
                      className="error"
                    />
                  </div>
                 { values.loanType==="personalLoan" &&
                 <>
                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>annualIncome</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="number"
                        name="annualIncome"
                        placeholder="annualIncome"
                        id="annualIncome"
                        />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="annualIncome"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>CompanyName</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="text"
                        name="companyName"
                        placeholder="companyName"
                        id="companyName"
                        />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="companyName"
                      component="span"
                      className="error"
                      />
                  </div>

                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>Designation</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="text"
                        name="designation"
                        placeholder="designation"
                        id="designation"
                      />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="designation"
                      component="span"
                      className="error"
                      />
                  </div>

                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>TotalExperience</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="number"
                        name="totalExperience"
                        placeholder="totalExperience"
                        id="totalExperience"
                        />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="totalExperience"
                      component="span"
                      className="error"
                      />
                  </div>

                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>CurrentExperience</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="number"
                        name="currentCompanyExperience"
                        placeholder="currentExperience"
                        id="currentCompanyExperience"
                        />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="currentCompanyExperience"
                      component="span"
                      className="error"
                      />
                  </div>
                </>
                  }
                  
                 { values.loanType==="educationLoan" &&
                 <>
                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>annualIncome</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="number"
                        name="annualIncome"
                        placeholder="annualIncome"
                        id="annualIncome"
                        />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="annualIncome"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>courseFee</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="text"
                        name="courseFee"
                        placeholder="courseFee"
                        id="courseFee"
                        />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="companyName"
                      component="span"
                      className="error"
                      />
                  </div>

                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>course</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="text"
                        name="course"
                        placeholder="course"
                        id="course"
                      />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="course"
                      component="span"
                      className="error"
                      />
                  </div>

                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>fatherName</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="text"
                        name="fatherName"
                        placeholder="fatherName"
                        id="fatherName"
                        />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="fatherName"
                      component="span"
                      className="error"
                      />
                  </div>

                  <div className={`form-group mb-3`}>
                    <label style={{ backgroundColor: "white" }}>fatherOccupation</label>
                    <div className="input">
                      <Field
                        className={`form-control`}
                        type="text"
                        name="fatherOccupation"
                        placeholder="fatherOccupation"
                        id="fatherOccupation"
                        />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="fatherOccupation"
                      component="span"
                      className="error"
                      />
                  </div>
                </>
                  }
                  

                <button className="btn btn-primary" type="submit">
                  Apply loan
                </button>
              </Form>
            );
          }}
        </Formik>
        {isUpdated ? (
          <div className="alert alert-success">Loan applied Successfully!</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ApplyLoan;
