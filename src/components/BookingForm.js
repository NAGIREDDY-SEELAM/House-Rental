import React, { useState } from 'react';
import { useCart } from '../components/CartContext'; // Adjust path as needed

function BookingForm({ property }) {
  const [months, setMonths] = useState(1);
  const totalPrice = property.monthlyPrice * months;
  const { addToCart } = useCart(); // Use the context method

  const handleBook = () => {
    addToCart(property, months);
    alert(`${property.name} added to cart for ${months} months. Total price: $${totalPrice}`);
  };

  return (
    <div style={{ marginTop: '20px', border: '1px solid #eee', padding: '15px' }}>
      <h3>Book This Property</h3>
      <p>Monthly Price: ${property.monthlyPrice}</p>
      <label htmlFor="months">Number of Months:</label>
      <input
        type="number"
        id="months"
        value={months}
        min="1"
        onChange={(e) => setMonths(parseInt(e.target.value))}
        style={{ marginLeft: '10px', width: '60px' }}
      />
      <p>Total Price: ${totalPrice}</p>
      <button onClick={handleBook}>Add to Cart</button>
    </div>
  );
}

export default BookingForm;
