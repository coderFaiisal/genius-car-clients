import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero py-12">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            className="max-w-sm rounded-lg shadow-2xl w-4/5 h-full"
          />
          <img
            src={parts}
            className="max-w-sm rounded-lg shadow-2xl absolute w-1/2 right-4 top-1/2"
          />
        </div>
        <div className="w-1/2">
          <p className=" text-2xl mb-4 font-bold text-orange-500">About</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br />& off experience <br /> in this field
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-warning">Get more info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
