import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderService from "../services/order.service";

function OrderForm() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderPayload = {
      orderLines: [
        {
          item,
          price: Number(price),
          quantity: Number(quantity),
        },
      ],
    };

    OrderService.createOrder(orderPayload).then(() => {
      navigate("/orders");
    });
  };

  const total = price * quantity || 0;

  return (
    <div className="container">
      <h3>Create Order</h3>

      <form className="order-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <div className="total">Total: ₹{total}</div>

        <button className="submit-btn" type="submit">
          Submit Order
        </button>
      </form>
    </div>
  );
}

export default OrderForm;