import React from 'react';
import ReactDOM from 'react-dom/client';

import './fonts.css';
import './style.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
