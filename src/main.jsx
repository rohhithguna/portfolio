/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import './index.css'
import App from './App.jsx'

const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (gaId) {
  ReactGA.initialize(gaId);
} else {
  console.warn("VITE_GA_MEASUREMENT_ID is not configured. Google Analytics initialization skipped.");
}

createRoot(document.getElementById('root')).render(<App />);