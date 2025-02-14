import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' in React 18+
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Your custom styles

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(<App />);
