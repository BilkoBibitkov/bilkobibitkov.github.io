import React, { useState } from 'react';
import { Box, Paper, TextField, Typography, Stack } from '@mui/material';
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
        Celsius vs Fahrenheit: The Great Temperature Debate
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
        As a European in America, I've learned that 32°F is freezing, 212°F is boiling, and everything in between is... well, let's just say it's not as intuitive as good old Celsius! Whether you're following a European recipe that says "bake at 180°C" or trying to figure out if it's sweater weather at 50°F, this converter has got your back.
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph>
        Fun fact: Did you know that 0°C is when water freezes and 100°C is when it boils? Makes perfect sense, right? Meanwhile, in Fahrenheit land, we have... 32°F and 212°F. Because why make things simple when you can make them complicated? 😉
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="center">
          <TextField
            label="Celsius (°C)"
            type="number"
            value={celsius}
            onChange={(e) => handleCelsiusChange(e.target.value)}
            fullWidth
            helperText="The sensible temperature scale"
          />
          <Typography variant="h5">=</Typography>
          <TextField
            label="Fahrenheit (°F)"
            type="number"
            value={fahrenheit}
            onChange={(e) => handleFahrenheitChange(e.target.value)}
            fullWidth
            helperText="The... other temperature scale"
          />
        </Stack>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Temperature Comparison Chart
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          A visual guide to help you understand why Europeans think Americans are a bit... special when it comes to temperature.
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