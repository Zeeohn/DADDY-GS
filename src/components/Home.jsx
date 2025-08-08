import { useState, useEffect } from "react";
import { IoHeart } from "react-icons/io5";
import Hero from "./Hero";
import eventsData from "../data/events.json";
import {
  getYouTubeVideos,
  YOUTUBE_API_KEY,
  YOUTUBE_CHANNEL_ID,
} from "../utils/youtube";
import ebook from "../assets/ebooks.jpg";

// import messagesData from "../data/messages.json";

// Utility to decode HTML entities in YouTube titles
function decodeHtmlEntities(str) {
  if (!str) return "";
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

const Home = () => {
  const [activeTab, setActiveTab] = useState("Recent");
  const [activeMessageTab, setActiveMessageTab] = useState("Trending");
  const [events, setEvents] = useState([]);
  const [youtubePreview, setYoutubePreview] = useState([]);
  const [youtubePreviewLoading, setYoutubePreviewLoading] = useState(false);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  // Fetch preview videos for Home page messages section
  useEffect(() => {
    async function fetchPreview() {
      setYoutubePreviewLoading(true);
      try {
        const filterType = activeMessageTab.toLowerCase();
        const data = await getYouTubeVideos({
          apiKey: YOUTUBE_API_KEY,
          channelId: YOUTUBE_CHANNEL_ID,
          maxResults: 12,
          filterType,
        });
        setYoutubePreview(data.items || []);
      } catch (e) {
        setYoutubePreview([]);
      }
      setYoutubePreviewLoading(false);
    }
    fetchPreview();
  }, [activeMessageTab]);

  const handleMessageTabChange = (tab) => {
    setActiveMessageTab(tab);
  };

  const handleRedirect = () => {
    window.open("https://selar.com/m/isaac-omolehin1", "_blank");
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

  return (
    <div>
      <Hero />
      <div className="max-w-6xl mx-auto p-6">
        {/* <div>
          <div className="flex items-center justify-between pt-16 pb-10">
            <h2 className="tracking-[0.1em] md:tracking-[0.2em] text-xl md:text-2xl font-Inter font-bold text-center md:flex-1 text-black">
              EVENTS
            </h2>
            <a
              href="/media"
              className="font-Inter text-xs md:text-sm  font-normal tracking-[0.1em] flex"
            >
              View More{" "}
              <span>
                <IoMdArrowDropright size={20} />
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 mx-5 md:mx-0 sm:grid-cols-2 gap-4 md:flex md:items-center md:justify-evenly md:gap-0 mb-6">
            <button
              onClick={() => handleTabChange("Past")}
              className={`px-14 font-Inter text-base py-1 border border-black ${
                activeTab === "Past"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              PAST
            </button>
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
            <button
              onClick={() => handleTabChange("Ongoing")}
              className={`px-14 font-Inter text-base py-1 border border-black ${
                activeTab === "Ongoing"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              ONGOING
            </button>
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
        </div> */}

        <div className="flex w-full mt-6" onClick={handleRedirect}>
          <img
            src={ebook}
            alt="Ebook"
            className="w-full h-full object-cover rounded-md shadow-md cursor-pointer"
          />
        </div>

        <div className="mt-6 mb-10">
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
            {youtubePreviewLoading ? (
              <p>Loading videos...</p>
            ) : youtubePreview.length === 0 ? (
              <p>No videos found.</p>
            ) : (
              youtubePreview.map((video) => (
                <a
                  key={video.id.videoId}
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={decodeHtmlEntities(video.snippet.title)}
                    className="w-full h-48 rounded-md object-cover mb-2 shadow-md"
                  />
                  <div className="flex mt-4 justify-between items-center flex-row">
                    <h3 className="text-sm text-center font-Inter font-bold">
                      {decodeHtmlEntities(video.snippet.title)}
                    </h3>
                  </div>
                </a>
              ))
            )}
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="/media"
              className="px-6 py-2 bg-black text-white rounded font-Inter font-semibold hover:bg-gray-800 transition"
            >
              See More Messages
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
