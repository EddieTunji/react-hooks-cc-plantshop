import React from "react";

function Search({ searchQuery, setSearchQuery }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Updates the search query in App.js state
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQuery} // Keeps the input field in sync with the searchQuery state
        onChange={handleSearchChange} // Updates the searchQuery as the user types
      />
    </div>
  );
}

export default Search;
