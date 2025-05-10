import React, { useState, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box, Typography, Paper, Alert, LinearProgress, Button, Stack } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import heic2any from 'heic2any';
import FileList from './components/FileList';
import Header from './components/Header';
import FAQ from './components/FAQ';
import JSZip from 'jszip';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007aff', // Apple blue
      contrastText: '#fff',
    },
    background: {
      default: '#f9f9f9', // very light gray
      paper: '#fff',
    },
    text: {
      primary: '#222',
      secondary: '#6e6e73',
    },
    divider: '#e0e0e0',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica Neue", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.5px',
    },
    h5: {
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          textTransform: 'none',
          fontWeight: 500,
          boxShadow: 'none',
          paddingLeft: 24,
          paddingRight: 24,
        },
        containedPrimary: {
          backgroundColor: '#007aff',
          '&:hover': {
            backgroundColor: '#005ecb',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 12px 0 rgba(0,0,0,0.03)',
        },
      },
    },
  },
});

interface ConvertedFile {
  name: string;
  url: string;
  blob: Blob;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes
const MAX_ERRORS = 10;

function App() {
  const [files, setFiles] = useState<ConvertedFile[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [abortWarning, setAbortWarning] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    setErrors([]);
    setAbortWarning(false);
    setIsConverting(true);
    setProgress(0);
    const convertedFiles: ConvertedFile[] = [];
    const errorList: string[] = [];

    for (let i = 0; i < acceptedFiles.length; i++) {
      if (errorList.length >= MAX_ERRORS) {
        setAbortWarning(true);
        break;
      }
      const file = acceptedFiles[i];
      try {
        if (file.size > MAX_FILE_SIZE) {
          throw new Error(`File ${file.name} is too large. Maximum size is 10MB.`);
        }
        const convertedBlob = await heic2any({
          blob: file,
          toType: 'image/jpeg',
          quality: 0.8,
        }) as Blob;
        const url = URL.createObjectURL(convertedBlob);
        convertedFiles.push({
          name: file.name.replace(/\.heic$/i, '.jpg'),
          url,
          blob: convertedBlob,
        });
      } catch (error) {
        const msg = error instanceof Error ? error.message : 'Error converting file';
        errorList.push(`${file.name}: ${msg}`);
      }
      setProgress(Math.round(((i + 1) / acceptedFiles.length) * 100));
    }
    setFiles(prevFiles => [...prevFiles, ...convertedFiles]);
    setErrors(errorList);
    setIsConverting(false);
    setProgress(0);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/heic': ['.heic', '.HEIC'],
    },
    maxSize: MAX_FILE_SIZE,
    multiple: true,
  });

  const handleDownloadZip = async () => {
    const zip = new JSZip();
    files.forEach(file => {
      zip.file(file.name, file.blob);
    });
    const content = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(content);
    link.download = 'converted-jpegs.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Convert Your iPhone Photos to JPEG - Simple & Free!
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
            Effortlessly convert your iPhone HEIC photos to universally compatible JPEG format. Our professional-grade tool processes all images <b>entirely within your browser</b>—<b>no uploads, no server storage, and no compromise to your privacy</b>. Simply drag and drop your HEIC images and download high-quality JPEGs instantly.
          </Typography>

          <Paper
            {...getRootProps()}
            sx={{
              p: 3,
              mt: 4,
              textAlign: 'center',
              cursor: 'pointer',
              backgroundColor: isDragActive ? 'action.hover' : 'background.paper',
              border: '2px dashed',
              borderColor: isDragActive ? 'primary.main' : 'divider',
              minHeight: 180,
              height: { xs: 180, sm: 220, md: 260 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <input {...getInputProps()} />
            <Typography variant="h6" gutterBottom>
              {isDragActive
                ? 'Drop the files here...'
                : 'Drag & drop HEIC files here, or click to select files'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              No file number limit, up to 10MB each
            </Typography>
          </Paper>

          {isConverting && (
            <Box sx={{ mt: 4 }}>
              <LinearProgress variant="determinate" value={progress} />
              <Typography variant="body2" align="center" sx={{ mt: 1 }}>{progress}%</Typography>
            </Box>
          )}

          {(errors.length > 0 || abortWarning) && (
            <Box sx={{ mt: 4 }}>
              {errors.map((err, idx) => (
                <Alert severity="error" sx={{ mb: 1 }} key={idx}>{err}</Alert>
              ))}
              {abortWarning && (
                <Alert severity="warning">Too many errors. Aborted remaining files.</Alert>
              )}
            </Box>
          )}

          {files.length > 0 && (
            <Box sx={{ mt: 4 }}>
              <Stack direction="row" spacing={2} sx={{ mb: 2, justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleDownloadZip}
                  disabled={isConverting}
                >
                  Download All
                </Button>
              </Stack>
              <FileList
                files={files}
                isConverting={isConverting}
                grid
              />
            </Box>
          )}

          <FAQ />
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App; 