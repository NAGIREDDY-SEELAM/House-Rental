
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { FaUser, FaSignInAlt } from 'react-icons/fa'; // ✅ Icons

function Navbar() {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Successfully logged out!');
      navigate('/login');
    } catch (error) {
      alert('Logout failed: ' + error.message);
    }
  };

  return (
    <nav style={navbarStyle}>
      <div style={navCenter}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/properties" style={linkStyle}>Properties</Link>
        <Link to="/cart" style={linkStyle}>Cart</Link>
        <Link to="/add-property" style={linkStyle}>Add Property</Link>
      </div>
      <div style={navRight}>
        {user ? (
          <>
            <Link to="/profile" style={buttonStyle}>
              <FaUser style={iconStyle} /> Profile
            </Link>
            <button onClick={handleLogout} style={buttonStyle}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={buttonStyle}>
              <FaSignInAlt style={iconStyle} /> Login
            </Link>
            <Link to="/signup" style={buttonStyle}>Create Profile</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

const navbarStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: '#f8f9fa',
  padding: '12px 20px',
  borderBottom: '1px solid #dee2e6',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
};

const navCenter = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
};

const navRight = {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  marginLeft: 'auto',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007bff',
  fontWeight: 'bold',
  fontSize: '18px',
};

const buttonStyle = {
  textDecoration: 'none',
  padding: '8px 14px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const iconStyle = {
  fontSize: '18px',
};
