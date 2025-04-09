import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import rentalProperties from '../data';
import { useCart } from './CartContext';


function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [months, setMonths] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProperty = rentalProperties.find(prop => prop.id === parseInt(id));
    setProperty(foundProperty);
  }, [id]);

  const handleAddToCart = () => {
    if (months < 1) {
      alert('Please enter a valid number of months.');
      return;
    }
    addToCart(property, months);
    navigate('/cart');
  };

  if (!property) {
    return <div style={styles.container}>Loading...</div>;
  }

  const totalPrice = property.monthlyPrice * months;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{property.name}</h2>
      <img src={property.image} alt={property.name} style={styles.image} />
      <p style={styles.text}><strong>Location:</strong> {property.location}</p>
      <p style={styles.text}><strong>Monthly Price:</strong> ${property.monthlyPrice}</p>
      <p style={styles.text}><strong>Description:</strong> {property.description}</p>
      <p style={styles.text}><strong>Amenities:</strong> {property.amenities.join(', ')}</p>

      <div style={styles.form}>
        <label style={styles.label}>
          Number of Months:{' '}
          <input
            type="number"
            min="1"
            value={months}
            onChange={(e) => setMonths(parseInt(e.target.value))}
            style={styles.input}
          />
        </label>
        <p style={styles.total}><strong>Total Price:</strong> ${totalPrice}</p>
        <button onClick={handleAddToCart} style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default PropertyDetails;

const styles = {
  container: {
    maxWidth: '900px',
    margin: '80px auto 40px',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'left',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center',
  },
  image: {
    width: '300px',
    maxHeight: '250px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '20px',
    
  },
  text: {
    fontSize: '18px',
    color: '#444',
    marginBottom: '10px',
  },
  form: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '18px',
    color: '#333',
  },
  input: {
    width: '100px',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginLeft: '10px',
  },
  total: {
    fontSize: '18px',
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    width: 'fit-content',
    transition: 'background-color 0.3s ease',
  },
};
