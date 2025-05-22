import React from 'react';
import FAQ from './FAQ';

const DistanceFaq: React.FC = () => {
  const questions = [
    {
      question: "What distance units are supported?",
      answer: "Our converter supports kilometers (km), meters (m), miles (mi), feet (ft), and inches (in). We focus on the most commonly used units for everyday conversions."
    },
    {
      question: "Why use metric units?",
      answer: "Metric units (like kilometers and meters) are based on the decimal system, making them easier to use and understand. They're also the international standard for measurement."
    },
    {
      question: "How accurate are the conversions?",
      answer: "Our converter uses precise conversion factors to ensure accurate results. All conversions are rounded to two decimal places for clarity."
    }
  ];

  return <FAQ title="Distance Converter FAQ" questions={questions} />;
};

export default DistanceFaq; 