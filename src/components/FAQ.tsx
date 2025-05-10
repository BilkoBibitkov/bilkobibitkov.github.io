import React from 'react';
import { Box, Typography, Paper, Link } from '@mui/material';

const faqItems = [
  {
    question: 'What is a HEIC file?',
    answer:
      <>HEIC (High Efficiency Image Container) is the default image format used by Apple devices. It offers better compression than JPEG while maintaining high quality, but it is not universally supported across all platforms and applications. HEIC files are created by iPhones, iPads, and many modern Mac computers running macOS High Sierra (10.13) or later. Learn more on <Link href="https://en.wikipedia.org/wiki/High_Efficiency_Image_File_Format" target="_blank" rel="noopener">Wikipedia</Link>.</>,
  },
  {
    question: 'Who invented HEIC?',
    answer:
      <>HEIC is based on the High Efficiency Image File Format (HEIF), which was developed by the <Link href="https://en.wikipedia.org/wiki/Moving_Picture_Experts_Group" target="_blank" rel="noopener">Moving Picture Experts Group (MPEG)</Link> and standardized as ISO/IEC 23008-12. The HEIC variant uses HEVC (H.265) encoding for images. See <Link href="https://en.wikipedia.org/wiki/High_Efficiency_Image_File_Format" target="_blank" rel="noopener">Wikipedia</Link> for more details.</>,
  },
  {
    question: 'When did Apple use HEIC first?',
    answer:
      <>Apple first adopted the HEIC format as the default for photos with the release of <b>iOS 11</b> in 2017. This change allowed iPhones and iPads to save images in a more efficient format, reducing file sizes while maintaining quality. Read more at <Link href="https://www.reddit.com/r/YouShouldKnow/comments/uxsp2q/ysk_apple_iphones_have_started_saving_images_as/" target="_blank" rel="noopener">Reddit</Link> and <Link href="https://www.adaminsights.com/exploring-the-world-of-heic-apples-revolutionary-image-file-format/" target="_blank" rel="noopener">Adam Insights</Link>.</>,
  },
  {
    question: 'Which Apple devices create HEIC files?',
    answer:
      <>HEIC files can be created by all modern Apple devices, including:
      <ul style={{marginTop: 4, marginBottom: 4}}>
        <li><b>iPhone:</b> iPhone 7, iPhone 7 Plus, iPhone 8, iPhone 8 Plus, iPhone X, iPhone XR, iPhone XS, iPhone XS Max, iPhone 11, iPhone 11 Pro, iPhone 11 Pro Max, iPhone SE (2nd gen and newer), iPhone 12, iPhone 12 Mini, iPhone 12 Pro, iPhone 12 Pro Max, iPhone 13, iPhone 13 Mini, iPhone 13 Pro, iPhone 13 Pro Max, iPhone 14, iPhone 14 Plus, iPhone 14 Pro, iPhone 14 Pro Max, and newer models</li>
        <li><b>iPad:</b> iPad Pro (all generations), iPad Air (3rd gen and newer), iPad mini (5th gen and newer), iPad (5th gen and newer)</li>
        <li><b>Mac:</b> All Mac computers running macOS High Sierra (10.13) or later</li>
      </ul>
      For a full list and more details, see <Link href="https://en.wikipedia.org/wiki/High_Efficiency_Image_File_Format" target="_blank" rel="noopener">Wikipedia</Link> and <Link href="https://www.adaminsights.com/exploring-the-world-of-heic-apples-revolutionary-image-file-format/" target="_blank" rel="noopener">Adam Insights</Link>.
      </>,
  },
  {
    question: 'Why should I convert HEIC to JPEG?',
    answer:
      'JPEG is the most widely supported image format across all devices, operating systems, and applications. Converting your HEIC files to JPEG ensures compatibility and makes it easier to share your photos with anyone.',
  },
  {
    question: 'How many files can I convert at once?',
    answer:
      'You can convert as many HEIC files as you like at once (up to 10MB per file).',
  },
  {
    question: 'Is my privacy protected?',
    answer:
      <>Absolutely. Your privacy is of utmost importance to us. <b>All image processing and conversion is performed entirely within your browser</b> using advanced client-side technology. <b>No images or data are ever uploaded, transmitted, or stored on any server</b>. This ensures that your files remain secure and private at all times.</>,
  },
  {
    question: 'Is this service really free?',
    answer:
      'Yes, our HEIC to JPEG converter is completely free to use. There are no hidden fees or premium features.',
  },
  {
    question: 'Will the quality of my photos be reduced?',
    answer:
      'We strive to maintain the original quality of your photos during conversion. While JPEG is a lossy format, we use high-quality settings to minimize any quality loss.',
  },
  {
    question: 'What browsers are supported?',
    answer:
      'Our converter works on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your preferred browser.',
  },
  {
    question: 'What are some interesting facts about HEIC?',
    answer:
      <>
        <ul style={{marginTop: 4, marginBottom: 4}}>
          <li>HEIC is a container format based on the High Efficiency Image File Format (HEIF), developed by the Moving Picture Experts Group (MPEG).</li>
          <li>HEIC files can store single images, image sequences (like bursts or animations), and even non-destructive edits and metadata.</li>
          <li>HEIC files using HEVC (H.265) encoding can be about half the size of equivalent quality JPEGs, saving storage space on devices.</li>
          <li>Apple was the first major adopter of HEIC in 2017 with iOS 11, making it the default photo format for iPhones and iPads.</li>
          <li>HEIC is not universally supported; for example, some versions of Adobe Photoshop only support 8-bit HEIC, not 10- or 12-bit.</li>
          <li>HEIC is a special case of the ISO Base Media File Format, which is also used for MP4 and JPEG 2000 files.</li>
        </ul>
        <span style={{fontSize: '0.95em'}}>Source: <a href="https://en.wikipedia.org/wiki/High_Efficiency_Image_File_Format" target="_blank" rel="noopener">Wikipedia - High Efficiency Image File Format</a></span>
      </>,
  },
];

const FAQ: React.FC = () => {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqItems.map((item, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }} elevation={1}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
            {item.question}
          </Typography>
          <Typography color="text.secondary">{item.answer}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default FAQ; 