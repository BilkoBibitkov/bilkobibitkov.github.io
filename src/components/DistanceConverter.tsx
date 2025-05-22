import React, { useState } from 'react';
import DistanceFaq from './DistanceFaq';

function DistanceConverter() {
  const [kilometers, setKilometers] = useState('');
  const [miles, setMiles] = useState('');
  const [meters, setMeters] = useState('');
  const [feet, setFeet] = useState('');
  const [yards, setYards] = useState('');

  const handleKilometersChange = (value: string) => {
    setKilometers(value);
    if (value === '') {
      setMiles('');
      setMeters('');
      setFeet('');
      setYards('');
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setMiles((numValue * 0.621371).toFixed(2));
      setMeters((numValue * 1000).toFixed(2));
      setFeet((numValue * 3280.84).toFixed(2));
      setYards((numValue * 1093.61).toFixed(2));
    }
  };

  const handleMilesChange = (value: string) => {
    setMiles(value);
    if (value === '') {
      setKilometers('');
      setMeters('');
      setFeet('');
      setYards('');
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setKilometers((numValue * 1.60934).toFixed(2));
      setMeters((numValue * 1609.34).toFixed(2));
      setFeet((numValue * 5280).toFixed(2));
      setYards((numValue * 1760).toFixed(2));
    }
  };

  const handleMetersChange = (value: string) => {
    setMeters(value);
    if (value === '') {
      setKilometers('');
      setMiles('');
      setFeet('');
      setYards('');
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setKilometers((numValue / 1000).toFixed(2));
      setMiles((numValue * 0.000621371).toFixed(2));
      setFeet((numValue * 3.28084).toFixed(2));
      setYards((numValue * 1.09361).toFixed(2));
    }
  };

  const handleFeetChange = (value: string) => {
    setFeet(value);
    if (value === '') {
      setKilometers('');
      setMiles('');
      setMeters('');
      setYards('');
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setKilometers((numValue * 0.0003048).toFixed(2));
      setMiles((numValue * 0.000189394).toFixed(2));
      setMeters((numValue * 0.3048).toFixed(2));
      setYards((numValue * 0.333333).toFixed(2));
    }
  };

  const handleYardsChange = (value: string) => {
    setYards(value);
    if (value === '') {
      setKilometers('');
      setMiles('');
      setMeters('');
      setFeet('');
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setKilometers((numValue * 0.0009144).toFixed(2));
      setMiles((numValue * 0.000568182).toFixed(2));
      setMeters((numValue * 0.9144).toFixed(2));
      setFeet((numValue * 3).toFixed(2));
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Distance Converter</h2>
      
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
            Kilometers (km)
          </label>
          <input
            type="number"
            value={kilometers}
            onChange={(e) => handleKilometersChange(e.target.value)}
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
            Miles (mi)
          </label>
          <input
            type="number"
            value={miles}
            onChange={(e) => handleMilesChange(e.target.value)}
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
            Meters (m)
          </label>
          <input
            type="number"
            value={meters}
            onChange={(e) => handleMetersChange(e.target.value)}
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
            Feet (ft)
          </label>
          <input
            type="number"
            value={feet}
            onChange={(e) => handleFeetChange(e.target.value)}
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
            Yards (yd)
          </label>
          <input
            type="number"
            value={yards}
            onChange={(e) => handleYardsChange(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>
      </div>

      <DistanceFaq />
    </div>
  );
}

export default DistanceConverter; 