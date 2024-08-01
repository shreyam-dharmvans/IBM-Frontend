import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import axios from 'axios';
import {Toaster} from 'react-hot-toast';

axios.defaults.baseURL= 'https://ibm-backend-0l3x.onrender.com/post';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster position='top-center'></Toaster>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
