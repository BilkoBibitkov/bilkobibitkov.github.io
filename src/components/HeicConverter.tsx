import React, { useState, useCallback } from 'react';
import { Box, Paper, Typography, Button, CircularProgress, Alert, LinearProgress, Stack } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import heic2any from 'heic2any';
import HeicFaq from './HeicFaq';

interface ConvertedFile {
  name: string;
  url: string;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes
const MAX_ERRORS = 10;

const HeicConverter = () => {
  const [convertedFiles, setConvertedFiles] = useState<ConvertedFile[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(file => {
      if (file.size > MAX_FILE_SIZE) {
        setErrors(prev => [...prev, `File ${file.name} is too large. Maximum size is 10MB.`]);
        return false;
      }
      return true;
    });

    if (validFiles.length === 0) return;

    setIsConverting(true);
    setProgress(0);
    setErrors([]);

    const converted: ConvertedFile[] = [];
    const totalFiles = validFiles.length;

    for (let i = 0; i < validFiles.length; i++) {
      try {
        const file = validFiles[i];
        const result = await heic2any({
          blob: file,
          toType: 'image/jpeg',
          quality: 0.8
        });

        if (Array.isArray(result)) {
          const url = URL.createObjectURL(result[0]);
          converted.push({
            name: file.name.replace(/\.heic$/i, '.jpg'),
            url
          });
        } else {
          const url = URL.createObjectURL(result);
          converted.push({
            name: file.name.replace(/\.heic$/i, '.jpg'),
            url
          });
        }

        setProgress(((i + 1) / totalFiles) * 100);
      } catch (error) {
        setErrors(prev => [...prev, `Failed to convert ${validFiles[i].name}`]);
        if (errors.length >= MAX_ERRORS) {
          break;
        }
      }
    }

    setConvertedFiles(converted);
    setIsConverting(false);
  }, [errors.length]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/heic': ['.heic', '.heif'],
      'image/heif': ['.heic', '.heif']
    },
    maxSize: MAX_FILE_SIZE
  });

  const handleDownloadZip = async () => {
    // TODO: Implement zip download functionality
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Free Your Photos from Apple's HEIC Jail!
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
        As a European who values open standards, I've had enough of Apple's proprietary HEIC format. It's like they're saying "Hey, let's make a new format that nobody else uses!" Well, not anymore! This tool will liberate your photos faster than you can say "Why can't we all just use JPEG?" 
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph>
        Simply drag and drop your HEIC files, and watch them transform into good old-fashioned JPEGs. No uploads, no server storage, and definitely no compromise to your privacy - because in Europe, we take our privacy seriously! Plus, it's completely free, because who needs another subscription service in their life?
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Box
          {...getRootProps()}
          sx={{
            border: '2px dashed',
            borderColor: isDragActive ? 'primary.main' : 'grey.300',
            borderRadius: 1,
            p: 3,
            textAlign: 'center',
            cursor: 'pointer',
            bgcolor: isDragActive ? 'action.hover' : 'background.paper',
            transition: 'all 0.2s ease-in-out'
          }}
        >
          <input {...getInputProps()} />
          <Typography variant="h6" gutterBottom>
            {isDragActive ? 'Drop those HEIC files here!' : 'Drag & drop your HEIC files here, or click to select'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Maximum file size: 10MB (because even Europeans have limits!)
          </Typography>
        </Box>
      </Paper>

      {isConverting && (
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Converting Your Photos...
          </Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />
          <Typography variant="body2" color="text.secondary">
            {Math.round(progress)}% complete (almost as fast as European trains!)
          </Typography>
        </Paper>
      )}

      {errors.length > 0 && (
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" color="error" gutterBottom>
            Oops! We Hit a Speed Bump ({errors.length})
          </Typography>
          <Stack spacing={1}>
            {errors.map((error, index) => (
              <Alert key={index} severity="error">
                {error}
              </Alert>
            ))}
          </Stack>
        </Paper>
      )}

      {convertedFiles.length > 0 && (
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Successfully Converted Files ({convertedFiles.length})
          </Typography>
          <Stack spacing={2}>
            {convertedFiles.map((file, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                  {file.name}
                </Typography>
                <Button
                  variant="contained"
                  href={file.url}
                  download={file.name}
                >
                  Download
                </Button>
              </Box>
            ))}
            {convertedFiles.length > 1 && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleDownloadZip}
                sx={{ mt: 2 }}
              >
                Download All as ZIP (European efficiency!)
              </Button>
            )}
          </Stack>
        </Paper>
      )}

      <HeicFaq />
    </Box>
  );
};

export default HeicConverter; 