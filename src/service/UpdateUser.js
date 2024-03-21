import axios from "axios";

export class User {
  static async updateUser(user) {
    const response = await axios.put(
      "http://localhost:8080/users/update", user);    //update endpoint
    console.log(response);
    return response;
  }

  static async getUserById(userId) {
    const response = await axios.get(
      "http://localhost:8080/users/getUsers/"+userId);    //update endpoint
    console.log(response);
    return response;
    }
}
