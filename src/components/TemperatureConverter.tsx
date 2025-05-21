import React, { useState } from 'react';
import { Box, Typography, TextField, Paper, Stack } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import TemperatureFaq from './TemperatureFaq';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState<string>('');
  const [fahrenheit, setFahrenheit] = useState<string>('');

  const handleCelsiusChange = (value: string) => {
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setFahrenheit(((numValue * 9/5) + 32).toFixed(1));
    }
  };

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setCelsius(((numValue - 32) * 5/9).toFixed(1));
    }
  };

  // Data for the temperature comparison chart
  const temperatureData = [
    { celsius: -40, fahrenheit: -40 },
    { celsius: -20, fahrenheit: -4 },
    { celsius: 0, fahrenheit: 32 },
    { celsius: 20, fahrenheit: 68 },
    { celsius: 40, fahrenheit: 104 },
    { celsius: 60, fahrenheit: 140 },
    { celsius: 80, fahrenheit: 176 },
    { celsius: 100, fahrenheit: 212 },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Temperature Converter
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
        Convert between Celsius and Fahrenheit with ease. Our simple and accurate converter helps you quickly switch between these two temperature scales, whether you're cooking, traveling, or working with international measurements.
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="center">
          <TextField
            label="Celsius (°C)"
            type="number"
            value={celsius}
            onChange={(e) => handleCelsiusChange(e.target.value)}
            fullWidth
          />
          <Typography variant="h5">=</Typography>
          <TextField
            label="Fahrenheit (°F)"
            type="number"
            value={fahrenheit}
            onChange={(e) => handleFahrenheitChange(e.target.value)}
            fullWidth
          />
        </Stack>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Temperature Comparison Chart
        </Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="celsius" label={{ value: 'Celsius (°C)', position: 'bottom' }} />
              <YAxis label={{ value: 'Fahrenheit (°F)', angle: -90, position: 'left' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="fahrenheit" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Paper>

      <TemperatureFaq />
    </Box>
  );
};

export default TemperatureConverter; 