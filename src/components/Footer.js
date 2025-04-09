
import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Home Rental Services</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '15px 20px',
  textAlign: 'center',
  fontSize: '16px',
  borderTop: '1px solid #ddd',
  marginTop: 'auto', // Push footer to bottom
};

export default Footer;
