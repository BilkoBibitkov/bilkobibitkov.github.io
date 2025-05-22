import React from 'react';

interface FileListProps {
  files: File[];
  onRemove?: (index: number) => void;
}

function FileList({ files, onRemove }: FileListProps) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Selected Files:</h3>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {files.map((file, index) => (
          <li key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: '#f8f9fa',
            marginBottom: '5px',
            borderRadius: '4px'
          }}>
            <span>{file.name}</span>
            {onRemove && (
              <button
                onClick={() => onRemove(index)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileList; 