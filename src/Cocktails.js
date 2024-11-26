import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ItemList from './ItemList';
import './Cocktails.css';
import LoadingSpinner from './LoadingSpinner';

function Cocktails() {
  const [searchResults, setSearchResults] = useState([]); // State for storing search results
  const [loading, setLoading] = useState(false); // State for handling loading state
  const [filter, setFilter] = useState({ type: 'All', category: 'All' }); // State for filter options
  const [searchMade, setSearchMade] = useState(false); // State to track if a search has been made

  // Handle search logic when user submits a query
  const handleSearch = async (query) => {
    if (!query.trim()) {
      alert('Please enter a cocktail name to search.');
      return;
    }

    setLoading(true);
    setSearchMade(true); // Mark that a search has been made
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      setSearchResults(data.drinks || []); // Set search results or an empty array if no drinks found
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter the search results based on selected type and category
  const filteredResults = searchResults.filter((item) => {
    const matchesType =
      filter.type === 'All' ||
      (filter.type === 'Alcoholic' && item.strAlcoholic === 'Alcoholic') ||
      (filter.type === 'Non-Alcoholic' && item.strAlcoholic === 'Non alcoholic');

    const matchesCategory =
      filter.category === 'All' ||
      (filter.category === 'Cocktail' && item.strCategory === 'Cocktail') ||
      (filter.category === 'Ordinary Drink' && item.strCategory === 'Ordinary Drink') ||
      (filter.category === 'Other' && item.strCategory.includes('Other'));

    return matchesType && matchesCategory; // Return items that match the filters
  });

  // Handle changes in filter selection
  const handleFilterChange = (key, value) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      {/* Search bar and filters section */}
      <div className="searchbar-wrapper">
        <div className="searchbar-box">
          {/* Search bar component */}
          <SearchBar onSearch={handleSearch} />

          {/* Filters for selecting type and category */}
          <div className="filters mt-3">
            <label className="me-3">
              Type:
              <select className="form-select d-inline-block w-auto ms-2" value={filter.type} onChange={(e) => handleFilterChange('type', e.target.value)}>
                <option value="All">All</option>
                <option value="Alcoholic">Alcoholic</option>
                <option value="Non-Alcoholic">Non-Alcoholic</option>
              </select>
            </label>
            <label>
              Category:
              <select className="form-select d-inline-block w-auto ms-2" value={filter.category} onChange={(e) => handleFilterChange('category', e.target.value)}>
                <option value="All">All</option>
                <option value="Cocktail">Cocktail</option>
                <option value="Ordinary Drink">Ordinary Drink</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      
      {/* Conditionally render LoadingSpinner or ItemList */}
      {loading ? <LoadingSpinner /> : <ItemList items={filteredResults} searchMade={searchMade} />}
    </div>
  );
}

export default Cocktails;
