import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";

const Trends = () => {
  const trends = [
    {
      id: 1,
      imageId: require("../../assets/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag.jpg"),
    },
    {
      id: 2,
      imageId: require("../../assets/portrait-fashionable-boy-posing.jpg"),
    },
    {
      id: 3,
      imageId: require("../../assets/domino-164_6wVEHfI-unsplash.jpg"),
    },
    {
      id: 4,
      imageId: require("../../assets/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing.jpg"),
    },
  ];

  const [hovered, setHovered] = useState(false);

  return (
    <div className="">
      <div className="flex justify-center">
        <h2 className="border-solid border-b-[2px] border-[#785f37] font-span text-3xl">
          Trends
        </h2>
      </div>

      <div className="grid grid-cols-2 mt-4 mx-28">
        <div className="m-2 p-2">
          <div className="grid grid-cols-2 gap-4">
            {trends.map((trend) => (
              <div
                key={trend.id}
                className="relative h-60 overflow-hidden"
                onMouseEnter={() => setHovered(trend.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={trend.imageId}
                  alt={`Trend ${trend.id}`}
                  className="object-cover h-full w-full"
                />
                {hovered === trend.id && (
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
                    <FaInstagram size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="h-[33rem]">
          <div className="relative flex justify-center m-4 h-[31rem] overflow-y-hidden onHover">
            <img
              src={require("../../assets/serious-young-man-standing-isolated-grey.jpg")}
              alt="Example"
              className="object-top object-cover h-full w-full"
            />
            <div className="instagram absolute inset-0 m-full flex justify-center items-center">
              <FaInstagram size={32} color="white" className="absolute top-56 left-72" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
