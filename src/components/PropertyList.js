import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import './styles/PropertyList.css';

// Dynamically import local images
const importAll = (r) => r.keys().map(r);
const houseImages = importAll(require.context('../assets/', false, /\.(png|jpe?g|svg)$/));


const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'properties'), (snapshot) => {
      const propertyArray = snapshot.docs.map((doc, index) => ({
        id: doc.id,
        ...doc.data(),
        image: houseImages[index % houseImages.length] // loop if more properties than images
      }));
      setProperties(propertyArray);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'properties', id));
      alert('Property deleted!');
    } catch (error) {
      console.error("Error deleting property: ", error);
    }
  };

  return (
    <div className="property-container">
      <h2 className="property-title">🏡 Property Listings</h2>
      <div className="property-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt="House" className="property-image" />

            <h3>{property.name}</h3>
            <p><strong>📍 Location:</strong> {property.location}</p>
            <p><strong>💰 Price:</strong> ₹{property.monthlyPrice}/month</p>
            <p><strong>🛋️ Amenities:</strong> {property.amenities?.join(', ')}</p>
            <p>🛏️ {property.bedrooms} Beds | 🛁 {property.bathrooms} Baths</p>

            <button onClick={() => handleDelete(property.id)} className="delete-button">
              Delete 🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
