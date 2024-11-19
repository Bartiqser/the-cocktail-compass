import React from 'react';
import Item from './Item';

function ItemList({ items }) {
  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => <Item key={item.idDrink} item={item}/>)
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default ItemList;
