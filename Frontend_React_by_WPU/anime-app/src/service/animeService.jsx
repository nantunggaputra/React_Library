import { JIKAN_API_BASE_URL } from "../config/apiConfig";

export const fetchAnimeData = async (query) => {
  const url = `${JIKAN_API_BASE_URL}/anime?q=${query}&limit=25`;
  if (!url) {
    throw new Error("Failed to fetch data");
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data.data;
};
