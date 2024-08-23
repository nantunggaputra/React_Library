import { JIKAN_API_BASE_URL } from "../config/apiConfig";

export const fetchAnimeData = async (query) => {
  try {
    const response = await fetch(
      `${JIKAN_API_BASE_URL}/anime?q=${query}&limit=25`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    alert(
      `${error}\nMinna-san! An error occurred in the result data. Please enter the correct title or try again later.`
    );
    window.location.reload();
    return [];
  }
};
