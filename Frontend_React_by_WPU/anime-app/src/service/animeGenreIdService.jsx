import { JIKAN_API_BASE_URL } from "../config/apiConfig";

export const fetchAnimeByGenreId = async (genreId) => {
  const url = `${JIKAN_API_BASE_URL}/anime?genres=${genreId}&limit=25`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    const filteredAnimes = data.data.filter(
      (anime) =>
        (anime.rating !== "R+ - Mild Nudity" &&
          anime.rating !== "R - 17+ (violence & profanity)" &&
          anime.type !== "OVA" &&
          anime.type !== "Movie" &&
          anime.type === "TV") ||
        (anime.rating !== "R+ - Mild Nudity" &&
          anime.rating !== "R - 17+ (violence & profanity)" &&
          anime.type === "OVA" &&
          anime.type !== "Movie")
    );
    return filteredAnimes;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
