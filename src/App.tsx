import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button, Card, CardContent, CardMedia, Link as MuiLink, Grid, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import heicToJpgIcon from './assets/heic_to_jpg_icon.png';

const PROJECTS = [
  {
    name: 'HEIC to JPG Converter',
    description: 'Convert your iPhone HEIC photos to JPG format instantly, in your browser. No uploads, no privacy risk, and completely free. Drag & drop, batch conversion, and more.',
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
      flexDirection: 'row', // row for sidebar
      fontFamily: `-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif` // Apple-like font
    }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', background: '#f5f6fa', borderRight: '1px solid #e0e0e0' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', mt: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#222', px: 2, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <HomeIcon sx={{ verticalAlign: 'middle' }} /> Hobbies Playground
          </Typography>
          <Divider />
          <List>
            <ListItem button selected={page === 'home'} onClick={() => handleNav('home')}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button selected={page === 'heic-to-jpeg'} onClick={() => handleNav('heic-to-jpeg')}>
              <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
              <ListItemText primary="HEIC to JPG" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box sx={{ flex: 1, pl: { sm: 0, md: 2 }, display: 'flex', flexDirection: 'column' }}>
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
                          border: '1.5px solid #e0e0e0', // Add border
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
                          sx={{ 
                            width: { xs: '100%', sm: 120 }, // Shrink image
                            height: 120, // Shrink image
                            objectFit: 'contain', // Show full icon
                            borderRadius: { sm: '16px 0 0 16px', xs: '16px 16px 0 0' },
                            border: '1.5px solid #e0e0e0', // Add border around image
                            background: '#fff',
                            m: 2 // Add margin
                          }}
                        />
                        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                            sx={{ borderRadius: 3, px: 4, py: 0.75, fontWeight: 500, mt: 2, width: '100%', minHeight: 36, fontSize: 18 }}
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
                HEIC to JPG Converter
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
    </Box>
  );
}

export default App;
