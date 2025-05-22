import React from 'react';
import FAQ from './FAQ';

const heicFaqItems = [
  {
    question: 'What is HEIC format?',
    answer: 'HEIC (High Efficiency Image Container) is an image format developed by Apple that provides better compression while maintaining high quality. It\'s commonly used in iOS devices.'
  },
  {
    question: 'Why convert HEIC to JPG?',
    answer: 'JPG is a more widely supported format that can be opened on any device or platform. Converting HEIC to JPG ensures better compatibility with various applications and devices.'
  },
  {
    question: 'Will the conversion affect image quality?',
    answer: 'The conversion process maintains high image quality while ensuring compatibility. However, since JPG is a lossy format, there might be a slight reduction in quality, but it\'s usually not noticeable.'
  }
];

function HeicFaq() {
  return <FAQ items={heicFaqItems} title="HEIC to JPG FAQ" />;
}

export default HeicFaq; 