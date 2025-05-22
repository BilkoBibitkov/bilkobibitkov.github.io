import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TemperatureConverter from './components/TemperatureConverter';
import DistanceConverter from './components/DistanceConverter';
import HeicConverter from './components/HeicConverter';
import Footer from './components/Footer';

// AdSense banner component
const AdBanner = ({ id }: { id: string }) => {
  React.useEffect(() => {
    // @ts-ignore
    if (window.adsbygoogle) {
      // @ts-ignore
      window.adsbygoogle.push({});
    }
  }, []);
  return (
    <div style={{ 
      width: '160px', 
      height: '600px', 
      background: '#ffffff', 
      margin: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderRadius: '8px'
    }}>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-5573198755"
           data-ad-slot={id}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

function Home() {
  return (
    <div style={{ 
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '2.5em',
        color: '#2c3e50',
        marginBottom: '20px',
        fontWeight: '600'
      }}>Simple Web Tools</h1>
      <p style={{
        fontSize: '1.1em',
        lineHeight: '1.6',
        color: '#34495e',
        marginBottom: '30px'
      }}>
        Welcome to my collection of browser-based tools! As someone who loves the metric system and has a healthy skepticism for obscure formats like HEIC, I built these utilities to make life easier (and a bit funnier). No logins, no data collection, just pure, free, metric-loving utility. Enjoy!
      </p>
      <section style={{ 
        marginTop: '40px',
        background: '#f8f9fa',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{
          color: '#2c3e50',
          marginBottom: '20px',
          fontSize: '1.8em'
        }}>AdSense Policy Sections</h2>
        <ul style={{
          listStyle: 'none',
          padding: 0
        }}>
          {[
            'No user data is stored or tracked. Ever.',
            'All tools are free and browser-based. No hidden fees, no catch.',
            'Each project is independently indexable for SEO.',
            'AdSense banners are present on every page (see those lovely sidebars?).',
            'We follow all AdSense content policies.'
          ].map((item, index) => (
            <li key={index} style={{
              marginBottom: '15px',
              paddingLeft: '25px',
              position: 'relative',
              color: '#34495e'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#3498db'
              }}>•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section style={{ 
        marginTop: '40px',
        background: '#f8f9fa',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{
          color: '#2c3e50',
          marginBottom: '20px',
          fontSize: '1.8em'
        }}>Why these tools?</h2>
        <p style={{
          fontSize: '1.1em',
          lineHeight: '1.6',
          color: '#34495e'
        }}>
          Because sometimes you just want to convert a temperature, a distance, or a HEIC file without feeling like you need a PhD in computer science or a subscription to a cloud service. Also, I love to code and make people smile.
        </p>
      </section>
    </div>
  );
}

const Sidebar = () => (
  <nav style={{
    width: '220px',
    background: '#ffffff',
    padding: '30px 20px',
    borderRight: '1px solid #eee',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    fontFamily: 'inherit',
    fontSize: '1.1em',
    boxShadow: '2px 0 4px rgba(0,0,0,0.05)'
  }}>
    <div style={{ 
      fontWeight: 'bold', 
      fontSize: '1.3em', 
      marginBottom: '30px', 
      color: '#3498db',
      padding: '10px',
      borderRadius: '8px',
      background: '#f8f9fa'
    }}>
      <span role="img" aria-label="home">🏠</span> Home
    </div>
    {[
      { to: '/', text: 'Home' },
      { to: '/heic-to-jpeg', text: 'Project 1: HEIC to JPEG' },
      { to: '/temperature-converter', text: 'Project 2: Temperature Converter' },
      { to: '/distance-converter', text: 'Project 3: Distance Converter' }
    ].map((link, index) => (
      <Link 
        key={index}
        to={link.to} 
        style={{ 
          color: '#34495e', 
          textDecoration: 'none', 
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '8px',
          transition: 'all 0.3s ease'
        }}
        className="nav-link"
      >
        {link.text}
      </Link>
    ))}
    <div style={{ 
      marginTop: 'auto', 
      fontSize: '0.9em', 
      color: '#7f8c8d',
      padding: '15px',
      background: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <span role="img" aria-label="joke">😄</span> Metric system fans welcome! Imperial users tolerated.
    </div>
  </nav>
);

function App() {
  return (
    <Router>
      <div style={{ 
        display: 'flex', 
        minHeight: '100vh',
        background: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}>
        <AdBanner id="5573198755" />
        <Sidebar />
        <div style={{ 
          flex: 1, 
          padding: '0 20px', 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          background: '#ffffff'
        }}>
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/heic-to-jpeg" element={<HeicConverter />} />
              <Route path="/temperature-converter" element={<TemperatureConverter />} />
              <Route path="/distance-converter" element={<DistanceConverter />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <AdBanner id="1123334776" />
      </div>
    </Router>
  );
}

export default App; 