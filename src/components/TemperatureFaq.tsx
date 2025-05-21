import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const faqs = [
  {
    question: 'What is the difference between Celsius and Fahrenheit?',
    answer: 'Celsius is used by most of the world and is based on the freezing (0°C) and boiling (100°C) points of water. Fahrenheit is used mainly in the US, with freezing at 32°F and boiling at 212°F.'
  },
  {
    question: 'How do I convert between Celsius and Fahrenheit?',
    answer: 'To convert °C to °F: multiply by 9/5 and add 32. To convert °F to °C: subtract 32 and multiply by 5/9.'
  },
  {
    question: 'Why do we have different temperature scales?',
    answer: 'Celsius is part of the metric system and is used for scientific purposes worldwide. Fahrenheit was developed earlier and is still used in the US for historical reasons.'
  }
];

const TemperatureFaq = () => (
  <Box sx={{ mt: 6 }}>
    <Typography variant="h5" component="h2" gutterBottom>
      Frequently Asked Questions
    </Typography>
    {faqs.map((faq, idx) => (
      <Paper key={idx} sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
          {faq.question}
        </Typography>
        <Typography color="text.secondary">{faq.answer}</Typography>
      </Paper>
    ))}
  </Box>
);

export default TemperatureFaq; 