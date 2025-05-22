import React from 'react';

function Footer() {
  return (
    <footer style={{
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      marginTop: '2rem',
      textAlign: 'center',
      borderTop: '1px solid #dee2e6'
    }}>
      <p style={{ margin: 0, color: '#6c757d' }}>
        © {new Date().getFullYear()} Simple Web Tools. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer; 