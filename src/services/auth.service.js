import axios from "axios";

const API_URL = "http://localhost:8082/users/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        console.log("res.data.accessToken: " + JSON.stringify(response.data.accessToken));
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password, confirmPassword) {
    return axios.post(API_URL + "signup", {
      name,
      email,
      password,
      confirmPassword
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
