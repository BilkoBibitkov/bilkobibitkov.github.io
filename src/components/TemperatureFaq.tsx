import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TemperatureFaq: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is the difference between Celsius and Fahrenheit?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Celsius (°C) and Fahrenheit (°F) are two different temperature scales. Celsius is used in most countries 
            worldwide and is part of the metric system, while Fahrenheit is primarily used in the United States. 
            The freezing point of water is 0°C (32°F), and the boiling point is 100°C (212°F).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How do I convert between Celsius and Fahrenheit?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To convert Celsius to Fahrenheit: °F = (°C × 9/5) + 32<br />
            To convert Fahrenheit to Celsius: °C = (°F - 32) × 5/9<br /><br />
            For example, 20°C is 68°F, and 98.6°F is 37°C.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Why do we have different temperature scales?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Fahrenheit scale was developed by Daniel Gabriel Fahrenheit in 1724, while the Celsius scale 
            was developed by Anders Celsius in 1742. The Celsius scale was designed to be more intuitive, 
            with 0°C as the freezing point of water and 100°C as the boiling point. The Fahrenheit scale 
            was originally based on the freezing point of a brine solution and human body temperature.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TemperatureFaq;
export {}; 