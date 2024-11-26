import React from 'react';
import Item from './Item';
import './ItemList.css';

// ItemList component to render a list of items or a message if no results are found
function ItemList({ items, searchMade }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {items.length > 0 ? (
          // If there are items, map through them and render an Item component for each
          items.map((item) => (
            <div className="col-md-4 mb-4" key={item.idDrink}>
              <Item item={item} />
            </div>
          ))
        ) : (
          // If no items are found, display a message if a search has been made
          searchMade && (
            <div className="col-12 text-center">
              <p>No results found. Try another search.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ItemList;
