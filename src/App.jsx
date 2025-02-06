import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { MovieProvider } from "./Context/MovieContext";
import HomePage from "./Pages/HomePage";
import MovieDetails from "./Pages/MovieDetails";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <MovieProvider>
          <NavBar />
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie/:imdbID" element={<MovieDetails />} />
            </Routes>
          </div>
      </MovieProvider>
    // </BrowserRouter >
  );
};

export default App;
