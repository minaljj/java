import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/order";

class OrderService {
  createOrder(order) {
    return axios.post(API_URL, order, {
      headers: authHeader(),
    });
  }

  getOrders() {
    return axios.get(API_URL, {
      headers: authHeader(),
    });
  }
}

export default new OrderService();
