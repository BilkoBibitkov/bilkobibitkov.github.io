import React, { useState } from 'react';

function HeicConverter() {
  const [files, setFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
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
    <div style={{ padding: '20px' }}>
      <h2>HEIC to JPEG Converter</h2>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="file"
          accept=".heic,.heif"
          multiple
          onChange={handleFileChange}
        />
      </div>
      {files.length > 0 && (
        <div>
          <p>Selected files: {files.length}</p>
          <button
            onClick={handleConvert}
            disabled={converting}
          >
            {converting ? 'Converting...' : 'Convert to JPEG'}
          </button>
        </div>
      )}
    </div>
  );
}

export default HeicConverter; 