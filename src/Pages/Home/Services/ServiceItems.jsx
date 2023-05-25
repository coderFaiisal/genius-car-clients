import React from "react";
import { Link } from "react-router-dom";

const ServiceItems = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="card card-compact w-auto bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-56 " src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className=" text-orange-500">Price : ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/service/${_id}`}>
            <button className="btn btn-warning">Take Service</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
