import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ mt: 8, py: 4, background: '#f5f7fa', borderTop: '1px solid #e0e0e0' }}>
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        <b>HEIC to JPEG Converter</b> &mdash; Effortlessly convert HEIC to universally supported <b>JPEG/JPG</b> format. All processing is done in your browser. <b>No uploads, no server storage.</b>
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
        <Link href="https://github.com/BilkoBibitkov/heic-to-jpeg" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Link>
        <Link href="#faq">
          FAQ
        </Link>
        <Link href="#" sx={{ color: 'text.secondary' }}>
          Privacy
        </Link>
      </Box>
    </Container>
  </Box>
);

export default Footer; 