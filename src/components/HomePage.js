// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import rentalProperties from '../data'; // Assuming your data is in this file
import './styles/HomePage.css'; // Import the CSS file
import background from '../assets/Background.jpg';

function HomePage() {
  const featuredProperties = rentalProperties.slice(0, 6); // Display first 3 as featured

  return (
    <div className="home-page-container">
      <h2>Welcome to Home Rental Services</h2>
      <h3>Find your perfect home .</h3><br></br>
      <img
  src={background}
  alt="Background"
  style={{
    maxWidth: '100%',
    
  }}
/>
     
      <div className="featured-properties-container">
        {featuredProperties.map(property => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.name} className="property-image" />
            <h4 className="property-name">{property.name}</h4>
            <p className="property-location">Location: {property.location}</p>
            <p className="property-price">Monthly Price: ${property.monthlyPrice}</p>
            <Link to={`/properties/${property.id}`} className="view-details-link">View Details</Link>
          </div>
        ))}
      </div>

      {/* Add a SearchForm component here later */}
    </div>
  );
}

export default HomePage;