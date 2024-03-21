import axios from "axios";


export class Loan {

  static async applyLoan(loan) {
    const response = await axios.post(
      "http://localhost:8082/loan/addloan",loan); 
    console.log(response);
    return response;
  }

  static async viewLoan(id) {
    const response = await axios.get(

      "http://localhost:8082/loan/getLoans/"+ id);   
    console.log(response);
    return response;
  }
}