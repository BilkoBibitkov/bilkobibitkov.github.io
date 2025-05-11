import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button, Card, CardContent, CardMedia, Link as MuiLink } from '@mui/material';

const PROJECTS = [
  {
    name: 'HEIC to JPEG Converter',
    description: 'Convert your iPhone HEIC photos to JPEG format instantly, in your browser. No uploads, no privacy risk, and completely free. Drag & drop, batch conversion, and more.',
    image: 'https://raw.githubusercontent.com/BilkoBibitkov/heic-to-jpeg/main/public/og-image.png', // Replace with your actual screenshot URL or a placeholder
    link: '/heic-to-jpeg/',
  },
];

function App() {
  return (
    <Box sx={{ background: 'linear-gradient(180deg, #f9f9f9 0%, #e3eafc 100%)', minHeight: '100vh' }}>
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, color: '#222' }}>
            Hobbies Playground
          </Typography>
          <Button color="inherit" href="/">Root</Button>
          <Button color="inherit" href="/heic-to-jpeg/">Project 1</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 6, mb: 8 }}>
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {PROJECTS.map((project, idx) => (
              <Card key={project.name} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.03)', borderRadius: 4 }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.name}
                  sx={{ width: { xs: '100%', sm: 320 }, height: 200, objectFit: 'cover', borderRadius: { sm: '16px 0 0 16px', xs: '16px 16px 0 0' } }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <MuiLink href={project.link} underline="none">
                    <Button variant="contained" color="primary" sx={{ borderRadius: 3, px: 4, py: 1.5, fontWeight: 500 }}>
                      Visit Project
                    </Button>
                  </MuiLink>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
