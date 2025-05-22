import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

function FAQ({ items, title = 'Frequently Asked Questions' }: FAQProps) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {items.map((item, index) => (
          <div key={index} style={{
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: '#fff'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{item.question}</h3>
            <p style={{ margin: 0, color: '#666' }}>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ; 