import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logoutUser();
        }
        return res.json();
      })
      .then((result) => {
        setOrders(result);
      });
  }, [user?.email, logoutUser]);

  const handleRemoveOrder = (id) => {
    const proceed = window.confirm("Are you want to delete this order?");
    if (proceed) {
      fetch(`http://localhost:5000/order/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            const remaining = orders.filter((ord) => ord._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleOrderStatus = (id) => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((result) => {
        const remaining = orders.filter((ord) => ord._id !== id);
        const approved = orders.find((ord) => ord._id === id);
        approved.status = "Approved";
        const newOrders = [approved, ...remaining];
        setOrders(newOrders);
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Service</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow
              key={order._id}
              order={order}
              handleRemoveOrder={handleRemoveOrder}
              handleOrderStatus={handleOrderStatus}
            ></OrderRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
