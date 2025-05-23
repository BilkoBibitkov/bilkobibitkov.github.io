import React from 'react';
import PageLayout from './PageLayout';

const Privacy = () => {
  return (
    <PageLayout title="Privacy Policy">
      <p style={{ marginBottom: '20px' }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          color: '#1d1d1f',
          marginBottom: '15px',
          fontSize: '1.5em',
          fontWeight: '500'
        }}>1. Our Commitment to Privacy</h2>
        <p>
          We are committed to maintaining the trust and confidence of our users. Our privacy policy is designed to be transparent and straightforward:
        </p>
        <ul style={{ 
          listStyle: 'none',
          padding: 0,
          marginTop: '10px'
        }}>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#86868b' }}>•</span>
            No user data is stored or tracked. Ever.
          </li>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#86868b' }}>•</span>
            All tools are free and browser-based. No hidden fees, no catch.
          </li>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#86868b' }}>•</span>
            Each project is independently indexable for SEO.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          color: '#1d1d1f',
          marginBottom: '15px',
          fontSize: '1.5em',
          fontWeight: '500'
        }}>2. Information We Collect</h2>
        <p>
          We do not collect any personal information. All tools operate entirely within your browser, 
          and no data is transmitted to our servers. We use Google AdSense to display advertisements, 
          which may collect anonymous data for ad personalization.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          color: '#1d1d1f',
          marginBottom: '15px',
          fontSize: '1.5em',
          fontWeight: '500'
        }}>3. Advertising and AdSense</h2>
        <p>
          This website uses Google AdSense for advertising. By using this site, you acknowledge that:
        </p>
        <ul style={{ 
          listStyle: 'none',
          padding: 0,
          marginTop: '10px'
        }}>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#86868b' }}>•</span>
            AdSense banners are present on every page
          </li>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#86868b' }}>•</span>
            We follow all AdSense content policies
          </li>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#86868b' }}>•</span>
            Google may use cookies to serve ads based on your prior visits
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          color: '#1d1d1f',
          marginBottom: '15px',
          fontSize: '1.5em',
          fontWeight: '500'
        }}>4. How We Use Information</h2>
        <p>
          Since we don't collect personal information, there's no data to use. Any anonymous data 
          collected by Google AdSense is used solely for the purpose of displaying relevant advertisements.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          color: '#1d1d1f',
          marginBottom: '15px',
          fontSize: '1.5em',
          fontWeight: '500'
        }}>5. Cookies</h2>
        <p>
          We use Google AdSense, which may use cookies to serve ads. You can opt out of personalized 
          advertising by visiting Google's Ads Settings page.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          color: '#1d1d1f',
          marginBottom: '15px',
          fontSize: '1.5em',
          fontWeight: '500'
        }}>6. Third-Party Services</h2>
        <p>
          We use Google AdSense for advertising. Google's use of advertising cookies enables it and its 
          partners to serve ads based on your visit to this site and/or other sites on the internet.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          color: '#1d1d1f',
          marginBottom: '15px',
          fontSize: '1.5em',
          fontWeight: '500'
        }}>7. Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul style={{ 
          listStyle: 'none',
          padding: 0,
          marginTop: '10px'
        }}>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#86868b' }}>•</span>
            Opt out of personalized advertising
          </li>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#86868b' }}>•</span>
            Clear your browser cookies
          </li>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#86868b' }}>•</span>
            Use our tools without accepting cookies
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{
          color: '#1d1d1f',
          marginBottom: '15px',
          fontSize: '1.5em',
          fontWeight: '500'
        }}>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us.
        </p>
      </section>
    </PageLayout>
  );
};

export default Privacy; 