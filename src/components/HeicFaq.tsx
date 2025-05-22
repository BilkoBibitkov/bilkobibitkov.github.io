import React from 'react';
import FAQ from './FAQ';

const HeicFaq: React.FC = () => {
  const questions = [
    {
      question: "What is HEIC?",
      answer: "HEIC (High Efficiency Image Container) is Apple's image format that provides better compression while maintaining image quality. It's the default format for photos taken on iPhones and iPads."
    },
    {
      question: "Why convert HEIC to JPEG?",
      answer: "JPEG is a more widely supported format. Converting HEIC to JPEG ensures your images can be viewed on any device or platform, not just Apple devices."
    },
    {
      question: "Is my data safe?",
      answer: "Yes! All conversions happen in your browser. Your images are never uploaded to any server, ensuring complete privacy and security."
    }
  ];

  return <FAQ title="HEIC Converter FAQ" questions={questions} />;
};

export default HeicFaq; 