import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const faqs = [
  {
    question: 'What is the difference between miles and kilometers?',
    answer: 'Miles are used in the US and UK, while kilometers are used in most other countries. 1 mile is approximately 1.60934 kilometers.'
  },
  {
    question: 'Why do some countries use miles and others use kilometers?',
    answer: 'The metric system (kilometers) is used by most of the world for its simplicity and consistency. Miles are part of the imperial system, which is still used in the US and a few other countries.'
  },
  {
    question: 'How accurate is the conversion?',
    answer: 'Our converter uses the exact conversion factor of 1 mile = 1.60934 kilometers, which is the internationally accepted standard. The results are accurate to 5 decimal places.'
  }
];

const DistanceFaq = () => (
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

export default DistanceFaq; 