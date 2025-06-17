// Utility to fetch YouTube videos
// Usage: getYouTubeVideos({ apiKey, channelId, maxResults, pageToken, filterType })

export async function getYouTubeVideos({
  apiKey,
  channelId,
  maxResults = 20,
  pageToken = "",
  filterType = "latest",
}) {
  let url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;
  if (pageToken) url += `&pageToken=${pageToken}`;

  // Example: filterType can be 'latest', 'trending', 'featured', etc.
  // For 'trending', you might use a specific playlist or custom logic
  // For 'featured', you might filter by video IDs or tags

  // YouTube API does not provide a direct 'trending' endpoint for channels
  // You can use 'order=viewCount' for most viewed, or use playlists for featured
  if (filterType === "trending") {
    url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=viewCount&maxResults=${maxResults}`;
    if (pageToken) url += `&pageToken=${pageToken}`;
  }
  // Add more filter logic as needed

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch YouTube videos");
  const data = await res.json();
  console.log("Youtube data: ", data);
  return data;
}

// Replace with your YouTube Data API key and Channel ID
export const YOUTUBE_API_KEY = "AIzaSyCK01o8CoYpBlUpPP6U2_ad-LCPti_--60";
export const YOUTUBE_CHANNEL_ID = "UC0-b-naEc_lhZIK94QKnEBw";
