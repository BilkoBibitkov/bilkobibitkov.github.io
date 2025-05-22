import React from 'react';

const Terms = () => {
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
      }}>Terms of Service</h1>

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
          }}>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and 
            provision of this agreement. If you do not agree to abide by the above, please do not use this site.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{
            color: '#1d1d1f',
            marginBottom: '15px',
            fontSize: '1.5em',
            fontWeight: '500'
          }}>2. Use License</h2>
          <p>
            Permission is granted to temporarily use the tools on this website for personal, 
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{
            color: '#1d1d1f',
            marginBottom: '15px',
            fontSize: '1.5em',
            fontWeight: '500'
          }}>3. Disclaimer</h2>
          <p>
            The tools on this website are provided "as is". We make no warranties, expressed or implied, 
            and hereby disclaim and negate all other warranties, including without limitation, implied 
            warranties or conditions of merchantability, fitness for a particular purpose, or 
            non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{
            color: '#1d1d1f',
            marginBottom: '15px',
            fontSize: '1.5em',
            fontWeight: '500'
          }}>4. Limitations</h2>
          <p>
            In no event shall we or our suppliers be liable for any damages (including, without limitation, 
            damages for loss of data or profit, or due to business interruption) arising out of the use 
            or inability to use the tools on this website.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{
            color: '#1d1d1f',
            marginBottom: '15px',
            fontSize: '1.5em',
            fontWeight: '500'
          }}>5. Advertising</h2>
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
              Google may use cookies to serve ads based on your prior visits to this website
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#86868b' }}>•</span>
              You can opt out of personalized advertising by visiting Google's Ads Settings
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#86868b' }}>•</span>
              We are not responsible for the content of any advertisements
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{
            color: '#1d1d1f',
            marginBottom: '15px',
            fontSize: '1.5em',
            fontWeight: '500'
          }}>6. Revisions</h2>
          <p>
            We may revise these terms of service at any time without notice. By using this website, 
            you agree to be bound by the current version of these terms of service.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{
            color: '#1d1d1f',
            marginBottom: '15px',
            fontSize: '1.5em',
            fontWeight: '500'
          }}>7. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws and 
            you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms; 