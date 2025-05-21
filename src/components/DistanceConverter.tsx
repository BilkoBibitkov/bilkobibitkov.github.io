import React, { useState } from 'react';
import { Box, Paper, TextField, Typography, Stack } from '@mui/material';
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
        Miles vs Kilometers: The Metric System Strikes Back
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
        As a European in America, I've learned that a "quick 5-mile drive" is actually 8 kilometers, and that's just the beginning of the confusion! Whether you're planning a road trip across the States or trying to understand why your European GPS keeps telling you to turn in meters, this converter will help you navigate the great unit divide.
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph>
        Pro tip: If you're ever lost in America, just remember that 1 mile is roughly 1.6 kilometers. Or if you're like me, you'll just keep your phone's GPS set to kilometers and let it do the math for you! 😉
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="center">
          <TextField
            label="Miles (mi)"
            type="number"
            value={miles}
            onChange={(e) => handleMilesChange(e.target.value)}
            fullWidth
            helperText="The American way"
          />
          <Typography variant="h5">=</Typography>
          <TextField
            label="Kilometers (km)"
            type="number"
            value={kilometers}
            onChange={(e) => handleKilometersChange(e.target.value)}
            fullWidth
            helperText="The sensible way"
          />
        </Stack>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Distance Comparison Chart
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          A visual guide to help you understand why Europeans think the metric system is superior (spoiler: it is!).
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