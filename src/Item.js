import React from 'react';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <div className="card h-100">
      {/* Item Image */}
      <img src={item.strDrinkThumb} className="card-img-top" alt={item.strDrink} style={{height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
      <div className="card-body">
        {/* Item Title */}
        <h5 className="card-title">{item.strDrink}</h5>
        
        {/* Item Category */}
        <p className="card-text">
          <strong>Category:</strong> {item.strCategory}
        </p>

        {/* Item Type */}
        <p className="card-text">
          <strong>Type:</strong> {item.strAlcoholic}
        </p>

        {/* View Details Button */}
        <Link to={`/item/${item.idDrink}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Item;
