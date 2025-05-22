import React from 'react';

const About = () => {
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
      }}>About</h1>
      
      <div style={{
        fontSize: '1.1em',
        lineHeight: '1.6',
        color: '#1d1d1f',
        marginBottom: '30px'
      }}>
        <p>
          I'm a software engineer with a passion for creating simple, efficient solutions to everyday problems. 
          My journey in tech has led me to focus on building tools that make life easier for everyone, 
          regardless of their technical background.
        </p>
        <p style={{ marginTop: '20px' }}>
          This collection of web tools reflects my belief that technology should be accessible and straightforward. 
          Whether it's converting file formats or handling unit conversions, I aim to provide clean, 
          no-nonsense solutions that just work.
        </p>
        <p style={{ marginTop: '20px' }}>
          When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
          and sharing my knowledge with the developer community. I believe in continuous learning and 
          staying current with industry best practices.
        </p>
      </div>

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
        }}>Contact</h2>
        <p style={{
          fontSize: '1.1em',
          lineHeight: '1.6',
          color: '#1d1d1f'
        }}>
          Feel free to reach out if you have any questions, suggestions, or just want to connect. 
          I'm always open to feedback and collaboration opportunities.
        </p>
      </section>
    </div>
  );
};

export default About; 