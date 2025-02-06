import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { fetchMovieDetails } from "../Api/omdbapi";  

const MovieDetails = () => {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!imdbID) {
      setError("Invalid movie ID. Unable to fetch details.");
      return;
    }

    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(imdbID);
        if (data && data.Response === "True") {
          setMovie(data);
          setError(null);
        } else {
          throw new Error("Movie not found!");
        }
      } catch (err) {
        setMovie(null);
        setError("Failed to fetch movie details. Please try again.");
      }
    };

    getMovieDetails();
  }, [imdbID]);

  if (!movie) {
    return <p className="p-6 text-center text-gray-500">Loading movie details...</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Home
      </button>
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-full lg:w-1/3 rounded"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{movie.Title}</h1>
          <p className="text-gray-700 mb-2"><strong>Year:</strong> {movie.Year}</p>
          <p className="text-gray-700 mb-2"><strong>Genre:</strong> {movie.Genre || "Not Available"}</p>
          <p className="text-gray-700 mb-2"><strong>Director:</strong> {movie.Director || "Not Available"}</p>
          <p className="text-gray-700 mb-2"><strong>Actors:</strong> {movie.Actors || "Not Available"}</p>
          <p className="text-gray-700 mb-2"><strong>Plot:</strong> {movie.Plot || "Not Available"}</p>
          <p className="text-gray-700 mb-2"><strong>IMDB Rating:</strong> {movie.imdbRating}/10</p>
          <p className="text-gray-700 mb-2"><strong>Runtime:</strong> {movie.Runtime || "Not Available"}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
