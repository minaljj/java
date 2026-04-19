import React, { useState } from "react";
import axios from "axios";

function OrderForm() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orderLines, setOrderLines] = useState([]);
  const [successId, setSuccessId] = useState(null);

  const addItem = () => {
    if (!item || !price || quantity <= 0) {
      alert("Please enter valid item, price and quantity");
      return;
    }

    setOrderLines([
      ...orderLines,
      {
        item,
        price: Number(price),
        quantity: Number(quantity)
      }
    ]);

    setItem("");
    setPrice("");
    setQuantity(1);
  };

  const removeItem = (index) => {
    setOrderLines(orderLines.filter((_, i) => i !== index));
  };

  const total = orderLines.reduce(
    (sum, line) => sum + line.price * line.quantity,
    0
  );

  const submitOrder = async () => {
    if (orderLines.length === 0) {
      alert("Add at least one item");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8082/order",
        { orderLines }
      );

      setSuccessId(response.data);
      setOrderLines([]);
    } catch (error) {
      console.error(error);
      alert("Error creating order");
    }
  };

  return (
    <div className="order-container">
      <h2>Create Order</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Item name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Qty"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button onClick={addItem}>Add Item</button>
      </div>

      <ul className="item-list">
        {orderLines.map((line, index) => (
          <li key={index}>
            {line.item} × {line.quantity} — ₹
            {(line.price * line.quantity).toFixed(2)}
            <button
              className="delete-btn"
              onClick={() => removeItem(index)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <h3 className="total">Total: ₹{total.toFixed(2)}</h3>

      <button
        className="submit-btn"
        disabled={orderLines.length === 0}
        onClick={submitOrder}
      >
        Submit Order
      </button>

      {successId && (
        <p className="success-msg">
          ✅ Order created successfully (ID: {successId})
        </p>
      )}
    </div>
  );
}

export default OrderForm;
