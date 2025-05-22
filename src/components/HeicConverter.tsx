import React, { useState } from 'react';
import FileList from './FileList';
import HeicFaq from './HeicFaq';

function HeicConverter() {
  const [files, setFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleConvert = async () => {
    setConverting(true);
    // In a real implementation, we would convert the files here
    // For now, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setConverting(false);
    alert('File conversion would happen here in a real implementation');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>HEIC to JPEG Converter</h2>
      
      <div style={{
        border: '2px dashed #ccc',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        marginBottom: '20px',
        backgroundColor: '#f8f9fa'
      }}>
        <input
          type="file"
          accept=".heic,.heif"
          multiple
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="file-input"
        />
        <label
          htmlFor="file-input"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          Choose HEIC Files
        </label>
        <p style={{ marginTop: '10px', color: '#666' }}>
          Drag and drop HEIC files here or click to select
        </p>
      </div>

      {files.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <FileList files={files} onRemove={handleRemoveFile} />
          <button
            onClick={handleConvert}
            disabled={converting}
            style={{
              padding: '10px 20px',
              backgroundColor: converting ? '#6c757d' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: converting ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            {converting ? 'Converting...' : 'Convert to JPEG'}
          </button>
        </div>
      )}

      <HeicFaq />
    </div>
  );
}

export default HeicConverter; 