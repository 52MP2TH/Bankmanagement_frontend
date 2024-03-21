import axios from "axios";

export class Auth {
  static async login(user) {
    const response = await axios.post(
      "http://localhost:8081/authorization/login",user);
    console.log(response);
    return response;
  }
}
