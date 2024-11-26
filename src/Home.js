import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <header className="blurred-section text-center p-4 mb-4">
        <h1 className="display-4">Welcome to Cocktail Explorer</h1>
        <p className="lead">
          Your ultimate guide to discovering and creating amazing cocktails!
        </p>
      </header>

      {/* "About the App" Section */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-8 blurred-section p-4">
          <h2 className="text-center mb-3">About Our App</h2>
          <p>
            Cocktail Explorer is designed for cocktail enthusiasts and
            beginners alike. Whether you're looking to explore a wide range of
            cocktails or find detailed instructions to make your favorite drink,
            we have something for everyone.
          </p>
        </div>
      </div>

      {/* "How to Use" Section */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-8 blurred-section p-4">
          <h2 className="text-center mb-3">How to Use Cocktail Explorer</h2>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">
              Navigate to the <strong>Search for Cocktails</strong> page to
              find your desired drinks.
            </li>
            <li className="list-group-item">
              Use the search bar to type the name of a cocktail or browse
              through our list of suggestions.
            </li>
            <li className="list-group-item">
              Apply filters to narrow down your search by type (e.g., Alcoholic
              or Non-Alcoholic) or category.
            </li>
            <li className="list-group-item">
              Click on a cocktail to view detailed instructions and ingredients
              for crafting it at home.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
