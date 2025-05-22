import React from 'react';
import FAQ from './FAQ';

const temperatureFaqItems = [
  {
    question: 'What temperature scales are supported?',
    answer: 'The converter supports Celsius (°C), Fahrenheit (°F), and Kelvin (K) temperature scales.'
  },
  {
    question: 'How accurate are the conversions?',
    answer: 'The conversions are mathematically precise, using standard conversion formulas between the different temperature scales.'
  },
  {
    question: 'Why do we need different temperature scales?',
    answer: 'Different temperature scales are used in different parts of the world and for different scientific purposes. Celsius is used in most countries, Fahrenheit is primarily used in the United States, and Kelvin is used in scientific applications.'
  }
];

function TemperatureFaq() {
  return <FAQ items={temperatureFaqItems} title="Temperature Conversion FAQ" />;
}

export default TemperatureFaq; 