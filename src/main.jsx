import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'modern-normalize'
import App from './App.jsx'
import toast, { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <Toaster
          position="top-right"
          reverseOrder={false}
/>
  </StrictMode>,
)