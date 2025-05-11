import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button, Card, CardContent, CardMedia, Link as MuiLink, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import heicToJpgIcon from './assets/heic_to_jpg_icon.png';

const PROJECTS = [
  {
    name: 'HEIC to JPEG Converter',
    description: 'Convert your iPhone HEIC photos to JPEG format instantly, in your browser. No uploads, no privacy risk, and completely free. Drag & drop, batch conversion, and more.',
    image: heicToJpgIcon, // Use local asset
    link: '/heic-to-jpeg/',
    tags: ['Image', 'Privacy', 'Free', 'No Uploads'],
  },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100],
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" color="text.secondary" align="center">
          <MuiLink href="/" color="inherit" underline="hover">
            Back to Root Directory
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
}

function App() {
  // Simulate navigation state (for SPA feel)
  const [page, setPage] = React.useState<'home' | 'heic-to-jpeg'>('home');

  const handleNav = (target: string) => {
    if (target === 'home') setPage('home');
    if (target === 'heic-to-jpeg') setPage('heic-to-jpeg');
  };

  return (
    <Box sx={{ 
      background: 'linear-gradient(180deg, #f9f9f9 0%, #e3eafc 100%)', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, color: '#222', cursor: 'pointer' }} onClick={() => handleNav('home')}>
            <HomeIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> Hobbies Playground
          </Typography>
          <Button color="inherit" onClick={() => handleNav('home')}>Home</Button>
          <Button color="inherit" onClick={() => handleNav('heic-to-jpeg')}>HEIC to JPEG</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 6, mb: 8, flex: 1 }}>
        {page === 'home' && (
          <>
            <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 700 }}>
              Welcome to the Hobbies Playground
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              This site is a personal playground for building and sharing useful web utilities, fun projects, and maybe even games over time. It's a space to practice, learn, and experiment with modern web development—always with a focus on privacy, speed, and a clean, Apple-inspired design.
            </Typography>
            <Box sx={{ mt: 6 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Projects
              </Typography>
              <Grid container spacing={4}>
                {PROJECTS.map((project, idx) => (
                  <Grid item xs={12} key={project.name}>
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)',
                        borderRadius: 4,
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px) scale(1.01)',
                          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.name}
                        sx={{ width: { xs: '100%', sm: 340 }, height: 220, objectFit: 'cover', borderRadius: { sm: '16px 0 0 16px', xs: '16px 16px 0 0' } }}
                      />
                      <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
                          {project.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                          {project.description}
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          endIcon={<ArrowForwardIcon />}
                          sx={{ borderRadius: 3, px: 4, py: 1.5, fontWeight: 500 }}
                          onClick={() => window.location.href = project.link}
                        >
                          Visit Project
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </>
        )}
        {page === 'heic-to-jpeg' && (
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
              HEIC to JPEG Converter
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              <MuiLink href="/heic-to-jpeg/" underline="always" color="primary">
                Open the converter in a new tab
              </MuiLink>
            </Typography>
            <Button variant="outlined" onClick={() => handleNav('home')} sx={{ mt: 4 }}>
              <HomeIcon sx={{ mr: 1 }} /> Back to Home
            </Button>
          </Box>
        )}
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
