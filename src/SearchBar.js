import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  // State to store the query entered by the user
  const [query, setQuery] = useState('');

  // Handle the form submission and trigger the search callback with the query
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    onSearch(query); // Trigger the search function passed as prop
  };

  return (
    <form className="searchbar-input-form" onSubmit={handleSubmit}>
      {/* Input field for entering the cocktail name */}
      <input type="text" className="form-control me-2" placeholder="Search for a cocktail..." value={query} onChange={(e) => setQuery(e.target.value)}/>
      {/* Button to submit the search form */}
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}

export default SearchBar;
