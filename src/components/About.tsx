import React from 'react';
import PageLayout from './PageLayout';

const About = () => {
  return (
    <PageLayout title="About">
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
        }}>Our Mission</h2>
        <p style={{
          fontSize: '1.1em',
          lineHeight: '1.6',
          color: '#1d1d1f',
          marginBottom: '20px'
        }}>
          This website is on a mission to make the world a better place, one metric at a time. We're not just building tools; 
          we're creating a sanctuary for those who believe that 1000 meters should be called a kilometer, not 0.62 miles. 
          Our goal is to provide a growing collection of web utilities that make life easier in this non-metric world, 
          all while having a good laugh at the absurdity of imperial units.
        </p>
        <p style={{
          fontSize: '1.1em',
          lineHeight: '1.6',
          color: '#1d1d1f'
        }}>
          As we evolve, you'll find more than just conversion tools. We'll be showcasing the beauty of the metric system, 
          sharing humorous takes on measurement systems, and maybe even starting a support group for those traumatized 
          by the imperial system. Because let's face it, who needs 12 inches in a foot when you can have 100 centimeters in a meter?
        </p>
      </section>

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
    </PageLayout>
  );
};

export default About; 