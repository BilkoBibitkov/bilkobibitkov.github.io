import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  ListItemText,
  useTheme,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

interface FileListProps {
  files: Array<{
    name: string;
    url: string;
    blob?: Blob;
  }>;
  isConverting: boolean;
  grid?: boolean;
}

const FileList: React.FC<FileListProps> = ({ files, isConverting, grid }) => {
  const theme = useTheme();

  const handleDownload = (url: string, name: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Track individual file download
    if (window.gtag) {
      window.gtag('event', 'file_download', {
        'event_category': 'Download',
        'event_label': 'Single File',
        'value': 1
      });
    }
  };

  if (grid) {
    return (
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Converted Files
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr',
            },
            gap: 2,
            maxHeight: 480,
            overflowY: 'auto',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            pb: 1,
          }}
        >
          {files.map((file, index) => (
            <Box
              key={index}
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                p: 2,
                minWidth: 220,
                maxWidth: 260,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                background: theme.palette.background.paper,
              }}
            >
              <ListItemText
                primary={file.name}
                secondary={isConverting ? 'Converting...' : 'Ready to download'}
              />
              <IconButton
                edge="end"
                aria-label="download"
                onClick={() => handleDownload(file.url, file.name)}
                disabled={isConverting}
                sx={{ mt: 1 }}
              >
                <DownloadIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>
    );
  }

  // fallback: vertical list
  return (
    <Box>
      <Typography variant="h6">Converted Files</Typography>
      {files.map((file, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <ListItemText
            primary={file.name}
            secondary={isConverting ? 'Converting...' : 'Ready to download'}
          />
          <IconButton
            edge="end"
            aria-label="download"
            onClick={() => handleDownload(file.url, file.name)}
            disabled={isConverting}
          >
            <DownloadIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default FileList; 