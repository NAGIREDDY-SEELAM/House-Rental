
// src/components/MyCart.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useUser } from '../context/UserContext';

const MyCart = () => {
  const { user } = useUser();
  const [myCartItems, setMyCartItems] = useState([]);

  useEffect(() => {
    const fetchMyCartItems = async () => {
      if (!user) return;

      const q = query(collection(db, 'cart'), where('userId', '==', user.uid));
      const querySnapshot = await getDocs(q);

      const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMyCartItems(items);
    };

    fetchMyCartItems();
  }, [user]);

  if (!user) return <p>Please login to view your cart.</p>;

  return (
    <div>
      <h2>My Cart Items</h2>
      {myCartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {myCartItems.map(item => (
            <li key={item.id}>
              <strong>{item.name}</strong> - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyCart;
