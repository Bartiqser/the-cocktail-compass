import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';

function ItemDetail() {
  const { id } = useParams(); // Get the item id from the URL params
  const [item, setItem] = useState(null); // State to store the fetched item details
  const [loading, setLoading] = useState(true); // State to handle loading state

  // Fetch item details when the component mounts or when the id changes
  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        // Fetch the details of the item from the API
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        setItem(data.drinks[0]); // Store the first drink's details in state
      } catch (error) {
        console.error('Error fetching item details:', error); // Log errors if any
      } finally {
        setLoading(false); // Set loading to false after the fetch operation
      }
    };

    fetchItemDetails();
  }, [id]); // Re-run the effect whenever the id changes

  // Show loading message while the item details are being fetched
  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  // If no item is found, display a message
  if (!item) {
    return <div className="loading-message">No item found.</div>;
  }

  // Render the item details when data is available
  return (
    <div className="item-detail-container">
      <div className="item-card">
        <div className="item-image">
          <img src={item.strDrinkThumb} alt={item.strDrink} />
        </div>
        <div className="item-info">
          <h2>{item.strDrink}</h2>
          <p className="category">{item.strCategory}</p>
          <p>
            <strong>Type:</strong> {item.strAlcoholic}
          </p>
          <p>
            <strong>Glass:</strong> {item.strGlass}
          </p>
          <a href="/cocktails" className="back-button">
            Back to Search
          </a>
        </div>
      </div>

      <div className="instructions-container">
        <h3>Instructions</h3>
        <p>{item.strInstructions}</p>

        <h3>Ingredients</h3>
        <ul className="ingredients-list">
          {/* Loop through the first 15 ingredients and display the ones that exist */}
          {Array.from({ length: 15 }, (_, i) => i + 1)
            .map((num) => ({
              ingredient: item[`strIngredient${num}`],
              measure: item[`strMeasure${num}`],
            }))
            .filter(({ ingredient }) => ingredient) // Only include ingredients that are present
            .map(({ ingredient, measure }, index) => (
              <li key={index}>
                {measure ? `${measure} ` : ''} {ingredient} {/* Display ingredient with its measure */}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemDetail;
