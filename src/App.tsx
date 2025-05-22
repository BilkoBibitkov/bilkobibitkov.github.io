import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TemperatureConverter from './components/TemperatureConverter';
import DistanceConverter from './components/DistanceConverter';
import HeicConverter from './components/HeicConverter';
import About from './components/About';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
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
        color: '#1d1d1f',
        marginBottom: '20px',
        fontWeight: '600'
      }}>Simple Web Tools</h1>
      <p style={{
        fontSize: '1.1em',
        lineHeight: '1.6',
        color: '#1d1d1f',
        marginBottom: '30px'
      }}>
        Welcome to my collection of browser-based tools! As someone who loves the metric system and has a healthy skepticism for obscure formats like HEIC, I built these utilities to make life easier (and a bit funnier). No logins, no data collection, just pure, free, metric-loving utility. Enjoy!
      </p>
      <section style={{ 
        marginTop: '40px',
        background: '#f5f5f7',
        padding: '30px',
        borderRadius: '12px'
      }}>
        <h2 style={{
          color: '#1d1d1f',
          marginBottom: '20px',
          fontSize: '1.8em',
          fontWeight: '500'
        }}>Why these tools?</h2>
        <p style={{
          fontSize: '1.1em',
          lineHeight: '1.6',
          color: '#1d1d1f'
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
    padding: '0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
    fontSize: '0.9em',
    boxShadow: '0 0 0 1px rgba(0,0,0,0.05)'
  }}>
    {/* Home Section */}
    <div style={{
      padding: '24px 20px',
      background: '#ffffff',
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    }}>
      <Link to="/" style={{ 
        color: '#1d1d1f', 
        textDecoration: 'none',
        display: 'block',
        width: '100%',
        fontSize: '1.1em',
        fontWeight: '500'
      }}>
        Home
      </Link>
    </div>

    {/* Projects Section */}
    <div style={{
      padding: '20px',
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    }}>
      <div style={{
        color: '#86868b',
        fontSize: '0.8em',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        fontWeight: '500'
      }}>
        Projects
      </div>
      {[
        { to: '/heic-to-jpeg', text: 'HEIC to JPEG' },
        { to: '/temperature-converter', text: 'Temperature Converter' },
        { to: '/distance-converter', text: 'Distance Converter' }
      ].map((link, index) => (
        <Link 
          key={index}
          to={link.to} 
          style={{ 
            color: '#1d1d1f', 
            textDecoration: 'none', 
            marginBottom: '12px',
            padding: '8px 0',
            transition: 'all 0.2s ease',
            display: 'block',
            fontSize: '0.95em'
          }}
          className="nav-link"
        >
          {link.text}
        </Link>
      ))}
    </div>

    {/* System Links Section */}
    <div style={{
      padding: '20px',
      marginTop: 'auto'
    }}>
      <div style={{
        color: '#86868b',
        fontSize: '0.8em',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        fontWeight: '500'
      }}>
        System
      </div>
      {[
        { to: '/privacy', text: 'Privacy Policy' },
        { to: '/terms', text: 'Terms of Service' },
        { to: '/about', text: 'About' }
      ].map((link, index) => (
        <Link 
          key={index}
          to={link.to} 
          style={{ 
            color: '#1d1d1f', 
            textDecoration: 'none', 
            marginBottom: '12px',
            padding: '8px 0',
            transition: 'all 0.2s ease',
            display: 'block',
            fontSize: '0.9em'
          }}
          className="nav-link"
        >
          {link.text}
        </Link>
      ))}
      <div style={{ 
        marginTop: '20px',
        fontSize: '0.85em', 
        color: '#86868b',
        padding: '15px 0',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}>
        Metric system fans welcome. Imperial users tolerated.
      </div>
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
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif'
      }}>
        <Sidebar />
        <div style={{ 
          flex: 1, 
          padding: '0 20px', 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          background: '#ffffff',
          position: 'relative'
        }}>
          <div style={{ 
            flex: 1,
            display: 'flex',
            gap: '20px'
          }}>
            <div style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/heic-to-jpeg" element={<HeicConverter />} />
                <Route path="/temperature-converter" element={<TemperatureConverter />} />
                <Route path="/distance-converter" element={<DistanceConverter />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </div>
            <AdBanner id="1123334776" />
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App; 