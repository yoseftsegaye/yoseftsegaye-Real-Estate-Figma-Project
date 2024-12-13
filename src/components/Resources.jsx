import React, { useState } from "react";
import { Houses } from "../Samples/Houses";

const Resources = () => {
  const sample = Houses;
  const chooses = [
    { name: "Apartment", image: "/chooseImage/Apartment.png" },
    { name: "House", image: "/chooseImage/house.png" },
    { name: "Beach House", image: "/chooseImage/beachHouse.png" },
    { name: "Cabins", image: "/chooseImage/cabins.png" },
    { name: "Tree House", image: "/chooseImage/treeHouse.png" },
    { name: "Pool House", image: "/chooseImage/poolHouse.png" },
    { name: "Lake Front", image: "/chooseImage/lakeFront.png" },
    { name: "Farm House", image: "/chooseImage/farmHouse.png" },
  ];

  const [activeLink, setActiveLink] = useState("House");
  const [likedHouses, setLikedHouses] = useState({});
  const [displayedCount, setDisplayedCount] = useState(8); // Tracks the number of houses displayed.

  const toggleLike = (houseId) => {
    setLikedHouses((prev) => ({
      ...prev,
      [houseId]: !prev[houseId], // Toggle the liked state for the specific house
    }));
  };

  const handleExploreMore = () => {
    setDisplayedCount((prevCount) => Math.min(prevCount + 8, sample.length)); // Ensure it doesn't exceed the total data.
  };

  return (
    <div className="mx-[3%] flex flex-col justify-center items-center my-10">
      <h1 className="text-2xl md:text-[32px] font-bold mb-3">How we can help?</h1>

      {/* Choose Options */}
      <div className="max-w-[900px] flex flex-wrap justify-start items-center gap-1.5 md:gap-1.2 lg:gap-2.5 m-10 mb-0">
        {chooses.map((choose) => (
          <div
            key={choose.name}
            className="flex flex-col justify-center items-center w-[100px] h-[74px] px-2 py-2 gap-2"
          >
            <a
              href="#"
              className="flex flex-col justify-center items-center w-full h-full"
              onClick={() => setActiveLink(choose.name)}
            >
              <img
                src={choose.image}
                alt={choose.name}
                className={`w-[30px] h-[30px] mb-2 mx-auto ${activeLink === choose.name
                  ? "filter invert-[20%] sepia saturate-[500%] hue-rotate-[0deg]"
                  : ""
                  }`}
              />
              <p
                className={`text-[13px] font-medium text-center ${activeLink === choose.name
                  ? "text-red-500 font-extrabold"
                  : "text-[#565656]"
                  }`}
              >
                {choose.name}
              </p>
            </a>
          </div>
        ))}
      </div>

      {/* House Listings */}
      <div className="flex flex-wrap justify-center items-center max-w-[1160px] gap-5 mt-10 relative">
        {sample.slice(0, displayedCount).map((house) => (
          <div
            key={house.id}
            className="w-[100%] md:w-[275px] h-full  md:h-[358px] gap-2.5 flex flex-wrap justify-center items-center mb-7 relative"
          >
            {/* House Image */}:
            <img
              src={house.image}
              alt=""
              className="w-full h-[50%] md:h-[260px] rounded-3xl mb-2"
            />

            {/* Like Button */}
            <div
              className={`absolute flex justify-center items-center right-5 top-10 rounded-full w-10 h-10 ${likedHouses[house.id] ? "bg-red-500" : "bg-white"
                }`}
            >
              <button onClick={() => toggleLike(house.id)}>
                <img src="/like.png" alt="like" className="w-5 h-4" />
              </button>
            </div>

            {/* House Details */}
            <a
              href="#"
              className="flex flex-col justify-center items-center w-full hover:underline"
            >
              <div className="w-full h-[88px] flex flex-col gap-2">
                <h1 className="text-2xl font-bold px-2">{house.price}</h1>
                <div className="w-[260px] h-[22px] flex flex-wrap justify-between items-center">
                  <div className="w-[62px] h-[22px] flex flex-wrap justify-between items-center">
                    <img
                      src="/property/bed.png"
                      alt="bed"
                      className="w-[14px] h-[22px]"
                    />
                    <p className="text-base font-bold">{house.bed}</p>
                    <span className="text-base font-medium text-[#565656]">
                      bed
                    </span>
                  </div>
                  <div className="w-[66px] h-[22px] flex flex-wrap justify-between items-center">
                    <img
                      src="/property/bath.png"
                      alt="bath"
                      className="w-[14px] h-[22px]"
                    />
                    <p className="text-base font-bold">{house.bath}</p>
                    <span className="text-base font-medium text-[#565656]">
                      bath
                    </span>
                  </div>
                  <div className="w-[92px] h-[22px] flex flex-wrap justify-between items-center">
                    <img
                      src="/property/stair.png"
                      alt="stair"
                      className="w-[14px] h-[22px]"
                    />
                    <p className="text-base font-bold">{house.stairs}</p>
                    <span className="text-base font-medium text-[#565656]">
                      sqft
                    </span>
                  </div>
                </div>
                <h2 className="text-base font-medium text-[#565656]">
                  {house.adress}
                </h2>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {displayedCount < sample.length && (
        <button
          onClick={handleExploreMore}
          className="text-xl font-medium hover:underline hover:text-blue-500 m-10"
        >
          Continue exploring House
        </button>
      )}
    </div>
  );
};

export default Resources;
