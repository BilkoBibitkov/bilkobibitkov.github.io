import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      marginBottom: '2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <nav>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '2rem',
          margin: 0,
          padding: 0
        }}>
          <li><Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link></li>
          <li><Link to="/heic-to-jpeg" style={{ textDecoration: 'none', color: '#333' }}>HEIC to JPG</Link></li>
          <li><Link to="/temperature-converter" style={{ textDecoration: 'none', color: '#333' }}>Temperature</Link></li>
          <li><Link to="/distance-converter" style={{ textDecoration: 'none', color: '#333' }}>Distance</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 