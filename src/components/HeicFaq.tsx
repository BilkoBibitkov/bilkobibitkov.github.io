import React from 'react';
import { Box, Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HeicFaq = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is HEIC format?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              HEIC (High Efficiency Image Container) is Apple's modern image format used by iPhones and iPads. It offers better compression than JPEG while maintaining high quality, resulting in smaller file sizes. However, it's not widely supported outside of Apple devices, which is why conversion to JPEG is often necessary.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Why should I convert HEIC to JPEG?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              JPEG is a universal format that works everywhere - on all devices, websites, and applications. Converting HEIC to JPEG ensures your photos can be viewed and shared with anyone, regardless of their device or platform. It's especially useful when you need to upload photos to websites, share them on social media, or send them to non-Apple users.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Is my data safe during conversion?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, absolutely! Our converter works entirely in your browser. Your photos never leave your device or get uploaded to any server. The conversion process happens locally, ensuring complete privacy and security of your data.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What are the file size limits?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can convert files up to 10MB in size. This limit ensures smooth performance and prevents browser memory issues. If you have larger files, we recommend converting them in smaller batches.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Will the image quality be affected?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our converter maintains high image quality during the conversion process. We use a quality setting of 0.8 (80%) for JPEG conversion, which provides an excellent balance between file size and image quality. The difference in quality is typically not noticeable to the human eye.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Can I convert multiple files at once?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes! You can drag and drop multiple HEIC files at once, and they will all be converted simultaneously. After conversion, you can download individual files or use the "Download All" button to get all converted images in a ZIP file.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Box>
  );
};

export default HeicFaq;
export {}; 