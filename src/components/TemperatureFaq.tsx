import React from 'react';
import FAQ from './FAQ';

const TemperatureFaq: React.FC = () => {
  const questions = [
    {
      question: "Why use this temperature converter?",
      answer: "Our converter provides instant, accurate conversions between Celsius, Fahrenheit, and Kelvin. It's perfect for cooking, weather, or scientific calculations. No more mental math gymnastics required!"
    },
    {
      question: "What's the deal with Fahrenheit?",
      answer: "Ah, Fahrenheit! Created by Daniel Gabriel Fahrenheit in 1724, who decided that 0°F should be the temperature of a brine solution (because why not?). 100°F was supposed to be human body temperature, but he was a bit off. Now it's mainly used in the US, while the rest of the world enjoys the simplicity of Celsius."
    },
    {
      question: "And what about Kelvin?",
      answer: "Kelvin is the cool kid of temperature scales (pun intended). Named after Lord Kelvin, it starts at absolute zero (-273.15°C), where all molecular motion stops. It's the only temperature scale that doesn't use degrees, making it the favorite of scientists and people who like to sound smart at parties."
    },
    {
      question: "How accurate are the conversions?",
      answer: "Our converter uses precise mathematical formulas to ensure accurate conversions. The results are rounded to two decimal places for readability, because who needs to know their room temperature to the millionth of a degree?"
    },
    {
      question: "Can I convert multiple temperatures at once?",
      answer: "Yes! The converter updates in real-time as you type, showing all three temperature scales simultaneously. It's like having a trilingual temperature translator in your pocket!"
    }
  ];

  return <FAQ title="Temperature Converter FAQ" questions={questions} />;
};

export default TemperatureFaq; 