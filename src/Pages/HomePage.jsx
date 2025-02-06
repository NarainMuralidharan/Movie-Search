import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import MovieGrid from "../components/MovieGrid";
import PageBar from "../components/PageBar";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const { getMovies, movies, totalResults, currentPage, setCurrentPage } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      getMovies(searchTerm, currentPage);
    }
  }, [searchTerm, currentPage]); 

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <div className="p-6">
      <SearchBar onSearch={handleSearch} />
      <MovieGrid movies={movies} />
      {movies.length > 0 && (
        <PageBar
          currentPage={currentPage}
          totalPages={Math.ceil(totalResults / 10)}
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
        />
      )}
    </div>
  );
};

export default HomePage;
