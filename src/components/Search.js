import React from "react";

function Search({ onSearch, search }) {
  // const handleSearch = (e) => {
  //   const searchTerm = e.target.value;
  //   onSearch(searchTerm);
  // };
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onSearch}
        value={search}
      />
    </div>
  );
}

export default Search;
