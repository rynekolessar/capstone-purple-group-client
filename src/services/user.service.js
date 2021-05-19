import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8082/user/';

class UserService {
  getLoggedInUser() {
    return axios.get(API_URL + 'me', { headers: authHeader() });
  }

  updateUserPassword() {
    return axios.patch(API_URL + 'updatePassword', { headers: authHeader() });
  }

  deleteUser() {
    return axios.delete(API_URL + 'deleteMe', { headers: authHeader() })
  }

  updateUser() {
    return axios.patch(API_URL + 'updateMe', { headers: authHeader() })
  }

}

export default new UserService();
