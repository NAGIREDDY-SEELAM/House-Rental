
// src/components/MyProperties.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useUser } from '../context/UserContext';

const MyProperties = () => {
  const { user } = useUser();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      if (!user) return;

      const q = query(collection(db, 'properties'), where('userId', '==', user.uid));
      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProperties(data);
    };

    fetchProperties();
  }, [user]);

  if (!user) return <p>Please login to view your properties.</p>;

  return (
    <div>
      <h2>My Properties</h2>
      {properties.length === 0 ? (
        <p>No properties added yet.</p>
      ) : (
        <ul>
          {properties.map(property => (
            <li key={property.id}>
              <strong>{property.title}</strong> - ₹{property.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyProperties;
