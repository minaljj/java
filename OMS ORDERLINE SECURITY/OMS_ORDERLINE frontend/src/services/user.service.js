import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "/test/all");
  }

  getUserBoard() {
    return axios.get(API_URL + "/test/user", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "/test/admin", { headers: authHeader() });
  }
}

export default new UserService();
