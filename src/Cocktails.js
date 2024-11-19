import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ItemList from './ItemList';

function Cocktails() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({ type: 'All', category: 'All' });

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      setSearchResults(data.drinks || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredResults = searchResults.filter((item) => {
    const matchesType =
      filter.type === 'All' ||
      (filter.type === 'Alcoholic' && item.strAlcoholic === 'Alcoholic') ||
      (filter.type === 'Non-Alcoholic' && item.strAlcoholic === 'Non alcoholic');

    const matchesCategory =
      filter.category === 'All' ||
      (filter.category === 'Cocktail' && item.strCategory === 'Cocktail') ||
      (filter.category === 'Ordinary Drink' && item.strCategory === 'Ordinary Drink') ||
      (filter.category === 'Other' && item.strCategory === 'Other \/ Unknown');

    return matchesType && matchesCategory;
  });

  const handleFilterChange = (key, value) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      <div>
        <label>
          Type:
          <select value={filter.type} onChange={(e) => handleFilterChange('type', e.target.value)}>
            <option value="All">All</option>
            <option value="Alcoholic">Alcoholic</option>
            <option value="Non-Alcoholic">Non-Alcoholic</option>
          </select>
        </label>
        <label>
          Category:
          <select value={filter.category} onChange={(e) => handleFilterChange('category', e.target.value)}>
            <option value="All">All</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Ordinary Drink">Ordinary Drink</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      {loading ? <div>Loading...</div> : <ItemList items={filteredResults}/>}
    </div>
  );
}

export default Cocktails;
