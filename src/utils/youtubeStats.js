// Utility to fetch video statistics (views, etc) for a list of video IDs
// Usage: getYouTubeVideoStats({ apiKey, videoIds })
export async function getYouTubeVideoStats({ apiKey, videoIds }) {
  if (!videoIds.length) return {};
  const ids = videoIds.join(",");
  const url = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${ids}&part=statistics`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch YouTube video stats");
  const data = await res.json();
  console.log("Youtube stats: ", data);
  // Return a map: { videoId: { viewCount, ... } }
  const stats = {};
  (data.items || []).forEach((item) => {
    stats[item.id] = item.statistics;
  });
  return stats;
}
