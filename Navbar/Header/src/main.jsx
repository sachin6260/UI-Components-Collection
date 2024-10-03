import { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import App from './App';

// Use createRoot to render your React application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
