import React, { useState } from "react";
import ministryData from "../data/ministries.json";

const Ministry = () => {
  const [popupData, setPopupData] = useState(null);

  const handleSeeMore = (message) => {
    setPopupData(message);
  };

  return (
    <div>
      <div className="bg-black w-full">
        <p className="md:tracking-[0.3em] tracking-[0.1em] md:text-3xl text-2xl font-Inter font-medium text-center py-6 md:py-10 text-white">
          MINISTRIES
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 md:mx-24 mt-8 mb-12 pt-2">
        {ministryData.map((message) => (
          <div key={message.id}>
            <a href={message.link} onClick={() => handleSeeMore(message)}>
              {message.image === null ? (
                <div className="bg-gray-100 h-[70vh] object-cover w-full p-4 rounded-md shadow-md"></div>
              ) : (
                <img
                  src={message.image}
                  alt={message.title}
                  className="w-full h-[70vh] rounded-md object-cover mb-2 shadow-md"
                />
              )}
              <div className="flex mt-5 flex-col">
                <h3 className="text-base text-left font-Inter font-bold">
                  {message.title}
                </h3>
                <p
                  className="text-sm mt-3 font-Inter"
                  dangerouslySetInnerHTML={{
                    __html: message.description.substring(0, 100) + " ...",
                  }}
                ></p>
                <p className="text-sm text-black font-bold font-Inter cursor-pointer underline mt-3 md:mt-0">
                  See more
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Popup */}
      {popupData && (
        <div className="fixed top-0 left-0 right-0 overflow-y-scroll h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white w-5/6 sm:w-3/4 md:w-1/2 p-8 mt-[40rem] mb-10 rounded-md shadow-md">
            <img
              src={popupData.image}
              alt={popupData.title}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{popupData.title}</h3>
            <p
              className="text-sm font-Inter"
              dangerouslySetInnerHTML={{
                __html: popupData.description,
              }}
            ></p>
            <div className="flex items-end justify-end mt-4">
              <button
                className="bg-red-700 text-white px-4 py-2 mt-4 rounded-md font-Inter text-sm font-bold hover:bg-white hover:text-black hover:border-black border-2  transition duration-150 ease-in-out"
                onClick={() => setPopupData(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ministry;
