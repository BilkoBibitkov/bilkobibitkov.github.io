import React from 'react';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
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
      }}>{title}</h1>
      
      <div style={{
        fontSize: '1.1em',
        lineHeight: '1.6',
        color: '#1d1d1f'
      }}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout; 