
// components/CartContext.js
import React, { createContext, useContext, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useUser } from '../context/UserContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useUser();
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (item, months = 1) => {
    const totalPrice = item.monthlyPrice * months;
  
    const newItem = {
      ...item,
      months,
      totalPrice,
    };
  
    setCartItems((prev) => [...prev, newItem]);
  
    if (user) {
      try {
        await addDoc(collection(db, 'cart'), {
          name: item.name,
          monthlyPrice: item.monthlyPrice, // 🔄 use monthlyPrice
          image: item.image,
          location: item.location,
          userId: user.uid,
          months,
          totalPrice,
        });
      } catch (error) {
        console.error("Error saving to Firestore:", error);
      }
    }
  };
  

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    // Optional: Add Firestore delete logic here
  };

  const updateItemMonths = (id, newMonths) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              months: newMonths,
              totalPrice: newMonths * item.monthlyPrice, // 🔄 fix here too
            }
          : item
      )
    );
  };
  

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateItemMonths }}
    >
      {children}
    </CartContext.Provider>
  );
};
