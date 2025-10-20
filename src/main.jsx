// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';          // lämna kvar om du använder index.css för styling
import App from './App.jsx';   // din app-komponent

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Ingen #root i index.html');

createRoot(rootEl).render(<App />);













