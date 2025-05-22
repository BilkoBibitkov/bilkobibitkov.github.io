import React from 'react';

interface FAQProps {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

const FAQ: React.FC<FAQProps> = ({ title, questions }) => {
  return (
    <div style={{ 
      marginTop: '40px',
      background: '#f5f5f7',
      padding: '30px',
      borderRadius: '12px'
    }}>
      <h2 style={{
        color: '#1d1d1f',
        marginBottom: '30px',
        fontSize: '1.8em',
        fontWeight: '500'
      }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {questions.map((item, index) => (
          <div key={index} style={{ 
            background: '#ffffff',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{
              color: '#1d1d1f',
              marginBottom: '12px',
              fontSize: '1.2em',
              fontWeight: '500'
            }}>{item.question}</h3>
            <p style={{
              color: '#1d1d1f',
              fontSize: '1.1em',
              lineHeight: '1.6',
              margin: 0
            }}>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 