const fs = require('fs');
const { createCanvas } = require('canvas');

// Create icons directory if it doesn't exist
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// Function to generate icon
function generateIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#1d1d1f';
  ctx.fillRect(0, 0, size, size);

  // Draw "WT" text
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${size * 0.4}px -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('WT', size / 2, size / 2);

  return canvas.toBuffer('image/png');
}

// Generate icons
const sizes = [192, 512];
sizes.forEach(size => {
  const icon = generateIcon(size);
  fs.writeFileSync(`public/icon-${size}x${size}.png`, icon);
  console.log(`Generated icon-${size}x${size}.png`);
});

// Generate screenshot
const screenshot = createCanvas(1280, 720);
const ctx = screenshot.getContext('2d');

// Background
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, 1280, 720);

// Draw header
ctx.fillStyle = '#1d1d1f';
ctx.font = 'bold 48px -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('Simple Web Tools', 640, 100);

// Draw tools
const tools = ['HEIC to JPEG', 'Temperature Converter', 'Distance Converter'];
tools.forEach((tool, index) => {
  const y = 250 + index * 120;
  
  // Tool box
  ctx.fillStyle = '#f5f5f7';
  ctx.fillRect(240, y - 40, 800, 80);
  
  // Tool name
  ctx.fillStyle = '#1d1d1f';
  ctx.font = '24px -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(tool, 280, y);
});

// Save screenshot
fs.writeFileSync('public/screenshot-home.png', screenshot.toBuffer('image/png'));
console.log('Generated screenshot-home.png'); 