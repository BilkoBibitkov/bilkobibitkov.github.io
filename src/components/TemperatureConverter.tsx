import React, { useState } from 'react';
import TemperatureFaq from './TemperatureFaq';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleCelsiusChange = (value: string) => {
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
      setKelvin('');
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setFahrenheit(((numValue * 9/5) + 32).toFixed(2));
      setKelvin((numValue + 273.15).toFixed(2));
    }
  };

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
      setKelvin('');
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setCelsius(((numValue - 32) * 5/9).toFixed(2));
      setKelvin(((numValue - 32) * 5/9 + 273.15).toFixed(2));
    }
  };

  const handleKelvinChange = (value: string) => {
    setKelvin(value);
    if (value === '') {
      setCelsius('');
      setFahrenheit('');
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setCelsius((numValue - 273.15).toFixed(2));
      setFahrenheit(((numValue - 273.15) * 9/5 + 32).toFixed(2));
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Temperature Converter</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <label style={{ display: 'block', marginBottom: '10px', color: '#666' }}>
            Celsius (°C)
          </label>
          <input
            type="number"
            value={celsius}
            onChange={(e) => handleCelsiusChange(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>

        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <label style={{ display: 'block', marginBottom: '10px', color: '#666' }}>
            Fahrenheit (°F)
          </label>
          <input
            type="number"
            value={fahrenheit}
            onChange={(e) => handleFahrenheitChange(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>

        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <label style={{ display: 'block', marginBottom: '10px', color: '#666' }}>
            Kelvin (K)
          </label>
          <input
            type="number"
            value={kelvin}
            onChange={(e) => handleKelvinChange(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>
      </div>

      <TemperatureFaq />
    </div>
  );
}

export default TemperatureConverter; 