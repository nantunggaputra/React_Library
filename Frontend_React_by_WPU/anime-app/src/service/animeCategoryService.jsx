import { JIKAN_API_BASE_URL } from "../config/apiConfig";

export const fetchAnimeByCategoryData = async (category) => {
  const urls = {
    "Season Now": `${JIKAN_API_BASE_URL}/seasons/now?limit=25`,
    "Top Anime": `${JIKAN_API_BASE_URL}/top/anime?limit=25`,
    "Top Manga": `${JIKAN_API_BASE_URL}/top/manga?limit=25`,
    "Top Characters": `${JIKAN_API_BASE_URL}/top/characters?limit=25`,
  };

  const url = urls[category];
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
