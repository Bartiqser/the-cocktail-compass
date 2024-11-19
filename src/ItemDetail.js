import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setItem(data.drinks[0]);
      } catch (error) {
        console.error('Error fetching item details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>No item found.</div>;
  }

  return (
    <div>
      <h2>{item.strDrink}</h2>
      <img src={item.strDrinkThumb} alt={item.strDrink}/>
      <p>Type: {item.strAlcoholic}</p>
      <p>Category: {item.strCategory}</p>
      <p>Glass: {item.strGlass}</p>
      <p>Instructions: {item.strInstructions}</p>
      <h3>Ingredients:</h3>
      <ul>
        {Array.from({ length: 15 }, (_, i) => i + 1)
          .map((num) => ({
            ingredient: item[`strIngredient${num}`],
            measure: item[`strMeasure${num}`],
          }))
          .filter(({ ingredient }) => ingredient)
          .map(({ ingredient, measure }, index) => (
            <li key={index}>
              {measure ? `${measure} ` : ''}{ingredient}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ItemDetail;
