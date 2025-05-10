import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HEIC.online
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 