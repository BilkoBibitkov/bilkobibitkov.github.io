import React from 'react';
import FAQ from './FAQ';

const DistanceFaq: React.FC = () => {
  const questions = [
    {
      question: "What distance units are supported?",
      answer: "Our converter supports kilometers (km), meters (m), miles (mi), feet (ft), and inches (in). We focus on the most commonly used units for everyday conversions. No furlongs or leagues here - we keep it practical!"
    },
    {
      question: "Why use metric units?",
      answer: "Metric units are like the universal language of measurement. Based on the decimal system, they're easy to use and understand. One kilometer is 1000 meters, one meter is 100 centimeters - it's all so beautifully logical! The rest of the world agrees, which is why it's the international standard."
    },
    {
      question: "What's the story with miles?",
      answer: "Ah, the mile! This old-timer dates back to the Roman Empire, where it was defined as 1000 paces of a Roman soldier. The word 'mile' comes from 'mille passus' - Latin for '1000 paces'. Today, it's mainly used in the US and UK, while the rest of the world enjoys the simplicity of kilometers."
    },
    {
      question: "And what about feet and inches?",
      answer: "Feet and inches are part of the imperial system, which has a fascinating history. The foot was originally based on the length of a human foot (surprise!), and the inch was defined as three grains of barley placed end to end. While charming in its historical context, it's not exactly the most precise way to measure things in the 21st century!"
    },
    {
      question: "How accurate are the conversions?",
      answer: "Our converter uses precise conversion factors to ensure accurate results. All conversions are rounded to two decimal places for clarity. We're not splitting hairs here - unless you're building a spaceship, this level of precision should be more than enough!"
    }
  ];

  return <FAQ title="Distance Converter FAQ" questions={questions} />;
};

export default DistanceFaq; 