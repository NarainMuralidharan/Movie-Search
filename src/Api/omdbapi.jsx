
const API_URL = 'https://www.omdbapi.com/';
export const API_KEY = "1e27017f"; 

console.log(API_KEY);

export const fetchMovies = async (searchTerm, page = 1, type = "") => {
  const url = `https://www.omdbapi.com/?s=${searchTerm}&type=${type}&page=${page}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("API Response:", data); 

    if (data.Response === "True") {
      return {
        Search: data.Search || [],
        totalResults: data.totalResults || "0",
      };
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (imdbID) => {
  if (!imdbID) {
    return null;
  }
  const url = `${API_URL}?i=${imdbID}&apikey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "True") {
      return data;
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    throw error;
  }
};

export const fetchMoviesByType = async (searchTerm, type = 'movie', page = 1) => {
  const url = `${API_URL}?s=${searchTerm}&type=${type}&page=${page}&apikey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === 'True') {
      return data.Search; 
    } else {
      throw new Error(data.Error); 
    }
  } catch (error) {
    console.error('Error fetching movies by type:', error);
    throw error;
  }
};
