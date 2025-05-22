import React, { useState } from 'react';

function DistanceConverter() {
  const [kilometers, setKilometers] = useState('');
  const [miles, setMiles] = useState('');

  const handleKilometersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKilometers(value);
    if (value === '') {
      setMiles('');
    } else {
      const m = parseFloat(value) * 0.621371;
      setMiles(m.toFixed(2));
    }
  };

  const handleMilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMiles(value);
    if (value === '') {
      setKilometers('');
    } else {
      const k = parseFloat(value) * 1.60934;
      setKilometers(k.toFixed(2));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Distance Converter</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Kilometers:
          <input
            type="number"
            value={kilometers}
            onChange={handleKilometersChange}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <div>
        <label>
          Miles:
          <input
            type="number"
            value={miles}
            onChange={handleMilesChange}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
    </div>
  );
}

export default DistanceConverter; 