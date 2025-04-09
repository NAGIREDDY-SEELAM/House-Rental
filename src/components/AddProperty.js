
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddProperty = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [monthlyPrice, setMonthlyPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [amenities, setAmenities] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const propertyData = {
      name,
      location,
      monthlyPrice,
      bedrooms,
      bathrooms,
      amenities: amenities.split(',').map(item => item.trim()),
      description,
      createdAt: new Date()
    };

    try {
      await addDoc(collection(db, 'properties'), propertyData);
      alert('✅ Property added successfully!');

      // Reset form
      setName('');
      setLocation('');
      setMonthlyPrice('');
      setBedrooms('');
      setBathrooms('');
      setAmenities('');
      setDescription('');
    } catch (error) {
      console.error('❌ Error adding property:', error);
    }
  };

  const formStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const inputStyle = {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical'
  };

  const buttonStyle = {
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ textAlign: 'center' }}>Add New Property</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required style={inputStyle} />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required style={inputStyle} />
      <input type="number" value={monthlyPrice} onChange={(e) => setMonthlyPrice(e.target.value)} placeholder="Monthly Price" required style={inputStyle} />
      <input type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} placeholder="Bedrooms" required style={inputStyle} />
      <input type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} placeholder="Bathrooms" required style={inputStyle} />
      <input type="text" value={amenities} onChange={(e) => setAmenities(e.target.value)} placeholder="Amenities (comma-separated)" required style={inputStyle} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required style={textareaStyle} />
      <button type="submit" style={buttonStyle}>Add Property</button>
    </form>
  );
};

export default AddProperty;
