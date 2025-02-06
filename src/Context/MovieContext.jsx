import React, { createContext, useState } from "react";
import { fetchMovies } from "../Api/omdbapi";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMovies = async (searchTerm, page = 1, type = "") => {
    if (!searchTerm) {
      setMovies([]);
      setTotalResults(0);
      return;
    }

    setLoading(true);
    try {
      const response = await fetchMovies(searchTerm, page, type);
      if (response && response.Search) {
        setMovies([...response.Search]);  
        setTotalResults(parseInt(response.totalResults) || 0);
      } else {
        throw new Error("No movies found.");
      }
    } catch (error) {
      setMovies([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };
  return (
    <MovieContext.Provider
      value={{
        movies,
        totalResults,
        getMovies,
        error,
        loading,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
