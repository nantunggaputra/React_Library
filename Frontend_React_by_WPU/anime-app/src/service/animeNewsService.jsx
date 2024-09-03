import { JIKAN_API_BASE_URL } from "../config/apiConfig";

export const fetchAnimeNews = async (animeId) => {
  const url = `${JIKAN_API_BASE_URL}/anime/${animeId}/news`;

  if (!animeId) {
    throw new Error("Failed to fetch data");
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data.data;
};
