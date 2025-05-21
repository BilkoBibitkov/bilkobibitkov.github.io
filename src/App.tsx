import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box, Typography, Paper, Button, Toolbar, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Collapse } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import DescriptionIcon from '@mui/icons-material/Description';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import StraightenIcon from '@mui/icons-material/Straighten';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import TemperatureConverter from './components/TemperatureConverter';
import DistanceConverter from './components/DistanceConverter';
import HeicConverter from './components/HeicConverter';
import profilePic from './profile_pic.png';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#007aff',
      contrastText: '#fff',
    },
    background: {
      default: '#f9f9f9',
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

function Sidebar() {
  const location = useLocation();
  const [openTools, setOpenTools] = useState(true);
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: '#f5f6fa',
          borderRight: '1px solid #e0e0e0',
          boxShadow: '2px 0 8px rgba(0,0,0,0.05)'
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', mt: 2 }}>
        <Divider />
        <List>
          <ListItem button component={Link} to="/" selected={location.pathname === '/'}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/heic-to-jpeg" selected={location.pathname === '/heic-to-jpeg'}>
            <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
            <ListItemText primary="HEIC to JPG" />
          </ListItem>
          <ListItem button component={Link} to="/temperature-converter" selected={location.pathname === '/temperature-converter'}>
            <ListItemIcon><ThermostatIcon /></ListItemIcon>
            <ListItemText primary="Temperature Converter" />
          </ListItem>
          <ListItem button component={Link} to="/distance-converter" selected={location.pathname === '/distance-converter'}>
            <ListItemIcon><StraightenIcon /></ListItemIcon>
            <ListItemText primary="Distance Converter" />
          </ListItem>
          <Divider sx={{ my: 1 }} />
          <ListItem button component={Link} to="/about" selected={location.pathname === '/about'}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/contact" selected={location.pathname === '/contact'}>
            <ListItemIcon><ContactSupportIcon /></ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button component={Link} to="/privacy" selected={location.pathname === '/privacy'}>
            <ListItemIcon><DescriptionIcon /></ListItemIcon>
            <ListItemText primary="Privacy Policy" />
          </ListItem>
          <ListItem button component={Link} to="/terms" selected={location.pathname === '/terms'}>
            <ListItemIcon><DescriptionIcon /></ListItemIcon>
            <ListItemText primary="Terms of Service" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

function Home() {
  const navigate = useNavigate();
  const projectTiles = [
    {
      title: 'HEIC to JPEG Converter',
      description: 'Liberate your iPhone photos from Apple\'s HEIC prison and turn them into universally loved JPEGs.',
      to: '/heic-to-jpeg',
    },
    {
      title: 'Temperature Converter',
      description: 'Convert between Celsius and Fahrenheit. For those who think 100 should mean boiling, not "pretty hot."',
      to: '/temperature-converter',
    },
    {
      title: 'Distance Converter',
      description: 'Miles or kilometers? I\'ll help you bridge the Atlantic gap, one meter at a time.',
      to: '/distance-converter',
    },
  ];
  return (
    <>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 700 }}>
        Simple Web Tools
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        A collection of handy web tools built by a European lost in the land of Fahrenheit and miles. All browser-based, privacy-friendly, and with a metric ton of humor.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mt: 6 }}>
        {projectTiles.map((tile) => (
          <Paper key={tile.title} sx={{ width: 300, p: 3, cursor: 'pointer', transition: '0.2s', '&:hover': { boxShadow: 6, transform: 'scale(1.03)' } }} onClick={() => navigate(tile.to)}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>{tile.title}</Typography>
            <Typography variant="body2" color="text.secondary">{tile.description}</Typography>
          </Paper>
        ))}
      </Box>
    </>
  );
}

function About() {
  return (
    <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
        component="img"
        src={profilePic}
        alt="Bilko Bibitkov"
        sx={{
          width: 200,
          height: 200,
          borderRadius: '50%',
          objectFit: 'cover',
          mb: 3,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          border: '4px solid #fff'
        }}
      />
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        About This Project
      </Typography>
      <Typography variant="body1" paragraph align="center">
        Hi! I'm Bilko, a European living in America, where the weather is measured in Fahrenheit, distances in miles, and file formats in "Why, Apple, why?"
      </Typography>
      <Typography variant="body1" paragraph align="center">
        I love the metric system (it just makes sense!), and I have a healthy skepticism for specialized formats like HEIC. After too many "Why won't this photo open?" moments, I decided to build tools that make life easier for expats, travelers, and anyone who's ever been confused by a recipe or a road sign.
      </Typography>
      <Typography variant="body1" paragraph align="center">
        This site is my hobby project: browser-based, privacy-first, and always free. If you've ever tried to convert 350°F to Celsius in your head, or wondered how far 10 miles really is, you're in the right place. Enjoy, and may your conversions always be accurate!
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
        Project Goals
      </Typography>
      <Typography variant="body1" paragraph align="center">
        To create helpful web tools that are easy to use, secure, and accessible to everyone. And to sneak a little metric love into the world, one conversion at a time.
      </Typography>
    </Box>
  );
}

function Contact() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Get in Touch
      </Typography>
      <Typography variant="body1" paragraph>
        Have questions or suggestions? I'd love to hear from you! Feel free to reach out through my GitHub repository.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="https://github.com/BilkoBibitkov"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mt: 2 }}
      >
        Visit GitHub
      </Button>
    </Box>
  );
}

function Privacy() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        Your privacy is important. These tools process all data in your browser, with no data being sent to any servers. I don't collect, store, or process any personal information.
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
        Data Handling
      </Typography>
      <Typography variant="body1" paragraph>
        All file processing happens right in your browser. Your files never leave your device, keeping your data private and secure.
      </Typography>
    </Box>
  );
}

function Terms() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Terms of Service
      </Typography>
      <Typography variant="body1" paragraph>
        By using these tools, you agree to these terms. The tools are provided "as is" without any warranties. I'm not responsible for any data loss or other issues that might occur during use.
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
        Usage Guidelines
      </Typography>
      <Typography variant="body1" paragraph>
        These tools are meant for personal use. Please make sure you have the right to use any files you process with these tools.
      </Typography>
    </Box>
  );
}

function HeicToJpeg() {
  return <HeicConverter />;
}

function TemperatureConverterPage() {
  return <TemperatureConverter />;
}

function DistanceConverterPage() {
  return <DistanceConverter />;
}

function App() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {}
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ background: 'linear-gradient(180deg, #f9f9f9 0%, #e3eafc 100%)', minHeight: '100vh', display: 'flex', flexDirection: 'row', fontFamily: `-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif` }}>
          <Sidebar />
          <Box sx={{ flex: 1, pl: { sm: 0, md: 2 }, display: 'flex', flexDirection: 'column' }}>
            <Container maxWidth="md" sx={{ mt: 6, mb: 8, flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/heic-to-jpeg" element={<HeicToJpeg />} />
                <Route path="/temperature-converter" element={<TemperatureConverterPage />} />
                <Route path="/distance-converter" element={<DistanceConverterPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App; 