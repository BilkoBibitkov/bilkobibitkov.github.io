import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Snackbar, Alert } from '@mui/material';

const Feedback: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // In a real app, this would be an API call
      // For now, we'll just log to console and show success
      console.log('Feedback submitted:', feedback);
      setShowSuccess(true);
      setFeedback('');
      
      // Track feedback submission in Google Analytics
      if (window.gtag) {
        window.gtag('event', 'feedback_submitted', {
          'event_category': 'Feedback',
          'event_label': 'User Feedback'
        });
      }
    } catch (error) {
      setShowError(true);
    }
  };

  return (
    <Box sx={{ mt: 6, mb: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Help Us Improve
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Your feedback helps us make this tool better. Let us know what you think!
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Share your thoughts, suggestions, or report any issues..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!feedback.trim()}
          >
            Submit Feedback
          </Button>
        </form>
      </Paper>
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          Thank you for your feedback!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
      >
        <Alert severity="error" onClose={() => setShowError(false)}>
          Failed to submit feedback. Please try again.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Feedback; 