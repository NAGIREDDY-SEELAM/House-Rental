
import React from 'react';
import { useCart } from './CartContext';
import {  useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, updateItemMonths} = useCart();
  const navigate = useNavigate();

  const handleIncrease = (id, currentMonths) => {
    updateItemMonths(id, currentMonths + 1);
  };

  const handleDecrease = (id, currentMonths) => {
    if (currentMonths > 1) {
      updateItemMonths(id, currentMonths - 1);
    }
  };

  const handleCheckout = () => {
    alert('✅ Checkout successful!');
    
    navigate('/');
  };

  const totalCartPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div style={styles.cartContainer}>
      <h2 style={styles.heading}>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p style={styles.emptyText}>Your cart is currently empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.details}>
                <h4 style={styles.itemName}>{item.name}</h4>
                <p style={styles.location}>📍 {item.location}</p>
                <div style={styles.quantityControl}>
                  <button onClick={() => handleDecrease(item.id, item.months)} style={styles.qtyButton}>-</button>
                  <span>{item.months} month(s)</span>
                  <button onClick={() => handleIncrease(item.id, item.months)} style={styles.qtyButton}>+</button>
                </div>
                <p style={styles.price}>💰 Total: ${item.totalPrice}</p>
                <button onClick={() => removeFromCart(item.id)} style={styles.removeButton}>
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}

          <div style={styles.totalSection}>
            <span>Total Cart Value:</span>
            <strong style={styles.totalPrice}> ${totalCartPrice}</strong>
          </div>

          <button
            style={styles.checkoutButton}
            onClick={handleCheckout}
          >
            ✅ Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;

// 🎨 Same styles as before...
const styles = {
  cartContainer: {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '20px',
    background: '#ffffff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    borderRadius: '10px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '30px',
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#777',
  },
  cartItem: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #eee',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '140px',
    height: '100px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  details: {
    flex: 1,
  },
  itemName: {
    margin: '0 0 5px',
  },
  location: {
    color: '#666',
    fontSize: '14px',
  },
  price: {
    margin: '10px 0',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  qtyButton: {
    padding: '5px 10px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  removeButton: {
    marginTop: '10px',
    backgroundColor: '#ff4d4f',
    color: '#fff',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  totalSection: {
    marginTop: '30px',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #ddd',
    paddingTop: '20px',
  },
  totalPrice: {
    color: '#28a745',
    fontWeight: 'bold',
    fontSize: '22px',
  },
  checkoutButton: {
    marginTop: '20px',
    padding: '12px 24px',
    fontSize: '18px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'block',
    marginLeft: 'auto',
  },
};
