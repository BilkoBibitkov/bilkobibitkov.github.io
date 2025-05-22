import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TemperatureConverter from './components/TemperatureConverter';
import DistanceConverter from './components/DistanceConverter';
import HeicConverter from './components/HeicConverter';
import Header from './components/Header';
import Footer from './components/Footer';

// AdSense banner component
const AdBanner = ({ id }: { id: string }) => {
  // Simple check for consent (you can replace this with actual consent logic)
  const hasConsent = true; // Placeholder for actual consent check
  if (!hasConsent) return null;
  return (
    <div style={{ width: '160px', height: '600px', background: '#f0f0f0', margin: '10px' }}>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot={id}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Simple Web Tools</h1>
      <p>A collection of handy web tools built by a European lost in the land of Fahrenheit and miles.</p>
      <nav>
        <ul>
          <li><Link to="/heic-to-jpeg">HEIC to JPG</Link></li>
          <li><Link to="/temperature-converter">Temperature Converter</Link></li>
          <li><Link to="/distance-converter">Distance Converter</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <AdBanner id="left-banner" />
          <div style={{ flex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/heic-to-jpeg" element={<HeicConverter />} />
              <Route path="/temperature-converter" element={<TemperatureConverter />} />
              <Route path="/distance-converter" element={<DistanceConverter />} />
            </Routes>
          </div>
          <AdBanner id="right-banner" />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 