import React from 'react';
import FAQ from './FAQ';

const TemperatureFaq: React.FC = () => {
  const questions = [
    {
      question: "Why use this temperature converter?",
      answer: "Our converter provides instant, accurate conversions between Celsius, Fahrenheit, and Kelvin. It's perfect for cooking, weather, or scientific calculations."
    },
    {
      question: "How accurate are the conversions?",
      answer: "Our converter uses precise mathematical formulas to ensure accurate conversions. The results are rounded to two decimal places for readability."
    },
    {
      question: "Can I convert multiple temperatures at once?",
      answer: "Yes! The converter updates in real-time as you type, showing all three temperature scales simultaneously."
    }
  ];

  return <FAQ title="Temperature Converter FAQ" questions={questions} />;
};

export default TemperatureFaq; 