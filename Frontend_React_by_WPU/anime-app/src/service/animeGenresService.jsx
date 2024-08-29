import { JIKAN_API_BASE_URL } from "../config/apiConfig";

export const fetchGenres = async () => {
  const url = `${JIKAN_API_BASE_URL}/genres/anime`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
