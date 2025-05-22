import React from 'react';
import FAQ from './FAQ';

const distanceFaqItems = [
  {
    question: 'What distance units are supported?',
    answer: 'The converter supports kilometers (km), miles (mi), meters (m), feet (ft), and yards (yd).'
  },
  {
    question: 'How accurate are the conversions?',
    answer: 'The conversions are mathematically precise, using standard conversion factors between the different units of measurement.'
  },
  {
    question: 'Why do we need different distance units?',
    answer: 'Different countries and regions use different units of measurement. The metric system (kilometers, meters) is used in most countries, while the imperial system (miles, feet, yards) is primarily used in the United States.'
  }
];

function DistanceFaq() {
  return <FAQ items={distanceFaqItems} title="Distance Conversion FAQ" />;
}

export default DistanceFaq; 