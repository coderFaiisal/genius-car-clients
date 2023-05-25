import React, { useEffect, useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
const OrderRow = ({ order, handleRemoveOrder, handleOrderStatus }) => {
  const {
    serviceName,
    customer,
    service,
    price,
    email,
    phone,
    message,
    status,
    _id,
  } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/service/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleRemoveOrder(_id)}
            className="btn btn-circle bg-red-500 text-2xl hover:bg-green-700 border-none "
          >
            <RiDeleteBinFill></RiDeleteBinFill>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {orderService?.img && (
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">Price : {price}</span>
      </td>
      <td>{phone}</td>
      <th>
        <button onClick={() => handleOrderStatus(_id)} className="">
          {status ? (
            <span className="btn btn-xs btn-success btn-outline">{status}</span>
          ) : (
            <span className=" btn btn-xs btn-warning btn-outline">
              Pending...
            </span>
          )}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
