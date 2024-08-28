import React from "react";
import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwar.png";

import disneyV from "../assets/videos/disney.mp4";
import marvelV from "../assets/videos/marvel.mp4";
import nationalGeographicV from "../assets/videos/national-geographic.mp4";
import pixarV from "../assets/videos/pixar.mp4";
import starwarV from "../assets/videos/star-wars.mp4";

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: nationalG,
      video: nationalGeographicV,
    },
    {
      id: 4,
      image: pixar,
      video: pixarV,
    },
    {
      id: 5,
      image: starwar,
      video: starwarV,
    },
  ];

  return (
    <div className="flex gap-2 p-2 px-5 md:gap-5 md:px-16">
      {productionHouseList.map((item, index) => (
        <div
          key={index}
          className="relative cursor-pointer rounded-lg border-[2px] border-gray-600 shadow-xl shadow-gray-800 transition-all duration-300 ease-in-out hover:scale-110"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 z-0 rounded-lg opacity-0 hover:opacity-50"
          />
          <img src={item.image} className="z-[1] w-full opacity-100" />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
