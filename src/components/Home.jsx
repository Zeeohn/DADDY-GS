import React, { useState, useEffect } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import Microlink from "@microlink/react";
import Hero from "./Hero";
import eventsData from "../data/events.json";
import messagesData from "../data/messages.json";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Recent");
  const [activeMessageTab, setActiveMessageTab] = useState("Trending");
  const [events, setEvents] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
    setMessages(messagesData);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleMessageTabChange = (tab) => {
    setActiveMessageTab(tab);
  };

  const filterEvents = (events) => {
    const today = new Date();
    switch (activeTab) {
      case "Past":
        return events.filter((event) => new Date(event.endDate) < today);
      case "Recent":
        return events.filter((event) => new Date(event.endDate) < today);
      // return events.filter((event) => {
      //   const oneWeekFromEndDate = new Date(event.endDate);
      //   oneWeekFromEndDate.setDate(oneWeekFromEndDate.getDate() + 7);
      //   return (
      //     new Date(event.endDate) <= today && today <= oneWeekFromEndDate
      //   );
      // });
      case "Ongoing":
        return events.filter(
          (event) =>
            new Date(event.startDate) <= today &&
            new Date(event.endDate) >= today
        );
      case "Upcoming":
        return events.filter((event) => new Date(event.startDate) >= today);
      default:
        return events;
    }
  };

  const filteredEvents = filterEvents(events);

  return (
    <div>
      <Hero />
      <div className="max-w-6xl mx-auto p-6">
        <div>
          <div className="flex items-center justify-between pt-16 pb-10">
            <h2 className="tracking-[0.1em] md:tracking-[0.2em] text-xl md:text-2xl font-Inter font-bold text-center md:flex-1 text-black">
              EVENTS
            </h2>
            {/* <a
              href="/media"
              className="font-Inter text-xs md:text-sm  font-normal tracking-[0.1em] flex"
            >
              View More{" "}
              <span>
                <IoMdArrowDropright size={20} />
              </span>
            </a> */}
          </div>
          <div className="grid grid-cols-1 mx-5 md:mx-0 sm:grid-cols-2 gap-4 md:flex md:items-center md:justify-evenly md:gap-0 mb-6">
            {/* <button
              onClick={() => handleTabChange("Past")}
              className={`px-14 font-Inter text-base py-1 border border-black ${
                activeTab === "Past"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              PAST
            </button> */}
            <button
              onClick={() => handleTabChange("Recent")}
              className={`px-14 font-Inter text-base py-1 border border-black ${
                activeTab === "Recent"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              RECENT
            </button>
            {/* <button
              onClick={() => handleTabChange("Ongoing")}
              className={`px-14 font-Inter text-base py-1 border border-black ${
                activeTab === "Ongoing"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              ONGOING
            </button>*/}
            <button
              onClick={() => handleTabChange("Upcoming")}
              className={`px-14 font-Inter text-base py-1 border border-black ${
                activeTab === "Upcoming"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              UPCOMING
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-2">
            {filteredEvents.length === 0 ? (
              <p className="font-Inter text-center mt-20 mb-6">
                No event found in this category...
              </p>
            ) : (
              filteredEvents.map((event) => (
                <a key={event.id} href={event.link}>
                  {event.image === null ? (
                    <div className="bg-gray-100 h-80 object-cover w-full p-4 rounded-md shadow-md"></div>
                  ) : (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-80 rounded-md object-cover mb-2 shadow-md"
                    />
                  )}
                  <h3 className="text-sm mt-4 text-center font-Inter font-bold">
                    {event.title}
                  </h3>
                </a>
              ))
            )}
          </div>
        </div>

        <div className="mt-8 mb-10">
          <div className="flex items-center justify-between pt-10 pb-10">
            <h2 className="tracking-[0.1em] md:tracking-[0.2em] text-xl md:text-2xl font-Inter font-bold text-center md:flex-1 text-black">
              MESSAGES
            </h2>
            {/* <a
              href="/media"
              className="font-Inter text-xs md:text-sm font-normal items-center justify-center tracking-[0.1em] flex"
            >
              View More{" "}
              <span>
                <IoMdArrowDropright size={20} />
              </span>
            </a> */}
          </div>
          <div className="grid grid-cols-1 mx-5 md:mx-0 sm:grid-cols-2 gap-4 md:flex md:items-center md:justify-evenly md:gap-0 mb-6">
            <button
              onClick={() => handleMessageTabChange("Trending")}
              className={`px-14 font-Inter text-base py-1 border border-black ${
                activeMessageTab === "Trending"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              TRENDING
            </button>
            <button
              onClick={() => handleMessageTabChange("Popular")}
              className={`px-14 font-Inter text-base py-1 border border-black ${
                activeMessageTab === "Popular"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              ALL CATEGORIES
            </button>
            {/* <button
              onClick={() => handleMessageTabChange("Series")}
              className={`px-14 font-Inter text-base py-1 border border-black ${
                activeMessageTab === "Series"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              SERIES
            </button>
            <button
              onClick={() => handleMessageTabChange("Shiloh")}
              className={`px-14 font-Inter text-base py-1 border border-black ${
                activeMessageTab === "Shiloh"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              SHILOH
            </button> */}
            <button
              onClick={() => handleMessageTabChange("Featured")}
              className={`px-14 font-Inter text-base py-1 border border-black ${
                activeMessageTab === "Featured"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              FEATURED
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-2">
            {messages.map((message) => (
              <div key={message.id} href={message.link}>
                {message.image === null ? (
                  <div className="bg-gray-100 h-48 object-cover w-full p-4 rounded-md shadow-md"></div>
                ) : (
                  // <img
                  //   src={message.image}
                  //   alt={message.title}
                  //   className="w-full h-48 rounded-md object-cover mb-2 shadow-md"
                  // />
                  // <iframe
                  //   width="560"
                  //   height="315"
                  //   src={message.src}
                  //   title={message.title}
                  //   frameborder="0"
                  //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  //   referrerpolicy="strict-origin-when-cross-origin"
                  //   allowfullscreen
                  // ></iframe>
                  <Microlink
                    url={message.src}
                    size="large"
                    style={{
                      width: "100%",
                      // height: "100%",
                      borderRadius: "8px",
                    }}
                  />
                )}
                <div className="flex mt-4 justify-between items-center flex-row">
                  <h3 className="text-sm text-center font-Inter font-bold">
                    {message.title}
                  </h3>
                  {/* <div className="flex flex-row items-center justify-center">
                    <IoHeart size={20} color="red" />
                    <p className="text-xs font-Inter">&nbsp;{message.likes}</p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
