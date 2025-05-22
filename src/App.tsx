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
    <div style={{ width: '160px', height: '600px', background: '#f0f0f0', margin: '10px' }}>
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
    <div style={{ padding: '20px' }}>
      <h1>Simple Web Tools</h1>
      <p>
        Welcome to my collection of browser-based tools! As someone who loves the metric system and has a healthy skepticism for obscure formats like HEIC, I built these utilities to make life easier (and a bit funnier). No logins, no data collection, just pure, free, metric-loving utility. Enjoy!
      </p>
      <section style={{ marginTop: '30px' }}>
        <h2>AdSense Policy Sections</h2>
        <ul>
          <li>No user data is stored or tracked. Ever.</li>
          <li>All tools are free and browser-based. No hidden fees, no catch.</li>
          <li>Each project is independently indexable for SEO.</li>
          <li>AdSense banners are present on every page (see those lovely sidebars?).</li>
          <li>We follow all <a href="https://support.google.com/adsense/answer/9724?hl=en" target="_blank" rel="noopener noreferrer">AdSense content policies</a>.</li>
        </ul>
      </section>
      <section style={{ marginTop: '30px' }}>
        <h2>Why these tools?</h2>
        <p>
          Because sometimes you just want to convert a temperature, a distance, or a HEIC file without feeling like you need a PhD in computer science or a subscription to a cloud service. Also, I love to code and make people smile.
        </p>
      </section>
    </div>
  );
}

const Sidebar = () => (
  <nav style={{
    width: '220px',
    background: '#f8f9fa',
    padding: '30px 10px',
    borderRight: '1px solid #eee',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    fontFamily: 'inherit',
    fontSize: '1.1em',
  }}>
    <div style={{ fontWeight: 'bold', fontSize: '1.3em', marginBottom: '30px', color: '#007bff' }}>
      <span role="img" aria-label="home">🏠</span> Home
    </div>
    <Link to="/" style={{ color: '#333', textDecoration: 'none', marginBottom: '10px' }}>Home</Link>
    <Link to="/heic-to-jpeg" style={{ color: '#333', textDecoration: 'none', marginBottom: '10px' }}>Project 1: HEIC to JPEG</Link>
    <Link to="/temperature-converter" style={{ color: '#333', textDecoration: 'none', marginBottom: '10px' }}>Project 2: Temperature Converter</Link>
    <Link to="/distance-converter" style={{ color: '#333', textDecoration: 'none', marginBottom: '10px' }}>Project 3: Distance Converter</Link>
    <div style={{ marginTop: 'auto', fontSize: '0.9em', color: '#888' }}>
      <span role="img" aria-label="joke">😄</span> Metric system fans welcome! Imperial users tolerated.
    </div>
  </nav>
);

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <AdBanner id="5573198755" />
        <Sidebar />
        <div style={{ flex: 1, padding: '0 20px', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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