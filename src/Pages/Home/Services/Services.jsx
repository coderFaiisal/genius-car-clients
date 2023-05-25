import React, { useEffect, useState } from "react";
import ServiceItems from "./ServiceItems";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-500">Services</p>
        <h2 className="text-5xl font-semibold my-4">Our Service Area</h2>
        <p className="w-1/2 mx-auto">
          Aspernatur quo quam accusantium error dicta ex molestiae soluta? Enim
          rem eum possimus quaerat optio, perferendis porro cupiditate!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {services.map((service) => (
          <ServiceItems key={service._id} service={service}></ServiceItems>
        ))}
      </div>
    </div>
  );
};

export default Services;
