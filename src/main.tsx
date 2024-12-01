import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PageTransition from './_components/PageTransition.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageTransition>
      <App />
      <ToastContainer />
    </PageTransition>
  </StrictMode>,
)
