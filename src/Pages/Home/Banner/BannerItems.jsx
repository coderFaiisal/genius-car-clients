import React from "react";

const BannerItems = ({ banner }) => {
  const { image, prev, next, id } = banner;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="overlay-img w-full">
        <img src={image} className="w-full h-screen rounded-lg" />
      </div>
      <div className="absolute flex transform -translate-y-1/2 right-12 bottom-6">
        <a href={`#slide${prev}`} className="btn btn-circle me-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
      <div className="absolute top-44 left-20 text-white">
        <h1 className="text-6xl font-semibold">
          Affordable <br />
          Price for Car <br />
          Servicing
        </h1>
        <p className="w-1/2 m-4">
          Ex eum eveniet expedita praesentium adipisci debitis placeat quasi
          vitae iusto ullam inventore error blanditiis, dolor ad deleniti!
          Numquam ipsam vero debitis!
        </p>
        <div>
          <button className="btn btn-outline btn-warning me-6 text-white">
            Buy Service
          </button>
          <button className="btn btn-warning text-white">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default BannerItems;
