import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { API_KEY } from "../Api/omdbapi";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const [plot, setPlot] = useState("");

  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  useEffect(() => {
    const fetchPlot = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
        );
        const data = await response.json();
        if (data && data.Plot) {
          setPlot(data.Plot);
        }
      } catch (error) {
        console.error("Error fetching movie plot:", error);
      }
    };
    fetchPlot();
  }, [movie.imdbID]);

  return (
    <div
      className="border p-4 cursor-pointer"
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded"
      />
      <h3 className="mt-2 text-lg font-bold">{movie.Title}</h3>
      <p className="text-gray-600 text-sm">{truncateText(plot, 20)}</p>
    </div>
  );
};

export default MovieCard;
