
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PropertyList from './components/PropertyList';
import PropertyDetails from './components/PropertyDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import { UserProvider } from './context/UserContext'; // ✅ Import this
import Profile from './components/Profile'; // ✅ Profile component
import Login from './components/Login';
import Signup from './components/Signup';
import AddProperty from './components/AddProperty';
function App() {
  return (
    <UserProvider> {/* ✅ Wrap first */}
      <CartProvider> {/* ✅ CartProvider depends on UserProvider */}
        <Router>
          <div style={appContainerStyle}>
            <Navbar />
       
            
            <div style={mainContentStyle}>
            
              <Routes>
                <Route path="/" element={<HomePage />} />
                
                <Route path="/properties" element={<PropertyList />} />
                <Route path="/properties/:id" element={<PropertyDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} /> {/* ✅ Add back profile */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/add-property" element={<AddProperty />} />
              </Routes>
            </div>
            
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

const appContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainContentStyle = {
  flex: 1,
  padding: '80px 20px 20px',
};

export default App;
