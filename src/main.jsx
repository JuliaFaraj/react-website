import { createRoot } from 'react-dom/client';
import './index.css';          
import App from './App.jsx';   

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Ingen #root i index.html');

createRoot(rootEl).render(<App />);













