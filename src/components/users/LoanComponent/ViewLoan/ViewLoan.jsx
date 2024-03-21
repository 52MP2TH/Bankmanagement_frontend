import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Loan } from "../../../../service/Loan";
import { useSelector } from "react-redux";
import "./ViewLoan.css"

function ViewLoans() {
  const [loans, setLoans] = useState([]);

  const customer = useSelector((store) => store.CUSTOMER.customer);

  const allLoans = async () => {
    await Loan.viewLoan(customer.userId)
      .then((res) => {
        console.log("hi", res.data);
        setLoans(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    allLoans();
  }, []);

  return (
    <>
      <div className="">
        <h1 style={{ color: "white" }}>Education Loan</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>loanId</th> */}
              <th>loanType</th>
              <th>loanAmount</th>
              <th>date</th>
              <th>rateOfInterest</th>
              <th>durationOfLoan</th>
              <th>courseFee</th>
              <th>course</th>
              <th>fatherName</th>
              <th>fatherOccupation</th>
              <th>annualIncome</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((row) =>
              row.loanType === "educationLoan" ? (
                <tr key={row.loanId}>
                  <td>{row.loanType}</td>
                  <td>{row.loanAmount}</td>
                  <td>{row.date}</td>
                  <td>{row.rateOfInterest}</td>
                  <td>{row.durationOfLoan}</td>
                  <td>{row?.educationLoan.courseFee}</td>
                  <td>{row?.educationLoan.course}</td>
                  <td>{row?.educationLoan.fatherName}</td>
                  <td>{row?.educationLoan.fatherOccupation}</td>
                  <td>{row?.educationLoan.annualIncome}</td>
                </tr>
              ) : (
                <></>
              )
            )}
          </tbody>
        </Table>
      </div>

      <div className="">
        <h1 style={{ color: "white" }}>Personal Loan</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>loanType</th>
              <th>loanAmount</th>
              <th>date</th>
              <th>rateOfInterest</th>
              <th>durationOfLoan</th>
              <th>companyName</th>
              <th>designation</th>
              <th>totalExperience</th>
              <th>currentExperience</th>
              <th>annualIncome</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((row) =>
              row.loanType === "personalLoan" ? (
                <tr key={row.loanId}>
                  <td>{row.loanType}</td>
                  <td>{row.loanAmount}</td>
                  <td>{row.date}</td>
                  <td>{row.rateOfInterest}</td>
                  <td>{row.durationOfLoan}</td>
                  <td>{row?.personalLoan.companyName}</td>
                  <td>{row?.personalLoan.designation}</td>
                  <td>{row?.personalLoan.totalExperience}</td>
                  <td>{row?.personalLoan.currentCompanyExperience}</td>
                  <td>{row?.personalLoan.annualIncome}</td>
                </tr>
              ) : (
                <></>
              )
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ViewLoans;
