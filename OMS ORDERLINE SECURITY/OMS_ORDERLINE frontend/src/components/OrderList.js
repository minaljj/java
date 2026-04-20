import React, { useEffect, useState } from "react";
import OrderService from "../services/order.service";

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    OrderService.getOrders().then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h3>Order List</h3>

      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <p><b>Order ID:</b> {order.id}</p>

          <ul>
            {order.orderLines.map((line) => (
              <li key={line.id}>
                {line.item} × {line.quantity} = ₹
                {line.price * line.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default OrderList;
