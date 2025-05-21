import React from 'react';
import ReactDOM from 'react-dom/client';  // Import 'react-dom/client' instead of 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app
reportWebVitals();
