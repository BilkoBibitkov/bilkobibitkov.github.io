import React from 'react';

const Privacy = () => {
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
      }}>Privacy Policy</h1>

      <div style={{
        fontSize: '1.1em',
        lineHeight: '1.6',
        color: '#1d1d1f'
      }}>
        <p style={{ marginBottom: '20px' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{
            color: '#1d1d1f',
            marginBottom: '15px',
            fontSize: '1.5em',
            fontWeight: '500'
          }}>1. Information We Collect</h2>
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
          }}>2. How We Use Information</h2>
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
          }}>3. Cookies</h2>
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
          }}>4. Third-Party Services</h2>
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
          }}>5. Your Rights</h2>
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
          }}>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 