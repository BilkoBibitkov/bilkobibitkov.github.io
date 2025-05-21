import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DistanceFaq: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is the difference between miles and kilometers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Miles and kilometers are both units of distance, but they're used in different parts of the world. 
            One mile equals approximately 1.60934 kilometers. Miles are primarily used in the United States and 
            the United Kingdom, while kilometers are used in most other countries as part of the metric system.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Why do different countries use different units?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The difference in units stems from historical and cultural factors. The metric system (using kilometers) 
            was developed during the French Revolution and was designed to be a universal system. The imperial system 
            (using miles) has its roots in ancient Roman measurements and was widely used in the British Empire.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How accurate is the conversion?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our converter uses the exact conversion factor of 1 mile = 1.60934 kilometers, which is the 
            internationally accepted standard. The results are accurate to 5 decimal places, which is more 
            than sufficient for most practical purposes.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default DistanceFaq;
export {}; 