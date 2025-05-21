import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const faqs = [
  {
    question: 'What is HEIC format?',
    answer: "HEIC is the default photo format used by newer iPhones. While it saves space and maintains quality, not all devices and apps can open these files. That's where our converter comes in handy!"
  },
  {
    question: 'Is my data safe during conversion?',
    answer: 'Yes, absolutely! Our converter works entirely in your browser. Your photos never leave your device or get uploaded to any server. The conversion process happens locally, ensuring complete privacy and security of your data.'
  },
  {
    question: 'What are the file size limits?',
    answer: 'You can convert files up to 10MB in size. This limit ensures smooth performance and prevents browser memory issues. If you have larger files, we recommend converting them in smaller batches.'
  },
  {
    question: 'Will the image quality be affected?',
    answer: 'Our converter maintains high image quality during the conversion process. We use a quality setting of 0.8 (80%) for JPEG conversion, which provides an excellent balance between file size and image quality.'
  },
  {
    question: 'Can I convert multiple files at once?',
    answer: 'Yes! You can drag and drop multiple HEIC files at once, and they will all be converted simultaneously. After conversion, you can download individual files or use the "Download All" button to get all converted images in a ZIP file.'
  }
];

const HeicFaq = () => (
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

export default HeicFaq; 