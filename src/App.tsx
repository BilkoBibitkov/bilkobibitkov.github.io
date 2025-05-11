import React, { useState, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box, Typography, Paper, Alert, LinearProgress, Button, Stack, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, Select, MenuItem, Slider, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import heic2any from 'heic2any';
import FileList from './components/FileList';
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
  const [configOpen, setConfigOpen] = useState(false);
  const [outputFormat, setOutputFormat] = useState<'image/jpeg' | 'image/png' | 'image/gif'>('image/jpeg');
  const [quality, setQuality] = useState(1);
  const [multiple, setMultiple] = useState(false);
  const [gifDelay, setGifDelay] = useState(100);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    setErrors([]);
    setAbortWarning(false);
    setIsConverting(true);
    setProgress(0);
    const convertedFiles: ConvertedFile[] = [];
    const errorList: string[] = [];

    // Track file drop event
    if (window.gtag) {
      window.gtag('event', 'files_dropped', {
        'event_category': 'Conversion',
        'event_label': 'Files Dropped',
        'value': acceptedFiles.length
      });
    }

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
        const options: any = {
          blob: file,
          toType: outputFormat,
        };
        if (outputFormat === 'image/jpeg') {
          options.quality = quality;
        }
        if (outputFormat === 'image/gif') {
          options.gifOptions = { delay: gifDelay };
        }
        if (multiple) {
          options.multiple = true;
        }
        const result = await heic2any(options);
        if (Array.isArray(result)) {
          result.forEach((convertedBlob: Blob, idx: number) => {
            const url = URL.createObjectURL(convertedBlob);
            convertedFiles.push({
              name: file.name.replace(/\.heic$/i, `_${idx + 1}.${outputFormat === 'image/png' ? 'png' : outputFormat === 'image/gif' ? 'gif' : 'jpg'}`),
              url,
              blob: convertedBlob,
            });
          });
        } else {
          const url = URL.createObjectURL(result as Blob);
          convertedFiles.push({
            name: file.name.replace(/\.heic$/i, outputFormat === 'image/png' ? '.png' : outputFormat === 'image/gif' ? '.gif' : '.jpg'),
            url,
            blob: result as Blob,
          });
        }
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
  }, [outputFormat, quality, gifDelay, multiple]);

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

    // Track ZIP download event
    if (window.gtag) {
      window.gtag('event', 'zip_download', {
        'event_category': 'Download',
        'event_label': 'Download All',
        'value': files.length
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f9f9f9 0%, #e3eafc 100%)',
      }}>
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

            <Box sx={{ mt: 2, mb: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button variant="outlined" onClick={() => setConfigOpen(true)}>
                Advanced Conversion Configuration
              </Button>
              <Typography variant="body2" color="text.secondary">
                By default, we use the highest quality possible.
              </Typography>
            </Box>

            <Dialog open={configOpen} onClose={() => setConfigOpen(false)}>
              <DialogTitle>Advanced Conversion Configuration</DialogTitle>
              <DialogContent sx={{ minWidth: 320 }}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Output Format</InputLabel>
                  <Select
                    value={outputFormat}
                    label="Output Format"
                    onChange={e => setOutputFormat(e.target.value as any)}
                  >
                    <MenuItem value="image/jpeg">JPEG</MenuItem>
                    <MenuItem value="image/png">PNG</MenuItem>
                    <MenuItem value="image/gif">GIF</MenuItem>
                  </Select>
                </FormControl>
                {outputFormat === 'image/jpeg' && (
                  <Box sx={{ mb: 2 }}>
                    <Typography gutterBottom>JPEG Quality</Typography>
                    <Slider
                      value={quality}
                      min={0.1}
                      max={1}
                      step={0.01}
                      onChange={(_, v) => setQuality(v as number)}
                      valueLabelDisplay="auto"
                    />
                  </Box>
                )}
                <FormControlLabel
                  control={<Checkbox checked={multiple} onChange={e => setMultiple(e.target.checked)} />}
                  label="Convert all images in HEIC (if multiple)"
                  sx={{ mb: 2 }}
                />
                {outputFormat === 'image/gif' && (
                  <TextField
                    label="GIF Frame Delay (ms)"
                    type="number"
                    value={gifDelay}
                    onChange={e => setGifDelay(Number(e.target.value))}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setConfigOpen(false)}>Close</Button>
              </DialogActions>
            </Dialog>

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
      </Box>
    </ThemeProvider>
  );
}

export default App; 