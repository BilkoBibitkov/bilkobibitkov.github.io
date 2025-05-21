import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box, Typography, Toolbar, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ImageIcon from '@mui/icons-material/Image';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import StraightenIcon from '@mui/icons-material/Straighten';
import TemperatureConverter from './components/TemperatureConverter';
import DistanceConverter from './components/DistanceConverter';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import HeicConverter from './components/HeicConverter';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#007aff', // Apple blue
      contrastText: '#fff',
    },
    background: {
      default: '#f9f9f9', // very light gray
      paper: '#fff',
    },
    text: {
      primary: '#222',
      secondary: '#6e6e73',
    },
    divider: '#e0e0e0',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica Neue", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.5px',
    },
    h5: {
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          textTransform: 'none',
          fontWeight: 500,
          boxShadow: 'none',
          paddingLeft: 24,
          paddingRight: 24,
        },
        containedPrimary: {
          backgroundColor: '#007aff',
          '&:hover': {
            backgroundColor: '#005ecb',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 12px 0 rgba(0,0,0,0.03)',
        },
      },
    },
  },
});

const drawerWidth = 240;

const tools = [
  {
    title: 'HEIC to JPEG Converter',
    description: 'Convert HEIC images to JPEG format easily and securely.',
    icon: <ImageIcon sx={{ fontSize: 40 }} />,
    path: '/heic-converter',
    component: HeicConverter
  },
  {
    title: 'Temperature Converter',
    description: 'Convert between Celsius and Fahrenheit with ease.',
    icon: <ThermostatIcon sx={{ fontSize: 40 }} />,
    path: '/temperature-converter',
    component: TemperatureConverter
  },
  {
    title: 'Distance Converter',
    description: 'Convert between miles and kilometers instantly.',
    icon: <StraightenIcon sx={{ fontSize: 40 }} />,
    path: '/distance-converter',
    component: DistanceConverter
  }
];

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Welcome to Our Conversion Tools
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
        Your one-stop solution for all your conversion needs. We provide simple, fast, and secure tools to help you convert various formats and units. All conversions happen right in your browser - your data never leaves your device.
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph>
        Our mission is to make conversion tools accessible to everyone. Whether you're converting HEIC photos from your iPhone, temperature units for cooking, or distance measurements for travel, we've got you covered with our easy-to-use, privacy-focused tools.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {tools.map((tool) => (
          <Grid item xs={12} sm={6} md={4} key={tool.path}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea component={Link} to={tool.path} sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{tool.icon}</Box>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {tool.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {tool.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const Navigation = () => {
  const location = useLocation();
  
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/" selected={location.pathname === '/'}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        {tools.map((tool) => (
          <ListItem 
            button 
            component={Link} 
            to={tool.path} 
            key={tool.path}
            selected={location.pathname === tool.path}
          >
            <ListItemIcon>{tool.icon}</ListItemIcon>
            <ListItemText primary={tool.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AdSense ads
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ 
          background: 'linear-gradient(180deg, #f9f9f9 0%, #e3eafc 100%)', 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'row',
          fontFamily: `-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`
        }}>
          <Navigation />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              {tools.map((tool) => (
                <Route key={tool.path} path={tool.path} element={<tool.component />} />
              ))}
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App; 