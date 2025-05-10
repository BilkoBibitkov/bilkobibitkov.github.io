import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const faqItems = [
  {
    question: 'What is a HEIC file?',
    answer:
      'HEIC (High Efficiency Image Container) is the default image format used by Apple devices. It offers better compression than JPEG while maintaining high quality, but it is not universally supported across all platforms and applications. HEIC files are created by iPhones, iPads, and many modern Mac computers running macOS High Sierra (10.13) or later.',
  },
  {
    question: 'Which Apple devices create HEIC files?',
    answer:
      'HEIC files can be created by all modern Apple devices, including iPhone (iPhone 7 and newer), iPad (iPad Pro, iPad Air, iPad mini, and iPad 5th generation or newer), and Mac computers running macOS High Sierra (10.13) or later. This includes iPhone 7, 8, X, 11, 12, 13, 14, SE (2nd gen and newer), iPad Pro, iPad Air (3rd gen and newer), iPad mini (5th gen and newer), and all Macs with compatible macOS.',
  },
  {
    question: 'Why should I convert HEIC to JPEG?',
    answer:
      'JPEG is the most widely supported image format across all devices, operating systems, and applications. Converting your HEIC files to JPEG ensures compatibility and makes it easier to share your photos with anyone.',
  },
  {
    question: 'How many files can I convert at once?',
    answer:
      'You can convert as many HEIC files as you like at once (up to 10MB per file).',
  },
  {
    question: 'Is my privacy protected?',
    answer:
      'Yes! All conversions happen directly in your browser. Your files never leave your device or get uploaded to any server. We take your privacy seriously.',
  },
  {
    question: 'Is this service really free?',
    answer:
      'Yes, our HEIC to JPEG converter is completely free to use. There are no hidden fees or premium features.',
  },
  {
    question: 'Will the quality of my photos be reduced?',
    answer:
      'We strive to maintain the original quality of your photos during conversion. While JPEG is a lossy format, we use high-quality settings to minimize any quality loss.',
  },
  {
    question: 'What browsers are supported?',
    answer:
      'Our converter works on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your preferred browser.',
  },
];

const FAQ: React.FC = () => {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqItems.map((item, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }} elevation={1}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
            {item.question}
          </Typography>
          <Typography color="text.secondary">{item.answer}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default FAQ; 