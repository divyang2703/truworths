import React from "react";

const NewArrival = () => {
  const arrival = [
    {
      title: "Jeans",
      imageUrl:
        "https://www.realmenrealstyle.com/wp-content/uploads/2023/07/How-To-Find-A-Pair-Of-Jeans-That-Fit-Just-Right.jpg",
    },
    {
      title: "Furniture",
      imageUrl:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Dress",
      imageUrl:
        "https://images.pexels.com/photos/265720/pexels-photo-265720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Kids",
      imageUrl:
        "https://images.pexels.com/photos/3661550/pexels-photo-3661550.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div>
      <h2 className="flex justify-center px-4 mt-10 font-span text-2xl font-extralight">
        New Arriavls
      </h2>
      <div className="flex justify-center w-32 ml-[610px] h-1 bg-[#785f37] border "></div>
      <div className="flex gap-10   mt-10 mb-10 ml-64">
        {arrival.map((image, index) => (
          <div className="flex flex-col items-center">
            <img
              key={index}
              src={image.imageUrl}
              alt={image.title}
              className="flex justify-center rounded-full w-48 h-48 border border-black object-cover"
            />
            <p className="text-sm font-semibold pt-2">{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
