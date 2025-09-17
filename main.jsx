import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Reset CSS styles
const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #000000;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

// Inject global styles
const styleSheet = document.createElement('style');
styleSheet.textContent = globalStyles;
document.head.appendChild(styleSheet);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
