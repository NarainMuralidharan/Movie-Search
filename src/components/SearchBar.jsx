import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a search term!"); 
      return;
    }
    console.log("Searching for:", searchTerm); 
    onSearch(searchTerm);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded w-full px-4 py-2"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Search
      </button>
    </div>
  );
};

export default SearchBar;

