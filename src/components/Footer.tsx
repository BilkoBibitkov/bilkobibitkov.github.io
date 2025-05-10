import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ mt: 8, py: 4, background: '#f5f7fa', borderTop: '1px solid #e0e0e0' }}>
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, sm: 0 } }}>
        <b>HEIC to JPEG Converter</b> &mdash; Effortlessly convert HEIC to universally supported <b>JPEG/JPG</b> format. All processing is done in your browser. <b>No uploads, no server storage.</b>
      </Typography>
      <Box>
        <Link href="https://github.com/BilkoBibitkov/heic-to-jpeg" target="_blank" rel="noopener" sx={{ mr: 2 }}>
          View on GitHub
        </Link>
        <Link href="#faq" sx={{ mr: 2 }}>
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