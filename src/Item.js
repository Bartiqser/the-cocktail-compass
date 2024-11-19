import React from 'react';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <div>
      <h3>{item.strDrink}</h3>
      <img src={item.strDrinkThumb} alt={item.strDrink} style={{ width: '100px', borderRadius: '8px' }}/>
      <p><Link to={`/item/${item.idDrink}`}>View Details</Link></p>
    </div>
  );
}

export default Item;
