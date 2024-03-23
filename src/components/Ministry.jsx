import React from "react";
import ministryData from "../data/ministries.json";

const Ministry = () => {
  return (
    <div>
      <div className="bg-black w-full">
        <p className="md:tracking-[0.3em] tracking-[0.1em] md:text-3xl text-2xl font-Inter font-medium text-center py-6 md:py-10 text-white">
          MINISTRIES
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 md:mx-24 mt-8 mb-12 pt-2">
        {ministryData.map((message) => (
          <a key={message.id} href={message.link}>
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
              <p className="text-sm mt-3 font-Inter">
                &nbsp;{message.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Ministry;
