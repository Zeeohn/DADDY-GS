import { useState, useEffect } from "react";
import { IoEye, IoHeart } from "react-icons/io5";
import {
  getYouTubeVideos,
  YOUTUBE_API_KEY,
  YOUTUBE_CHANNEL_ID,
} from "../utils/youtube";
import { getYouTubeVideoStats } from "../utils/youtubeStats";

function decodeHtmlEntities(str) {
  if (!str) return "";
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

const Media = () => {
  const [activeMessageTab, setActiveMessageTab] = useState("Trending");
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [youtubePageToken, setYoutubePageToken] = useState("");
  const [youtubeNextPageToken, setYoutubeNextPageToken] = useState("");
  const [youtubePrevPageToken, setYoutubePrevPageToken] = useState("");
  const [youtubeLoading, setYoutubeLoading] = useState(false);
  const [videoStats, setVideoStats] = useState({});

  useEffect(() => {
    async function fetchVideos() {
      setYoutubeLoading(true);
      try {
        const filterType = activeMessageTab.toLowerCase();
        const data = await getYouTubeVideos({
          apiKey: YOUTUBE_API_KEY,
          channelId: YOUTUBE_CHANNEL_ID,
          maxResults: 12,
          pageToken: youtubePageToken,
          filterType,
        });
        setYoutubeVideos(data.items || []);
        setYoutubeNextPageToken(data.nextPageToken || "");
        setYoutubePrevPageToken(data.prevPageToken || "");
        // Fetch stats for these videos
        const ids = (data.items || []).map((v) => v.id.videoId).filter(Boolean);
        if (ids.length) {
          const stats = await getYouTubeVideoStats({
            apiKey: YOUTUBE_API_KEY,
            videoIds: ids,
          });
          setVideoStats(stats);
        } else {
          setVideoStats({});
        }
      } catch (e) {
        setYoutubeVideos([]);
        setVideoStats({});
      }
      setYoutubeLoading(false);
    }
    fetchVideos();
  }, [activeMessageTab, youtubePageToken]);

  const handleMessageTabChange = (tab) => {
    setActiveMessageTab(tab);
  };

  return (
    <div>
      <div className="bg-black w-full">
        <p className="md:tracking-[0.3em] tracking-[0.1em] md:text-3xl text-2xl font-Inter font-medium text-center py-6 md:py-10 text-white">
          MEDIA
        </p>
      </div>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-10">
          <div className="flex items-center justify-between pt-10 pb-10">
            <h2 className="tracking-[0.1em] md:tracking-[0.2em] text-xl md:text-2xl font-Inter font-bold text-center md:flex-1 text-black">
              MESSAGES
            </h2>
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
            {youtubeLoading ? (
              <p>Loading videos...</p>
            ) : youtubeVideos.length === 0 ? (
              <p>No videos found.</p>
            ) : (
              youtubeVideos.map((video) => (
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
                    <p>
                      {videoStats[video.id.videoId]?.likeCount ? (
                        <span className="flex items-center text-xs font-normal ml-2">
                          <IoHeart className="mr-1 w-5 h-5 text-red-600" />
                          {Number(
                            videoStats[video.id.videoId].likeCount
                          ).toLocaleString()}
                        </span>
                      ) : videoStats[video.id.videoId]?.viewCount ? (
                        <span className="flex items-center text-xs font-normal ml-2">
                          <IoEye className="mr-1 w-5 h-5" />
                          {Number(
                            videoStats[video.id.videoId].viewCount
                          ).toLocaleString()}
                        </span>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                </a>
              ))
            )}
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <button
              disabled={!youtubePrevPageToken}
              onClick={() => setYoutubePageToken(youtubePrevPageToken)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              disabled={!youtubeNextPageToken}
              onClick={() => setYoutubePageToken(youtubeNextPageToken)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
