import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const CheckOut = () => {
  const { _id, img, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price: price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          form.reset();
          alert("Order Recieved");
        }
      });
  };
  return (
    <div className="my-6">
      <div className="mb-10 pb-6 text-center border-black border-b-2">
        <p className="text-3xl text-gray-500 font-semibold">
          You are ordering for : {title}
        </p>
        <p className="text-orange-500 font-bold">Price : {price}</p>
      </div>
      <form onSubmit={handleOrderSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <input
            type="text"
            name="firstName"
            placeholder="Your First Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered w-full "
          />
        </div>
        <textarea
          className="w-full textarea textarea-bordered"
          name="message"
          placeholder="Message"
        ></textarea>
        <input className="btn btn-warning" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default CheckOut;
