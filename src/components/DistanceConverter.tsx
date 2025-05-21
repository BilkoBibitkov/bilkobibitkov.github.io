import React, { useState } from 'react';
import { Box, Typography, TextField, Paper, Stack } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DistanceFaq from './DistanceFaq';

const DistanceConverter = () => {
  const [miles, setMiles] = useState<string>('');
  const [kilometers, setKilometers] = useState<string>('');

  const handleMilesChange = (value: string) => {
    setMiles(value);
    if (value === '') {
      setKilometers('');
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setKilometers((numValue * 1.60934).toFixed(2));
    }
  };

  const handleKilometersChange = (value: string) => {
    setKilometers(value);
    if (value === '') {
      setMiles('');
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setMiles((numValue / 1.60934).toFixed(2));
    }
  };

  // Data for the distance comparison chart
  const distanceData = [
    { miles: 0, kilometers: 0 },
    { miles: 10, kilometers: 16.09 },
    { miles: 20, kilometers: 32.19 },
    { miles: 30, kilometers: 48.28 },
    { miles: 40, kilometers: 64.37 },
    { miles: 50, kilometers: 80.47 },
    { miles: 60, kilometers: 96.56 },
    { miles: 70, kilometers: 112.65 },
    { miles: 80, kilometers: 128.75 },
    { miles: 90, kilometers: 144.84 },
    { miles: 100, kilometers: 160.93 },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Distance Converter
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
        Convert between miles and kilometers instantly. Whether you're planning a road trip, following international recipes, or working with global measurements, our converter makes it easy to switch between these common distance units.
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="center">
          <TextField
            label="Miles (mi)"
            type="number"
            value={miles}
            onChange={(e) => handleMilesChange(e.target.value)}
            fullWidth
          />
          <Typography variant="h5">=</Typography>
          <TextField
            label="Kilometers (km)"
            type="number"
            value={kilometers}
            onChange={(e) => handleKilometersChange(e.target.value)}
            fullWidth
          />
        </Stack>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Distance Comparison Chart
        </Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={distanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="miles" label={{ value: 'Miles (mi)', position: 'bottom' }} />
              <YAxis label={{ value: 'Kilometers (km)', angle: -90, position: 'left' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="kilometers" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Paper>

      <DistanceFaq />
    </Box>
  );
};

export default DistanceConverter; 