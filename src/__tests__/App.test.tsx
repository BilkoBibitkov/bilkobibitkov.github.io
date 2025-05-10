import React, { act } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

// Mock URL.createObjectURL
const mockCreateObjectURL = jest.fn();
window.URL.createObjectURL = mockCreateObjectURL;

// Mock heic2any
jest.mock('heic2any', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(({ blob }) => {
    return Promise.resolve(new Blob(['test'], { type: 'image/jpeg' }));
  }),
}));

describe('App', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    mockCreateObjectURL.mockReturnValue('mock-url');
  });

  it('should handle file size limit correctly', async () => {
    render(<App />);

    // Create a file larger than 10MB
    const largeFile = new File(['x'.repeat(11 * 1024 * 1024)], 'large.HEIC', {
      type: 'image/heic',
    });

    // Create a file within size limit
    const validFile = new File(['x'.repeat(5 * 1024 * 1024)], 'example_2.HEIC', {
      type: 'image/heic',
    });

    // Get the dropzone element
    const dropzone = screen.getByText(/Drag & drop up to 5 HEIC files here/).parentElement;
    expect(dropzone).not.toBeNull();

    // Test with large file
    const largeFileEvent = {
      dataTransfer: {
        files: [largeFile],
        types: ['Files'],
      },
    };

    await act(async () => {
      fireEvent.drop(dropzone!, largeFileEvent);
    });

    // Check for error message
    await waitFor(() => {
      expect(screen.getByText(/File large.HEIC is too large/)).toBeInTheDocument();
    });

    // Test with valid file
    const validFileEvent = {
      dataTransfer: {
        files: [validFile],
        types: ['Files'],
      },
    };

    await act(async () => {
      fireEvent.drop(dropzone!, validFileEvent);
    });

    // Check that the file was accepted
    await waitFor(() => {
      expect(screen.getByText('example_2.jpg')).toBeInTheDocument();
    });
  });

  it('should convert HEIC files to JPEG', async () => {
    render(<App />);

    const file = new File(['test'], 'example_2.HEIC', {
      type: 'image/heic',
    });

    const dropzone = screen.getByText(/Drag & drop up to 5 HEIC files here/).parentElement;

    const fileEvent = {
      dataTransfer: {
        files: [file],
        types: ['Files'],
      },
    };

    await act(async () => {
      fireEvent.drop(dropzone!, fileEvent);
    });

    // Check that the file was converted
    await waitFor(() => {
      expect(screen.getByText('example_2.jpg')).toBeInTheDocument();
    });

    // Check that the download button is available
    expect(screen.getByText('Download All')).toBeInTheDocument();
  });
}); 