import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      const f = (parseFloat(value) * 9/5) + 32;
      setFahrenheit(f.toFixed(1));
    }
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      const c = (parseFloat(value) - 32) * 5/9;
      setCelsius(c.toFixed(1));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Temperature Converter</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Celsius:
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <div>
        <label>
          Fahrenheit:
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
    </div>
  );
}

export default TemperatureConverter; 