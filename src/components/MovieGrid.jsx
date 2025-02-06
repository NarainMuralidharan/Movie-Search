import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MovieContext } from "../Context/MovieContext";

const MovieGrid = () => {
  const { movies } = useContext(MovieContext);
  const navigate = useNavigate();

  return (
    <div className="p-4">
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div 
              key={movie.imdbID} 
              className="border p-4 cursor-pointer" 
              onClick={() => navigate(`/movie/${movie.imdbID}`)} 
            >
              <img 
                src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"} 
                alt={movie.Title} 
                className="w-full h-64 object-cover rounded" 
              />
              <h3 className="mt-2 text-lg font-bold">{movie.Title}</h3>
            </div>
            
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No movies found. Try a different search term!</p>
      )}
    </div>
  );
};

export default MovieGrid;
