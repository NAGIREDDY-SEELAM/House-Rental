// src/data.js (Example data file)
import house1 from './assets/house1.jpg'
import house2 from './assets/house2.jpg'

import house3 from './assets/house3.jpg'

const rentalProperties = [
    {
      id: 1,
      name: 'Cozy Apartment in Downtown',
      location: 'New York City',
      monthlyPrice: 2500,
      image: house1,
      bedrooms: 2,
      bathrooms: 1,
      amenities: ['Balcony', 'Gym', 'Doorman'],
      description: 'A beautiful two-bedroom apartment in the heart of downtown.',
    },
    {
      id: 2,
      name: 'Spacious House with Garden',
      location: 'Los Angeles',
      monthlyPrice: 4000,
      image: house2,
      bedrooms: 4,
      bathrooms: 3,
      amenities: ['Private Garden', 'Parking', 'Fireplace'],
      description: 'A large family house with a private garden and ample space.',
    },
    {
      id: 3,
      name: 'Modern Studio with City View',
      location: 'Chicago',
      monthlyPrice: 1800,
      image: house3,
      bedrooms: 0,
      bathrooms: 1,
      amenities: ['Rooftop Terrace', 'Laundry', 'Pet-friendly'],
      description: 'A stylish studio apartment with stunning city views.',
    },
    {
      id: 4,
      name: 'Luxury Condo near the Beach',
      location: 'Miami',
      monthlyPrice: 3200,
      image: house1,
      bedrooms: 3,
      bathrooms: 2,
      amenities: ['Swimming Pool', 'Beach Access', 'Concierge'],
      description: 'An upscale condo located just steps from the beach.',
    },
    {
      id: 5,
      name: 'Charming Townhouse in Historic District',
      location: 'Boston',
      monthlyPrice: 2800,
      image: house2,
      bedrooms: 2,
      bathrooms: 1.5,
      amenities: ['Patio', 'Hardwood Floors', 'Close to Amenities'],
      description: 'A lovely townhouse in a historic neighborhood.',
    },
    {
      id: 6,
      name: 'Rural Cottage with Scenic Views',
      location: 'Denver',
      monthlyPrice: 1500,
      image: house3,
      bedrooms: 1,
      bathrooms: 1,
      amenities: ['Large Yard', 'Fire Pit', 'Peaceful Setting'],
      description: 'A quaint cottage surrounded by beautiful natural scenery.',
    },
  ];
  
  export default rentalProperties;